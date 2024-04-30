import{s as L,n as E,q as z,u as C,v as K,w as R}from"../chunks/scheduler.Ce_0Mfso.js";import{S as x,i as H,z as y,A as b,a as m,d as u,q as d,l as a,g as k,h as _,e as g,s as N,v as O,c as v,k as V,f as j,w as D,x as G,B as P,p as T,n as A,y as U}from"../chunks/index.BHhOemKQ.js";import{b as B}from"../chunks/paths.Du3xdDZ1.js";const F=!0,re=Object.freeze(Object.defineProperty({__proto__:null,prerender:F},Symbol.toStringTag,{value:"Module"}));function J(f){let e,s,l,r;return{c(){e=y("svg"),s=y("circle"),l=y("path"),r=y("circle"),this.h()},l(n){e=b(n,"svg",{viewBox:!0,width:!0,height:!0,fill:!0,style:!0});var i=m(e);s=b(i,"circle",{style:!0,cx:!0,cy:!0,r:!0,fill:!0}),m(s).forEach(u),l=b(i,"path",{style:!0,d:!0,fill:!0,stroke:!0}),m(l).forEach(u),r=b(i,"circle",{cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0,fill:!0}),m(r).forEach(u),i.forEach(u),this.h()},h(){d(s,"transition","fill 200ms"),d(s,"will-change","fill"),a(s,"cx","15"),a(s,"cy","15"),a(s,"r","15"),a(s,"fill","var(--c-fg)"),d(l,"transition","fill 200ms"),d(l,"will-change","fill"),a(l,"d","M 15 30 A 1 1 0 0 0 15 0"),a(l,"fill","var(--c-bg)"),a(l,"stroke","none"),a(r,"cx","15"),a(r,"cy","15"),a(r,"r","15"),a(r,"stroke","var(--c-fg)"),a(r,"stroke-width","1.5"),a(r,"fill","transparent"),a(e,"viewBox","-0.75 -0.75 31.5 31.5"),a(e,"width","30"),a(e,"height","30"),a(e,"fill","var(--c-bg)"),d(e,"display","block"),d(e,"overflow","visible"),d(e,"cursor","pointer"),d(e,"padding","0")},m(n,i){k(n,e,i),_(e,s),_(e,l),_(e,r)},p:E,i:E,o:E,d(n){n&&u(e)}}}class Q extends x{constructor(e){super(),H(this,e,null,J,L,{})}}const w={LIGHT:"light",DARK:"dark"};function W(f){let e,s,l=`<li><a href="${`${B}/`}">Home</a></li> <li><a href="${`${B}/about`}">About</a></li>`,r,n,i,o,t,c,p,I;return t=new Q({}),{c(){e=g("nav"),s=g("ul"),s.innerHTML=l,r=N(),n=g("ul"),i=g("li"),o=g("button"),O(t.$$.fragment),this.h()},l(h){e=v(h,"NAV",{class:!0});var $=m(e);s=v($,"UL",{class:!0,"data-svelte-h":!0}),V(s)!=="svelte-1fefeqn"&&(s.innerHTML=l),r=j($),n=v($,"UL",{class:!0});var M=m(n);i=v(M,"LI",{});var S=m(i);o=v(S,"BUTTON",{"aria-label":!0,class:!0});var q=m(o);D(t.$$.fragment,q),q.forEach(u),S.forEach(u),M.forEach(u),$.forEach(u),this.h()},h(){a(s,"class","links svelte-g79oym"),a(o,"aria-label","toggle theme"),a(o,"class","svelte-g79oym"),a(n,"class","buttons svelte-g79oym"),a(e,"class","svelte-g79oym")},m(h,$){k(h,e,$),_(e,s),_(e,r),_(e,n),_(n,i),_(i,o),G(t,o,null),c=!0,p||(I=P(o,"click",f[0]),p=!0)},p:E,i(h){c||(T(t.$$.fragment,h),c=!0)},o(h){A(t.$$.fragment,h),c=!1},d(h){h&&u(e),U(t),p=!1,I()}}}function X(f){function e(l){Object.values(w).includes(l)&&(localStorage.setItem("theme",l),document.body.setAttribute("data-theme",l))}function s(){const r=document.body.getAttribute("data-theme")===w.LIGHT?w.DARK:w.LIGHT;e(r)}return[s]}class Y extends x{constructor(e){super(),H(this,e,X,W,L,{})}}function Z(f){let e,s,l,r,n;e=new Y({});const i=f[1].default,o=z(i,f,f[0],null);return{c(){O(e.$$.fragment),s=N(),l=g("div"),r=g("main"),o&&o.c(),this.h()},l(t){D(e.$$.fragment,t),s=j(t),l=v(t,"DIV",{class:!0});var c=m(l);r=v(c,"MAIN",{class:!0});var p=m(r);o&&o.l(p),p.forEach(u),c.forEach(u),this.h()},h(){a(r,"class","svelte-y08ow4"),a(l,"class","app")},m(t,c){G(e,t,c),k(t,s,c),k(t,l,c),_(l,r),o&&o.m(r,null),n=!0},p(t,[c]){o&&o.p&&(!n||c&1)&&C(o,i,t,t[0],n?R(i,t[0],c,null):K(t[0]),null)},i(t){n||(T(e.$$.fragment,t),T(o,t),n=!0)},o(t){A(e.$$.fragment,t),A(o,t),n=!1},d(t){t&&(u(s),u(l)),U(e,t),o&&o.d(t)}}}function ee(f,e,s){let{$$slots:l={},$$scope:r}=e;return f.$$set=n=>{"$$scope"in n&&s(0,r=n.$$scope)},[r,l]}class ae extends x{constructor(e){super(),H(this,e,ee,Z,L,{})}}export{ae as component,re as universal};
