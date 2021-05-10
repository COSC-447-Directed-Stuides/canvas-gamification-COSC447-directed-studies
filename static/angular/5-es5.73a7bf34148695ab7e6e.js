!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==t)return;var r,i,a=[],o=!0,l=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);o=!0);}catch(u){l=!0,i=u}finally{try{o||null==t.return||t.return()}finally{if(l)throw i}}return a}(e,n)||t(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||t(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){return(i=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function a(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var t,r=l(e);if(n){var i=l(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return o(this,t)}}function o(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function s(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,n,t){return n&&s(e.prototype,n),t&&s(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{ECCn:function(t,r){function o(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(n){var t=e[n];"object"!=typeof t||Object.isFrozen(t)||o(t)}),e}var l=o;l.default=o;var s=function(){function e(n){u(this,e),void 0===n.data&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}return c(e,[{key:"ignoreMatch",value:function(){this.isMatchIgnored=!0}}]),e}();function g(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function f(e){var n=Object.create(null);for(var t in e)n[t]=e[t];for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return i.forEach(function(e){for(var t in e)n[t]=e[t]}),n}var h=function(e){return!!e.kind},d=function(){function e(n,t){u(this,e),this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}return c(e,[{key:"addText",value:function(e){this.buffer+=g(e)}},{key:"openNode",value:function(e){if(h(e)){var n=e.kind;e.sublanguage||(n="".concat(this.classPrefix).concat(n)),this.span(n)}}},{key:"closeNode",value:function(e){h(e)&&(this.buffer+="</span>")}},{key:"value",value:function(){return this.buffer}},{key:"span",value:function(e){this.buffer+='<span class="'.concat(e,'">')}}]),e}(),v=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&i(e,n)}(t,e);var n=a(t);function t(e){var r;return u(this,t),(r=n.call(this)).options=e,r}return c(t,[{key:"addKeyword",value:function(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}},{key:"addText",value:function(e){""!==e&&this.add(e)}},{key:"addSublanguage",value:function(e,n){var t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}},{key:"toHTML",value:function(){return new d(this,this.options).value()}},{key:"finalize",value:function(){return!0}}]),t}(function(){function e(){u(this,e),this.rootNode={children:[]},this.stack=[this.rootNode]}return c(e,[{key:"top",get:function(){return this.stack[this.stack.length-1]}},{key:"root",get:function(){return this.rootNode}},{key:"add",value:function(e){this.top.children.push(e)}},{key:"openNode",value:function(e){var n={kind:e,children:[]};this.add(n),this.stack.push(n)}},{key:"closeNode",value:function(){if(this.stack.length>1)return this.stack.pop()}},{key:"closeAllNodes",value:function(){for(;this.closeNode(););}},{key:"toJSON",value:function(){return JSON.stringify(this.rootNode,null,4)}},{key:"walk",value:function(e){return this.constructor._walk(e,this.rootNode)}}],[{key:"_walk",value:function(e,n){var t=this;return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach(function(n){return t._walk(e,n)}),e.closeNode(n)),e}},{key:"_collapse",value:function(n){"string"!=typeof n&&n.children&&(n.children.every(function(e){return"string"==typeof e})?n.children=[n.children.join("")]:n.children.forEach(function(n){e._collapse(n)}))}}]),e}());function p(e){return e?"string"==typeof e?e:e.source:null}var b=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,m="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",y={begin:"\\\\[\\s\\S]",relevance:0},w={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[y]},E={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[y]},x={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},k=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=f({className:"comment",begin:e,end:n,contains:[]},t);return r.contains.push(x),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),r},R=k("//","$"),_=k("/\\*","\\*/"),N=k("#","$"),O=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:"[a-zA-Z]\\w*",UNDERSCORE_IDENT_RE:"[a-zA-Z_]\\w*",NUMBER_RE:"\\b\\d+(\\.\\d+)?",C_NUMBER_RE:m,BINARY_NUMBER_RE:"\\b(0b[01]+)",RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=/^#![ ]*\//;return e.binary&&(e.begin=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.map(function(e){return p(e)}).join("")}(n,/.*\b/,e.binary,/\b.*/)),f({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":function(e,n){0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:y,APOS_STRING_MODE:w,QUOTE_STRING_MODE:E,PHRASAL_WORDS_MODE:x,COMMENT:k,C_LINE_COMMENT_MODE:R,C_BLOCK_COMMENT_MODE:_,HASH_COMMENT_MODE:N,NUMBER_MODE:{className:"number",begin:"\\b\\d+(\\.\\d+)?",relevance:0},C_NUMBER_MODE:{className:"number",begin:m,relevance:0},BINARY_NUMBER_MODE:{className:"number",begin:"\\b(0b[01]+)",relevance:0},CSS_NUMBER_MODE:{className:"number",begin:"\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[y,{begin:/\[/,end:/\]/,relevance:0,contains:[y]}]}]},TITLE_MODE:{className:"title",begin:"[a-zA-Z]\\w*",relevance:0},UNDERSCORE_TITLE_MODE:{className:"title",begin:"[a-zA-Z_]\\w*",relevance:0},METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":function(e,n){n.data._beginMatch=e[1]},"on:end":function(e,n){n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});function A(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}function M(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=A,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function j(e,t){Array.isArray(e.illegal)&&(e.illegal=(function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return"("+n.map(function(e){return p(e)}).join("|")+")"}).apply(void 0,n(e.illegal)))}function I(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function L(e,n){void 0===e.relevance&&(e.relevance=1)}var S=["of","and","for","in","not","or","if","then","parent","list","value"];function T(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"keyword",r={};return"string"==typeof e?i(t,e.split(" ")):Array.isArray(e)?i(t,e):Object.keys(e).forEach(function(t){Object.assign(r,T(e[t],n,t))}),r;function i(e,t){n&&(t=t.map(function(e){return e.toLowerCase()})),t.forEach(function(n){var t=n.split("|");r[t[0]]=[e,B(t[0],t[1])]})}}function B(e,n){return n?Number(n):function(e){return S.includes(e.toLowerCase())}(e)?0:1}function P(t,r){function i(e,n){return new RegExp(p(e),"m"+(t.case_insensitive?"i":"")+(n?"g":""))}!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(r);var a=function(){function e(){u(this,e),this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}return c(e,[{key:"addRule",value:function(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}},{key:"compile",value:function(){0===this.regexes.length&&(this.exec=function(){return null});var e=this.regexes.map(function(e){return e[1]});this.matcherRe=i(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"|",t=0;return e.map(function(e){for(var n=t+=1,r=p(e),i="";r.length>0;){var a=b.exec(r);if(!a){i+=r;break}i+=r.substring(0,a.index),r=r.substring(a.index+a[0].length),"\\"===a[0][0]&&a[1]?i+="\\"+String(Number(a[1])+n):(i+=a[0],"("===a[0]&&t++)}return i}).map(function(e){return"(".concat(e,")")}).join(n)}(e),!0),this.lastIndex=0}},{key:"exec",value:function(e){this.matcherRe.lastIndex=this.lastIndex;var n=this.matcherRe.exec(e);if(!n)return null;var t=n.findIndex(function(e,n){return n>0&&void 0!==e}),r=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,r)}}]),e}(),o=function(){function n(){u(this,n),this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}return c(n,[{key:"getMatcher",value:function(n){if(this.multiRegexes[n])return this.multiRegexes[n];var t=new a;return this.rules.slice(n).forEach(function(n){var r=e(n,2),i=r[0],a=r[1];return t.addRule(i,a)}),t.compile(),this.multiRegexes[n]=t,t}},{key:"resumingScanAtSamePosition",value:function(){return 0!==this.regexIndex}},{key:"considerAll",value:function(){this.regexIndex=0}},{key:"addRule",value:function(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}},{key:"exec",value:function(e){var n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;var t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{var r=this.getMatcher(0);r.lastIndex=this.lastIndex+1,t=r.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}]),n}();if(t.compilerExtensions||(t.compilerExtensions=[]),t.contains&&t.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return t.classNameAliases=f(t.classNameAliases||{}),function e(r,a){var l,u=r;if(r.isCompiled)return u;[I].forEach(function(e){return e(r,a)}),t.compilerExtensions.forEach(function(e){return e(r,a)}),r.__beforeBegin=null,[M,j,L].forEach(function(e){return e(r,a)}),r.isCompiled=!0;var s=null;if("object"==typeof r.keywords&&(s=r.keywords.$pattern,delete r.keywords.$pattern),r.keywords&&(r.keywords=T(r.keywords,t.case_insensitive)),r.lexemes&&s)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return s=s||r.lexemes||/\w+/,u.keywordPatternRe=i(s,!0),a&&(r.begin||(r.begin=/\B|\b/),u.beginRe=i(r.begin),r.endSameAsBegin&&(r.end=r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(u.endRe=i(r.end)),u.terminatorEnd=p(r.end)||"",r.endsWithParent&&a.terminatorEnd&&(u.terminatorEnd+=(r.end?"|":"")+a.terminatorEnd)),r.illegal&&(u.illegalRe=i(r.illegal)),r.contains||(r.contains=[]),r.contains=(l=[]).concat.apply(l,n(r.contains.map(function(e){return function(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return f(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:C(e)?f(e,{starts:e.starts?f(e.starts):null}):Object.isFrozen(e)?f(e):e}("self"===e?r:e)}))),r.contains.forEach(function(n){e(n,u)}),r.starts&&e(r.starts,a),u.matcher=function(e){var n=new o;return e.contains.forEach(function(e){return n.addRule(e.begin,{rule:e,type:"begin"})}),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(u),u}(t)}function C(e){return!!e&&(e.endsWithParent||C(e.starts))}function D(e){var n={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className:function(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted:function(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn('The language "'.concat(this.language,'" you specified could not be found.')),this.unknownLanguage=!0,g(this.code);var n={};return this.autoDetect?(n=e.highlightAuto(this.code),this.detectedLanguage=n.language):(n=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),n.value},autoDetect:function(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:function(){return!0}},render:function(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:n,VuePlugin:{install:function(e){e.component("highlightjs",n)}}}}var H={"after:highlightElement":function(e){var n=e.el,t=e.result,r=e.text,i=z(n);if(i.length){var a=document.createElement("div");a.innerHTML=t.value,t.value=function(e,n,t){var r=0,i="",a=[];function o(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function l(e){i+="<"+U(e)+[].map.call(e.attributes,function(e){return" "+e.nodeName+'="'+g(e.value)+'"'}).join("")+">"}function u(e){i+="</"+U(e)+">"}function s(e){("start"===e.event?l:u)(e.node)}for(;e.length||n.length;){var c=o();if(i+=g(t.substring(r,c[0].offset)),r=c[0].offset,c===e){a.reverse().forEach(u);do{s(c.splice(0,1)[0]),c=o()}while(c===e&&c.length&&c[0].offset===r);a.reverse().forEach(l)}else"start"===c[0].event?a.push(c[0].node):a.pop(),s(c.splice(0,1)[0])}return i+g(t.substr(r))}(i,z(a),r)}}};function U(e){return e.nodeName.toLowerCase()}function z(e){var n=[];return function e(t,r){for(var i=t.firstChild;i;i=i.nextSibling)3===i.nodeType?r+=i.nodeValue.length:1===i.nodeType&&(n.push({event:"start",offset:r,node:i}),r=e(i,r),U(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:r,node:i}));return r}(e,0),n}var $={},K=function(e){console.error(e)},G=function(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];(n=console).log.apply(n,["WARN: "+e].concat(r))},V=function(e,n){$["".concat(e,"/").concat(n)]||(console.log("Deprecated as of ".concat(e,". ").concat(n)),$["".concat(e,"/").concat(n)]=!0)},W=g,q=f,X=Symbol("nomatch"),Z=function(n){var t=Object.create(null),r=Object.create(null),i=[],a=!0,o=/(^(<[^>]+>|\t|)+|\n)/gm,u="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]},g={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:v};function f(e){return g.noHighlightRe.test(e)}function h(e,n,t,r){var i="",a="";"object"==typeof n?(i=e,t=n.ignoreIllegals,a=n.language,r=void 0):(V("10.7.0","highlight(lang, code, ...args) has been deprecated."),V("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),a=e,i=n);var o={code:i,language:a};N("before:highlight",o);var l=o.result?o.result:d(o.language,o.code,t,r);return l.code=o.code,N("after:highlight",l),l}function d(n,r,o,l){function c(e,n){var t=E.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}function f(){null!=_.subLanguage?function(){if(""!==A){var e=null;if("string"==typeof _.subLanguage){if(!t[_.subLanguage])return void O.addText(A);e=d(_.subLanguage,A,!0,N[_.subLanguage]),N[_.subLanguage]=e.top}else e=p(A,_.subLanguage.length?_.subLanguage:null);_.relevance>0&&(M+=e.relevance),O.addSublanguage(e.emitter,e.language)}}():function(){if(_.keywords){var n=0;_.keywordPatternRe.lastIndex=0;for(var t=_.keywordPatternRe.exec(A),r="";t;){r+=A.substring(n,t.index);var i=c(_,t);if(i){var a=e(i,2),o=a[0],l=a[1];O.addText(r),r="",M+=l,o.startsWith("_")?r+=t[0]:O.addKeyword(t[0],E.classNameAliases[o]||o)}else r+=t[0];n=_.keywordPatternRe.lastIndex,t=_.keywordPatternRe.exec(A)}r+=A.substr(n),O.addText(r)}else O.addText(A)}(),A=""}function h(e){return e.className&&O.openNode(E.classNameAliases[e.className]||e.className),_=Object.create(e,{parent:{value:_}})}function v(e,n,t){var r=function(e,n){var t=e&&e.exec(n);return t&&0===t.index}(e.endRe,t);if(r){if(e["on:end"]){var i=new s(e);e["on:end"](n,i),i.isMatchIgnored&&(r=!1)}if(r){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return v(e.parent,n,t)}function b(e){return 0===_.matcher.regexIndex?(A+=e[0],1):(L=!0,0)}function m(e){var n=e[0],t=r.substr(e.index),i=v(_,e,t);if(!i)return X;var a=_;a.skip?A+=n:(a.returnEnd||a.excludeEnd||(A+=n),f(),a.excludeEnd&&(A=n));do{_.className&&O.closeNode(),_.skip||_.subLanguage||(M+=_.relevance),_=_.parent}while(_!==i.parent);return i.starts&&(i.endSameAsBegin&&(i.starts.endRe=i.endRe),h(i.starts)),a.returnEnd?0:n.length}var y={};function w(e,t){var i=t&&t[0];if(A+=e,null==i)return f(),0;if("begin"===y.type&&"end"===t.type&&y.index===t.index&&""===i){if(A+=r.slice(t.index,t.index+1),!a){var l=new Error("0 width match regex");throw l.languageName=n,l.badRule=y.rule,l}return 1}if(y=t,"begin"===t.type)return function(e){for(var n=e[0],t=e.rule,r=new s(t),i=0,a=[t.__beforeBegin,t["on:begin"]];i<a.length;i++){var o=a[i];if(o&&(o(e,r),r.isMatchIgnored))return b(n)}return t&&t.endSameAsBegin&&(t.endRe=new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),t.skip?A+=n:(t.excludeBegin&&(A+=n),f(),t.returnBegin||t.excludeBegin||(A=n)),h(t),t.returnBegin?0:n.length}(t);if("illegal"===t.type&&!o){var u=new Error('Illegal lexeme "'+i+'" for mode "'+(_.className||"<unnamed>")+'"');throw u.mode=_,u}if("end"===t.type){var c=m(t);if(c!==X)return c}if("illegal"===t.type&&""===i)return 1;if(I>1e5&&I>3*t.index)throw new Error("potential infinite loop, way more iterations than matches");return A+=i,i.length}var E=k(n);if(!E)throw K(u.replace("{}",n)),new Error('Unknown language: "'+n+'"');var x=P(E,{plugins:i}),R="",_=l||x,N={},O=new g.__emitter(g);!function(){for(var e=[],n=_;n!==E;n=n.parent)n.className&&e.unshift(n.className);e.forEach(function(e){return O.openNode(e)})}();var A="",M=0,j=0,I=0,L=!1;try{for(_.matcher.considerAll();;){I++,L?L=!1:_.matcher.considerAll(),_.matcher.lastIndex=j;var S=_.matcher.exec(r);if(!S)break;var T=w(r.substring(j,S.index),S);j=S.index+T}return w(r.substr(j)),O.closeAllNodes(),O.finalize(),R=O.toHTML(),{relevance:Math.floor(M),value:R,language:n,illegal:!1,emitter:O,top:_}}catch(B){if(B.message&&B.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:B.message,context:r.slice(j-100,j+100),mode:B.mode},sofar:R,relevance:0,value:W(r),emitter:O};if(a)return{illegal:!1,relevance:0,value:W(r),emitter:O,language:n,top:_,errorRaised:B};throw B}}function p(n,r){r=r||g.languages||Object.keys(t);var i=function(e){var n={relevance:0,emitter:new g.__emitter(g),value:W(e),illegal:!1,top:c};return n.emitter.addText(e),n}(n),a=r.filter(k).filter(_).map(function(e){return d(e,n,!1)});a.unshift(i);var o=e(a.sort(function(e,n){if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(k(e.language).supersetOf===n.language)return 1;if(k(n.language).supersetOf===e.language)return-1}return 0}),2),l=o[0],u=o[1],s=l;return s.second_best=u,s}var b={"before:highlightElement":function(e){var n=e.el;g.useBR&&(n.innerHTML=n.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"))},"after:highlightElement":function(e){var n=e.result;g.useBR&&(n.value=n.value.replace(/\n/g,"<br>"))}},m=/^(<[^>]+>|\t)+/gm,y={"after:highlightElement":function(e){var n=e.result;g.tabReplace&&(n.value=n.value.replace(m,function(e){return e.replace(/\t/g,g.tabReplace)}))}};function w(e){var n=function(e){var n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";var t=g.languageDetectRe.exec(n);if(t){var r=k(t[1]);return r||(G(u.replace("{}",t[1])),G("Falling back to no-highlight mode for this block.",e)),r?t[1]:"no-highlight"}return n.split(/\s+/).find(function(e){return f(e)||k(e)})}(e);if(!f(n)){N("before:highlightElement",{el:e,language:n});var t=e.textContent,i=n?h(t,{language:n,ignoreIllegals:!0}):p(t);N("after:highlightElement",{el:e,result:i,text:t}),e.innerHTML=i.value,function(e,n,t){var i=n?r[n]:t;e.classList.add("hljs"),i&&e.classList.add(i)}(e,n,i.language),e.result={language:i.language,re:i.relevance,relavance:i.relevance},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.relevance,relavance:i.second_best.relevance})}}var E=!1;function x(){"loading"!==document.readyState?document.querySelectorAll("pre code").forEach(w):E=!0}function k(e){return e=(e||"").toLowerCase(),t[e]||t[r[e]]}function R(e,n){var t=n.languageName;"string"==typeof e&&(e=[e]),e.forEach(function(e){r[e.toLowerCase()]=t})}function _(e){var n=k(e);return n&&!n.disableAutodetect}function N(e,n){var t=e;i.forEach(function(e){e[t]&&e[t](n)})}for(var A in"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",function(){E&&x()},!1),Object.assign(n,{highlight:h,highlightAuto:p,highlightAll:x,fixMarkup:function(e){return V("10.2.0","fixMarkup will be removed entirely in v11.0"),V("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),n=e,g.tabReplace||g.useBR?n.replace(o,function(e){return"\n"===e?g.useBR?"<br>":e:g.tabReplace?e.replace(/\t/g,g.tabReplace):e}):n;var n},highlightElement:w,highlightBlock:function(e){return V("10.7.0","highlightBlock will be removed entirely in v12.0"),V("10.7.0","Please use highlightElement now."),w(e)},configure:function(e){e.useBR&&(V("10.3.0","'useBR' will be removed entirely in v11.0"),V("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),g=q(g,e)},initHighlighting:function e(){e.called||(e.called=!0,V("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead."),document.querySelectorAll("pre code").forEach(w))},initHighlightingOnLoad:function(){V("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),E=!0},registerLanguage:function(e,r){var i=null;try{i=r(n)}catch(o){if(K("Language definition for '{}' could not be registered.".replace("{}",e)),!a)throw o;K(o),i=c}i.name||(i.name=e),t[e]=i,i.rawDefinition=r.bind(null,n),i.aliases&&R(i.aliases,{languageName:e})},unregisterLanguage:function(e){delete t[e];for(var n=0,i=Object.keys(r);n<i.length;n++){var a=i[n];r[a]===e&&delete r[a]}},listLanguages:function(){return Object.keys(t)},getLanguage:k,registerAliases:R,requireLanguage:function(e){V("10.4.0","requireLanguage will be removed entirely in v11."),V("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");var n=k(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:_,inherit:q,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=function(n){e["before:highlightBlock"](Object.assign({block:n.el},n))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=function(n){e["after:highlightBlock"](Object.assign({block:n.el},n))})}(e),i.push(e)},vuePlugin:D(n).VuePlugin}),n.debugMode=function(){a=!1},n.safeMode=function(){a=!0},n.versionString="10.7.2",O)"object"==typeof O[A]&&l(O[A]);return Object.assign(n,O),n.addPlugin(b),n.addPlugin(H),n.addPlugin(y),n}({});t.exports=Z}}])}();