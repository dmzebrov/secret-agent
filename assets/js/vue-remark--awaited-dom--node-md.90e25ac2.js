(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{695:function(e,t,n){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},816:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(695),s=n(0);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.a.config.optionMergeStrategies;var i={VueRemarkRoot:a.a},d=function(e){var t=e.options.components=e.options.components||{},n=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===o(i[e])&&"function"==typeof i[e].render?t[e]=i[e]:n[e]=function(){return i[e]}}))},c=s.a.config.optionMergeStrategies,h="__vueRemarkFrontMatter",l={excerpt:null,title:"[AwaitedDOM](/docs/basic-interfaces/awaited-dom) <span>/</span> Node"};var v=function(e){e.options[h]&&(e.options[h]=l),s.a.util.defineReactive(e.options,h,l),e.options.computed=c.computed({$frontmatter:function(){return e.options[h]}},e.options.computed)},p=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VueRemarkRoot",[n("h1",{attrs:{id:"awaiteddom-spanspan-node"}},[n("a",{attrs:{href:"#awaiteddom-spanspan-node","aria-hidden":"true"}},[e._v("#")]),n("a",{attrs:{href:"/docs/basic-interfaces/awaited-dom"}},[e._v("AwaitedDOM")]),n("span",[e._v("/")]),e._v(" Node")]),n("div",{staticClass:"overview"},[n("span",{staticClass:"seoSummary"},[n("strong",[n("code",[e._v("Node")])]),e._v(" is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly; for example, inheriting the same set of methods, or being testable in the same way.")])]),n("div",{staticClass:"overview"},[e._v("All of the following interfaces inherit the "),n("code",[e._v("Node")]),e._v(" interface's methods and properties: "),n("a",{attrs:{href:"/en-US/docs/Web/API/Document",title:"The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree."}},[n("code",[e._v("Document")])]),e._v(", "),n("a",{attrs:{href:"/en-US/docs/Web/API/Element",title:"Element is the most general base class from which all element objects (i.e. objects that represent elements) in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element."}},[n("code",[e._v("Element")])]),e._v(", "),n("a",{attrs:{href:"/en-US/docs/Web/API/Attr",title:"The Attr interface represents one of a DOM element's attributes as an object. In most DOM methods, you will directly retrieve the attribute as a string (e.g., Element.getAttribute()), but certain functions (e.g., Element.getAttributeNode()) or means of iterating return Attr types."}},[n("code",[e._v("Attr")])]),e._v(", "),n("a",{attrs:{href:"/en-US/docs/Web/API/CharacterData",title:"The CharacterData abstract interface represents a Node object that contains characters. This is an abstract interface, meaning there aren't any object of type CharacterData: it is implemented by other interfaces, like Text, Comment, or ProcessingInstruction which aren't abstract."}},[n("code",[e._v("CharacterData")])]),e._v(" (which "),n("a",{attrs:{href:"/en-US/docs/Web/API/Text",title:"The Text interface represents the textual content of Element or Attr. If an element has no markup within its content, it has a single child implementing Text that contains the element's text. However, if the element contains markup, it is parsed into information items and Text nodes that form its children."}},[n("code",[e._v("Text")])]),e._v(", "),n("a",{attrs:{href:"/en-US/docs/Web/API/Comment",title:"The Comment interface represents textual notations within markup; although it is generally not visually shown, such comments are available to be read in the source view."}},[n("code",[e._v("Comment")])]),e._v(", and "),n("a",{attrs:{href:"/en-US/docs/Web/API/CDATASection",title:"The CDATASection interface represents a CDATA section that can be used within XML to include extended portions of unescaped text. The symbols < and & don’t need escaping as they normally do when inside a CDATA section."}},[n("code",[e._v("CDATASection")])]),e._v(" inherit), "),n("a",{attrs:{href:"/en-US/docs/Web/API/ProcessingInstruction",title:"The ProcessingInstruction interface represents a processing instruction; that is, a Node which embeds an instruction targeting a specific application but that can be ignored by any other applications which don't recognize the instruction."}},[n("code",[e._v("ProcessingInstruction")])]),e._v(", "),n("a",{attrs:{href:"/en-US/docs/Web/API/DocumentFragment",title:"The DocumentFragment interface represents a minimal document object that has no parent. It is used as a lightweight version of Document that stores a segment of a document structure comprised of nodes just like a standard document."}},[n("code",[e._v("DocumentFragment")])]),e._v(", "),n("a",{attrs:{href:"/en-US/docs/Web/API/DocumentType",title:"The DocumentType interface represents a Node containing a doctype."}},[n("code",[e._v("DocumentType")])]),e._v(", "),n("a",{attrs:{href:"/en-US/docs/Web/API/Notation",title:"Represents a DTD notation (read-only). May declare format of an unparsed entity or formally declare the document's processing instruction targets. Inherits methods and properties from Node. Its nodeName is the notation name. Has no parent."}},[n("code",[e._v("Notation")])]),e._v(", "),n("a",{staticClass:"new",attrs:{href:"/en-US/docs/Web/API/Entity",rel:"nofollow",title:"The documentation about this has not yet been written; please consider contributing!"}},[n("code",[e._v("Entity")])]),e._v(", "),n("a",{staticClass:"new",attrs:{href:"/en-US/docs/Web/API/EntityReference",rel:"nofollow",title:"The documentation about this has not yet been written; please consider contributing!"}},[n("code",[e._v("EntityReference")])])]),n("div",{staticClass:"overview"},[e._v("Those interfaces may return "),n("code",[e._v("null")]),e._v(" in certain cases where the methods and properties are not relevant. They may throw an exception — for example when adding children to a node type for which no children can exist.")]),n("h2",{attrs:{id:"properties"}},[n("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),n("h3",{attrs:{id:"baseURI"}},[n("a",{attrs:{href:"#baseURI","aria-hidden":"true"}},[e._v("#")]),e._v("node.baseURI "),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("Returns a "),n("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[n("code",[e._v("DOMString")])]),e._v(" representing the base URL of the document containing the "),n("code",[e._v("Node\n")]),e._v(".")]),n("h4",{attrs:{id:"type-string"}},[n("a",{attrs:{href:"#type-string","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Type")]),e._v(": "),n("code",{pre:!0},[e._v("string")])]),n("h3",{attrs:{id:"childNodes"}},[n("a",{attrs:{href:"#childNodes","aria-hidden":"true"}},[e._v("#")]),e._v("node.childNodes "),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("Returns a live "),n("a",{attrs:{href:"/en-US/docs/Web/API/NodeList",title:"NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll()."}},[n("code",[e._v("NodeList")])]),e._v(" containing all the children of this node. "),n("a",{attrs:{href:"/en-US/docs/Web/API/NodeList",title:"NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll()."}},[n("code",[e._v("NodeList")])]),e._v(" being live means that if the children of the "),n("code",[e._v("Node")]),e._v(" change, the "),n("a",{attrs:{href:"/en-US/docs/Web/API/NodeList",title:"NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll()."}},[n("code",[e._v("NodeList")])]),e._v(" object is automatically updated.")]),n("h4",{attrs:{id:"type-supernodelist"}},[n("a",{attrs:{href:"#type-supernodelist","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Type")]),e._v(": "),n("code",{pre:!0},[e._v("SuperNodeList")])]),n("h3",{attrs:{id:"firstChild"}},[n("a",{attrs:{href:"#firstChild","aria-hidden":"true"}},[e._v("#")]),e._v("node.firstChild "),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("Returns a "),n("a",{attrs:{href:"/en-US/docs/Web/API/Node",title:"Node is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly; for example, inheriting the same set of methods, or being testable in the same way."}},[n("code",[e._v("Node")])]),e._v(" representing the first direct child node of the node, or "),n("code",[e._v("null\n")]),e._v(" if the node has no child.")]),n("h4",{attrs:{id:"type-supernode"}},[n("a",{attrs:{href:"#type-supernode","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Type")]),e._v(": "),n("code",{pre:!0},[e._v("SuperNode")])]),n("h3",{attrs:{id:"isConnected"}},[n("a",{attrs:{href:"#isConnected","aria-hidden":"true"}},[e._v("#")]),e._v("node.isConnected "),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("A boolean indicating whether or not the Node is connected (directly or indirectly) to the context object, e.g. the "),n("a",{attrs:{href:"/en-US/docs/Web/API/Document",title:"The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree."}},[n("code",[e._v("Document")])]),e._v(" object in the case of the normal DOM, or the "),n("a",{attrs:{href:"/en-US/docs/Web/API/ShadowRoot",title:"The ShadowRoot interface of the Shadow DOM API is the root node of a DOM subtree that is rendered separately from a document's main DOM tree."}},[n("code",[e._v("ShadowRoot")])]),e._v(" in the case of a shadow DOM.")]),n("h4",{attrs:{id:"type-boolean"}},[n("a",{attrs:{href:"#type-boolean","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Type")]),e._v(": "),n("code",{pre:!0},[e._v("boolean")])]),n("h3",{attrs:{id:"lastChild"}},[n("a",{attrs:{href:"#lastChild","aria-hidden":"true"}},[e._v("#")]),e._v("node.lastChild "),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("Returns a "),n("a",{attrs:{href:"/en-US/docs/Web/API/Node",title:"Node is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly; for example, inheriting the same set of methods, or being testable in the same way."}},[n("code",[e._v("Node")])]),e._v(" representing the last direct child node of the node, or "),n("code",[e._v("null\n")]),e._v(" if the node has no child.")]),n("h4",{attrs:{id:"type-supernode-1"}},[n("a",{attrs:{href:"#type-supernode-1","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Type")]),e._v(": "),n("code",{pre:!0},[e._v("SuperNode")])]),n("h3",{attrs:{id:"nextSibling"}},[n("a",{attrs:{href:"#nextSibling","aria-hidden":"true"}},[e._v("#")]),e._v("node.nextSibling "),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("Returns a "),n("a",{attrs:{href:"/en-US/docs/Web/API/Node",title:"Node is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly; for example, inheriting the same set of methods, or being testable in the same way."}},[n("code",[e._v("Node")])]),e._v(" representing the next node in the tree, or "),n("code",[e._v("null\n")]),e._v(" if there isn't such node.")]),n("h4",{attrs:{id:"type-supernode-2"}},[n("a",{attrs:{href:"#type-supernode-2","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Type")]),e._v(": "),n("code",{pre:!0},[e._v("SuperNode")])]),n("h3",{attrs:{id:"nodeName"}},[n("a",{attrs:{href:"#nodeName","aria-hidden":"true"}},[e._v("#")]),e._v("node.nodeName "),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("Returns a "),n("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[n("code",[e._v("DOMString")])]),e._v(" containing the name of the "),n("code",[e._v("Node")]),e._v(". The structure of the name will differ with the node type. E.g. An "),n("a",{attrs:{href:"/en-US/docs/Web/API/HTMLElement",title:"The HTMLElement interface represents any HTML element. Some elements directly implement this interface, while others implement it via an interface that inherits it."}},[n("code",[e._v("HTMLElement")])]),e._v(" will contain the name of the corresponding tag, like "),n("code",[e._v("'audio'")]),e._v(" for an "),n("a",{attrs:{href:"/en-US/docs/Web/API/HTMLAudioElement",title:"The HTMLAudioElement interface provides access to the properties of <audio> elements, as well as methods to manipulate them."}},[n("code",[e._v("HTMLAudioElement")])]),e._v(", a "),n("a",{attrs:{href:"/en-US/docs/Web/API/Text",title:"The Text interface represents the textual content of Element or Attr. If an element has no markup within its content, it has a single child implementing Text that contains the element's text. However, if the element contains markup, it is parsed into information items and Text nodes that form its children."}},[n("code",[e._v("Text")])]),e._v(" node will have the "),n("code",[e._v("'#text'")]),e._v(" string, or a "),n("a",{attrs:{href:"/en-US/docs/Web/API/Document",title:"The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree."}},[n("code",[e._v("Document")])]),e._v(" node will have the "),n("code",[e._v("'#document'\n")]),e._v(" string.")]),n("h4",{attrs:{id:"type-string-1"}},[n("a",{attrs:{href:"#type-string-1","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Type")]),e._v(": "),n("code",{pre:!0},[e._v("string")])]),n("h3",{attrs:{id:"nodeType"}},[n("a",{attrs:{href:"#nodeType","aria-hidden":"true"}},[e._v("#")]),e._v("node.nodeType "),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("Returns an "),n("code",[e._v("unsigned short\n")]),e._v(" representing the type of the node. Possible values are:")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",{pre:!0,attrs:{class:"language-text"}},[e._v('<table class="standard-table">\n\t<thead>\n\t\t<tr>\n\t\t\t<th scope="col">Name</th>\n\t\t\t<th scope="col">Value</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td><code>ELEMENT_NODE</code></td>\n\t\t\t<td><code>1</code></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><code>ATTRIBUTE_NODE</code>&nbsp;<span class="icon-only-inline" title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></td>\n\t\t\t<td><code>2</code></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><code>TEXT_NODE</code></td>\n\t\t\t<td><code>3</code></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><code>CDATA_SECTION_NODE</code></td>\n\t\t\t<td><code>4</code></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><code>ENTITY_REFERENCE_NODE</code>&nbsp;<span class="icon-only-inline" title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></td>\n\t\t\t<td><code>5</code></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><code>ENTITY_NODE</code>&nbsp;<span class="icon-only-inline" title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></td>\n\t\t\t<td><code>6</code></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><code>PROCESSING_INSTRUCTION_NODE</code></td>\n\t\t\t<td><code>7</code></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><code>COMMENT_NODE</code></td>\n\t\t\t<td><code>8</code></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><code>DOCUMENT_NODE</code></td>\n\t\t\t<td><code>9</code></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><code>DOCUMENT_TYPE_NODE</code></td>\n\t\t\t<td><code>10</code></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><code>DOCUMENT_FRAGMENT_NODE</code></td>\n\t\t\t<td><code>11</code></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><code>NOTATION_NODE</code>&nbsp;<span class="icon-only-inline" title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></td>\n\t\t\t<td><code>12</code></td>\n\t\t</tr>\n\t</tbody>\n</table>')])]),n("h4",{attrs:{id:"type-number"}},[n("a",{attrs:{href:"#type-number","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Type")]),e._v(": "),n("code",{pre:!0},[e._v("number")])]),n("h3",{attrs:{id:"nodeValue"}},[n("a",{attrs:{href:"#nodeValue","aria-hidden":"true"}},[e._v("#")]),e._v("node.nodeValue "),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("Returns / Sets the value of the current node.")]),n("h4",{attrs:{id:"type-string-2"}},[n("a",{attrs:{href:"#type-string-2","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Type")]),e._v(": "),n("code",{pre:!0},[e._v("string")])]),n("h3",{attrs:{id:"ownerDocument"}},[n("a",{attrs:{href:"#ownerDocument","aria-hidden":"true"}},[e._v("#")]),e._v("node.ownerDocument "),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("Returns the "),n("a",{attrs:{href:"/en-US/docs/Web/API/Document",title:"The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree."}},[n("code",[e._v("Document")])]),e._v(" that this node belongs to. If the node is itself a document, returns "),n("code",[e._v("null\n")]),e._v(".")]),n("h4",{attrs:{id:"type-superdocument"}},[n("a",{attrs:{href:"#type-superdocument","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Type")]),e._v(": "),n("code",{pre:!0},[e._v("SuperDocument")])]),n("h3",{attrs:{id:"parentElement"}},[n("a",{attrs:{href:"#parentElement","aria-hidden":"true"}},[e._v("#")]),e._v("node.parentElement "),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("Returns an "),n("a",{attrs:{href:"/en-US/docs/Web/API/Element",title:"Element is the most general base class from which all element objects (i.e. objects that represent elements) in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element."}},[n("code",[e._v("Element")])]),e._v(" that is the parent of this node. If the node has no parent, or if that parent is not an "),n("a",{attrs:{href:"/en-US/docs/Web/API/Element",title:"Element is the most general base class from which all element objects (i.e. objects that represent elements) in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element."}},[n("code",[e._v("Element")])]),e._v(", this property returns "),n("code",[e._v("null\n")]),e._v(".")]),n("h4",{attrs:{id:"type-superelement"}},[n("a",{attrs:{href:"#type-superelement","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Type")]),e._v(": "),n("code",{pre:!0},[e._v("SuperElement")])]),n("h3",{attrs:{id:"parentNode"}},[n("a",{attrs:{href:"#parentNode","aria-hidden":"true"}},[e._v("#")]),e._v("node.parentNode "),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("Returns a "),n("a",{attrs:{href:"/en-US/docs/Web/API/Node",title:"Node is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly; for example, inheriting the same set of methods, or being testable in the same way."}},[n("code",[e._v("Node")])]),e._v(" that is the parent of this node. If there is no such node, like if this node is the top of the tree or if doesn't participate in a tree, this property returns "),n("code",[e._v("null\n")]),e._v(".")]),n("h4",{attrs:{id:"type-supernode-3"}},[n("a",{attrs:{href:"#type-supernode-3","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Type")]),e._v(": "),n("code",{pre:!0},[e._v("SuperNode")])]),n("h3",{attrs:{id:"previousSibling"}},[n("a",{attrs:{href:"#previousSibling","aria-hidden":"true"}},[e._v("#")]),e._v("node.previousSibling "),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("Returns a "),n("a",{attrs:{href:"/en-US/docs/Web/API/Node",title:"Node is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly; for example, inheriting the same set of methods, or being testable in the same way."}},[n("code",[e._v("Node")])]),e._v(" representing the previous node in the tree, or "),n("code",[e._v("null\n")]),e._v(" if there isn't such node.")]),n("h4",{attrs:{id:"type-supernode-4"}},[n("a",{attrs:{href:"#type-supernode-4","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Type")]),e._v(": "),n("code",{pre:!0},[e._v("SuperNode")])]),n("h3",{attrs:{id:"textContent"}},[n("a",{attrs:{href:"#textContent","aria-hidden":"true"}},[e._v("#")]),e._v("node.textContent "),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("Returns / Sets the textual content of an element and all its descendants.")]),n("h4",{attrs:{id:"type-string-3"}},[n("a",{attrs:{href:"#type-string-3","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Type")]),e._v(": "),n("code",{pre:!0},[e._v("string")])]),n("h2",{attrs:{id:"methods"}},[n("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),n("h3",{attrs:{id:"compareDocumentPosition"}},[n("a",{attrs:{href:"#compareDocumentPosition","aria-hidden":"true"}},[e._v("#")]),e._v("node.compareDocumentPosition"),n("em",[e._v("(...args)")]),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("Compares the position of the current node against another node in any other document.")]),n("h4",{attrs:{id:"arguments"}},[n("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Arguments")]),e._v(":")]),n("ul",[n("li",[e._v("none")])]),n("h4",{attrs:{id:"returns-promisevoid"}},[n("a",{attrs:{href:"#returns-promisevoid","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Returns")]),e._v(": "),n("code",{pre:!0},[e._v("Promise<void>")])]),n("h3",{attrs:{id:"contains"}},[n("a",{attrs:{href:"#contains","aria-hidden":"true"}},[e._v("#")]),e._v("node.contains"),n("em",[e._v("(...args)")]),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("Returns a "),n("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"The Boolean object is an object wrapper for a boolean value."}},[n("code",[e._v("Boolean")])]),e._v(" value indicating whether or not a node is a descendant of the calling node.")]),n("h4",{attrs:{id:"arguments-1"}},[n("a",{attrs:{href:"#arguments-1","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Arguments")]),e._v(":")]),n("ul",[n("li",[e._v("none")])]),n("h4",{attrs:{id:"returns-promisevoid-1"}},[n("a",{attrs:{href:"#returns-promisevoid-1","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Returns")]),e._v(": "),n("code",{pre:!0},[e._v("Promise<void>")])]),n("h3",{attrs:{id:"getRootNode"}},[n("a",{attrs:{href:"#getRootNode","aria-hidden":"true"}},[e._v("#")]),e._v("node.getRootNode"),n("em",[e._v("(...args)")]),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("Returns the context object's root which optionally includes the shadow root if it is available. ")]),n("h4",{attrs:{id:"arguments-2"}},[n("a",{attrs:{href:"#arguments-2","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Arguments")]),e._v(":")]),n("ul",[n("li",[e._v("none")])]),n("h4",{attrs:{id:"returns-promisevoid-2"}},[n("a",{attrs:{href:"#returns-promisevoid-2","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Returns")]),e._v(": "),n("code",{pre:!0},[e._v("Promise<void>")])]),n("h3",{attrs:{id:"hasChildNodes"}},[n("a",{attrs:{href:"#hasChildNodes","aria-hidden":"true"}},[e._v("#")]),e._v("node.hasChildNodes"),n("em",[e._v("(...args)")]),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("Returns a "),n("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"The Boolean object is an object wrapper for a boolean value."}},[n("code",[e._v("Boolean")])]),e._v(" indicating whether or not the element has any child nodes.")]),n("h4",{attrs:{id:"arguments-3"}},[n("a",{attrs:{href:"#arguments-3","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Arguments")]),e._v(":")]),n("ul",[n("li",[e._v("none")])]),n("h4",{attrs:{id:"returns-promisevoid-3"}},[n("a",{attrs:{href:"#returns-promisevoid-3","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Returns")]),e._v(": "),n("code",{pre:!0},[e._v("Promise<void>")])]),n("h3",{attrs:{id:"isDefaultNamespace"}},[n("a",{attrs:{href:"#isDefaultNamespace","aria-hidden":"true"}},[e._v("#")]),e._v("node.isDefaultNamespace"),n("em",[e._v("(...args)")]),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("Accepts a namespace URI as an argument and returns a "),n("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"The Boolean object is an object wrapper for a boolean value."}},[n("code",[e._v("Boolean")])]),e._v(" with a value of "),n("code",[e._v("true")]),e._v(" if the namespace is the default namespace on the given node or "),n("code",[e._v("false\n")]),e._v(" if not.")]),n("h4",{attrs:{id:"arguments-4"}},[n("a",{attrs:{href:"#arguments-4","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Arguments")]),e._v(":")]),n("ul",[n("li",[e._v("none")])]),n("h4",{attrs:{id:"returns-promisevoid-4"}},[n("a",{attrs:{href:"#returns-promisevoid-4","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Returns")]),e._v(": "),n("code",{pre:!0},[e._v("Promise<void>")])]),n("h3",{attrs:{id:"isEqualNode"}},[n("a",{attrs:{href:"#isEqualNode","aria-hidden":"true"}},[e._v("#")]),e._v("node.isEqualNode"),n("em",[e._v("(...args)")]),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("Returns a "),n("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"The Boolean object is an object wrapper for a boolean value."}},[n("code",[e._v("Boolean")])]),e._v(" which indicates whether or not two nodes are of the same type and all their defining data points match.")]),n("h4",{attrs:{id:"arguments-5"}},[n("a",{attrs:{href:"#arguments-5","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Arguments")]),e._v(":")]),n("ul",[n("li",[e._v("none")])]),n("h4",{attrs:{id:"returns-promisevoid-5"}},[n("a",{attrs:{href:"#returns-promisevoid-5","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Returns")]),e._v(": "),n("code",{pre:!0},[e._v("Promise<void>")])]),n("h3",{attrs:{id:"isSameNode"}},[n("a",{attrs:{href:"#isSameNode","aria-hidden":"true"}},[e._v("#")]),e._v("node.isSameNode"),n("em",[e._v("(...args)")]),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("Returns a "),n("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"The Boolean object is an object wrapper for a boolean value."}},[n("code",[e._v("Boolean")])]),e._v(" value indicating whether or not the two nodes are the same (that is, they reference the same object).")]),n("h4",{attrs:{id:"arguments-6"}},[n("a",{attrs:{href:"#arguments-6","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Arguments")]),e._v(":")]),n("ul",[n("li",[e._v("none")])]),n("h4",{attrs:{id:"returns-promisevoid-6"}},[n("a",{attrs:{href:"#returns-promisevoid-6","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Returns")]),e._v(": "),n("code",{pre:!0},[e._v("Promise<void>")])]),n("h3",{attrs:{id:"lookupNamespaceURI"}},[n("a",{attrs:{href:"#lookupNamespaceURI","aria-hidden":"true"}},[e._v("#")]),e._v("node.lookupNamespaceURI"),n("em",[e._v("(...args)")]),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("Accepts a prefix and returns the namespace URI associated with it on the given node if found (and "),n("code",[e._v("null")]),e._v(" if not). Supplying "),n("code",[e._v("null\n")]),e._v(" for the prefix will return the default namespace.")]),n("h4",{attrs:{id:"arguments-7"}},[n("a",{attrs:{href:"#arguments-7","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Arguments")]),e._v(":")]),n("ul",[n("li",[e._v("none")])]),n("h4",{attrs:{id:"returns-promisevoid-7"}},[n("a",{attrs:{href:"#returns-promisevoid-7","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Returns")]),e._v(": "),n("code",{pre:!0},[e._v("Promise<void>")])]),n("h3",{attrs:{id:"lookupPrefix"}},[n("a",{attrs:{href:"#lookupPrefix","aria-hidden":"true"}},[e._v("#")]),e._v("node.lookupPrefix"),n("em",[e._v("(...args)")]),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("Returns a "),n("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[n("code",[e._v("DOMString")])]),e._v(" containing the prefix for a given namespace URI, if present, and "),n("code",[e._v("null\n")]),e._v(" if not. When multiple prefixes are possible, the result is implementation-dependent.")]),n("h4",{attrs:{id:"arguments-8"}},[n("a",{attrs:{href:"#arguments-8","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Arguments")]),e._v(":")]),n("ul",[n("li",[e._v("none")])]),n("h4",{attrs:{id:"returns-promisevoid-8"}},[n("a",{attrs:{href:"#returns-promisevoid-8","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Returns")]),e._v(": "),n("code",{pre:!0},[e._v("Promise<void>")])]),n("h3",{attrs:{id:"normalize"}},[n("a",{attrs:{href:"#normalize","aria-hidden":"true"}},[e._v("#")]),e._v("node.normalize"),n("em",[e._v("(...args)")]),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("Clean up all the text nodes under this element (merge adjacent, remove empty).")]),n("h4",{attrs:{id:"arguments-9"}},[n("a",{attrs:{href:"#arguments-9","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Arguments")]),e._v(":")]),n("ul",[n("li",[e._v("none")])]),n("h4",{attrs:{id:"returns-promisevoid-9"}},[n("a",{attrs:{href:"#returns-promisevoid-9","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Returns")]),e._v(": "),n("code",{pre:!0},[e._v("Promise<void>")])]),n("h2",{attrs:{id:"unimplemented-specs"}},[n("a",{attrs:{href:"#unimplemented-specs","aria-hidden":"true"}},[e._v("#")]),e._v("Unimplemented Specs")]),n("p",[e._v("This class has 0 unimplemented properties and 8 unimplemented methods.")])])}),[],!1,null,null,null);"function"==typeof d&&d(p),"function"==typeof v&&v(p);t.default=p.exports}}]);