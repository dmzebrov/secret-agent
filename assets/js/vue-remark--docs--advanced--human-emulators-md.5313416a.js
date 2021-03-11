(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{"SfD/":function(t,e,a){"use strict";a.r(e);var n=a("Ow4o"),r=a("vu0Y"),s=a("pLV6");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var u={VueRemarkRoot:r.a},i=function(t){var e=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(u).forEach((function(t){"object"===o(u[t])&&"function"==typeof u[t].render||"function"==typeof u[t]&&"function"==typeof u[t].options.render?e[t]=u[t]:a[t]=function(){return u[t]}}))},p=s.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",c={excerpt:null,title:"HumanEmulators"};var m=function(t){t.options[l]&&(t.options[l]=c),s.a.util.defineReactive(t.options,l,c),t.options.computed=p.computed({$frontmatter:function(){return t.options[l]}},t.options.computed)},d=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VueRemarkRoot",[a("h1",{attrs:{id:"humanemulators"}},[a("a",{attrs:{href:"#humanemulators","aria-hidden":"true"}},[t._v("#")]),t._v("HumanEmulators")]),a("blockquote",[a("p",[t._v("HumanEmulators are plugins that sit between your script and SecretAgent's mouse/keyboard movements. They translate your clicks and moves into randomized human-like patterns that can pass the bot-blocker checks.")])]),a("p",[t._v("This interface helps you load and retrieve HumanEmulator plugins. It in itself is not a plugin, however we have preloaded it with a basic plugin (see below).")]),a("p",[t._v("This class creates no instances. It is a static singleton containing three methods.")]),a("h2",{attrs:{id:"methods"}},[a("a",{attrs:{href:"#methods","aria-hidden":"true"}},[t._v("#")]),t._v("Methods")]),a("h3",{attrs:{id:"humanemulatorsgetememulatoridem"}},[a("a",{attrs:{href:"#humanemulatorsgetememulatoridem","aria-hidden":"true"}},[t._v("#")]),t._v("HumanEmulators.get"),a("em",[t._v("(emulatorId)")])]),a("p",[t._v("Retrieve a specific human emulator from the list of plugins already been loaded.")]),a("h4",{attrs:{id:"arguments"}},[a("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[t._v("#")]),a("strong",[t._v("Arguments")]),t._v(":")]),a("ul",[a("li",[t._v("emulatorId "),a("code",{pre:!0},[t._v("string")])])]),a("h4",{attrs:{id:"returns-ihumanemulator"}},[a("a",{attrs:{href:"#returns-ihumanemulator","aria-hidden":"true"}},[t._v("#")]),a("strong",[t._v("Returns")]),a("code",{pre:!0},[t._v("IHumanEmulator")])]),a("h3",{attrs:{id:"humanemulatorsgetrandomemem"}},[a("a",{attrs:{href:"#humanemulatorsgetrandomemem","aria-hidden":"true"}},[t._v("#")]),t._v("HumanEmulators.getRandom"),a("em",[t._v("()")])]),a("p",[t._v("Retrieve a random human emulator from the list of plugins already loaded.")]),a("h4",{attrs:{id:"returns-ihumanemulator-1"}},[a("a",{attrs:{href:"#returns-ihumanemulator-1","aria-hidden":"true"}},[t._v("#")]),a("strong",[t._v("Returns")]),a("code",{pre:!0},[t._v("IHumanEmulator")])]),a("h3",{attrs:{id:"humanemulatorsloademhumanemulatorem"}},[a("a",{attrs:{href:"#humanemulatorsloademhumanemulatorem","aria-hidden":"true"}},[t._v("#")]),t._v("HumanEmulators.load"),a("em",[t._v("(humanEmulator)")])]),a("p",[t._v("Load a human emulator into your environment.")]),a("h4",{attrs:{id:"arguments-1"}},[a("a",{attrs:{href:"#arguments-1","aria-hidden":"true"}},[t._v("#")]),a("strong",[t._v("Arguments")]),t._v(":")]),a("ul",[a("li",[t._v("humanEmulator "),a("code",{pre:!0},[t._v("IHumanEmulator")])])]),a("h4",{attrs:{id:"returns-null"}},[a("a",{attrs:{href:"#returns-null","aria-hidden":"true"}},[t._v("#")]),a("strong",[t._v("Returns")]),a("code",{pre:!0},[t._v("null")])]),a("h2",{attrs:{id:"preloaded-plugins"}},[a("a",{attrs:{href:"#preloaded-plugins","aria-hidden":"true"}},[t._v("#")]),t._v("Preloaded Plugins")]),a("p",[t._v("We've included three human emulator plugins to get you started. They are pre-loaded into the HumanEmulators registry and are ready to use.")]),a("p",{staticClass:"show-table-header"}),a("table",[a("thead",[a("tr",[a("th",[t._v("ID")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("basic")]),a("td",[t._v("It's the most basic of human-like interactions.")])]),a("tr",[a("td",[t._v("ghost")]),a("td",[t._v("It's our most advanced emulator - types at 34 words per minute, moves mouse in loops and scrolls like a human. It's also our slowest emulator. "),a("br"),a("br"),t._v(" NOTE: If you need speed over evasion, use one of the simpler ones.")])]),a("tr",[a("td",[t._v("skipper")]),a("td",[t._v("It's an anti-human-emulator with no delays. It just runs the commands.")])])])]),a("p",[t._v("Note: Use the "),a("code",{pre:!0},[t._v("skipper")]),t._v(" emulator when you want to turn OFF human-emulator functionality. It disables all emulator effects, allowing you to run mouse and keyboard commands as if there were no human translation layer.")]),a("p",[t._v("To use a specific emulator, pass your chosen ID into "),a("code",{pre:!0},[t._v("handler.createAgent({ humanEmulatorId... )")]),t._v(":")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("Handler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'secret-agent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" handler "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" agent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("createAgent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    humanEmulatorId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'basic'")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),a("h2",{attrs:{id:"building-your-own-plugins"}},[a("a",{attrs:{href:"#building-your-own-plugins","aria-hidden":"true"}},[t._v("#")]),t._v("Building Your Own Plugins")]),a("p",[t._v("Documentation coming soon.")])])}),[],!1,null,null,null);"function"==typeof i&&i(d),"function"==typeof m&&m(d);e.default=d.exports},vu0Y:function(t,e,a){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);