import{a as D,z as Y,A as N,n as F,B as Z,c as $,d as x,u as ee,v as te,w as se,x as le}from"./scheduler.D4mpHeVz.js";import{S as G,i as R,e as g,s as q,c as v,a as w,f as H,d as _,q as m,w as J,g as k,h as p,k as A,t as W,l as O,b as z,m as T,j as B,n as P,o as S,p as U,x as ne,v as ae,z as re}from"./index.DcMhQtLu.js";import{e as K}from"./each.D6YF6ztN.js";import{i as ie}from"./dev.sTEVxaZj.js";import{b as I}from"./paths.BOpOmhnn.js";function oe(a,{ratio:t=1,enabled:l=!0}={}){let s=t,i=l;const e=getComputedStyle(a).display,n=new ResizeObserver(()=>{i&&u(s)}),u=o=>{const c=h=>a.style.maxWidth=h+"px";a.style.maxWidth="",a.style.display="block";const f=a.clientWidth,b=a.clientHeight;let d=f/2,j=f,C;if(f){for(;d+1<j;)C=~~((d+j)/2),c(C),a.clientHeight===b?j=C:d=C;c(j*o+f*(1-o))}};let r=a.parentElement??document.body;for(;getComputedStyle(r).display==="contents";)r=r.parentElement??document.body;return n.observe(r),{update({ratio:o=1,enabled:c=!0}){s=o,i=c,c?u(o):(a.style.maxWidth="",a.style.display=e)},destroy(){n.disconnect()}}}function ce(a){let t,l,s,i,e,n;return{c(){t=g("picture"),l=g("source"),i=q(),e=g("img"),this.h()},l(u){t=v(u,"PICTURE",{});var r=w(t);l=v(r,"SOURCE",{srcset:!0,type:!0}),i=H(r),e=v(r,"IMG",{src:!0,alt:!0,style:!0,class:!0}),r.forEach(_),this.h()},h(){Y(l,s=I+"/projects/"+a[1]+"/"+a[0]+".webp?v="+L)||m(l,"srcset",s),m(l,"type","image/webp"),N(e.src,n=I+"/projects/"+a[1]+"/"+a[0]+".png?v="+L)||m(e,"src",n),m(e,"alt",""),J(e,"width","100%"),J(e,"aspect-ratio","16 / 9"),m(e,"class","svelte-15dgumh")},m(u,r){k(u,t,r),p(t,l),p(t,i),p(t,e)},p(u,[r]){r&3&&s!==(s=I+"/projects/"+u[1]+"/"+u[0]+".webp?v="+L)&&m(l,"srcset",s),r&3&&!N(e.src,n=I+"/projects/"+u[1]+"/"+u[0]+".png?v="+L)&&m(e,"src",n)},i:F,o:F,d(u){u&&_(t)}}}const L=1;function ue(a,t,l){let{id:s}=t,{name:i}=t;return a.$$set=e=>{"id"in e&&l(0,s=e.id),"name"in e&&l(1,i=e.name)},[s,i]}class fe extends G{constructor(t){super(),R(this,t,ue,ce,D,{id:0,name:1})}}function me(a){let t,l,s,i,e,n=a[2].section+"",u,r,o,c=a[2].title+"",f,b,d,j,C;return s=new fe({props:{id:a[3],name:a[0]}}),{c(){t=g("div"),l=g("a"),A(s.$$.fragment),i=q(),e=g("h4"),u=W(n),r=q(),o=g("p"),f=W(c),this.h()},l(h){t=v(h,"DIV",{class:!0});var y=w(t);l=v(y,"A",{href:!0,target:!0,rel:!0,class:!0});var E=w(l);O(s.$$.fragment,E),i=H(E),e=v(E,"H4",{class:!0});var V=w(e);u=z(V,n),V.forEach(_),r=H(E),o=v(E,"P",{class:!0});var M=w(o);f=z(M,c),M.forEach(_),E.forEach(_),y.forEach(_),this.h()},h(){m(e,"class","section pm svelte-g30ldx"),m(o,"class","title svelte-g30ldx"),m(l,"href",b=a[2].href),m(l,"target","_blank"),m(l,"rel","noopener noreferrer"),m(l,"class","svelte-g30ldx"),m(t,"class","project svelte-g30ldx")},m(h,y){k(h,t,y),p(t,l),T(s,l,null),p(l,i),p(l,e),p(e,u),p(l,r),p(l,o),p(o,f),a[6](o),d=!0,j||(C=Z(oe.call(null,o,{ratio:1,enabled:!0})),j=!0)},p(h,[y]){const E={};y&1&&(E.name=h[0]),s.$set(E),(!d||y&4)&&n!==(n=h[2].section+"")&&B(u,n),(!d||y&4)&&c!==(c=h[2].title+"")&&B(f,c),(!d||y&4&&b!==(b=h[2].href))&&m(l,"href",b)},i(h){d||(P(s.$$.fragment,h),d=!0)},o(h){S(s.$$.fragment,h),d=!1},d(h){h&&_(t),U(s),a[6](null),j=!1,C()}}}function he(a,t,l){let s,i;$(a,ie,c=>l(5,i=c));let{data:e}=t,{name:n}=t;const u=e.id;let r;function o(c){x[c?"unshift":"push"](()=>{r=c,l(1,r)})}return a.$$set=c=>{"data"in c&&l(4,e=c.data),"name"in c&&l(0,n=c.name)},a.$$.update=()=>{a.$$.dirty&48&&l(2,s=i?e.en:e.es)},[n,r,s,u,e,i,o]}class _e extends G{constructor(t){super(),R(this,t,he,me,D,{data:4,name:0})}}function de(a){let t,l;const s=a[1].default,i=ee(s,a,a[0],null);return{c(){t=g("h2"),i&&i.c(),this.h()},l(e){t=v(e,"H2",{class:!0});var n=w(t);i&&i.l(n),n.forEach(_),this.h()},h(){m(t,"class","pm svelte-1krxep2")},m(e,n){k(e,t,n),i&&i.m(t,null),l=!0},p(e,[n]){i&&i.p&&(!l||n&1)&&te(i,s,e,e[0],l?le(s,e[0],n,null):se(e[0]),null)},i(e){l||(P(i,e),l=!0)},o(e){S(i,e),l=!1},d(e){e&&_(t),i&&i.d(e)}}}function pe(a,t,l){let{$$slots:s={},$$scope:i}=t;return a.$$set=e=>{"$$scope"in e&&l(0,i=e.$$scope)},[i,s]}class ge extends G{constructor(t){super(),R(this,t,pe,de,D,{})}}function Q(a,t,l){const s=a.slice();return s[4]=t[l],s}function ve(a){let t,l,s,i;return{c(){t=W(a[1]),l=q(),s=g("p"),i=W(a[2]),this.h()},l(e){t=z(e,a[1]),l=H(e),s=v(e,"P",{class:!0});var n=w(s);i=z(n,a[2]),n.forEach(_),this.h()},h(){m(s,"class","light svelte-1bv86sv")},m(e,n){k(e,t,n),k(e,l,n),k(e,s,n),p(s,i)},p(e,n){n&2&&B(t,e[1]),n&4&&B(i,e[2])},d(e){e&&(_(t),_(l),_(s))}}}function X(a){let t,l;return t=new _e({props:{data:a[4],name:a[3]}}),{c(){A(t.$$.fragment)},l(s){O(t.$$.fragment,s)},m(s,i){T(t,s,i),l=!0},p(s,i){const e={};i&1&&(e.data=s[4]),i&8&&(e.name=s[3]),t.$set(e)},i(s){l||(P(t.$$.fragment,s),l=!0)},o(s){S(t.$$.fragment,s),l=!1},d(s){U(t,s)}}}function be(a){let t,l,s,i;t=new ge({props:{$$slots:{default:[ve]},$$scope:{ctx:a}}});let e=K(a[0]),n=[];for(let r=0;r<e.length;r+=1)n[r]=X(Q(a,e,r));const u=r=>S(n[r],1,1,()=>{n[r]=null});return{c(){A(t.$$.fragment),l=q(),s=g("div");for(let r=0;r<n.length;r+=1)n[r].c();this.h()},l(r){O(t.$$.fragment,r),l=H(r),s=v(r,"DIV",{class:!0});var o=w(s);for(let c=0;c<n.length;c+=1)n[c].l(o);o.forEach(_),this.h()},h(){m(s,"class","grid-container svelte-1bv86sv")},m(r,o){T(t,r,o),k(r,l,o),k(r,s,o);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(s,null);i=!0},p(r,[o]){const c={};if(o&134&&(c.$$scope={dirty:o,ctx:r}),t.$set(c),o&9){e=K(r[0]);let f;for(f=0;f<e.length;f+=1){const b=Q(r,e,f);n[f]?(n[f].p(b,o),P(n[f],1)):(n[f]=X(b),n[f].c(),P(n[f],1),n[f].m(s,null))}for(ne(),f=e.length;f<n.length;f+=1)u(f);ae()}},i(r){if(!i){P(t.$$.fragment,r);for(let o=0;o<e.length;o+=1)P(n[o]);i=!0}},o(r){S(t.$$.fragment,r),n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)S(n[o]);i=!1},d(r){r&&(_(l),_(s)),U(t,r),re(n,r)}}}function ye(a,t,l){let{projectsList:s}=t,{title:i}=t,{leadin:e}=t,{name:n}=t;return a.$$set=u=>{"projectsList"in u&&l(0,s=u.projectsList),"title"in u&&l(1,i=u.title),"leadin"in u&&l(2,e=u.leadin),"name"in u&&l(3,n=u.name)},[s,i,e,n]}class Pe extends G{constructor(t){super(),R(this,t,ye,be,D,{projectsList:0,title:1,leadin:2,name:3})}}export{Pe as G};