import{S as z,i as B,s as J,J as K,l as p,a as D,m as g,p as $,c as H,h as _,q as d,b as v,H as y,K as R,L as U,M as F,f as C,g as G,d as P,t as k,O as Q,u as E,v as x,n as I,x as M,y as V,r as N,z as q,C as L,N as T}from"../chunks/index-0aa11635.js";import{C as W}from"../chunks/courses-list-90193601.js";import{I as X}from"../chunks/icon-card-d888e0c1.js";function j(n,e,t){const s=n.slice();return s[3]=e[t],s}const Y=n=>({}),A=n=>({});function Z(n){let e;return{c(){e=E("Courses")},l(t){e=x(t,"Courses")},m(t,s){v(t,e,s)},d(t){t&&_(e)}}}function O(n){let e,t;return{c(){e=p("h2"),t=E("No hay ning\xFAn elemento para mostrar \u{1F625}")},l(s){e=g(s,"H2",{});var l=$(e);t=x(l,"No hay ning\xFAn elemento para mostrar \u{1F625}"),l.forEach(_)},m(s,l){v(s,e,l),y(e,t)},p:I,d(s){s&&_(e)}}}function S(n){let e,t,s;return e=new X({props:{title:n[3].title,image:n[3].image,url:n[3].url,titleCentered:n[3].titleCentered,external:n[3].external}}),{c(){t=p("div"),M(e.$$.fragment),this.h()},l(l){t=g(l,"DIV",{style:!0});var i=$(t);V(e.$$.fragment,i),this.h()},h(){N(t,"display","contents"),N(t,"--title-color",n[3].titleColor)},m(l,i){v(l,t,i),q(e,t,null),s=!0},p:I,i(l){s||(C(e.$$.fragment,l),s=!0)},o(l){k(e.$$.fragment,l),s=!1},d(l){l&&_(t),L(e,l)}}}function ee(n){let e,t,s,l;const i=n[2].title,m=K(i,n,n[1],A),a=m||Z();let u=n[0],o=[];for(let r=0;r<u.length;r+=1)o[r]=S(j(n,u,r));const b=r=>k(o[r],1,1,()=>{o[r]=null});let h=null;return u.length||(h=O()),{c(){e=p("div"),a&&a.c(),t=D(),s=p("div");for(let r=0;r<o.length;r+=1)o[r].c();h&&h.c(),this.h()},l(r){e=g(r,"DIV",{class:!0});var f=$(e);a&&a.l(f),t=H(f),s=g(f,"DIV",{class:!0,name:!0});var c=$(s);for(let w=0;w<o.length;w+=1)o[w].l(c);h&&h.l(c),c.forEach(_),f.forEach(_),this.h()},h(){d(s,"class","cards svelte-gwofks"),d(s,"name","cards"),d(e,"class","list")},m(r,f){v(r,e,f),a&&a.m(e,null),y(e,t),y(e,s);for(let c=0;c<o.length;c+=1)o[c].m(s,null);h&&h.m(s,null),l=!0},p(r,[f]){if(m&&m.p&&(!l||f&2)&&R(m,i,r,r[1],l?F(i,r[1],f,Y):U(r[1]),A),f&1){u=r[0];let c;for(c=0;c<u.length;c+=1){const w=j(r,u,c);o[c]?(o[c].p(w,f),C(o[c],1)):(o[c]=S(w),o[c].c(),C(o[c],1),o[c].m(s,null))}for(G(),c=u.length;c<o.length;c+=1)b(c);P(),!u.length&&h?h.p(r,f):u.length?h&&(h.d(1),h=null):(h=O(),h.c(),h.m(s,null))}},i(r){if(!l){C(a,r);for(let f=0;f<u.length;f+=1)C(o[f]);l=!0}},o(r){k(a,r),o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)k(o[f]);l=!1},d(r){r&&_(e),a&&a.d(r),Q(o,r),h&&h.d()}}}function te(n,e,t){let{$$slots:s={},$$scope:l}=e,i=[{title:"freeCodeCamp",image:"/otros-medios/fcc.svg",url:"https://www.freecodecamp.org/",titleCentered:!0,external:!0,titleColor:"var(--white)"},{title:"Udemy",image:"/otros-medios/udemy.svg",url:"https://www.udemy.com/",titleCentered:!0,external:!0,titleColor:"var(--white)"}];return n.$$set=m=>{"$$scope"in m&&t(1,l=m.$$scope)},[i,l,s]}class se extends z{constructor(e){super(),B(this,e,te,ee,J,{})}}function le(n){let e,t,s;return{c(){e=p("h1"),t=p("a"),s=E("Cursos de programaci\xF3n"),this.h()},l(l){e=g(l,"H1",{slot:!0});var i=$(e);t=g(i,"A",{href:!0,class:!0});var m=$(t);s=x(m,"Cursos de programaci\xF3n"),m.forEach(_),i.forEach(_),this.h()},h(){d(t,"href","/cursos-programacion"),d(t,"class","svelte-kgajhx"),d(e,"slot","title")},m(l,i){v(l,e,i),y(e,t),y(t,s)},p:I,d(l){l&&_(e)}}}function oe(n){let e,t;return{c(){e=p("h1"),t=E("Medios recomendados"),this.h()},l(s){e=g(s,"H1",{slot:!0});var l=$(e);t=x(l,"Medios recomendados"),l.forEach(_),this.h()},h(){d(e,"slot","title")},m(s,l){v(s,e,l),y(e,t)},p:I,d(s){s&&_(e)}}}function re(n){let e,t,s,l,i,m;return s=new W({props:{$$slots:{title:[le]},$$scope:{ctx:n}}}),i=new se({props:{$$slots:{title:[oe]},$$scope:{ctx:n}}}),{c(){e=D(),t=p("div"),M(s.$$.fragment),l=D(),M(i.$$.fragment),this.h()},l(a){T('[data-svelte="svelte-1f6eux6"]',document.head).forEach(_),e=H(a),t=g(a,"DIV",{class:!0});var o=$(t);V(s.$$.fragment,o),l=H(o),V(i.$$.fragment,o),o.forEach(_),this.h()},h(){document.title="Apollo Learn",d(t,"class","main svelte-kgajhx")},m(a,u){v(a,e,u),v(a,t,u),q(s,t,null),y(t,l),q(i,t,null),m=!0},p(a,[u]){const o={};u&1&&(o.$$scope={dirty:u,ctx:a}),s.$set(o);const b={};u&1&&(b.$$scope={dirty:u,ctx:a}),i.$set(b)},i(a){m||(C(s.$$.fragment,a),C(i.$$.fragment,a),m=!0)},o(a){k(s.$$.fragment,a),k(i.$$.fragment,a),m=!1},d(a){a&&_(e),a&&_(t),L(s),L(i)}}}class ce extends z{constructor(e){super(),B(this,e,null,re,J,{})}}export{ce as default};
