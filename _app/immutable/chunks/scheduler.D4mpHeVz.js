function x(){}function E(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function P(){return Object.create(null)}function v(t){t.forEach(q)}function O(t){return typeof t=="function"}function S(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let f;function g(t,n){return t===n?!0:(f||(f=document.createElement("a")),f.href=n,t===f.href)}function b(t){return t.split(",").map(n=>n.trim().split(" ").filter(Boolean))}function U(t,n){const e=b(t.srcset),r=b(n||"");return r.length===e.length&&r.every(([o,s],c)=>s===e[c][1]&&(g(e[c][0],o)||g(o,e[c][0])))}function C(t){return Object.keys(t).length===0}function z(t,...n){if(t==null){for(const r of n)r(void 0);return x}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function D(t,n,e){t.$$.on_destroy.push(z(n,e))}function G(t,n,e,r){if(t){const o=k(t,n,e,r);return t[0](o)}}function k(t,n,e,r){return t[1]&&r?E(e.ctx.slice(),t[1](r(n))):e.ctx}function H(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const s=[],c=Math.max(n.dirty.length,o.length);for(let a=0;a<c;a+=1)s[a]=n.dirty[a]|o[a];return s}return n.dirty|o}return n.dirty}function I(t,n,e,r,o,s){if(o){const c=k(n,e,r,s);t.p(c,o)}}function J(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function K(t){return t??""}function L(t){return t&&O(t.destroy)?t.destroy:x}let _;function d(t){_=t}function w(){if(!_)throw new Error("Function called outside component initialization");return _}function N(t){w().$$.on_mount.push(t)}function Q(t){w().$$.after_update.push(t)}const i=[],y=[];let l=[];const m=[],j=Promise.resolve();let p=!1;function B(){p||(p=!0,j.then(A))}function R(){return B(),j}function M(t){l.push(t)}const h=new Set;let u=0;function A(){if(u!==0)return;const t=_;do{try{for(;u<i.length;){const n=i[u];u++,d(n),F(n.$$)}}catch(n){throw i.length=0,u=0,n}for(d(null),i.length=0,u=0;y.length;)y.pop()();for(let n=0;n<l.length;n+=1){const e=l[n];h.has(e)||(h.add(e),e())}l.length=0}while(i.length);for(;m.length;)m.pop()();p=!1,h.clear(),d(t)}function F(t){if(t.fragment!==null){t.update(),v(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(M)}}function T(t){const n=[],e=[];l.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),l=n}export{g as A,L as B,S as a,Q as b,D as c,y as d,P as e,A as f,C as g,M as h,O as i,T as j,_ as k,d as l,q as m,x as n,N as o,i as p,B as q,v as r,z as s,R as t,G as u,I as v,J as w,H as x,K as y,U as z};
