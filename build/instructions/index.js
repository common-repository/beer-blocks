(()=>{"use strict";var e,t={204:(e,t,r)=>{const a=window.React;var i=r.n(a);const s=window.wp.i18n,n=window.wp.blocks,o=window.wp.blockEditor,l=window.wp.components;var c={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},b=i().createContext&&i().createContext(c),u=function(){return u=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},u.apply(this,arguments)},p=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(r[a[i]]=e[a[i]])}return r};function m(e){return e&&e.map((function(e,t){return i().createElement(e.tag,u({key:t},e.attr),m(e.child))}))}function d(e){return function(t){return i().createElement(M,u({attr:u({},e.attr)},t),m(e.child))}}function M(e){var t=function(t){var r,a=e.attr,s=e.size,n=e.title,o=p(e,["attr","size","title"]),l=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),i().createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,o,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),n&&i().createElement("title",null,n),e.children)};return void 0!==b?i().createElement(b.Consumer,null,(function(e){return t(e)})):t(c)}function w(e){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"}}]})(e)}function L(e){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"}}]})(e)}function f(e){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm1 17H7V4h10v14zm-3 3h-4v-1h4v1z"}}]})(e)}function h(e){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0zm0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z"}}]})(e)}function g(e){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z"}}]})(e)}function x(e){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"}}]})(e)}const C=window.lodash,k="auto-sizing-ew",v="auto-sizing-vwc",j="manual-sizing",N="same-behavior",D="different-behavior",y=e=>[{label:(0,s.__)("Manual sizing","beer-blocks"),value:j},{label:(0,s.__)("Auto sizing: equal width","beer-blocks"),value:k},{label:(0,s.__)("Auto sizing: variable width content","beer-blocks"),value:v},..."xs"!==e?[{label:(0,s.__)("Same as previous breakpoint","beer-blocks"),value:""}]:[]],E=["xs","sm","md","lg","xl","xxl"],S=e=>(0,C.isPlainObject)(e)&&E.map((t=>(0,C.has)(e,t))).includes(!0)?Object.fromEntries(Object.entries(e).filter((e=>E.includes(e[0])))):Object.fromEntries(E.map((t=>[[t],e]))),A=(e="")=>({[(0,C.camelCase)(`${e}-breakpoints-behavior`)]:{type:"object",default:{sm:N,md:N,lg:N,xl:N,xxl:N}}}),$=({attrName:e,breakpointsBehaviorAttributes:t=!1,defaultValue:r})=>({[e]:{type:"object",default:S(r)},...t?{[`${e}BreakpointsBehavior`]:{type:"object",default:{sm:N,md:N,lg:N,xl:N,xxl:N}}}:{}}),z=({attrName:e,breakpoints:t,breakpointsBehavior:r,defaultValue:a,type:i="string"})=>t?$({attrName:e,breakpointsBehaviorAttributes:r,...void 0!==a?{defaultValue:a}:{}}):{[e]:{type:i,...void 0!==a?{default:a}:{}}},_=e=>({xs:(0,a.createElement)(f,{className:"beer-blocks-breakpoint-tab-icon"}),sm:(0,a.createElement)(h,{className:"beer-blocks-breakpoint-tab-icon"}),md:(0,a.createElement)(g,{className:"beer-blocks-breakpoint-tab-icon"}),lg:(0,a.createElement)(w,{className:"beer-blocks-breakpoint-tab-icon"}),xl:(0,a.createElement)(L,{className:"beer-blocks-breakpoint-tab-icon"}),xxl:(0,a.createElement)(x,{className:"beer-blocks-breakpoint-tab-icon"})}[e]),T=E.map((e=>({name:e,title:_(e)}))),O=e=>({xs:"",sm:"xs",md:"sm",lg:"md",xl:"lg",xxl:"xl"}[e]),I=(e,t={})=>{const r=E.indexOf(e);if(-1===r||r===E.length-1)return[];let a=E.slice(r+1);if((0,C.isEmpty)(t))return a;const i=a.findIndex((e=>t[e]===D));return i>-1&&(a=a.slice(0,i)),a},P=({props:e,attrPrefix:t,breakpoint:r,affectedAttrs:i=[],onChange:n})=>{const o=(0,C.camelCase)(`${t}-breakpoints-behavior`),{setAttributes:c,attributes:{[o]:b}}=e,u="function"==typeof n?n:t=>{const a=O(r),s=I(r,b);c({[o]:{...b,[r]:t},...i.length>0&&t===N?Object.fromEntries(i.map((t=>{const i=e.attributes[t],n=i[a];return[t,{...i,[r]:n,...s.length>0?Object.fromEntries(s.map((e=>[e,n]))):{}}]}))):{}})};return O(r)?(0,a.createElement)(l.RadioControl,{label:(0,s.sprintf)((0,s.__)("Breakpoint behavior (%s)","beer-blocks"),r.toUpperCase()),selected:b[r],options:[{label:(0,s.__)("Same as previous breakpoint","beer-blocks"),value:N},{label:(0,s.__)("Set different value","beer-blocks"),value:D}],onChange:u}):null},B=e=>(0,a.createElement)(l.TabPanel,{initialTabName:"xs",tabs:T,className:"beer-blocks-tabs"},(t=>e(t.name))),Y={containerTypesOptions:[{value:"container",label:"Container"},{value:"container-fluid",label:"Container Fluid"},{value:"container-sm",label:"Container SM"},{value:"container-md",label:"Container MD"},{value:"container-lg",label:"Container LG"},{value:"container-xl",label:"Container XL"},{value:"container-xxl",label:"Container XXL"}],manualSizing:j,autoSizingEqualWidth:k,autoSizingVariableWidthContent:v,sameBehavior:N,differentBehavior:D,colSizingTypeOptions:y,breakpoints:E,breakpointsAttributeValue:S,breakpointsBehaviorAttributeValue:e=>Object.fromEntries(E.filter((e=>"xs"!==e)).map((t=>[[t],e]))),attributes:z,breakpointsAttribute:$,breakpointIcon:_,breakpointsOptions:T,getColSizingAttribute:({attrPrefix:e="",breakpointsBehaviorAttrPrefix:t,defaultSizingType:r=k,defaultSize:a=12}={})=>({...z({attrName:(0,C.camelCase)(`${e}-col-sizing`),breakpoints:!0,breakpointsBehavior:!1,defaultValue:{sizingType:r,size:a}}),...A(t||`${e}-col-sizing`)}),getColSizingClasses:({props:e,attrPrefix:t="",breakpointsBehaviorAttrPrefix:r})=>{const a=(0,C.camelCase)(`${t}-col-sizing`),i=(0,C.camelCase)(`${r||`${t}-col-sizing`}-breakpoints-behavior`),{attributes:{[a]:s,[i]:n}}=e;return Object.entries(s).reduce(((e,t)=>{const r=t[0],a=t[1];return n[r]!==N?`${e+((e,t)=>{if("xs"===t)return"col"+(e.sizingType===v?"-auto":e.sizingType===j?`-${e.size}`:"");switch(e.sizingType){case k:return`col-${t}`;case v:return`col-${t}-auto`;case j:return`col-${t}-${e.size}`;default:return""}})(a,r)} `:e}),"").trim()},getColSizingControls:({props:e,attrPrefix:t="",breakpointsBehaviorAttrPrefix:r})=>{const i=(0,C.camelCase)(`${t}-col-sizing`),n=(0,C.camelCase)(`${r||`${t}-col-sizing`}-breakpoints-behavior`),o=[i],{attributes:{[i]:c,[n]:b},setAttributes:u}=e;return B((r=>(0,a.createElement)(a.Fragment,null,P({props:e,attrPrefix:`${t}-col-sizing`,breakpoint:r,affectedAttrs:o}),(e=>{if(b[e]===N)return null;const t=I(e,b);return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(l.RadioControl,{label:(0,s.sprintf)((0,s.__)("Column sizing type (%s)","beer-blocks"),e.toUpperCase()),help:(0,s.sprintf)((0,s.__)("Settings applied from %s resolution and up","beer-blocks"),e.toUpperCase()),selected:c[e].sizingType,options:y(e),onChange:r=>{const a={...c[e],sizingType:r};u({[i]:{...c,[e]:a,...t.length>0?Object.fromEntries(t.map((e=>[e,a]))):{}}})}}),c[e].sizingType===j&&(0,a.createElement)(l.RangeControl,{label:(0,s.sprintf)((0,s.__)("Column sizing (%d)","beer-blocks"),c[e].size),value:c[e].size,onChange:r=>{const a={...c[e],size:r};u({[i]:{...c,[e]:a,...t.length>0?Object.fromEntries(t.map((e=>[e,a]))):{}}})},min:1,max:12,step:1}))})(r))))},breakpointsBehaviorAttribute:A,getPreviousBreakpoint:O,getNextBreakpoints:I,getBreakpointsBehaviorControl:P,getBreakpointsTabs:B},V=({attrPrefix:e="",breakpoints:t=!0,defaultValue:r="row"}={})=>Y.attributes({attrName:(0,C.camelCase)(`${e}-flex-direction`),breakpoints:t,breakpointsBehavior:!1,defaultValue:r}),U=({attrPrefix:e="",breakpoints:t=!0,defaultValue:r=""}={})=>Y.attributes({attrName:(0,C.camelCase)(`${e}-justify-content`),breakpoints:t,breakpointsBehavior:!1,defaultValue:r}),F=({attrPrefix:e="",breakpoints:t=!0,defaultValue:r=""}={})=>Y.attributes({attrName:(0,C.camelCase)(`${e}-align-items`),breakpoints:t,breakpointsBehavior:!1,defaultValue:r}),H=[{value:"",label:(0,s.__)("-- SELECT OPTION --","beer-blocks")},{value:"start",label:(0,s.__)("Start","beer-blocks")},{value:"end",label:(0,s.__)("End","beer-blocks")},{value:"center",label:(0,s.__)("Center","beer-blocks")},{value:"between",label:(0,s.__)("Space Between","beer-blocks")},{value:"around",label:(0,s.__)("Space Around","beer-blocks")}],Q=[{value:"",label:(0,s.__)("-- SELECT OPTION --","beer-blocks")},{value:"start",label:(0,s.__)("Start","beer-blocks")},{value:"end",label:(0,s.__)("End","beer-blocks")},{value:"center",label:(0,s.__)("Center","beer-blocks")},{value:"baseline",label:(0,s.__)("Baseline","beer-blocks")},{value:"stretch",label:(0,s.__)("Stretch","beer-blocks")}],G=(e,t="",r=!0)=>{const a=(0,C.camelCase)(`${t}-flex-direction`),i=(0,C.camelCase)(`${t}-justify-content`),s=(0,C.camelCase)(`${t}-align-items`),{attributes:n}=e,o=`${(0,C.has)(n,a)?((e,t="",r=!0)=>{const a=(0,C.camelCase)(`${t}-flex-direction`),i=(0,C.camelCase)(`${t}-flexbox-breakpoints-behavior`),{attributes:{[a]:s,[i]:n}}=e;return`${r?" ":""}${void 0!==n?Object.entries(s).reduce(((e,t)=>{const r=t[0],a=t[1];return a&&n[r]!==Y.sameBehavior?`${e}flex-${"xs"!==r?`${r}-`:""}${a} `:e}),"").trimEnd():`flex-${s}`}`.trimEnd()})(e,t):""}${(0,C.has)(n,i)?((e,t="",r=!0)=>{const a=(0,C.camelCase)(`${t}-justify-content`),i=(0,C.camelCase)(`${t}-flexbox-breakpoints-behavior`),{attributes:{[a]:s,[i]:n}}=e;return`${r?" ":""}${void 0!==n?Object.entries(s).reduce(((e,t)=>{const r=t[0],a=t[1];return a&&n[r]!==Y.sameBehavior?`${e}justify-content-${"xs"!==r?`${r}-`:""}${a} `:e}),"").trimEnd():`justify-content-${s}`}`.trimEnd()})(e,t):""}${(0,C.has)(n,s)?((e,t="",r=!0)=>{const a=(0,C.camelCase)(`${t}-align-items`),i=(0,C.camelCase)(`${t}-flexbox-breakpoints-behavior`),{attributes:{[a]:s,[i]:n}}=e;return`${r?" ":""}${void 0!==n?Object.entries(s).reduce(((e,t)=>{const r=t[0],a=t[1];return a&&n[r]!==Y.sameBehavior?`${e}align-items-${"xs"!==r?`${r}-`:""}${a} `:e}),"").trimEnd():`align-items-${justifyContent}`}`.trimEnd()})(e,t):""}`.trimStart();return`${r?" ":""}${o}`.trimEnd()},W=[...Object.entries({primary:"#007bff",secondary:"#6c757d",success:"#28a745",info:"#17a2b8",warning:"#ffc107",danger:"#dc3545",light:"#f8f9fa",dark:"#343a40"}).map((e=>({name:(0,C.capitalize)(e[0]),color:e[1]})))],Z=window.ReactJSXRuntime,R=(e,t="")=>(0,C.camelCase)(`${t}-${e}`),X=(e="")=>({[R("color",e)]:{type:"string",default:""}}),J=(e="")=>({[R("background",e)]:{type:"string",default:""}}),q=({props:e,attrPrefix:t="",label:r=(0,s.__)("Font color","beer-blocks")})=>{const a=R("color",t),{setAttributes:i,attributes:n}=e;return(0,C.has)(n,a)?(0,Z.jsx)(l.BaseControl,{label:r,children:(0,Z.jsx)(l.ColorPalette,{colors:W,value:n[a],onChange:e=>i({[a]:e}),enableAlpha:!1})}):null},K=({props:e,attrPrefix:t="",label:r=(0,s.__)("Background","beer-blocks")})=>{const a=R("background",t),{setAttributes:i,attributes:n}=e;if(!(0,C.has)(n,a))return null;const o=n[a]?n[a].search(/(linear|radial)-gradient/)>-1?void 0:n[a]:void 0,c=o?void 0:n[a];return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(l.__experimentalHeading,{level:"3",style:{marginBottom:"5px"},children:r}),(0,Z.jsx)(l.TabPanel,{initialTabName:"solid",tabs:[{name:"solid",title:(0,s.__)("Solid","beer-blocks")},{name:"gradient",title:(0,s.__)("Gradient","beer-blocks")}],className:"beer-blocks-tabs",children:e=>"solid"===e.name?(0,Z.jsx)(l.ColorPalette,{colors:W,value:o,onChange:e=>i({[a]:e}),enableAlpha:!0}):(0,Z.jsx)(l.GradientPicker,{value:c,onChange:e=>i({[a]:e})})})]})},ee=(e,t,r="")=>{const a=R("color",r),{attributes:{[a]:i}}=e;return i?{[`--wp-beer-blocks-${t}-${a}`]:i}:{}},te=(e,t,r="")=>{const a=R("background",r),{attributes:{[a]:i}}=e;return i?{[`--wp-beer-blocks-${t}-${a}`]:i}:{}},re=(e,t,r="")=>({...ee(e,t,r),...te(e,t,r)}),ae=(e,t="",r=!0)=>{let a=`${((e,t="",r=!0)=>{const a=R("color",t),{attributes:{[a]:i}}=e;return i?(r?" ":"")+"wp-beer-blocks-has-color-rule":""})(e,t)}${((e,t="",r=!0)=>{const a=R("background",t),{attributes:{[a]:i}}=e;return i?(r?" ":"")+"wp-beer-blocks-has-background-rule":""})(e,t)}`.trimStart();return`${r?" ":""}${a}`.trimEnd()},ie=[{value:"px",label:"PX"},{value:"em",label:"EM"},{value:"rem",label:"REM"}],se=e=>void 0!==e&&""!==e,ne=e=>void 0!==e&&""!==e,oe=({attrPrefix:e="",paddingSides:t=["top","right","bottom","left"],breakpointsBehavior:r=!1}={})=>{if((0,C.isEmpty)(t))return{};const a=Object.fromEntries(t.map((e=>[e,void 0])));return Y.attributes({attrName:(0,C.camelCase)(`${e}-padding`),breakpoints:!0,breakpointsBehavior:r,defaultValue:a,type:"object"})},le=({attrPrefix:e="",marginSides:t=["top","right","bottom","left"],breakpointsBehavior:r=!1}={})=>{if((0,C.isEmpty)(t))return{};const a=Object.fromEntries(t.map((e=>[e,void 0])));return Y.attributes({attrName:(0,C.camelCase)(`${e}-margin`),breakpoints:!0,breakpointsBehavior:r,defaultValue:a,type:"object"})},ce=({attrPrefix:e="",breakpointsBehavior:t=!1}={})=>Y.attributes({attrName:(0,C.camelCase)(`${e}-mx-auto`),breakpoints:!0,breakpointsBehavior:t,defaultValue:!1,type:"object"}),be=(e,t,r="")=>{const a=(0,C.camelCase)(`${r}-padding`),{attributes:{[a]:i}}=e,s=e=>Object.fromEntries(Y.breakpoints.map((r=>[`--wp-beer-blocks-${t}-${a+(0,C.capitalize)(e)}-${r}`,(0,C.get)(i,`${r}.${e}`)])).filter((e=>se(e[1]))));return i?{...s("top"),...s("right"),...s("bottom"),...s("left")}:{}},ue=(e,t,r="")=>{const a=(0,C.camelCase)(`${r}-margin`),{attributes:{[a]:i}}=e,s=e=>Object.fromEntries(Y.breakpoints.map((r=>[`--wp-beer-blocks-${t}-${a+(0,C.capitalize)(e)}-${r}`,(0,C.get)(i,`${r}.${e}`)])).filter((e=>ne(e[1]))));return i?{...s("top"),...s("right"),...s("bottom"),...s("left")}:{}},pe=(e,t,r="")=>({...be(e,t,r),...ue(e,t,r)}),me=(e,t="",r=!0)=>`${r?" ":""}${`${((e,t="",r=!0)=>{const a=(0,C.camelCase)(`${t}-padding`),{attributes:{[a]:i}}=e,s=e=>Y.breakpoints.map((t=>!!se((0,C.get)(i,`${t}.${e}`))&&`wp-beer-blocks-has-padding-${e}-${t}-rule`)).filter((e=>e));return(i?`${r?" ":""}${[...s("top"),...s("right"),...s("bottom"),...s("left")].join(" ")}`:"").trimEnd()})(e,t)}${((e,t="",r=!0)=>{const a=(0,C.camelCase)(`${t}-margin`),i=(0,C.camelCase)(`${t}-mx-auto`),{attributes:{[a]:s,[i]:n}}=e,o=e=>Y.breakpoints.map((t=>!!ne((0,C.get)(s,`${t}.${e}`))&&`wp-beer-blocks-has-margin-${e}-${t}-rule`)).filter((e=>e));return(s?`${r?" ":""}${[...o("top"),...o("right"),...o("bottom"),...o("left"),...Y.breakpoints.map((e=>!!(0,C.get)(n,e)&&`mx${"xs"!==e?`-${e}`:""}-auto`)).filter((e=>e))].join(" ")}`:"").trimEnd()})(e,t)}`.trimStart()}`.trimEnd(),de=(e,t="")=>(0,C.camelCase)(`${t}-${e}`),Me=({attrPrefix:e="",defaultValue:t=""}={})=>({[de("id-attr",e)]:{type:"string",default:t}}),we=({attrPrefix:e="",defaultValue:t=""}={})=>({[de("html-attrs",e)]:{type:"string",default:t}}),Le=({props:e,attrPrefix:t="",label:r=(0,s.__)("ID attribute","beer-blocks")})=>{const a=de("id-attr",t),{setAttributes:i,attributes:n}=e;return(0,C.has)(n,a)?(0,Z.jsx)(l.TextControl,{label:r,value:n[a],help:(0,s.__)("Set the HTML ID attribute.","beer-blocks"),onChange:e=>i({[a]:e})}):null},fe=({props:e,attrPrefix:t="",label:r=(0,s.__)("HTML attributes","beer-blocks")})=>{const a=de("html-attrs",t),{setAttributes:i,attributes:n}=e;return(0,C.has)(n,a)?(0,Z.jsx)(l.TextareaControl,{label:r,value:n[a],help:(0,s.__)("Add one or more HTML attributes separated with a new line. Each line must have the `attrName : value` format.","beer-blocks"),rows:"6",onChange:e=>i({[a]:e})}):null},he=e=>{const t=((0,C.isString)(e)?e.split(/\n/):[]).map((e=>{if(!/^[a-zA-Z\-]{2,}\s*:\s*[a-zA-Z\-_0-9 ]{2,}$/.test(e))return!1;let t=e.split(/\s*:\s*/);return[t[0],t[1].trim()]})).filter((e=>e));return Object.fromEntries(t)},ge=(e,t="")=>{const{attributes:r}=e,a=de("id-attr",t),i=de("html-attrs",t);let s={};return(0,C.has)(r,a)&&(s={...s,...r[a]?{id:r[a]}:{}}),(0,C.has)(r,i)&&(s={...s,...he(r[i])}),s};(0,n.registerBlockType)("beer-blocks/instructions",{apiVersion:2,title:(0,s._x)("Instructions","block title","beer-blocks"),category:"beer-blocks",description:(0,s._x)("Create an instructions list.","block description","beer-blocks"),textdomain:"beer-blocks",icon:(0,a.createElement)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3Mi42NiA4OC4zNyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNlZmExMjY7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJDYXBhXzIiIGRhdGEtbmFtZT0iQ2FwYSAyIj48ZyBpZD0iQ2FwYV8xLTIiIGRhdGEtbmFtZT0iQ2FwYSAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03Mi42NiwxOS42di0uMDZhLjU3LjU3LDAsMCwwLDAtLjEzYy0uMDctMy44Mi0uNTUtNS4yOS0zLjc5LTguODFMNjMuMiw0LjQ0Yy0uMzItLjM1LS42MS0uNjctLjg3LTFDNjAsLjgzLDU5LDAsNTQuODUsMEg1LjY2QTUuNjcsNS42NywwLDAsMCwwLDUuNjZWNDFhMS4zMSwxLjMxLDAsMSwwLDIuNjEsMFY1LjY2QTMuMDYsMy4wNiwwLDAsMSw1LjY2LDIuNjFINTMuNTVWMTUuMThhNS42Nyw1LjY3LDAsMCwwLDUuNjYsNS42Nkg3MC4wNlY4Mi43YTMuMDYsMy4wNiwwLDAsMS0zLDMuMDZINS42NkEzLjA2LDMuMDYsMCwwLDEsMi42MSw4Mi43VjQ3QTEuMzEsMS4zMSwwLDAsMCwwLDQ3VjgyLjdhNS42Nyw1LjY3LDAsMCwwLDUuNjYsNS42N0g2N2E1LjY2LDUuNjYsMCwwLDAsNS42NS01LjY3VjE5LjZaTTU5LjIsMTguMjNhMywzLDAsMCwxLTMuMDUtMy4wNVYyLjY0YzIsLjEyLDIuNTIuNjcsNC4yNCwyLjU4bC44OSwxLDUuNjYsNi4xNWMyLjM0LDIuNTQsMi45MiwzLjU3LDMuMDcsNS44N1oiLz48cGF0aCBkPSJNMzcuODcsMTcuNDRhNS40NSw1LjQ1LDAsMCwwLTUuMS4xMSw0Ljg2LDQuODYsMCwwLDAtMS43MSwxLjc1LDQuMjEsNC4yMSwwLDAsMC0uNTksMi4xLDEuNTEsMS41MSwwLDAsMCwuNCwxLDEuMjksMS4yOSwwLDAsMCwxLC40OGMuNzksMCwxLjE0LS41NiwxLjIzLTEuMzFBNS4xNiw1LjE2LDAsMCwxLDM0LDIwYTIsMiwwLDAsMSwyLjY2LDAsMS43NSwxLjc1LDAsMCwxLC40OSwxLjI3LDEuNTIsMS41MiwwLDAsMS0uMTYuNzIsMi41MSwyLjUxLDAsMCwxLS40Mi42MmMtLjI2LjMtLjU2LjU4LS44NS44N3MtLjc1Ljc2LTEuMDksMS4xNkE0LjI5LDQuMjksMCwwLDAsMzQsMjUuNzdhNC40Nyw0LjQ3LDAsMCwwLS4yNSwxLjU4LDEuNjUsMS42NSwwLDAsMCwuMzgsMS4xOCwxLjIzLDEuMjMsMCwwLDAsLjk1LjQxLDEuMjYsMS4yNiwwLDAsMCwxLjI5LTEuMjNjMC0uMjMuMDktLjQ3LjE1LS43MWExLjU1LDEuNTUsMCwwLDEsLjEzLS4zNiwyLDIsMCwwLDEsLjI2LS40Miw1LjE3LDUuMTcsMCwwLDEsLjUtLjU1Yy41My0uNTMsMS4wNy0xLjA4LDEuNTgtMS42NGE1LDUsMCwwLDAsLjc5LTEuMTksMy44NiwzLjg2LDAsMCwwLC4zNC0xLjY0QTQuMjQsNC4yNCwwLDAsMCwzOS41MywxOWE0LjE2LDQuMTYsMCwwLDAtMS42Ni0xLjU5WiIvPjxwYXRoIGQ9Ik0zNS4xOCwyOS45NGExLjUyLDEuNTIsMCwwLDAtMS4xNC41MSwxLjkyLDEuOTIsMCwwLDAsMCwyLjUyLDEuNTgsMS41OCwwLDAsMCwxLjEyLjQ3LDEuNTUsMS41NSwwLDAsMCwxLjEtLjQ4LDEuNzYsMS43NiwwLDAsMCwuNDctMS4yOCwxLjg0LDEuODQsMCwwLDAtLjQ0LTEuMjMsMS40OCwxLjQ4LDAsMCwwLTEuMTMtLjUxWiIvPjxwYXRoIGQ9Ik0xMC4yMSw0OHY0LjY3YTIuMDcsMi4wNywwLDAsMCwyLjA3LDIuMDdoOGEyLjA3LDIuMDcsMCwwLDAsMi4wNy0yLjA3VjQ4YTIuMDcsMi4wNywwLDAsMC0yLjA3LTIuMDdoLThBMi4wNywyLjA3LDAsMCwwLDEwLjIxLDQ4Wm0yLjYxLjU0aDYuOTNWNTIuMUgxMi44MloiLz48cGF0aCBkPSJNMTAuMjEsNjUuMDlhMi4wNywyLjA3LDAsMCwwLDIuMDcsMi4wN2g4YTIuMDcsMi4wNywwLDAsMCwyLjA3LTIuMDdWNjAuNDNhMi4wNywyLjA3LDAsMCwwLTIuMDctMi4wN2gtOGEyLjA3LDIuMDcsMCwwLDAtMi4wNywyLjA3Wk0xMi44Miw2MWg2LjkzdjMuNThIMTIuODJaIi8+PHBhdGggZD0iTTEwLjIxLDc3LjU0YTIuMDgsMi4wOCwwLDAsMCwyLjA3LDIuMDhoOGEyLjA4LDIuMDgsMCwwLDAsMi4wNy0yLjA4VjcyLjg4YTIuMDcsMi4wNywwLDAsMC0yLjA3LTIuMDZoLThhMi4wNywyLjA3LDAsMCwwLTIuMDcsMi4wNlptMi42MS00LjEyaDYuOTNWNzdIMTIuODJaIi8+PHBhdGggZD0iTTYyLjM1LDQ5LjE1SDI4YTEuMzEsMS4zMSwwLDEsMCwwLDIuNjFINjIuMzVhMS4zMSwxLjMxLDAsMCwwLDAtMi42MVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02Mi4zNSw2MS40NUg0OC4yMmExLjMxLDEuMzEsMCwwLDAsMCwyLjYxSDYyLjM1YTEuMzEsMS4zMSwwLDAsMCwwLTIuNjFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjgsNjQuMDZINDIuMjVhMS4zMSwxLjMxLDAsMCwwLDAtMi42MUgyOGExLjMxLDEuMzEsMCwxLDAsMCwyLjYxWiIvPjxwYXRoIGQ9Ik0yOCw3Ni41Mkg2Mi4zNWExLjMxLDEuMzEsMCwwLDAsMC0yLjYxSDI4YTEuMzEsMS4zMSwwLDEsMCwwLDIuNjFaIi8+PHBhdGggZD0iTTM1LjI5LDkuMWExNiwxNiwwLDEsMCwxNiwxNiwxNi4wNiwxNi4wNiwwLDAsMC0xNi0xNlptMCwyOS40OEExMy40NCwxMy40NCwwLDEsMSw0OC43MiwyNS4xNCwxMy40NSwxMy40NSwwLDAsMSwzNS4yOSwzOC41OFoiLz48L2c+PC9nPjwvc3ZnPg==",alt:(0,s._x)("Instructions","block title","beer-blocks")}),attributes:{id:{type:"string"},containerType:{type:"string",default:"container"},...(({attrPrefix:e="",breakpoints:t=!0,flexDirectionAttr:r=!0,flexDirectionDefaultValue:a="row",justifyContentAttr:i=!0,justifyContentDefaultValue:s="",alignItemsAttr:n=!0,alignItemsDefaultValue:o=""}={})=>({...r?V({attrPrefix:e,defaultValue:a,breakpoints:t}):{},...i?U({attrPrefix:e,defaultValue:s,breakpoints:t}):{},...n?F({attrPrefix:e,defaultValue:o,breakpoints:t}):{},...t?Y.breakpointsBehaviorAttribute(`${e}-flexbox`):{}}))({flexDirectionAttr:!1}),...(({attrPrefix:e="",colorAttr:t=!0,backgroundAttr:r=!0}={})=>({...t?X(e):{},...r?J(e):{}}))({colorAttr:!1}),...(({attrPrefix:e="",paddingSides:t=["top","right","bottom","left"],marginSides:r=["top","right","bottom","left"],horizontalCenteringAttr:a=!1}={})=>({...oe({attrPrefix:e,paddingSides:t}),...le({attrPrefix:e,marginSides:r}),...a?ce({attrPrefix:e}):{},...Y.breakpointsBehaviorAttribute(`${e}-spacing`)}))({paddingSides:!1,marginSides:["top","bottom"]}),...(({attrPrefix:e="",defaultId:t="",defaultHtmlAttrs:r=""}={})=>({...Me({attrPrefix:e,defaultValue:t}),...we({attrPrefix:e,defaultValue:r})}))()},providesContext:{instructionsId:"id"},edit:e=>{const{clientId:t,setAttributes:r,attributes:{containerType:i}}=e,n=(0,o.useBlockProps)({className:`${i}${ae(e)}${me(e)}`,style:{...re(e,"instructions"),...pe(e,"instructions")},...ge(e)}),c=[{className:`p-0 mb-0 row${G(e)}`},{allowedBlocks:["beer-blocks/instruction"],renderAppender:!1}],b=o.useInnerBlocksProps?(0,o.useInnerBlocksProps)(...c):(0,o.__experimentalUseInnerBlocksProps)(...c);return(0,a.useEffect)((()=>r({id:t})),[t]),(0,a.createElement)(a.Fragment,null,(0,a.createElement)(o.InspectorControls,null,(0,a.createElement)(l.PanelBody,{title:(0,s.__)("Instructions settings","beer-blocks")},(0,a.createElement)(l.SelectControl,{label:(0,s.__)("Container type","beer-blocks"),value:i,options:Y.containerTypesOptions,onChange:e=>r({containerType:e})}),(0,a.createElement)(l.CardDivider,null),(({props:e,breakpoints:t=!0,attrPrefix:r="",panelBody:i=!0,title:n=(0,s.__)("Flexbox styles","beer-blocks"),initialOpen:o=!1,justifyContentControlOptions:c=H,alignItemsControlOption:b=Q})=>{const{attributes:u}=e,p=(0,C.camelCase)(`${r}-flex-direction`),m=(0,C.camelCase)(`${r}-justify-content`),d=(0,C.camelCase)(`${r}-align-items`),M=[p,m,d].filter((e=>(0,C.has)(u,e))),w=(t=!1)=>(0,a.createElement)(a.Fragment,null,(0,C.has)(u,m)&&(({props:e,breakpoint:t,attrPrefix:r="",label:i=(0,s.__)("Justify content","beer-blocks"),help:n=(0,s.__)("Select the CSS Flexbox justify-content property value.","beer-blocks"),controlOptions:o=H})=>{const c=(0,C.camelCase)(`${r}-justify-content`),b=(0,C.camelCase)(`${r}-flexbox-breakpoints-behavior`),{attributes:{[c]:u,[b]:p},setAttributes:m}=e;if(p&&p[t]===Y.sameBehavior)return null;const d=p?Y.getNextBreakpoints(t,p):void 0;return(0,a.createElement)(l.SelectControl,{label:i,value:void 0!==p?u[t]:u,options:o,onChange:e=>m({[c]:void 0!==d?{...u,[t]:e,...d.length>0?Object.fromEntries(d.map((t=>[t,e]))):{}}:e}),help:n})})({props:e,breakpoint:t,attrPrefix:r,controlOptions:c}),(0,C.has)(u,d)&&(({props:e,breakpoint:t,attrPrefix:r="",label:i=(0,s.__)("Align items","beer-blocks"),help:n=(0,s.__)("Select the CSS Flexbox align-items property value.","beer-blocks"),controlOptions:o=Q})=>{const c=(0,C.camelCase)(`${r}-align-items`),b=(0,C.camelCase)(`${r}-flexbox-breakpoints-behavior`),{attributes:{[c]:u,[b]:p},setAttributes:m}=e;if(p&&p[t]===Y.sameBehavior)return null;const d=p?Y.getNextBreakpoints(t,p):void 0;return(0,a.createElement)(l.SelectControl,{label:i,value:void 0!==p?u[t]:u,options:o,onChange:e=>m({[c]:void 0!==d?{...u,[t]:e,...d.length>0?Object.fromEntries(d.map((t=>[t,e]))):{}}:e}),help:n})})({props:e,breakpoint:t,attrPrefix:r,controlOptions:b}),(0,C.has)(u,p)&&(({props:e,breakpoint:t,attrPrefix:r="",stackedContentsLabel:i=(0,s.__)("Stacked contents","beer-blocks"),stackedContentsHelp:n=(0,s.__)("Enable this toggle field to set the CSS Flexbox flex-direction property value to column or column-reverse.","beer-blocks"),reverseOrderLabel:o=(0,s.__)("Reverse order","beer-blocks"),reverseOrderHelp:c=(0,s.__)("Enable this toggle field to set the CSS Flexbox flex-direction property value to row-reverse or column-reverse.","beer-blocks")})=>{const b=(0,C.camelCase)(`${r}-flex-direction`),u=(0,C.camelCase)(`${r}-flexbox-breakpoints-behavior`),{attributes:{[b]:p,[u]:m},setAttributes:d}=e;if(m&&m[t]===Y.sameBehavior)return null;const M=m?Y.getNextBreakpoints(t,m):void 0,w=e=>e.startsWith("column")?e.replace(/^column/,"row"):e.replace(/^row/,"column"),L=e=>e.endsWith("-reverse")?e.replace(/\-reverse$/,""):`${e}-reverse`;return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(l.ToggleControl,{label:i,help:n,checked:void 0!==m?p[t].startsWith("column"):p.startsWith("column"),onChange:()=>d({[b]:void 0!==M?{...p,[t]:w(p[t]),...M.length>0?Object.fromEntries(M.map((e=>[e,w(p[t])]))):{}}:w(p)})}),(0,a.createElement)(l.ToggleControl,{label:o,help:c,checked:void 0!==m?p[t].endsWith("-reverse"):p.endsWith("-reverse"),onChange:()=>d({[b]:void 0!==M?{...p,[t]:L(p[t]),...M.length>0?Object.fromEntries(M.map((e=>[e,L(p[t])]))):{}}:L(p)})}))})({props:e,breakpoint:t,attrPrefix:r}));if((0,C.has)(u,p)||(0,C.has)(u,m)||(0,C.has)(u,d)){const s=t?Y.getBreakpointsTabs((t=>(0,a.createElement)(a.Fragment,null,Y.getBreakpointsBehaviorControl({props:e,attrPrefix:`${r}-flexbox`,breakpoint:t,affectedAttrs:M}),w(t)))):w();return i?(0,a.createElement)(l.PanelBody,{title:n,initialOpen:o},s):s}return null})({props:e,panelBody:!1})),(({props:e,attrPrefix:t="",colorControlLabel:r=(0,s.__)("Font color","beer-blocks"),backgroundControlLabel:a=(0,s.__)("Background","beer-blocks"),panelBody:i=!0,initialOpen:n=!1,title:o=(0,s.__)("Colors","beer-blocks")})=>{let c=(0,Z.jsxs)(Z.Fragment,{children:[q({props:e,attrPrefix:t,label:r}),K({props:e,attrPrefix:t,label:a})]});return i?(0,Z.jsx)(l.PanelBody,{title:o,initialOpen:n,children:c}):c})({props:e}),(({props:e,initialOpen:t=!1,attrPrefix:r="",panelBody:i=!0,title:n=(0,s.__)("Spacing","beer-blocks"),paddingControlLabel:o=e=>sprintf((0,s.__)("Padding (%s)","beer-blocks"),e.toUpperCase()),marginControlLabel:c=e=>sprintf((0,s.__)("Margin (%s)","beer-blocks"),e.toUpperCase()),horizontalCenteringControlLabel:b=e=>sprintf((0,s.__)("Enable horizontal centering (%s)","beer-blocks"),e.toUpperCase()),paddingSides:u=["top","right","bottom","left"],marginSides:p=["top","right","bottom","left"]})=>{const{attributes:m}=e,d=(0,C.camelCase)(`${r}-padding`),M=(0,C.camelCase)(`${r}-margin`),w=(0,C.camelCase)(`${r}-mx-auto`),L=`${r}-spacing`,f=[d,M,w].filter((e=>(0,C.has)(m,e)));if(f.length>0){const h=(0,a.createElement)(a.Fragment,null,Y.getBreakpointsTabs((t=>(0,a.createElement)(a.Fragment,null,Y.getBreakpointsBehaviorControl({props:e,attrPrefix:L,breakpoint:t,affectedAttrs:f}),(0,C.has)(m,d)&&(({props:e,breakpoint:t,attrPrefix:r="",breakpointsBehaviorAttrPrefix:i="",label:n=sprintf((0,s.__)("Padding (%s)","beer-blocks"),t.toUpperCase()),sides:o=["top","right","bottom","left"]})=>{const c=(0,C.camelCase)(`${r}-padding`),b=(0,C.camelCase)(`${i}-breakpoints-behavior`),{setAttributes:u,attributes:{[c]:p,[b]:m}}=e;if((0,C.isEmpty)(o)||m[t]===Y.sameBehavior)return null;const d=Object.fromEntries(o.map((e=>[e,void 0])));return(0,a.createElement)(l.__experimentalBoxControl,{label:n,allowReset:!0,resetValues:d,units:ie,values:p[t],onChange:e=>u({[c]:{...p,[t]:{...d,...e}}}),sides:o})})({props:e,breakpoint:t,attrPrefix:r,breakpointsBehaviorAttrPrefix:L,label:o(t),sides:u}),(0,C.has)(m,M)&&(({props:e,breakpoint:t,attrPrefix:r="",breakpointsBehaviorAttrPrefix:i="",label:n=sprintf((0,s.__)("Margin (%s)","beer-blocks"),t.toUpperCase()),sides:o=["top","right","bottom","left"]})=>{const c=(0,C.camelCase)(`${r}-margin`),b=(0,C.camelCase)(`${i}-breakpoints-behavior`),{setAttributes:u,attributes:{[c]:p,[b]:m}}=e;if((0,C.isEmpty)(o)||m[t]===Y.sameBehavior)return null;const d=Object.fromEntries(o.map((e=>[e,void 0])));return(0,a.createElement)(l.__experimentalBoxControl,{label:n,allowReset:!0,resetValues:d,units:ie,values:p[t],onChange:e=>u({[c]:{...p,[t]:{...d,...e}}}),sides:o})})({props:e,breakpoint:t,attrPrefix:r,breakpointsBehaviorAttrPrefix:L,label:c(t),sides:p}),(0,C.has)(m,w)&&(({props:e,breakpoint:t,attrPrefix:r="",breakpointsBehaviorAttrPrefix:i="",label:n=sprintf((0,s.__)("Enable horizontal centering (%s)","beer-blocks"),t.toUpperCase())})=>{const o=(0,C.camelCase)(`${r}-mx-auto`),c=(0,C.camelCase)(`${i}-breakpoints-behavior`),{setAttributes:b,attributes:{[o]:u,[c]:p}}=e;return p[t]===Y.sameBehavior?null:(0,a.createElement)(l.ToggleControl,{label:n,checked:u[t],onChange:()=>b({[o]:{...u,[t]:!u[t]}})})})({props:e,breakpoint:t,attrPrefix:r,breakpointsBehaviorAttrPrefix:L,label:b(t)})))));return i?(0,a.createElement)(l.PanelBody,{title:n,initialOpen:t},h):h}return null})({props:e,paddingSides:!1,marginSides:["top","bottom"]}),(({props:e,attrPrefix:t="",idControlLabel:r=(0,s.__)("ID attribute","beer-blocks"),htmlAttrsControlLabel:a=(0,s.__)("HTML attributes","beer-blocks"),panelBody:i=!0,title:n=(0,s.__)("HTML settings","beer-blocks"),initialOpen:o=!1})=>{const{attributes:c}=e,b=de("id-attr",t),u=de("html-attrs",t);if((0,C.has)(c,b)||(0,C.has)(c,u)){const s=(0,Z.jsxs)(Z.Fragment,{children:[Le({props:e,attrPrefix:t,label:r}),fe({props:e,attrPrefix:t,label:a})]});return i?(0,Z.jsx)(l.PanelBody,{title:n,initialOpen:o,children:s}):s}return null})({props:e})),(0,a.createElement)("div",{...n},(0,a.createElement)("ul",{...b}),(0,a.createElement)("div",{className:"button-block-appender__container"},(0,a.createElement)(o.InnerBlocks.ButtonBlockAppender,null))))},save:e=>{const{attributes:{containerType:t}}=e,r=o.useBlockProps.save({className:`${t}${ae(e)}${me(e)}`,style:{...re(e,"instructions"),...pe(e,"instructions")},...ge(e)});return(0,a.createElement)("div",{...r},(0,a.createElement)("ul",{className:`p-0 mb-0 row${G(e)}`},(0,a.createElement)(o.InnerBlocks.Content,null)))}})}},r={};function a(e){var i=r[e];if(void 0!==i)return i.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,a),s.exports}a.m=t,e=[],a.O=(t,r,i,s)=>{if(!r){var n=1/0;for(b=0;b<e.length;b++){r=e[b][0],i=e[b][1],s=e[b][2];for(var o=!0,l=0;l<r.length;l++)(!1&s||n>=s)&&Object.keys(a.O).every((e=>a.O[e](r[l])))?r.splice(l--,1):(o=!1,s<n&&(n=s));if(o){e.splice(b--,1);var c=i();void 0!==c&&(t=c)}}return t}s=s||0;for(var b=e.length;b>0&&e[b-1][2]>s;b--)e[b]=e[b-1];e[b]=[r,i,s]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={50:0,249:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var i,s,n=r[0],o=r[1],l=r[2],c=0;if(n.some((t=>0!==e[t]))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(l)var b=l(a)}for(t&&t(r);c<n.length;c++)s=n[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(b)},r=self.webpackChunkbeer_blocks=self.webpackChunkbeer_blocks||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i=a.O(void 0,[249],(()=>a(204)));i=a.O(i)})();