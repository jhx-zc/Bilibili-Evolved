!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/sidebar-offset"]=t():e["style/sidebar-offset"]=t()}(globalThis,(()=>(()=>{var e,t,o={840:(e,t,o)=>{var r=o(355)((function(e){return e[1]}));r.push([e.id,".be-settings > .sidebar {\n  top: calc(50% + var(--be-sidebar-offset, 0)) !important;\n}",""]),e.exports=r},355:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,o,r){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var n={};if(r)for(var a=0;a<this.length;a++){
// eslint-disable-next-line prefer-destructuring
var i=this[a][0];null!=i&&(n[i]=!0)}for(var s=0;s<e.length;s++){var f=[].concat(e[s]);r&&n[f[0]]||(o&&(f[2]?f[2]="".concat(o," and ").concat(f[2]):f[2]=o),t.push(f))}},t}},417:(e,t,o)=>{var r=o(840);r&&r.__esModule&&(r=r.default),e.exports="string"==typeof r?r:r.toString()}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={id:e,exports:{}};return o[e](a,a.exports,n),a.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var a=Object.create(null);n.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>o[e]));return i.default=()=>o,n.d(a,i),a},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";n.d(a,{component:()=>r});const e=coreApis.componentApis.define,t=coreApis.settings,o=coreApis.utils,r=(0,e.defineComponentMetadata)({name:"sidebarOffset",displayName:"侧栏垂直偏移",tags:[componentsTags.style],instantStyles:[{name:"sidebarOffset",style:()=>Promise.resolve().then(n.t.bind(n,417,23))}],description:{"zh-CN":"给脚本的侧栏设置垂直偏移量, 范围为 -35% ~ 40%"},entry:e=>{let{metadata:o}=e;(0,t.addComponentListener)(`${o.name}.offset`,(e=>{document.documentElement.style.setProperty("--be-sidebar-offset",`${e}%`)}),!0)},options:{offset:{displayName:"偏移量 (%)",defaultValue:0,validator:(0,o.getNumberValidator)(-35,40)}},commitHash:"8bb8b345b8a8c6575bf8daca8c03bcaf2d899989",coreVersion:"2.7.4"})})(),a=a.component})()));