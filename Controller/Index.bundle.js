(()=>{"use strict";var t,e,n,a,o={156:(t,e,n)=>{n.a(t,(async(t,e)=>{try{var a=n(911),o=n(134);const s=document.getElementById("submitButton"),l=document.getElementById("nameInput");var i=[],r="",c="";async function u(){l.addEventListener("input",y),s.addEventListener("click",L);const t=localStorage.getItem("ConnectTarget")??"",e=localStorage.getItem("ConnectName")??"";r=t,l.value=c=e,g(),d()}async function d(){i=await(0,a.LK)(),p(),h()}async function g(){const t=[{name:"Nederlands",code:"nl"},{name:"English",code:"en"}],e=document.getElementById("languagePanel");if(e){var n=[];for(const e of t){const t=document.createElement("div");t.classList.add("card","groupCard"),t.id=e.code,e.code==o.p.CurrentLanguage&&t.classList.add("selected"),t.addEventListener("click",f);const a=document.createElement("h2");a.innerHTML=e.name,a.id=e.code,t.appendChild(a),n.push(t)}e.replaceChildren(...n)}}async function p(){const t=document.getElementById("creatingGroupPanels");if(t){if(0===i.length){const e=document.createElement("h2");return e.innerText="No edmos are active at this moment.",o.p.setLocalisationKey(e,"noActiveEdmos"),t.replaceChildren(e),r="",void h()}var e=[],n=!1;for(const t of i){const a=document.createElement("div");a.classList.add("card","groupCard"),a.id=t,t==r&&(n=!0,a.classList.add("selected")),a.addEventListener("click",m);const o=document.createElement("h2");o.innerHTML=t,o.id=t,a.appendChild(o),e.push(a)}n||(r=""),t.replaceChildren(...e),h()}}async function m(t){const e=t.target;r=r==e.id?"":e.id,p(),h()}async function f(t){const e=t.target;o.p.setLanguage(e.id),g()}async function y(t){const e=t.target;c=e.value,h()}function h(){s.style.opacity=c&&r?"1":"0.2"}async function L(t){r&&c&&(localStorage.setItem("ConnectTarget",r),localStorage.setItem("ConnectName",c),window.location.assign("/controller.html"))}await u(),await o.p.loadLocalisationBanks("strings/controllerStrings.json"),setInterval(d,5e3),e()}catch(v){e(v)}}),1)},911:(t,e,n)=>{async function a(t,e){try{const n=await fetch(t,e);return n.ok?await n.json():null}catch{return null}}async function o(){return await a(function(t,e=window.location.port,n=window.location.protocol){return`${n}//${window.location.hostname}:${e}/${t}`}("edmos","8080"))??[]}n.d(e,{Fd:()=>a,LK:()=>o})},134:(t,e,n)=>{n.d(e,{p:()=>o});var a=n(911);class o{static localisationBanks=[];static currentLanguage="nl";static{this.currentLanguage=localStorage.getItem("language")??"nl"}static async loadLocalisationBanks(...t){for(const e of t){const t=await(0,a.Fd)(e);if(!t)return;this.localisationBanks.push(t)}this.applyLocalisationToAllElements()}static get CurrentLanguage(){return this.currentLanguage}static getString(t,e=null){for(const n of this.localisationBanks){if(!(t in n))continue;const a=n[t];if(this.currentLanguage in a)return this.format(a[this.currentLanguage],e)}const n=`Can't find string with key {${t}} for language code {${this.currentLanguage}}`;return console.log(n),""}static getKeysFor(t){return t.split(" ").map(this.getKeyFor.bind(this))}static getKeyFor(t){for(const e of this.localisationBanks)for(const n in e){if(!t.localeCompare(n,void 0,{sensitivity:"accent"}))return n;const a=e[n];for(const e in a)if(!t.localeCompare(a[e],void 0,{sensitivity:"accent"}))return n}return""}static addLocalisationBanks(...t){for(const e of t)this.localisationBanks.push(e);this.applyLocalisationToAllElements()}static clearLocalisationBanks(){this.localisationBanks=[]}static findAllLocalizableElements(){return document.querySelectorAll("[data-i18n-key]")}static setLocalisationKey(t,e,n=null){t.setAttribute("data-i18n-key",e),n&&t.setAttribute("data-i18n-args",JSON.stringify(n)),this.applyLocalisation(t)}static removeLocalisationKey(t){t.removeAttribute("data-i18n-key"),t.removeAttribute("data-i18n-args")}static setLanguage(t){this.currentLanguage=t,localStorage.setItem("language",t),this.applyLocalisationToAllElements()}static applyLocalisation(t){const e=t.getAttribute("data-i18n-key"),n=t.getAttribute("data-i18n-args"),a=n?JSON.parse(n):null;if(!e)return;const o=this.getString(e,a);t instanceof HTMLInputElement?t.placeholder=o:t.innerText=o}static applyLocalisationToAllElements(){const t=this.findAllLocalizableElements();for(const e of t)e instanceof HTMLElement&&this.applyLocalisation(e)}static format(t,e=null){return e?t.replace(/\{\{|\}\}|\{(\w+)\}/g,(function(t,n){return"{{"==t?"{":"}}"==t?"}":n in e?e[n]:`{${n}}`})):t}}}},i={};function r(t){var e=i[t];if(void 0!==e)return e.exports;var n=i[t]={exports:{}};return o[t](n,n.exports,r),n.exports}t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=t=>{t&&t.d<1&&(t.d=1,t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},r.a=(o,i,r)=>{var c;r&&((c=[]).d=-1);var s,l,u,d=new Set,g=o.exports,p=new Promise(((t,e)=>{u=e,l=t}));p[e]=g,p[t]=t=>(c&&t(c),d.forEach(t),p.catch((t=>{}))),o.exports=p,i((o=>{var i;s=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[t])return o;if(o.then){var i=[];i.d=0,o.then((t=>{r[e]=t,a(i)}),(t=>{r[n]=t,a(i)}));var r={};return r[t]=t=>t(i),r}}var c={};return c[t]=t=>{},c[e]=o,c})))(o);var r=()=>s.map((t=>{if(t[n])throw t[n];return t[e]})),l=new Promise((e=>{(i=()=>e(r)).r=0;var n=t=>t!==c&&!d.has(t)&&(d.add(t),t&&!t.d&&(i.r++,t.push(i)));s.map((e=>e[t](n)))}));return i.r?l:r()}),(t=>(t?u(p[n]=t):l(g),a(c)))),c&&c.d<0&&(c.d=0)},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r(156)})();