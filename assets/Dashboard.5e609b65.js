var be=Object.defineProperty;var he=(e,t,n)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Q=(e,t,n)=>(he(e,typeof t!="symbol"?t+"":t,n),n);import{r as w,b as O,c as me,R as D,j as $,d as te,F as _e}from"./vendor.da540a26.js";import{K as Y}from"./konva.1335705c.js";import{u as we}from"./ahooks.3aed1a73.js";import{_ as xe,i as Ce,a as ke}from"./common.a115089c.js";import{s as P,B as se,r as Re,c as h,_ as y,a as z,b as V,d as $e,u as N,e as S,f as j,g as J,h as Te,i as le,j as ne,k as X,l as Be,m as Ie,n as ze,o as Ee,t as oe,p as Pe,q as k,v as Ae,w as Le}from"./@mui/material.4782ca5a.js";const Z=(()=>{if(typeof self>"u")return!1;if("top"in self&&self!==top)try{}catch{return!1}else if("showOpenFilePicker"in self)return"showOpenFilePicker";return!1})(),We=Z?Promise.resolve().then(function(){return Me}):Promise.resolve().then(function(){return Ge});async function Fe(...e){return(await We).default(...e)}Z?Promise.resolve().then(function(){return Ne}):Promise.resolve().then(function(){return qe});Z?Promise.resolve().then(function(){return Ve}):Promise.resolve().then(function(){return Je});const Oe=async e=>{const t=await e.getFile();return t.handle=e,t};var je=async(e=[{}])=>{Array.isArray(e)||(e=[e]);const t=[];e.forEach((r,a)=>{t[a]={description:r.description||"Files",accept:{}},r.mimeTypes?r.mimeTypes.map(i=>{t[a].accept[i]=r.extensions||[]}):t[a].accept["*/*"]=r.extensions||[]});const n=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:t,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),o=await Promise.all(n.map(Oe));return e[0].multiple?o:o[0]},Me={__proto__:null,default:je};function G(e){function t(n){if(Object(n)!==n)return Promise.reject(new TypeError(n+" is not an object."));var o=n.done;return Promise.resolve(n.value).then(function(r){return{value:r,done:o}})}return G=function(n){this.s=n,this.n=n.next},G.prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(n){var o=this.s.return;return o===void 0?Promise.resolve({value:n,done:!0}):t(o.apply(this.s,arguments))},throw:function(n){var o=this.s.return;return o===void 0?Promise.reject(n):t(o.apply(this.s,arguments))}},new G(e)}const ce=async(e,t,n=e.name,o)=>{const r=[],a=[];var i,c=!1,s=!1;try{for(var l,d=function(u){var g,f,b,_=2;for(typeof Symbol<"u"&&(f=Symbol.asyncIterator,b=Symbol.iterator);_--;){if(f&&(g=u[f])!=null)return g.call(u);if(b&&(g=u[b])!=null)return new G(g.call(u));f="@@asyncIterator",b="@@iterator"}throw new TypeError("Object is not async iterable")}(e.values());c=!(l=await d.next()).done;c=!1){const u=l.value,g=`${n}/${u.name}`;u.kind==="file"?a.push(u.getFile().then(f=>(f.directoryHandle=e,f.handle=u,Object.defineProperty(f,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>g})))):u.kind!=="directory"||!t||o&&o(u)||r.push(ce(u,t,g,o))}}catch(u){s=!0,i=u}finally{try{c&&d.return!=null&&await d.return()}finally{if(s)throw i}}return[...(await Promise.all(r)).flat(),...await Promise.all(a)]};var Ue=async(e={})=>{e.recursive=e.recursive||!1,e.mode=e.mode||"read";const t=await window.showDirectoryPicker({id:e.id,startIn:e.startIn,mode:e.mode});return ce(t,e.recursive,void 0,e.skipDirectory)},Ne={__proto__:null,default:Ue},Se=async(e,t=[{}],n=null,o=!1,r=null)=>{Array.isArray(t)||(t=[t]),t[0].fileName=t[0].fileName||"Untitled";const a=[];let i=null;if(e instanceof Blob&&e.type?i=e.type:e.headers&&e.headers.get("content-type")&&(i=e.headers.get("content-type")),t.forEach((l,d)=>{a[d]={description:l.description||"Files",accept:{}},l.mimeTypes?(d===0&&i&&l.mimeTypes.push(i),l.mimeTypes.map(u=>{a[d].accept[u]=l.extensions||[]})):i?a[d].accept[i]=l.extensions||[]:a[d].accept["*/*"]=l.extensions||[]}),n)try{await n.getFile()}catch(l){if(n=null,o)throw l}const c=n||await window.showSaveFilePicker({suggestedName:t[0].fileName,id:t[0].id,startIn:t[0].startIn,types:a,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1});!n&&r&&r(c);const s=await c.createWritable();return"stream"in e?(await e.stream().pipeTo(s),c):"body"in e?(await e.body.pipeTo(s),c):(await s.write(await e),await s.close(),c)},Ve={__proto__:null,default:Se},De=async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise((t,n)=>{const o=document.createElement("input");o.type="file";const r=[...e.map(s=>s.mimeTypes||[]),...e.map(s=>s.extensions||[])].join();o.multiple=e[0].multiple||!1,o.accept=r||"",o.style.display="none",document.body.append(o);const a=s=>{typeof i=="function"&&i(),t(s)},i=e[0].legacySetup&&e[0].legacySetup(a,()=>i(n),o),c=()=>{window.removeEventListener("focus",c),o.remove()};o.addEventListener("click",()=>{window.addEventListener("focus",c)}),o.addEventListener("change",()=>{window.removeEventListener("focus",c),o.remove(),a(o.multiple?Array.from(o.files):o.files[0])}),"showPicker"in HTMLInputElement.prototype?o.showPicker():o.click()})),Ge={__proto__:null,default:De},He=async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise((t,n)=>{const o=document.createElement("input");o.type="file",o.webkitdirectory=!0;const r=i=>{typeof a=="function"&&a(),t(i)},a=e[0].legacySetup&&e[0].legacySetup(r,()=>a(n),o);o.addEventListener("change",()=>{let i=Array.from(o.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(i=i.filter(c=>c.webkitRelativePath.split("/").every(s=>!e[0].skipDirectory({name:s,kind:"directory"})))):i=i.filter(c=>c.webkitRelativePath.split("/").length===2),r(i)}),"showPicker"in HTMLInputElement.prototype?o.showPicker():o.click()})),qe={__proto__:null,default:He},Ke=async(e,t={})=>{Array.isArray(t)&&(t=t[0]);const n=document.createElement("a");let o=e;"body"in e&&(o=await async function(i,c){const s=i.getReader(),l=new ReadableStream({start:g=>async function f(){return s.read().then(({done:b,value:_})=>{if(!b)return g.enqueue(_),f();g.close()})}()}),d=new Response(l),u=await d.blob();return s.releaseLock(),new Blob([u],{type:c})}(e.body,e.headers.get("content-type"))),n.download=t.fileName||"Untitled",n.href=URL.createObjectURL(await o);const r=()=>{typeof a=="function"&&a()},a=t.legacySetup&&t.legacySetup(r,()=>a(),n);return n.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(n.href),3e4),r()}),n.click(),null},Je={__proto__:null,default:Ke};const Qe={name:"1qk07wn",styles:"text-align:center;margin:0;padding:0.5em"},Xe={name:"zl1inp",styles:"display:flex;justify-content:center"},Ye={name:"1mjnbiv",styles:"width:70vmin;height:70vmin;display:block;flex:none;overflow:auto"},Ze={name:"15l7spb",styles:"width:100%;height:100%;display:block;background-color:#f2f2f2;flex:none"};var et=xe,tt=Ce,nt=ke,ot="[object String]";function rt(e){return typeof e=="string"||!tt(e)&&nt(e)&&et(e)==ot}var at=rt;const de={async file2image(e){const t=await this.readyFileToDataURL(e);return await this.createImage(t)},readyFileToDataURL(e){return new Promise((t,n)=>{const o=new FileReader;o.onloadend=()=>{t(o.result),o.onloadend=null,o.onerror=null},o.onerror=r=>{n(r),o.onloadend=null,o.onerror=null},o.readAsDataURL(e)})},createImage(e){return new Promise((t,n)=>{const o=new Image;o.onload=()=>{t(o),o.onload=null,o.onerror=null},o.onerror=r=>{n(r),o.onload=null,o.onerror=null},o.src=e})},async scaleImage2Rect(e,t,n){at(e)&&(e=await this.createImage(e));const{width:o,height:r}=e,a=Math.min(t/o,n/r);return t=o*a,n=r*a,{width:t,height:n}}},F=class{constructor(){Q(this,"Stage",null)}static getInstance(){return F.instance||(F.instance=new F),F.instance}setStage(t){return this.Stage=t,this}setLayer(){const{Stage:t}=this;if(!t)throw new Error("Stage is null.your should setStage first");t.getLayers().find(o=>o.name()==="image")?console.warn("layer is exist.No need to set again"):t.add(new Y.Layer({name:"image"}))}async drawImage(t){const{Stage:n}=this;if(!n)throw new Error("Stage is null.your should setStage first");const o=n.getLayers().find(u=>u.name()==="image");if(!o)throw new Error("layer is null.your should setLayer first");o.removeChildren();const r=n.width(),a=n.height(),{width:i,height:c}=await de.scaleImage2Rect(t,r,a),s=Math.floor((a-c)/2),l=Math.floor((r-i)/2),d=new Y.Image({image:t,width:i,height:c,y:s,x:l});return o.add(d),d}};let M=F;Q(M,"instance");const it=w.exports.createContext({}),st=it,lt=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],ct=e=>{const{color:t,disableElevation:n,fullWidth:o,size:r,variant:a,classes:i}=e,c={root:["root",a,`${a}${h(t)}`,`size${h(r)}`,`${a}Size${h(r)}`,t==="inherit"&&"colorInherit",n&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${h(r)}`],endIcon:["endIcon",`iconSize${h(r)}`]},s=J(c,Te,i);return y({},i,s)},ue=e=>y({},e.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},e.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},e.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),dt=P(se,{shouldForwardProp:e=>Re(e)||e==="classes",name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${h(n.color)}`],t[`size${h(n.size)}`],t[`${n.variant}Size${h(n.size)}`],n.color==="inherit"&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var n,o;return y({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":y({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:z(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="text"&&t.color!=="inherit"&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:z(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="outlined"&&t.color!=="inherit"&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:z(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="contained"&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},t.variant==="contained"&&t.color!=="inherit"&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":y({},t.variant==="contained"&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${V.focusVisible}`]:y({},t.variant==="contained"&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${V.disabled}`]:y({color:(e.vars||e).palette.action.disabled},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},t.variant==="outlined"&&t.color==="secondary"&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},t.variant==="contained"&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},t.variant==="text"&&{padding:"6px 8px"},t.variant==="text"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main},t.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},t.variant==="outlined"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${z(e.palette[t.color].main,.5)}`},t.variant==="contained"&&{color:e.vars?e.vars.palette.text.primary:(n=(o=e.palette).getContrastText)==null?void 0:n.call(o,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},t.variant==="contained"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},t.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},t.size==="small"&&t.variant==="text"&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="text"&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},t.size==="small"&&t.variant==="outlined"&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="outlined"&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},t.size==="small"&&t.variant==="contained"&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="contained"&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${V.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${V.disabled}`]:{boxShadow:"none"}}),ut=P("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t[`iconSize${h(n.size)}`]]}})(({ownerState:e})=>y({display:"inherit",marginRight:8,marginLeft:-4},e.size==="small"&&{marginLeft:-2},ue(e))),pt=P("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t[`iconSize${h(n.size)}`]]}})(({ownerState:e})=>y({display:"inherit",marginRight:-4,marginLeft:8},e.size==="small"&&{marginRight:-2},ue(e))),ft=w.exports.forwardRef(function(t,n){const o=w.exports.useContext(st),r=$e(o,t),a=N({props:r,name:"MuiButton"}),{children:i,color:c="primary",component:s="button",className:l,disabled:d=!1,disableElevation:u=!1,disableFocusRipple:g=!1,endIcon:f,focusVisibleClassName:b,fullWidth:_=!1,size:C="medium",startIcon:B,type:W,variant:v="text"}=a,I=S(a,lt),E=y({},a,{color:c,component:s,disabled:d,disableElevation:u,disableFocusRipple:g,fullWidth:_,size:C,type:W,variant:v}),x=ct(E),ye=B&&O(ut,{className:x.startIcon,ownerState:E,children:B}),ve=f&&O(pt,{className:x.endIcon,ownerState:E,children:f});return me(dt,y({ownerState:E,className:j(o.className,x.root,l),component:s,disabled:d,focusRipple:!g,focusVisibleClassName:j(x.focusVisible,b),ref:n,type:W},I,{classes:x,children:[ye,i,ve]}))}),gt=ft,yt=["component","direction","spacing","divider","children"];function vt(e,t){const n=w.exports.Children.toArray(e).filter(Boolean);return n.reduce((o,r,a)=>(o.push(r),a<n.length-1&&o.push(w.exports.cloneElement(t,{key:`separator-${a}`})),o),[])}const bt=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],ht=({ownerState:e,theme:t})=>{let n=y({display:"flex",flexDirection:"column"},ne({theme:t},X({values:e.direction,breakpoints:t.breakpoints.values}),o=>({flexDirection:o})));if(e.spacing){const o=Be(t),r=Object.keys(t.breakpoints.values).reduce((s,l)=>((typeof e.spacing=="object"&&e.spacing[l]!=null||typeof e.direction=="object"&&e.direction[l]!=null)&&(s[l]=!0),s),{}),a=X({values:e.direction,base:r}),i=X({values:e.spacing,base:r});typeof a=="object"&&Object.keys(a).forEach((s,l,d)=>{if(!a[s]){const g=l>0?a[d[l-1]]:"column";a[s]=g}}),n=Ie(n,ne({theme:t},i,(s,l)=>({"& > :not(style) + :not(style)":{margin:0,[`margin${bt(l?a[l]:e.direction)}`]:Ee(o,s)}})))}return n=ze(t.breakpoints,n),n},mt=P("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>[t.root]})(ht),_t=w.exports.forwardRef(function(t,n){const o=N({props:t,name:"MuiStack"}),r=le(o),{component:a="div",direction:i="column",spacing:c=0,divider:s,children:l}=r,d=S(r,yt);return O(mt,y({as:a,ownerState:{direction:i,spacing:c},ref:n},d,{children:s?vt(l,s):l}))}),wt=_t,xt=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],Ct=e=>{const{classes:t,fullWidth:n,selected:o,disabled:r,size:a,color:i}=e,c={root:["root",o&&"selected",r&&"disabled",n&&"fullWidth",`size${h(a)}`,i]};return J(c,Pe,t)},kt=P(se,{name:"MuiToggleButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`size${h(n.size)}`]]}})(({theme:e,ownerState:t})=>{let n=t.color==="standard"?e.palette.text.primary:e.palette[t.color].main,o;return e.vars&&(n=t.color==="standard"?e.vars.palette.text.primary:e.vars.palette[t.color].main,o=t.color==="standard"?e.vars.palette.text.primaryChannel:e.vars.palette[t.color].mainChannel),y({},e.typography.button,{borderRadius:(e.vars||e).shape.borderRadius,padding:11,border:`1px solid ${(e.vars||e).palette.divider}`,color:(e.vars||e).palette.action.active},t.fullWidth&&{width:"100%"},{[`&.${oe.disabled}`]:{color:(e.vars||e).palette.action.disabled,border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:z(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${oe.selected}`]:{color:n,backgroundColor:e.vars?`rgba(${o} / ${e.vars.palette.action.selectedOpacity})`:z(n,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${o} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:z(n,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${o} / ${e.vars.palette.action.selectedOpacity})`:z(n,e.palette.action.selectedOpacity)}}}},t.size==="small"&&{padding:7,fontSize:e.typography.pxToRem(13)},t.size==="large"&&{padding:15,fontSize:e.typography.pxToRem(15)})}),Rt=w.exports.forwardRef(function(t,n){const o=N({props:t,name:"MuiToggleButton"}),{children:r,className:a,color:i="standard",disabled:c=!1,disableFocusRipple:s=!1,fullWidth:l=!1,onChange:d,onClick:u,selected:g,size:f="medium",value:b}=o,_=S(o,xt),C=y({},o,{color:i,disabled:c,disableFocusRipple:s,fullWidth:l,size:f}),B=Ct(C),W=v=>{u&&(u(v,b),v.defaultPrevented)||d&&d(v,b)};return O(kt,y({className:j(B.root,a),disabled:c,focusRipple:!s,ref:n,onClick:W,onChange:d,value:b,ownerState:C,"aria-pressed":g},_,{children:r}))}),$t=Rt;function Tt(e,t){return t===void 0||e===void 0?!1:Array.isArray(t)?t.indexOf(e)>=0:e===t}const Bt=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],It=e=>{const{classes:t,orientation:n,fullWidth:o,disabled:r}=e,a={root:["root",n==="vertical"&&"vertical",o&&"fullWidth"],grouped:["grouped",`grouped${h(n)}`,r&&"disabled"]};return J(a,Ae,t)},zt=P("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${k.grouped}`]:t.grouped},{[`& .${k.grouped}`]:t[`grouped${h(n.orientation)}`]},t.root,n.orientation==="vertical"&&t.vertical,n.fullWidth&&t.fullWidth]}})(({ownerState:e,theme:t})=>y({display:"inline-flex",borderRadius:(t.vars||t).shape.borderRadius},e.orientation==="vertical"&&{flexDirection:"column"},e.fullWidth&&{width:"100%"},{[`& .${k.grouped}`]:y({},e.orientation==="horizontal"?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${k.selected} + .${k.grouped}.${k.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${k.selected} + .${k.grouped}.${k.selected}`]:{borderTop:0,marginTop:0}})})),Et=w.exports.forwardRef(function(t,n){const o=N({props:t,name:"MuiToggleButtonGroup"}),{children:r,className:a,color:i="standard",disabled:c=!1,exclusive:s=!1,fullWidth:l=!1,onChange:d,orientation:u="horizontal",size:g="medium",value:f}=o,b=S(o,Bt),_=y({},o,{disabled:c,fullWidth:l,orientation:u,size:g}),C=It(_),B=(v,I)=>{if(!d)return;const E=f&&f.indexOf(I);let x;f&&E>=0?(x=f.slice(),x.splice(E,1)):x=f?f.concat(I):[I],d(v,x)},W=(v,I)=>{!d||d(v,f===I?null:I)};return O(zt,y({role:"group",className:j(C.root,a),ref:n,ownerState:_},b,{children:w.exports.Children.map(r,v=>w.exports.isValidElement(v)?w.exports.cloneElement(v,{className:j(C.grouped,v.props.className),onChange:s?W:B,selected:v.props.selected===void 0?Tt(v.props.value,f):v.props.selected,size:v.props.size||g,fullWidth:l,color:v.props.color||i,disabled:v.props.disabled||c}):null)}))}),Pt=Et,At=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Lt=e=>{const{align:t,gutterBottom:n,noWrap:o,paragraph:r,variant:a,classes:i}=e,c={root:["root",a,e.align!=="inherit"&&`align${h(t)}`,n&&"gutterBottom",o&&"noWrap",r&&"paragraph"]};return J(c,Le,i)},Wt=P("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],n.align!=="inherit"&&t[`align${h(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>y({margin:0},t.variant&&e.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),re={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Ft={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Ot=e=>Ft[e]||e,jt=w.exports.forwardRef(function(t,n){const o=N({props:t,name:"MuiTypography"}),r=Ot(o.color),a=le(y({},o,{color:r})),{align:i="inherit",className:c,component:s,gutterBottom:l=!1,noWrap:d=!1,paragraph:u=!1,variant:g="body1",variantMapping:f=re}=a,b=S(a,At),_=y({},a,{align:i,color:r,className:c,component:s,gutterBottom:l,noWrap:d,paragraph:u,variant:g,variantMapping:f}),C=s||(u?"p":f[g]||re[g])||"span",B=Lt(_);return O(Wt,y({as:C,ref:n,ownerState:_,className:j(B.root,c)},b))}),Mt=jt,Ut=e=>{const{data:t,value:n,disabled:o,onChange:r}=e,a=i=>r&&r(i);return $(Pt,{disabled:o,value:n,orientation:"vertical",color:"primary",exclusive:!0,sx:{marginRight:1,flex:"none"},children:t.map((i,c)=>{const{value:s,title:l}=i;return $($t,{value:s,onClick:()=>a(s),children:$(Mt,{children:l})},c)})})},Nt=D.memo(Ut);let p;const T=new Array(32).fill(void 0);T.push(void 0,null,!0,!1);function H(e){return T[e]}let U=T.length;function St(e){e<36||(T[e]=U,U=e)}function Vt(e){const t=H(e);return St(e),t}const pe=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});pe.decode();let q=new Uint8Array;function ee(){return q.byteLength===0&&(q=new Uint8Array(p.memory.buffer)),q}function Dt(e,t){return pe.decode(ee().subarray(e,e+t))}function A(e){U===T.length&&T.push(T.length+1);const t=U;return U=T[t],T[t]=e,t}let K=new Int32Array;function m(){return K.byteLength===0&&(K=new Int32Array(p.memory.buffer)),K}function L(e,t){return ee().subarray(e/1,e/1+t)}function ae(e,t,n){try{const i=p.__wbindgen_add_to_stack_pointer(-16);p.flip(i,A(e),t,n);var o=m()[i/4+0],r=m()[i/4+1],a=L(o,r).slice();return p.__wbindgen_free(o,r*1),a}finally{p.__wbindgen_add_to_stack_pointer(16)}}function Gt(e,t,n){try{const i=p.__wbindgen_add_to_stack_pointer(-16);p.canny(i,A(e),t,n);var o=m()[i/4+0],r=m()[i/4+1],a=L(o,r).slice();return p.__wbindgen_free(o,r*1),a}finally{p.__wbindgen_add_to_stack_pointer(16)}}function Ht(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.inverse(r,A(e));var t=m()[r/4+0],n=m()[r/4+1],o=L(t,n).slice();return p.__wbindgen_free(t,n*1),o}finally{p.__wbindgen_add_to_stack_pointer(16)}}function qt(e,t){try{const a=p.__wbindgen_add_to_stack_pointer(-16);p.painting(a,A(e),t);var n=m()[a/4+0],o=m()[a/4+1],r=L(n,o).slice();return p.__wbindgen_free(n,o*1),r}finally{p.__wbindgen_add_to_stack_pointer(16)}}function Kt(e,t){try{const a=p.__wbindgen_add_to_stack_pointer(-16);p.threshold(a,A(e),t);var n=m()[a/4+0],o=m()[a/4+1],r=L(n,o).slice();return p.__wbindgen_free(n,o*1),r}finally{p.__wbindgen_add_to_stack_pointer(16)}}function Jt(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.grayscale(r,A(e));var t=m()[r/4+0],n=m()[r/4+1],o=L(t,n).slice();return p.__wbindgen_free(t,n*1),o}finally{p.__wbindgen_add_to_stack_pointer(16)}}function Qt(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.floyd_steinberg(r,A(e));var t=m()[r/4+0],n=m()[r/4+1],o=L(t,n).slice();return p.__wbindgen_free(t,n*1),o}finally{p.__wbindgen_add_to_stack_pointer(16)}}let fe=0;function Xt(e,t){const n=t(e.length*1);return ee().set(e,n/1),fe=e.length,n}async function Yt(e,t){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(o){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",o);else throw o}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}else{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}function Zt(){const e={};return e.wbg={},e.wbg.__wbindgen_object_drop_ref=function(t){Vt(t)},e.wbg.__wbg_width_6e17ed358e109a2f=function(t){return H(t).width},e.wbg.__wbg_height_3948020edf838414=function(t){return H(t).height},e.wbg.__wbg_data_f13601b88960b7eb=function(t,n){const o=H(n).data,r=Xt(o,p.__wbindgen_malloc),a=fe;m()[t/4+1]=a,m()[t/4+0]=r},e.wbg.__wbindgen_throw=function(t,n){throw new Error(Dt(t,n))},e}function en(e,t){return p=e.exports,ge.__wbindgen_wasm_module=t,K=new Int32Array,q=new Uint8Array,p}async function ge(e){typeof e>"u"&&(e=new URL(""+new URL("image_bg.d89e82dc.wasm",import.meta.url).href,self.location));const t=Zt();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:o}=await Yt(await e,t);return en(n,o)}const R={is_init:!1,async init(){return this.is_init||(await ge(),this.is_init=!0),this},Grayscale:e=>e.data.set(Jt(e)),Threshold:e=>e.data.set(Kt(e,128)),Canny:e=>{console.log(Gt(e,50,100))},Painting:e=>e.data.set(qt(e,25)),flipVertical:e=>e.data.set(ae(e,!1,!0)),flipHorizontal:e=>e.data.set(ae(e,!0,!1)),inverse:e=>e.data.set(Ht(e)),floyd_steinberg:e=>e.data.set(Qt(e))},ie=[{title:"\u7070\u5EA6",value:1,handle:R.Grayscale},{title:"\u9ED1\u767D",value:2,handle:R.Threshold},{title:"Canny",value:3,handle:R.Canny},{title:"\u7ED8\u753B",value:4,handle:R.Painting},{title:"\u5782\u76F4\u7FFB\u8F6C",value:5,handle:R.flipVertical},{title:"\u6C34\u5E73\u7FFB\u8F6C",value:6,handle:R.flipHorizontal},{title:"\u53CD\u8272",value:7,handle:R.inverse},{title:"\u6269\u6563",value:8,handle:R.floyd_steinberg}];function ln(){const e=D.createRef(),[t,n]=D.useState(),[o,r]=D.useState([]);we(()=>{const{current:s}=e;if(!s)throw new Error("Container.current is null");const l=new Y.Stage({container:s,width:s.scrollWidth,height:s.scrollHeight});M.getInstance().setStage(l).setLayer()});const a=async()=>{const s=await Fe({extensions:[".png",".jpg",".jpeg",".gif",".bmp"],description:"\u56FE\u7247\u6587\u4EF6"}),l=await de.file2image(s),d=await M.getInstance().drawImage(l);n(d),c(o,d)},i=s=>{const l=[...o],d=l.findIndex(u=>u===s);d===-1?l.push(s):l.splice(d,1),r(l),t&&c(l,t)},c=async(s,l)=>{const d=ie.filter(u=>s.includes(u.value));await R.init(),l==null||l.cache(),l==null||l.filters(d.map(u=>u.handle))};return te(_e,{children:[$("h1",{css:Qe,children:"Konva\u7ED3\u5408rust\u65B0\u589E\u56FE\u7247\u6EE4\u955C\u6548\u679C"}),$(wt,{sx:{justifyContent:"center",paddingBottom:2},direction:"row",spacing:2,children:$(gt,{variant:"contained",onClick:()=>a(),children:"\u9009\u62E9\u6587\u4EF6"})}),te("div",{css:Xe,children:[$(Nt,{value:o,data:ie,disabled:!t,onChange:i}),$("div",{css:Ye,children:$("div",{ref:e,css:Ze})})]})]})}export{ln as default};