import{d as r,w as a}from"./index.DVLMQqaa.js";const s={LIGHT:"light",DARK:"dark"};function i(){{const e=localStorage.getItem("theme");return e||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}}const t=a("light");t.set(i()),t.subscribe(e=>{localStorage.setItem("theme",e),document.body.setAttribute("data-theme",e)});const m=r(t,e=>e===s.DARK);export{s as T,m as i,t};
