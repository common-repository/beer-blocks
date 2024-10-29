(()=>{"use strict";var e,t={800:(e,t,a)=>{const r=window.React;var i=a.n(r);const n=window.wp.i18n,l=window.wp.blocks,o=window.wp.blockEditor,s=window.wp.components,b=window.lodash,p=(Object.entries({primary:"#007bff",secondary:"#6c757d",success:"#28a745",info:"#17a2b8",warning:"#ffc107",danger:"#dc3545",light:"#f8f9fa",dark:"#343a40"}).map((e=>({name:(0,b.capitalize)(e[0]),color:e[1]}))),[{value:"primary",label:"Primary"},{value:"secondary",label:"Secondary"},{value:"success",label:"Success"},{value:"danger",label:"Danger"},{value:"warning",label:"Warning"},{value:"info",label:"Info"},{value:"light",label:"Light"},{value:"dark",label:"Dark"}]);var c={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u=i().createContext&&i().createContext(c),m=function(){return m=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},m.apply(this,arguments)},h=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]])}return a};function g(e){return e&&e.map((function(e,t){return i().createElement(e.tag,m({key:t},e.attr),g(e.child))}))}function f(e){return function(t){return i().createElement(d,m({attr:m({},e.attr)},t),g(e.child))}}function d(e){var t=function(t){var a,r=e.attr,n=e.size,l=e.title,o=h(e,["attr","size","title"]),s=n||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),i().createElement("svg",m({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,o,{className:a,style:m(m({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&i().createElement("title",null,l),e.children)};return void 0!==u?i().createElement(u.Consumer,null,(function(e){return t(e)})):t(c)}function v(e){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"}}]})(e)}function k(e){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"}}]})(e)}function x(e){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm1 17H7V4h10v14zm-3 3h-4v-1h4v1z"}}]})(e)}function C(e){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0zm0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z"}}]})(e)}function $(e){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z"}}]})(e)}function y(e){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"}}]})(e)}const w="auto-sizing-ew",E="auto-sizing-vwc",_="manual-sizing",P="same-behavior",M="different-behavior",B=e=>[{label:(0,n.__)("Manual sizing","beer-blocks"),value:_},{label:(0,n.__)("Auto sizing: equal width","beer-blocks"),value:w},{label:(0,n.__)("Auto sizing: variable width content","beer-blocks"),value:E},..."xs"!==e?[{label:(0,n.__)("Same as previous breakpoint","beer-blocks"),value:""}]:[]],z=["xs","sm","md","lg","xl","xxl"],j=e=>(0,b.isPlainObject)(e)&&z.map((t=>(0,b.has)(e,t))).includes(!0)?Object.fromEntries(Object.entries(e).filter((e=>z.includes(e[0])))):Object.fromEntries(z.map((t=>[[t],e]))),A=(e="")=>({[(0,b.camelCase)(`${e}-breakpoints-behavior`)]:{type:"object",default:{sm:P,md:P,lg:P,xl:P,xxl:P}}}),N=({attrName:e,breakpointsBehaviorAttributes:t=!1,defaultValue:a})=>({[e]:{type:"object",default:j(a)},...t?{[`${e}BreakpointsBehavior`]:{type:"object",default:{sm:P,md:P,lg:P,xl:P,xxl:P}}}:{}}),L=({attrName:e,breakpoints:t,breakpointsBehavior:a,defaultValue:r,type:i="string"})=>t?N({attrName:e,breakpointsBehaviorAttributes:a,...void 0!==r?{defaultValue:r}:{}}):{[e]:{type:i,...void 0!==r?{default:r}:{}}},H=e=>({xs:(0,r.createElement)(x,{className:"beer-blocks-breakpoint-tab-icon"}),sm:(0,r.createElement)(C,{className:"beer-blocks-breakpoint-tab-icon"}),md:(0,r.createElement)($,{className:"beer-blocks-breakpoint-tab-icon"}),lg:(0,r.createElement)(v,{className:"beer-blocks-breakpoint-tab-icon"}),xl:(0,r.createElement)(k,{className:"beer-blocks-breakpoint-tab-icon"}),xxl:(0,r.createElement)(y,{className:"beer-blocks-breakpoint-tab-icon"})}[e]),V=z.map((e=>({name:e,title:H(e)}))),O=e=>({xs:"",sm:"xs",md:"sm",lg:"md",xl:"lg",xxl:"xl"}[e]),S=(e,t={})=>{const a=z.indexOf(e);if(-1===a||a===z.length-1)return[];let r=z.slice(a+1);if((0,b.isEmpty)(t))return r;const i=r.findIndex((e=>t[e]===M));return i>-1&&(r=r.slice(0,i)),r},T=({props:e,attrPrefix:t,breakpoint:a,affectedAttrs:i=[],onChange:l})=>{const o=(0,b.camelCase)(`${t}-breakpoints-behavior`),{setAttributes:p,attributes:{[o]:c}}=e,u="function"==typeof l?l:t=>{const r=O(a),n=S(a,c);p({[o]:{...c,[a]:t},...i.length>0&&t===P?Object.fromEntries(i.map((t=>{const i=e.attributes[t],l=i[r];return[t,{...i,[a]:l,...n.length>0?Object.fromEntries(n.map((e=>[e,l]))):{}}]}))):{}})};return O(a)?(0,r.createElement)(s.RadioControl,{label:(0,n.sprintf)((0,n.__)("Breakpoint behavior (%s)","beer-blocks"),a.toUpperCase()),selected:c[a],options:[{label:(0,n.__)("Same as previous breakpoint","beer-blocks"),value:P},{label:(0,n.__)("Set different value","beer-blocks"),value:M}],onChange:u}):null},D=e=>(0,r.createElement)(s.TabPanel,{initialTabName:"xs",tabs:V,className:"beer-blocks-tabs"},(t=>e(t.name))),I={containerTypesOptions:[{value:"container",label:"Container"},{value:"container-fluid",label:"Container Fluid"},{value:"container-sm",label:"Container SM"},{value:"container-md",label:"Container MD"},{value:"container-lg",label:"Container LG"},{value:"container-xl",label:"Container XL"},{value:"container-xxl",label:"Container XXL"}],manualSizing:_,autoSizingEqualWidth:w,autoSizingVariableWidthContent:E,sameBehavior:P,differentBehavior:M,colSizingTypeOptions:B,breakpoints:z,breakpointsAttributeValue:j,breakpointsBehaviorAttributeValue:e=>Object.fromEntries(z.filter((e=>"xs"!==e)).map((t=>[[t],e]))),attributes:L,breakpointsAttribute:N,breakpointIcon:H,breakpointsOptions:V,getColSizingAttribute:({attrPrefix:e="",breakpointsBehaviorAttrPrefix:t,defaultSizingType:a=w,defaultSize:r=12}={})=>({...L({attrName:(0,b.camelCase)(`${e}-col-sizing`),breakpoints:!0,breakpointsBehavior:!1,defaultValue:{sizingType:a,size:r}}),...A(t||`${e}-col-sizing`)}),getColSizingClasses:({props:e,attrPrefix:t="",breakpointsBehaviorAttrPrefix:a})=>{const r=(0,b.camelCase)(`${t}-col-sizing`),i=(0,b.camelCase)(`${a||`${t}-col-sizing`}-breakpoints-behavior`),{attributes:{[r]:n,[i]:l}}=e;return Object.entries(n).reduce(((e,t)=>{const a=t[0],r=t[1];return l[a]!==P?`${e+((e,t)=>{if("xs"===t)return"col"+(e.sizingType===E?"-auto":e.sizingType===_?`-${e.size}`:"");switch(e.sizingType){case w:return`col-${t}`;case E:return`col-${t}-auto`;case _:return`col-${t}-${e.size}`;default:return""}})(r,a)} `:e}),"").trim()},getColSizingControls:({props:e,attrPrefix:t="",breakpointsBehaviorAttrPrefix:a})=>{const i=(0,b.camelCase)(`${t}-col-sizing`),l=(0,b.camelCase)(`${a||`${t}-col-sizing`}-breakpoints-behavior`),o=[i],{attributes:{[i]:p,[l]:c},setAttributes:u}=e;return D((a=>(0,r.createElement)(r.Fragment,null,T({props:e,attrPrefix:`${t}-col-sizing`,breakpoint:a,affectedAttrs:o}),(e=>{if(c[e]===P)return null;const t=S(e,c);return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(s.RadioControl,{label:(0,n.sprintf)((0,n.__)("Column sizing type (%s)","beer-blocks"),e.toUpperCase()),help:(0,n.sprintf)((0,n.__)("Settings applied from %s resolution and up","beer-blocks"),e.toUpperCase()),selected:p[e].sizingType,options:B(e),onChange:a=>{const r={...p[e],sizingType:a};u({[i]:{...p,[e]:r,...t.length>0?Object.fromEntries(t.map((e=>[e,r]))):{}}})}}),p[e].sizingType===_&&(0,r.createElement)(s.RangeControl,{label:(0,n.sprintf)((0,n.__)("Column sizing (%d)","beer-blocks"),p[e].size),value:p[e].size,onChange:a=>{const r={...p[e],size:a};u({[i]:{...p,[e]:r,...t.length>0?Object.fromEntries(t.map((e=>[e,r]))):{}}})},min:1,max:12,step:1}))})(a))))},breakpointsBehaviorAttribute:A,getPreviousBreakpoint:O,getNextBreakpoints:S,getBreakpointsBehaviorControl:T,getBreakpointsTabs:D},U=[{value:"px",label:"PX"},{value:"em",label:"EM"},{value:"rem",label:"REM"},{value:"%",label:"%"}],W=e=>void 0!==e&&""!==e,R=e=>void 0!==e&&""!==e,Z=({attrPrefix:e="",type:t="string",breakpointsBehavior:a=!1,defaultValue:r}={})=>I.attributes({attrName:(0,b.camelCase)(`${e}-width`),breakpoints:!0,breakpointsBehavior:a,defaultValue:r,type:t}),X=({attrPrefix:e="",type:t="string",breakpointsBehavior:a=!1,defaultValue:r}={})=>I.attributes({attrName:(0,b.camelCase)(`${e}-min-width`),breakpoints:!0,breakpointsBehavior:a,defaultValue:r,type:t}),Y=({attrPrefix:e="",type:t="string",breakpointsBehavior:a=!1,defaultValue:r}={})=>I.attributes({attrName:(0,b.camelCase)(`${e}-max-width`),breakpoints:!0,breakpointsBehavior:a,defaultValue:r,type:t}),F=({attrPrefix:e="",type:t="string",breakpointsBehavior:a=!1,defaultValue:r}={})=>I.attributes({attrName:(0,b.camelCase)(`${e}-height`),breakpoints:!0,breakpointsBehavior:a,defaultValue:r,type:t}),G=({attrPrefix:e="",type:t="string",breakpointsBehavior:a=!1,defaultValue:r}={})=>I.attributes({attrName:(0,b.camelCase)(`${e}-min-height`),breakpoints:!0,breakpointsBehavior:a,defaultValue:r,type:t}),J=({attrPrefix:e="",type:t="string",breakpointsBehavior:a=!1,defaultValue:r}={})=>I.attributes({attrName:(0,b.camelCase)(`${e}-max-height`),breakpoints:!0,breakpointsBehavior:a,defaultValue:r,type:t}),Q=({attrPrefix:e="",breakpointsBehavior:t=!1,defaultValue:a=!1}={})=>I.attributes({attrName:(0,b.camelCase)(`${e}-"auto-height"`),breakpoints:!0,breakpointsBehavior:t,defaultValue:a,type:"boolean"}),q=(e,t,a="")=>{const r=(0,b.camelCase)(`${a}-width`),i=(0,b.camelCase)(`${a}-min-width`),n=(0,b.camelCase)(`${a}-max-width`),{attributes:{[r]:l,[i]:o,[n]:s}}=e;return Object.fromEntries([...l?I.breakpoints.map((e=>[`--wp-beer-blocks-${t}-${r}-${e}`,"number"==typeof l[e]?`${l[e]}px`:l[e]])):[],...o?I.breakpoints.map((e=>[`--wp-beer-blocks-${t}-${i}-${e}`,"number"==typeof o[e]?`${o[e]}px`:o[e]])):[],...s?I.breakpoints.map((e=>[`--wp-beer-blocks-${t}-${n}-${e}`,"number"==typeof s[e]?`${s[e]}px`:s[e]])):[]].filter((e=>W(e[1]))))},K=(e,t,a="")=>{const r=(0,b.camelCase)(`${a}-height`),i=(0,b.camelCase)(`${a}-min-height`),n=(0,b.camelCase)(`${a}-max-height`),l=(0,b.camelCase)(`${a}-auto-height`),{attributes:{[r]:o,[i]:s,[n]:p,[l]:c}}=e;return Object.fromEntries([...o?I.breakpoints.map((e=>[`--wp-beer-blocks-${t}-${r}-${e}`,c&&c[e]?"auto":"number"==typeof o[e]?`${o[e]}px`:o[e]])):[],...s?I.breakpoints.map((e=>[`--wp-beer-blocks-${t}-${i}-${e}`,"number"==typeof s[e]?`${s[e]}px`:s[e]])):[],...p?I.breakpoints.map((e=>[`--wp-beer-blocks-${t}-${n}-${e}`,"number"==typeof p[e]?`${p[e]}px`:p[e]])):[]].filter((e=>R(e[1]))))},ee=(e,t,a="")=>({...q(e,t,a),...K(e,t,a)}),te=(e,t="",a=!0)=>`${a?" ":""}${`${((e,t="",a=!0)=>{const r=(0,b.camelCase)(`${t}-width`),i=(0,b.camelCase)(`${t}-min-width`),n=(0,b.camelCase)(`${t}-max-width`),{attributes:{[r]:l,[i]:o,[n]:s}}=e,p=[...l?I.breakpoints.map((e=>!!W((0,b.get)(l,e))&&`wp-beer-blocks-has-width-${e}-rule`)):[],...o?I.breakpoints.map((e=>!!W((0,b.get)(o,e))&&`wp-beer-blocks-has-min-width-${e}-rule`)):[],...s?I.breakpoints.map((e=>!!W((0,b.get)(s,e))&&`wp-beer-blocks-has-max-width-${e}-rule`)):[]].filter((e=>e));return(p.length>0?`${a&&" "}${p.join(" ")}`:"").trimEnd()})(e,t)}${((e,t="",a=!0)=>{const r=(0,b.camelCase)(`${t}-height`),i=(0,b.camelCase)(`${t}-min-height`),n=(0,b.camelCase)(`${t}-max-height`),l=(0,b.camelCase)(`${t}-auto-height`),{attributes:{[r]:o,[i]:s,[n]:p,[l]:c}}=e,u=[...o?I.breakpoints.map((e=>!(!R((0,b.get)(o,e))&&!(0,b.get)(c,e))&&`wp-beer-blocks-has-height-${e}-rule`)):[],...void 0!==s?I.breakpoints.map((e=>!!R((0,b.get)(s,e))&&`wp-beer-blocks-has-min-height-${e}-rule`)):[],...void 0!==p?I.breakpoints.map((e=>!!R((0,b.get)(p,e))&&`wp-beer-blocks-has-max-height-${e}-rule`)):[]].filter((e=>e));return(u.length>0?`${a&&" "}${u.join(" ")}`:"").trimEnd()})(e,t)}`.trimStart()}`.trimEnd(),ae=[{value:"px",label:"PX"},{value:"em",label:"EM"},{value:"rem",label:"REM"}],re=e=>void 0!==e&&""!==e,ie=e=>void 0!==e&&""!==e,ne=({attrPrefix:e="",paddingSides:t=["top","right","bottom","left"],breakpointsBehavior:a=!1}={})=>{if((0,b.isEmpty)(t))return{};const r=Object.fromEntries(t.map((e=>[e,void 0])));return I.attributes({attrName:(0,b.camelCase)(`${e}-padding`),breakpoints:!0,breakpointsBehavior:a,defaultValue:r,type:"object"})},le=({attrPrefix:e="",marginSides:t=["top","right","bottom","left"],breakpointsBehavior:a=!1}={})=>{if((0,b.isEmpty)(t))return{};const r=Object.fromEntries(t.map((e=>[e,void 0])));return I.attributes({attrName:(0,b.camelCase)(`${e}-margin`),breakpoints:!0,breakpointsBehavior:a,defaultValue:r,type:"object"})},oe=({attrPrefix:e="",breakpointsBehavior:t=!1}={})=>I.attributes({attrName:(0,b.camelCase)(`${e}-mx-auto`),breakpoints:!0,breakpointsBehavior:t,defaultValue:!1,type:"object"}),se=(e,t,a="")=>{const r=(0,b.camelCase)(`${a}-padding`),{attributes:{[r]:i}}=e,n=e=>Object.fromEntries(I.breakpoints.map((a=>[`--wp-beer-blocks-${t}-${r+(0,b.capitalize)(e)}-${a}`,(0,b.get)(i,`${a}.${e}`)])).filter((e=>re(e[1]))));return i?{...n("top"),...n("right"),...n("bottom"),...n("left")}:{}},be=(e,t,a="")=>{const r=(0,b.camelCase)(`${a}-margin`),{attributes:{[r]:i}}=e,n=e=>Object.fromEntries(I.breakpoints.map((a=>[`--wp-beer-blocks-${t}-${r+(0,b.capitalize)(e)}-${a}`,(0,b.get)(i,`${a}.${e}`)])).filter((e=>ie(e[1]))));return i?{...n("top"),...n("right"),...n("bottom"),...n("left")}:{}},pe=(e,t,a="")=>({...se(e,t,a),...be(e,t,a)}),ce=(e,t="",a=!0)=>`${a?" ":""}${`${((e,t="",a=!0)=>{const r=(0,b.camelCase)(`${t}-padding`),{attributes:{[r]:i}}=e,n=e=>I.breakpoints.map((t=>!!re((0,b.get)(i,`${t}.${e}`))&&`wp-beer-blocks-has-padding-${e}-${t}-rule`)).filter((e=>e));return(i?`${a?" ":""}${[...n("top"),...n("right"),...n("bottom"),...n("left")].join(" ")}`:"").trimEnd()})(e,t)}${((e,t="",a=!0)=>{const r=(0,b.camelCase)(`${t}-margin`),i=(0,b.camelCase)(`${t}-mx-auto`),{attributes:{[r]:n,[i]:l}}=e,o=e=>I.breakpoints.map((t=>!!ie((0,b.get)(n,`${t}.${e}`))&&`wp-beer-blocks-has-margin-${e}-${t}-rule`)).filter((e=>e));return(n?`${a?" ":""}${[...o("top"),...o("right"),...o("bottom"),...o("left"),...I.breakpoints.map((e=>!!(0,b.get)(l,e)&&`mx${"xs"!==e?`-${e}`:""}-auto`)).filter((e=>e))].join(" ")}`:"").trimEnd()})(e,t)}`.trimStart()}`.trimEnd(),ue=window.ReactJSXRuntime,me=(e,t="")=>(0,b.camelCase)(`${t}-${e}`),he=({attrPrefix:e="",defaultValue:t=""}={})=>({[me("id-attr",e)]:{type:"string",default:t}}),ge=({attrPrefix:e="",defaultValue:t=""}={})=>({[me("html-attrs",e)]:{type:"string",default:t}}),fe=({props:e,attrPrefix:t="",label:a=(0,n.__)("ID attribute","beer-blocks")})=>{const r=me("id-attr",t),{setAttributes:i,attributes:l}=e;return(0,b.has)(l,r)?(0,ue.jsx)(s.TextControl,{label:a,value:l[r],help:(0,n.__)("Set the HTML ID attribute.","beer-blocks"),onChange:e=>i({[r]:e})}):null},de=({props:e,attrPrefix:t="",label:a=(0,n.__)("HTML attributes","beer-blocks")})=>{const r=me("html-attrs",t),{setAttributes:i,attributes:l}=e;return(0,b.has)(l,r)?(0,ue.jsx)(s.TextareaControl,{label:a,value:l[r],help:(0,n.__)("Add one or more HTML attributes separated with a new line. Each line must have the `attrName : value` format.","beer-blocks"),rows:"6",onChange:e=>i({[r]:e})}):null},ve=e=>{const t=((0,b.isString)(e)?e.split(/\n/):[]).map((e=>{if(!/^[a-zA-Z\-]{2,}\s*:\s*[a-zA-Z\-_0-9 ]{2,}$/.test(e))return!1;let t=e.split(/\s*:\s*/);return[t[0],t[1].trim()]})).filter((e=>e));return Object.fromEntries(t)},ke=(e,t="")=>{const{attributes:a}=e,r=me("id-attr",t),i=me("html-attrs",t);let n={};return(0,b.has)(a,r)&&(n={...n,...a[r]?{id:a[r]}:{}}),(0,b.has)(a,i)&&(n={...n,...ve(a[i])}),n};(0,l.registerBlockType)("beer-blocks/alert",{apiVersion:2,title:(0,n._x)("Alert","block title","beer-blocks"),category:"beer-blocks",description:(0,n._x)("Represents Bootstrap Alerts that provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.","block description","beer-blocks"),textdomain:"beer-blocks",icon:(0,r.createElement)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4Ni40MyA3Ny41NCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNlZmExMjY7fS5jbHMtMntmaWxsOm5vbmU7c3Ryb2tlOiMwMTAxMDE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkNhcGFfMiIgZGF0YS1uYW1lPSJDYXBhIDIiPjxnIGlkPSJDYXBhXzEtMiIgZGF0YS1uYW1lPSJDYXBhIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc2LjI1LDc3LjU0SDEwLjE4QTEwLjE2LDEwLjE2LDAsMCwxLDEuMzgsNjIuM2wzMy01Ny4yMmExMC4xNiwxMC4xNiwwLDAsMSwxNy42LDBsMzMsNTcuMjJhMTAuMTYsMTAuMTYsMCwwLDEtOC44LDE1LjI0Wm0tMzMtNzIuNDhBNS4wNSw1LjA1LDAsMCwwLDM4LjgsNy42MWwtMzMsNTcuMjJhNS4xLDUuMSwwLDAsMCw0LjQyLDcuNjVINzYuMjVhNS4xLDUuMSwwLDAsMCw0LjQxLTcuNjVsLTMzLTU3LjIyQTUuMDYsNS4wNiwwLDAsMCw0My4yMSw1LjA2WiIvPjxyZWN0IGNsYXNzPSJjbHMtMiIgeD0iNDAuMiIgeT0iMTkuNzQiIHdpZHRoPSI2LjAzIiBoZWlnaHQ9IjMwLjEzIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNDMuMjEsNjMuOTNhNCw0LDAsMSwxLDQtNEE0LDQsMCwwLDEsNDMuMjEsNjMuOTNaIi8+PC9nPjwvZz48L3N2Zz4=",alt:(0,n._x)("Alert","block title","beer-blocks")}),attributes:{contents:{type:"html"},alertType:{type:"string",default:"alert alert-light"},...(({attrPrefix:e="",widthAttr:t=!0,widthDefaultValue:a,widthType:r="string",minWidthAttr:i=!1,minWidthType:n="string",minWidthDefaultValue:l,maxWidthAttr:o=!1,maxWidthType:s="string",maxWidthDefaultValue:b,heightAttr:p=!0,heightDefaultValue:c,heightType:u="string",minHeightAttr:m=!1,minHeightDefaultValue:h,minHeightType:g="string",maxHeightAttr:f=!1,maxHeightDefaultValue:d,maxHeightType:v="string",autoHeightAttr:k=!0,autoHeightDefaultValue:x=!1}={})=>({...t?Z({attrPrefix:e,defaultValue:a,type:r}):{},...i?X({attrPrefix:e,defaultValue:l,type:n}):{},...o?Y({attrPrefix:e,defaultValue:b,type:s}):{},...p?F({attrPrefix:e,defaultValue:c,type:u}):{},...m?G({attrPrefix:e,defaultValue:h,type:g}):{},...f?J({attrPrefix:e,defaultValue:d,type:v}):{},...p&&k?Q({attrPrefix:e,defaultValue:x}):{},...I.breakpointsBehaviorAttribute(`${e}-size`)}))({maxWidthAttr:!0,minHeightAttr:!0}),...(({attrPrefix:e="",paddingSides:t=["top","right","bottom","left"],marginSides:a=["top","right","bottom","left"],horizontalCenteringAttr:r=!1}={})=>({...ne({attrPrefix:e,paddingSides:t}),...le({attrPrefix:e,marginSides:a}),...r?oe({attrPrefix:e}):{},...I.breakpointsBehaviorAttribute(`${e}-spacing`)}))({horizontalCenteringAttr:!0}),...(({attrPrefix:e="",defaultId:t="",defaultHtmlAttrs:a=""}={})=>({...he({attrPrefix:e,defaultValue:t}),...ge({attrPrefix:e,defaultValue:a})}))()},edit:e=>{const{attributes:{alertType:t},setAttributes:a}=e,i=(0,o.useBlockProps)({className:`${t}${te(e)}${ce(e)}`,style:{...ee(e,"alert"),...pe(e,"alert")},...ke(e)});return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(o.InspectorControls,null,(0,r.createElement)(s.PanelBody,{title:(0,n.__)("Alert settings","beer-blocks")},(0,r.createElement)(s.SelectControl,{label:(0,n.__)("Select an alert type","beer-blocks"),value:t,options:p.map((e=>({...e,value:`alert alert-${e.value}`}))),onChange:e=>a({alertType:e})})),(({props:e,initialOpen:t=!1,attrPrefix:a="",panelBody:i=!0,title:l=(0,n.__)("Size","beer-blocks"),widthControlLabel:o=e=>sprintf((0,n.__)("Width (%s)","beer-blocks"),e.toUpperCase()),minWidthControlLabel:p=e=>sprintf((0,n.__)("Min width (%s)","beer-blocks"),e.toUpperCase()),maxWidthControlLabel:c=e=>sprintf((0,n.__)("Max width (%s)","beer-blocks"),e.toUpperCase()),heightControlLabel:u=e=>sprintf((0,n.__)("Height (%s)","beer-blocks"),e.toUpperCase()),minHeightControlLabel:m=e=>sprintf((0,n.__)("Min height (%s)","beer-blocks"),e.toUpperCase()),maxHeightControlLabel:h=e=>sprintf((0,n.__)("Max height (%s)","beer-blocks"),e.toUpperCase()),autoHeightControlLabel:g=e=>sprintf((0,n.__)("Auto height (%s)","beer-blocks"),e.toUpperCase()),widthType:f="string",heightType:d="string",minWidth:v=0,maxWidth:k=500,minHeight:x=0,maxHeight:C=100,beforePanelBody:$=e=>null,afterPanelBody:y=e=>null})=>{const{attributes:w}=e,E=(0,b.camelCase)(`${a}-width`),_=(0,b.camelCase)(`${a}-min-width`),P=(0,b.camelCase)(`${a}-max-width`),M=(0,b.camelCase)(`${a}-height`),B=(0,b.camelCase)(`${a}-min-height`),z=(0,b.camelCase)(`${a}-max-height`),j=(0,b.camelCase)(`${a}-auto-height`),A=`${a}-size`,N=[E,_,P,M,B,z,j].filter((e=>(0,b.has)(w,e)));if(N.length>0){const w=I.getBreakpointsTabs((t=>(0,r.createElement)(r.Fragment,null,I.getBreakpointsBehaviorControl({props:e,attrPrefix:A,breakpoint:t,affectedAttrs:N}),$(t),(({props:e,breakpoint:t,attrPrefix:a="",breakpointsBehaviorAttrPrefix:i="",label:l=sprintf((0,n.__)("Width (%s)","beer-blocks"),t.toUpperCase()),type:o="string",minWidth:p=0,maxWidth:c=500,minWidthLabel:u=sprintf((0,n.__)("Min width (%s)","beer-blocks"),t.toUpperCase()),maxWidthLabel:m=sprintf((0,n.__)("Max width (%s)","beer-blocks"),t.toUpperCase())})=>{const{setAttributes:h,attributes:g}=e,f=(0,b.camelCase)(`${a}-width`),d=(0,b.camelCase)(`${a}-min-width`),v=(0,b.camelCase)(`${a}-max-width`),k=(0,b.camelCase)(`${i}-breakpoints-behavior`),{[f]:x,[d]:C,[v]:$,[k]:y}=g;if(y[t]===I.sameBehavior)return null;const w=e=>h({[f]:{...x,[t]:e}}),E=e=>h({[d]:{...C,[t]:e}}),_=e=>h({[v]:{...$,[t]:e}}),P=(e,a)=>h({[a]:{...e,[t]:void 0}}),M=x?(0,r.createElement)(s.BaseControl,{label:l},"number"===o?(0,r.createElement)(s.RangeControl,{value:x[t],onChange:w,min:p,max:c,step:1}):(0,r.createElement)(s.__experimentalUnitControl,{value:x[t],onChange:w,onUnitChange:()=>P(f),units:U})):null,B=C?(0,r.createElement)(s.BaseControl,{label:u},"number"===o?(0,r.createElement)(s.RangeControl,{value:C[t],onChange:E,min:p,max:c,step:1}):(0,r.createElement)(s.__experimentalUnitControl,{value:C[t],onChange:E,onUnitChange:()=>P(d),units:U})):null,z=$?(0,r.createElement)(s.BaseControl,{label:m},"number"===o?(0,r.createElement)(s.RangeControl,{value:$[t],onChange:_,min:p,max:c,step:1}):(0,r.createElement)(s.__experimentalUnitControl,{value:$[t],onChange:_,onUnitChange:()=>P(v),units:U})):null;return(0,r.createElement)(r.Fragment,null,M,B,z)})({props:e,breakpoint:t,breakpointsBehaviorAttrPrefix:A,attrPrefix:a,label:o(t),type:f,minWidth:v,maxWidth:k,minWidthLabel:p(t),maxWidthLabel:c(t)}),(({props:e,breakpoint:t,attrPrefix:a="",breakpointsBehaviorAttrPrefix:i="",label:l=sprintf((0,n.__)("Height (%s)","beer-blocks"),t.toUpperCase()),type:o="string",minHeight:p=0,maxHeight:c=100,minHeightLabel:u=sprintf((0,n.__)("Min height (%s)","beer-blocks"),t.toUpperCase()),maxHeightLabel:m=sprintf((0,n.__)("Max height (%s)","beer-blocks"),t.toUpperCase()),autoHeightLabel:h=sprintf((0,n.__)("Auto height (%s)","beer-blocks"),t.toUpperCase())})=>{const{setAttributes:g,attributes:f}=e,d=(0,b.camelCase)(`${a}-height`),v=(0,b.camelCase)(`${a}-min-height`),k=(0,b.camelCase)(`${a}-max-height`),x=(0,b.camelCase)(`${a}-auto-height`),C=(0,b.camelCase)(`${i}-breakpoints-behavior`),{[d]:$,[v]:y,[k]:w,[x]:E,[C]:_}=f;if(_[t]===I.sameBehavior)return null;const P=e=>g({[d]:{...$,[t]:e}}),M=e=>g({[v]:{...y,[t]:e}}),B=e=>g({[k]:{...w,[t]:e}}),z=e=>g({[e]:{...attr,[t]:void 0}}),j=$?"number"===o?(0,r.createElement)(s.BaseControl,{label:l},(0,r.createElement)(s.RangeControl,{value:$[t],onChange:P,min:p,max:c,step:1})):(0,r.createElement)(s.BaseControl,{label:l},(0,r.createElement)(s.__experimentalUnitControl,{value:$[t],onChange:P,onUnitChange:()=>z(d),units:U})):null,A=y?"number"===o?(0,r.createElement)(s.BaseControl,{label:u},(0,r.createElement)(s.RangeControl,{value:y[t],onChange:M,min:p,max:c,step:1})):(0,r.createElement)(s.BaseControl,{label:u},(0,r.createElement)(s.__experimentalUnitControl,{value:y[t],onChange:M,onUnitChange:()=>z(v),units:U})):null,N=w?"number"===o?(0,r.createElement)(s.BaseControl,{label:m},(0,r.createElement)(s.RangeControl,{value:w[t],onChange:B,min:p,max:c,step:1})):(0,r.createElement)(s.BaseControl,{label:m},(0,r.createElement)(s.__experimentalUnitControl,{value:w[t],onChange:B,onUnitChange:()=>z(k),units:U})):null,L=$&&E?(0,r.createElement)(s.ToggleControl,{label:h,checked:E[t],onChange:()=>g({[x]:{...E,[t]:!E[t]}})}):null,H=void 0!==E&&E[t];return(0,r.createElement)(r.Fragment,null,!H&&j,A,N,L)})({props:e,breakpoint:t,breakpointsBehaviorAttrPrefix:A,attrPrefix:a,label:u(t),type:d,minHeight:x,maxHeight:C,minHeightLabel:m(t),maxHeightLabel:h(t),autoHeightLabel:g(t)}),y(t))));return i?(0,r.createElement)(s.PanelBody,{title:l,initialOpen:t},w):w}return null})({props:e}),(({props:e,initialOpen:t=!1,attrPrefix:a="",panelBody:i=!0,title:l=(0,n.__)("Spacing","beer-blocks"),paddingControlLabel:o=e=>sprintf((0,n.__)("Padding (%s)","beer-blocks"),e.toUpperCase()),marginControlLabel:p=e=>sprintf((0,n.__)("Margin (%s)","beer-blocks"),e.toUpperCase()),horizontalCenteringControlLabel:c=e=>sprintf((0,n.__)("Enable horizontal centering (%s)","beer-blocks"),e.toUpperCase()),paddingSides:u=["top","right","bottom","left"],marginSides:m=["top","right","bottom","left"]})=>{const{attributes:h}=e,g=(0,b.camelCase)(`${a}-padding`),f=(0,b.camelCase)(`${a}-margin`),d=(0,b.camelCase)(`${a}-mx-auto`),v=`${a}-spacing`,k=[g,f,d].filter((e=>(0,b.has)(h,e)));if(k.length>0){const x=(0,r.createElement)(r.Fragment,null,I.getBreakpointsTabs((t=>(0,r.createElement)(r.Fragment,null,I.getBreakpointsBehaviorControl({props:e,attrPrefix:v,breakpoint:t,affectedAttrs:k}),(0,b.has)(h,g)&&(({props:e,breakpoint:t,attrPrefix:a="",breakpointsBehaviorAttrPrefix:i="",label:l=sprintf((0,n.__)("Padding (%s)","beer-blocks"),t.toUpperCase()),sides:o=["top","right","bottom","left"]})=>{const p=(0,b.camelCase)(`${a}-padding`),c=(0,b.camelCase)(`${i}-breakpoints-behavior`),{setAttributes:u,attributes:{[p]:m,[c]:h}}=e;if((0,b.isEmpty)(o)||h[t]===I.sameBehavior)return null;const g=Object.fromEntries(o.map((e=>[e,void 0])));return(0,r.createElement)(s.__experimentalBoxControl,{label:l,allowReset:!0,resetValues:g,units:ae,values:m[t],onChange:e=>u({[p]:{...m,[t]:{...g,...e}}}),sides:o})})({props:e,breakpoint:t,attrPrefix:a,breakpointsBehaviorAttrPrefix:v,label:o(t),sides:u}),(0,b.has)(h,f)&&(({props:e,breakpoint:t,attrPrefix:a="",breakpointsBehaviorAttrPrefix:i="",label:l=sprintf((0,n.__)("Margin (%s)","beer-blocks"),t.toUpperCase()),sides:o=["top","right","bottom","left"]})=>{const p=(0,b.camelCase)(`${a}-margin`),c=(0,b.camelCase)(`${i}-breakpoints-behavior`),{setAttributes:u,attributes:{[p]:m,[c]:h}}=e;if((0,b.isEmpty)(o)||h[t]===I.sameBehavior)return null;const g=Object.fromEntries(o.map((e=>[e,void 0])));return(0,r.createElement)(s.__experimentalBoxControl,{label:l,allowReset:!0,resetValues:g,units:ae,values:m[t],onChange:e=>u({[p]:{...m,[t]:{...g,...e}}}),sides:o})})({props:e,breakpoint:t,attrPrefix:a,breakpointsBehaviorAttrPrefix:v,label:p(t),sides:m}),(0,b.has)(h,d)&&(({props:e,breakpoint:t,attrPrefix:a="",breakpointsBehaviorAttrPrefix:i="",label:l=sprintf((0,n.__)("Enable horizontal centering (%s)","beer-blocks"),t.toUpperCase())})=>{const o=(0,b.camelCase)(`${a}-mx-auto`),p=(0,b.camelCase)(`${i}-breakpoints-behavior`),{setAttributes:c,attributes:{[o]:u,[p]:m}}=e;return m[t]===I.sameBehavior?null:(0,r.createElement)(s.ToggleControl,{label:l,checked:u[t],onChange:()=>c({[o]:{...u,[t]:!u[t]}})})})({props:e,breakpoint:t,attrPrefix:a,breakpointsBehaviorAttrPrefix:v,label:c(t)})))));return i?(0,r.createElement)(s.PanelBody,{title:l,initialOpen:t},x):x}return null})({props:e}),(({props:e,attrPrefix:t="",idControlLabel:a=(0,n.__)("ID attribute","beer-blocks"),htmlAttrsControlLabel:r=(0,n.__)("HTML attributes","beer-blocks"),panelBody:i=!0,title:l=(0,n.__)("HTML settings","beer-blocks"),initialOpen:o=!1})=>{const{attributes:p}=e,c=me("id-attr",t),u=me("html-attrs",t);if((0,b.has)(p,c)||(0,b.has)(p,u)){const n=(0,ue.jsxs)(ue.Fragment,{children:[fe({props:e,attrPrefix:t,label:a}),de({props:e,attrPrefix:t,label:r})]});return i?(0,ue.jsx)(s.PanelBody,{title:l,initialOpen:o,children:n}):n}return null})({props:e})),(0,r.createElement)("div",{...i,role:"alert"},(0,r.createElement)(o.InnerBlocks,null)))},save:e=>{const{attributes:{alertType:t}}=e,a=o.useBlockProps.save({className:`${t}}${te(e)}${ce(e)}`,style:{...ee(e,"alert"),...pe(e,"alert")},...ke(e)});return(0,r.createElement)("div",{...a,role:"alert"},(0,r.createElement)(o.InnerBlocks.Content,null))}})}},a={};function r(e){var i=a[e];if(void 0!==i)return i.exports;var n=a[e]={exports:{}};return t[e](n,n.exports,r),n.exports}r.m=t,e=[],r.O=(t,a,i,n)=>{if(!a){var l=1/0;for(p=0;p<e.length;p++){a=e[p][0],i=e[p][1],n=e[p][2];for(var o=!0,s=0;s<a.length;s++)(!1&n||l>=n)&&Object.keys(r.O).every((e=>r.O[e](a[s])))?a.splice(s--,1):(o=!1,n<l&&(l=n));if(o){e.splice(p--,1);var b=i();void 0!==b&&(t=b)}}return t}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[a,i,n]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={866:0,270:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var i,n,l=a[0],o=a[1],s=a[2],b=0;if(l.some((t=>0!==e[t]))){for(i in o)r.o(o,i)&&(r.m[i]=o[i]);if(s)var p=s(r)}for(t&&t(a);b<l.length;b++)n=l[b],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(p)},a=self.webpackChunkbeer_blocks=self.webpackChunkbeer_blocks||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var i=r.O(void 0,[270],(()=>r(800)));i=r.O(i)})();