import{c as e,a as r,r as n,o as t,b as o,d as s,N as i}from"./vendor.8ec452d0.js";let a;const p={},m=function(e,r){if(!r)return e();if(void 0===a){const e=document.createElement("link").relList;a=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(r.map((e=>{if(e in p)return;p[e]=!0;const r=e.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const t=document.createElement("link");return t.rel=r?"stylesheet":a,r||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),r?new Promise(((e,r)=>{t.addEventListener("load",e),t.addEventListener("error",r)})):void 0}))).then((()=>e()))},c=[{path:"/",redirect:"/home",component:()=>m((()=>import("./MainPage.63d22e2c.js")),["./assets/MainPage.63d22e2c.js","./assets/MainPage.68d6fad4.css","./assets/Home.72b58fc3.js","./assets/Home.fbb3e37f.css","./assets/vendor.8ec452d0.js"]),children:[{path:"/home",name:"home",component:()=>m((()=>import("./Home.72b58fc3.js")),["./assets/Home.72b58fc3.js","./assets/Home.fbb3e37f.css","./assets/vendor.8ec452d0.js"])},{path:"/profile",name:"profile",component:()=>m((()=>import("./Profile.3e852e2d.js")),["./assets/Profile.3e852e2d.js","./assets/Profile.f102a908.css","./assets/vendor.8ec452d0.js"])}]},{path:"/",redirect:"/sign-in",component:()=>m((()=>import("./OthersPage.643ba00a.js")),void 0),children:[{path:"/sign-in",name:"sign-in",component:()=>m((()=>import("./SignIn.175ae688.js")),void 0)}]}],d=e({history:r(),routes:c});var l={name:"App"};l.render=function(e,r,s,i,a,p){const m=n("router-view");return t(),o(m)};s(l).use(i).use(d).mount("#app");export{d as r};
