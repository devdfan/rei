if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>i(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-9517df1b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404-f942b294.svg",revision:null},{url:"assets/abs013-59e9f420.svg",revision:null},{url:"assets/abs014-0b98fcb8.svg",revision:null},{url:"assets/App-bd039a88.js",revision:null},{url:"assets/App-e35181b6.css",revision:null},{url:"assets/gen017-c7785e1a.svg",revision:null},{url:"assets/index-d55ad93f.css",revision:null},{url:"assets/main-2281e48e.js",revision:null},{url:"favicon.ico",revision:"7ca5982845c3667cdd070c90ecf47160"},{url:"index.html",revision:"7282e3235e31181e55a307cee5d67e28"},{url:"registerSW.js",revision:"83feb91b11522c05409cb51bde79deae"},{url:"manifest.webmanifest",revision:"e6a5f2869b323bf6983322d1112d24aa"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
