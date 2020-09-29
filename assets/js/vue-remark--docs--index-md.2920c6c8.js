(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{vu0Y:function(t,e,a){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},ziYA:function(t,e,a){"use strict";a.r(e);var s=a("Ow4o"),n=a("vu0Y"),r=a("pLV6");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var p={VueRemarkRoot:n.a},c=function(t){var e=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===o(p[t])&&"function"==typeof p[t].render||"function"==typeof p[t]&&"function"==typeof p[t].options.render?e[t]=p[t]:a[t]=function(){return p[t]}}))},i=r.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",u={excerpt:null,title:"Introduction"};var v=function(t){t.options[l]&&(t.options[l]=u),r.a.util.defineReactive(t.options,l,u),t.options.computed=i.computed({$frontmatter:function(){return t.options[l]}},t.options.computed)},_=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VueRemarkRoot",[a("h1",{attrs:{id:"introduction"}},[a("a",{attrs:{href:"#introduction","aria-hidden":"true"}},[t._v("#")]),t._v("Introduction")]),a("blockquote",[a("p",[t._v("SecretAgent is a free and open source headless browser that's written in NodeJs, built on top of Chromium and "),a("a",{attrs:{href:"https://github.com/ulixee/double-agent/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("nearly impossible for websites to detect")]),t._v(".")])]),a("h2",{attrs:{id:"why-secretagent"}},[a("a",{attrs:{href:"#why-secretagent","aria-hidden":"true"}},[t._v("#")]),t._v("Why SecretAgent?")]),a("ul",[a("li",[a("strong",[t._v("Built for scraping")]),t._v(" - it's the first modern headless browsers designed specifically for scraping instead of just automated testing.")]),a("li",[a("strong",[t._v("Designed for web developers")]),t._v(" - We've recreated a fully compliant DOM directly in NodeJS allowing you bypass the headaches of previous scraper tools.")]),a("li",[a("strong",[t._v("Powered by Chromium")]),t._v(" - The powerful Chromium engine sits under the hood, allowing for lightning fast rendering.")]),a("li",[a("strong",[t._v("Emulates any modern browser")]),t._v(" - Emulator plugins make it easy to disguise your script as practically any browser.")]),a("li",[a("strong",[t._v("Avoids detection along the entire stack")]),t._v(" - Don't be blocked because of TLS fingerprints in your networking stack.")])]),a("h2",{attrs:{id:"how-it-works"}},[a("a",{attrs:{href:"#how-it-works","aria-hidden":"true"}},[t._v("#")]),t._v("How It Works")]),a("p",[t._v("We started by challenging ourselves to create the ultimate scraper detection tool, which we coined "),a("a",{attrs:{href:"https://github.com/ulixee/double-agent/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("DoubleAgent")]),t._v(". Along the way we discovered 76,697 checks that any website can implement to "),a("a",{attrs:{href:"https://stateofscraping.org",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("block practically all known scrapers")]),t._v(". Then we designed SecretAgent to bypass detection by emulating real users.")]),a("p",[t._v("SecretAgent uses Chromium as its core rendering engine under the hood, with DevTools Protocol as its glue layer.")]),a("p",[t._v("Instead of creating another complex puppeteer-like API that requires use of nested callbacks and running code in remote contexts, we designed the AwaitedDOM. AwaitedDOM is a W3C compliant DOM written for NodeJS that allows you to write scraper scripts as if you were inside the webpage.")]),a("h2",{attrs:{id:"installation"}},[a("a",{attrs:{href:"#installation","aria-hidden":"true"}},[t._v("#")]),t._v("Installation")]),a("p",[t._v("To use SecretAgent in your project, install it with npm or yarn:")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",{pre:!0,attrs:{class:"language-bash"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i --save secret-agent")])]),a("p",[t._v("or")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",{pre:!0,attrs:{class:"language-bash"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" secret-agent")])]),a("p",[t._v("Note: When you install SecretAgent, it also downloads a recent version of Chromium 83 (~277MB Mac, ~282MB Linux, ~280MB Win). Each "),a("a",{attrs:{href:"/docs/advanced/emulators"}},[t._v("emulator")]),t._v(" you install (ie, Chrome80, Safari13) can install additional browser engines as needed.")]),a("p",[t._v("Browsers will be saved to a shared location on each OS. Each browser version will be downloaded only once and can be shared across multiple Secret Agent npm installations.")]),a("ul",[a("li",[t._v("Mac: ~/Library/Cache/")]),a("li",[t._v("Linux: ~/.cache (environment variable XDG_CACHE_HOME)")]),a("li",[t._v("Windows: ~/AppData/Local (environment variable LOCALAPPDATA)")])]),a("p",[t._v("Secret Agent also installs an app called "),a("a",{attrs:{href:"/docs/advanced/session-replay"}},[t._v("Replay")]),t._v(" to debug and troubleshoot sessions. Replay is ~200MB unpacked. To skip download (ie, in a production environment), you can set the following environmental variable: "),a("code",{pre:!0},[t._v("SA_REPLAY_SKIP_BINARY_DOWNLOAD=true")]),t._v(".")]),a("h2",{attrs:{id:"usage-example"}},[a("a",{attrs:{href:"#usage-example","aria-hidden":"true"}},[t._v("#")]),t._v("Usage Example")]),a("p",[t._v("SecretAgent's API should be familiar to web developers everywhere. We created a W3C compliant DOM library for Node, which allows you to use the exact same DOM selector and traversal commands as you do in modern web browsers like Chromium, Firefox, and Safari.")]),a("p",[t._v("For example, here's how you might extract the title and intro paragraph from example.org:")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("SecretAgent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'secret-agent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" browser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("SecretAgent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("createBrowser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" browser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("goto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://example.org'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" browser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("document")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" intro "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" browser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("document")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("textContent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" browser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token console class-name"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Retrieved from https://example.org'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    intro"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),a("p",[t._v("As shown in the example above, window.document follows the standard DOM specification, but with a cool twist which we call the AwaitedDOM.")])])}),[],!1,null,null,null);"function"==typeof c&&c(_),"function"==typeof v&&v(_);e.default=_.exports}}]);