import { createPromise, pickRandom } from '@secret-agent/commons/utils';
import ShutdownHandler from '@secret-agent/commons/ShutdownHandler';
import Log from '@secret-agent/commons/Logger';
import IAgentCreateOptions from '../interfaces/IAgentCreateOptions';
import IConnectionToCoreOptions from '../interfaces/IConnectionToCoreOptions';
import Agent from './Agent';
import ConnectionToCore from '../connections/ConnectionToCore';
import ConnectionFactory from '../connections/ConnectionFactory';

type SettledDispatchesBySessionId = { [sessionId: string]: { args: any; error?: Error } };
type PendingDispatch = { resolution: Promise<Error | void>; sessionId?: string; args: any };

const { log } = Log(module);

export default class Handler {
  public defaultAgentOptions: IAgentCreateOptions = {};
  public get coreHosts(): Promise<string[]> {
    return Promise.all(this.connections.map(x => x.hostOrError)).then(x => {
      const hosts: string[] = [];
      for (const host of x) {
        if (host instanceof Error) continue;
        hosts.push(host);
      }
      return hosts;
    });
  }

  private readonly connections: ConnectionToCore[] = [];
  private readonly dispatches: PendingDispatch[] = [];

  constructor(...connectionOptions: (IConnectionToCoreOptions | ConnectionToCore)[]) {
    if (!connectionOptions.length) {
      connectionOptions.push({});
    }

    for (const options of connectionOptions) {
      const connection = ConnectionFactory.createConnection(options);
      this.connections.push(connection);
      connection.on('disconnected', this.onDisconnected.bind(this, connection));
    }

    ShutdownHandler.register(() => this.close());
    this.registerUnhandledExceptionHandlers();
  }

  public async addConnectionToCore(
    options: IConnectionToCoreOptions | ConnectionToCore,
  ): Promise<void> {
    const connection = ConnectionFactory.createConnection(options);
    const error = await connection.connect();
    if (error) throw error;
    this.connections.push(connection);
  }

  public async removeConnectionToCore(host: string): Promise<void> {
    const wsHost = host.startsWith('ws') ? host : `ws://${host}`;
    for (const connection of this.connections) {
      const coreHost = await connection.hostOrError;
      if (typeof coreHost === 'string' && coreHost === wsHost) {
        await connection.disconnect();
      }
    }
  }

  public dispatchAgent<T>(
    runFn: (agent: Agent, args?: T) => Promise<void>,
    args?: T,
    createAgentOptions?: IAgentCreateOptions,
  ): void {
    const options = {
      ...this.defaultAgentOptions,
      ...createAgentOptions,
    };
    const connection = this.getConnection();

    const dispatched: PendingDispatch = { args, resolution: null };
    dispatched.resolution = connection
      .useAgent(options, async agent => {
        try {
          dispatched.sessionId = await agent.sessionId;
          await runFn(agent, args);
        } finally {
          await agent.close();
        }
      })
      .catch((err: Error) => err);

    this.dispatches.push(dispatched);
  }

  public async createAgent(createAgentOptions: IAgentCreateOptions = {}): Promise<Agent> {
    const options = {
      ...this.defaultAgentOptions,
      ...createAgentOptions,
    };
    const promise = createPromise<Agent>();

    const connection = this.getConnection();

    connection
      .useAgent(options, agent => {
        return agent
          .then(() => {
            // don't return until agent is closed
            const onClose = new Promise<void>(resolve => agent.once('close', resolve));
            promise.resolve(agent);
            return onClose;
          })
          .catch(promise.reject);
      })
      .catch(promise.reject);

    // NOTE: keep await to ensure createAgent stays in stack trace
    return await promise.promise;
  }

  public async waitForAllDispatches(): Promise<void> {
    const dispatches = [...this.dispatches];
    // clear out dispatches everytime you check it
    this.dispatches.length = 0;
    await Promise.all(
      dispatches.map(async dispatch => {
        const err = await dispatch.resolution;
        if (err) throw err;
      }),
    );
    // keep going if there are new things queued
    if (this.dispatches.length) return this.waitForAllDispatches();
  }

  public async waitForAllDispatchesSettled(): Promise<SettledDispatchesBySessionId> {
    const result: SettledDispatchesBySessionId = {};

    do {
      const dispatches = [...this.dispatches];
      // clear out dispatches everytime you check it
      this.dispatches.length = 0;

      await Promise.all(dispatches.map(x => x.resolution));
      for (const { sessionId, resolution, args } of dispatches) {
        const error = <Error>await resolution;
        result[sessionId] = { args, error };
      }

      await new Promise(setImmediate);
    } while (this.dispatches.length);

    return result;
  }

  public async close(error?: Error): Promise<void> {
    // eslint-disable-next-line promise/no-promise-in-callback
    await Promise.all(this.connections.map(x => x.disconnect(error)));
  }

  private getConnection(): ConnectionToCore {
    // prefer a connection that can create a session right now
    let connections = this.connections.filter(x => x.canCreateSessionNow());
    if (!connections.length) connections = this.connections.filter(x => !x.isDisconnecting);
    return pickRandom(connections);
  }

  private registerUnhandledExceptionHandlers(): void {
    process.on('uncaughtExceptionMonitor', this.close.bind(this));
    process.on('unhandledRejection', this.logUnhandledError.bind(this));
  }

  private async logUnhandledError(error: Error): Promise<void> {
    // if error and there are remote connections, log error here
    if (error && this.connections.some(x => !!x.options.host)) {
      log.error('UnhandledRejection', { error, sessionId: null });
    }
    // eslint-disable-next-line promise/no-promise-in-callback
    await Promise.all(this.connections.map(x => x.logUnhandledError(error)));
  }

  private onDisconnected(connection: ConnectionToCore): void {
    const idx = this.connections.indexOf(connection);
    if (idx >= 0) this.connections.splice(idx, 1);
  }
}
