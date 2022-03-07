var R=Object.defineProperty,T=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var N=(e,t,r)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))M.call(t,r)&&N(e,r,t[r]);if(y)for(var r of y(t))P.call(t,r)&&N(e,r,t[r]);return e},x=(e,t)=>T(e,z(t));var g=(e,t)=>{var r={};for(var l in e)M.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(e!=null&&y)for(var l of y(e))t.indexOf(l)<0&&P.call(e,l)&&(r[l]=e[l]);return r};import{j as L,c as C,r as c,a as H,T as _,C as B,R as D,b as W}from"./vendor.698d1205.js";const G=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const m of i.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}};G();const o=L.exports.jsx,p=L.exports.jsxs,F=r=>{var l=r,{className:e}=l,t=g(l,["className"]);return o("div",x(f({},t),{className:C("backdrop",e)}))};const q=l=>{var n=l,{children:e,className:t}=n,r=g(n,["children","className"]);return o("footer",x(f({},r),{className:C("popup-footer-content",t),children:e}))},j=l=>{var n=l,{children:e,className:t}=n,r=g(n,["children","className"]);return o("header",x(f({},r),{className:C("popup-header-content",t),children:e}))},A=l=>{var n=l,{children:e,className:t}=n,r=g(n,["children","className"]);return o("main",x(f({},r),{className:C("popup-content",t),children:e}))},Y=document.getElementById("portal"),K=({open:e,onClose:t,children:r,backdrop:l=!0,zIndex:n})=>{if(!e)return null;const{header:i,footer:m,content:b}=c.exports.useMemo(()=>c.exports.Children.toArray(r).reduce((a,s)=>(s.type===j?a.header=s:s.type===q?a.footer=s:s.type===A&&(a.content=s),a),{header:null,footer:null,content:null}),[r]);return H.exports.createPortal(p("div",{className:"popup",style:n!=null?{zIndex:n}:void 0,children:[l&&o(F,{}),p("div",{className:"popup-wrapper",children:[p("div",{className:"popup-header",children:[i,o("button",{className:"popup-close",onClick:t,children:"\u292C"})]}),b,o("div",{className:"popup-footer",children:m})]})]}),Y)},d=Object.assign(K,{Header:j,Main:A,Footer:q}),V={next:e=>{},prev:e=>{}},k=c.exports.createContext(V),$=k.Provider;k.Consumer;const v=c.exports.memo(({children:e})=>{const t=c.exports.useContext(k);return e(t)});function I(e,t=0,r=1){return Math.max(t,Math.min(e,r))}const J=({children:e,onClose:t,onSubmit:r,startFrom:l=0,stepsOnScreen:n=1})=>{const[i,m]=c.exports.useState(-1/0),[b,a]=c.exports.useState("rtl"),s=c.exports.useMemo(()=>c.exports.Children.toArray(e).filter(u=>u.type===v).map((u,h)=>x(f({},u),{__id:h})),[e]),O=c.exports.useMemo(()=>{if(i<0||i===s.length)return[];const u=i+1,h=Math.max(u-n,0);return s.slice(h,u)},[s,i]),w=c.exports.useCallback(u=>{const h=typeof u=="number"?I(u,-1,s.length):i+1;a(h<i?"ltr":"rtl"),requestAnimationFrame(()=>m(h))},[s,i]),E=c.exports.useCallback(u=>{const h=typeof u=="number"?I(u,-1,s.length):i-1;a(h<i?"ltr":"rtl"),requestAnimationFrame(()=>m(h))},[s,i]);return c.exports.useEffect(()=>{if(i===-1){t();return}if(i===s.length){r();return}},[i]),c.exports.useEffect(()=>{m(l)},[]),p($,{value:{prev:E,next:w},children:[i>=0&&i<s.length&&o(F,{style:{zIndex:i+1}}),o(_,{children:O.map(u=>o(B,{classNames:b,timeout:300,children:u},u.__id))})]})};const S={background:"#ccc",justifyContent:"flex-end",columnGap:4},Q={position:"absolute",top:16,left:16,fontSize:"0.5em",color:"black"},U=["tomato","deepskyblue"],X=["You refused to go through all the steps","You went through all the steps"];function Z(){const[e,t]=c.exports.useState(-1),[r,l]=c.exports.useState(1),[n,i]=c.exports.useState(!1),m=c.exports.useCallback(()=>t(0),[]),b=c.exports.useCallback(()=>t(1),[]);return p("div",{className:"app",style:{background:U[e]},children:[p("label",{style:Q,children:["Steps on screen:"," ",o("input",{type:"number",min:1,defaultValue:r,onChange:a=>l(parseInt(a.target.value))})]}),e<0?o("button",{onClick:()=>i(!0),children:"Start"}):o("p",{children:X[e]}),n&&p(J,{onClose:m,onSubmit:b,stepsOnScreen:r,children:[o(v,{children:({prev:a,next:s})=>p(d,{open:!0,onClose:a,backdrop:!1,zIndex:1,children:[o(d.Header,{children:"First popup"}),p(d.Main,{style:{maxWidth:400},children:[o("p",{style:{margin:0},children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur facilis consectetur excepturi ullam mollitia totam dolore similique provident enim fugiat dicta animi voluptatum, sunt porro, optio nesciunt eius, ab obcaecati."}),o("p",{style:{margin:0},children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur facilis consectetur excepturi ullam mollitia totam dolore similique provident enim fugiat dicta animi voluptatum, sunt porro, optio nesciunt eius, ab obcaecati."}),o("p",{style:{margin:0},children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur facilis consectetur excepturi ullam mollitia totam dolore similique provident enim fugiat dicta animi voluptatum, sunt porro, optio nesciunt eius, ab obcaecati."})]}),p(d.Footer,{style:S,children:[o("button",{onClick:()=>s(3),children:"Finish"}),o("button",{onClick:()=>s(),children:"Next"})]})]})}),o(v,{children:({prev:a,next:s})=>p(d,{open:!0,onClose:a,backdrop:!1,zIndex:2,children:[o(d.Header,{children:"Second popup"}),p(d.Main,{style:{maxWidth:380},children:[o("p",{style:{margin:0},children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur facilis consectetur excepturi ullam mollitia totam dolore similique provident enim fugiat dicta animi voluptatum, sunt porro, optio nesciunt eius, ab obcaecati."}),o("p",{style:{margin:0},children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur facilis consectetur excepturi ullam mollitia totam dolore similique provident enim fugiat dicta animi voluptatum, sunt porro, optio nesciunt eius, ab obcaecati."})]}),p(d.Footer,{style:S,children:[o("button",{onClick:()=>s(-1),children:"Abort"}),o("button",{onClick:()=>s(3),children:"Finish"}),o("button",{onClick:()=>s(),children:"Next"})]})]})}),o(v,{children:({prev:a,next:s})=>p(d,{open:!0,onClose:a,backdrop:!1,zIndex:3,children:[o(d.Header,{children:"Third popup"}),o(d.Main,{style:{maxWidth:360},children:o("p",{style:{margin:0},children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur facilis consectetur excepturi ullam mollitia totam dolore similique provident enim fugiat dicta animi voluptatum, sunt porro, optio nesciunt eius, ab obcaecati."})}),p(d.Footer,{style:S,children:[o("button",{onClick:()=>s(-1),children:"Abort"}),o("button",{onClick:()=>s(0),children:"To start"}),o("button",{onClick:()=>s(),children:"Next"})]})]})})]})]})}D.render(o(W.StrictMode,{children:o(Z,{})}),document.getElementById("root"));
