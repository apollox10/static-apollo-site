import{S as B,i as C,s as D,l as v,u as _,a as w,m as j,p as b,v as d,h,c as k,q as E,b as A,H as i,w as L,n as S,o as I}from"../../chunks/index-0b244a7b.js";function U(r){let e,s,n,u;return{c(){e=v("h2"),s=_('La p\xE1gina que ingresaste, "'),n=_(r[0]),u=_('" no existe.'),this.h()},l(l){e=j(l,"H2",{class:!0});var t=b(e);s=d(t,'La p\xE1gina que ingresaste, "'),n=d(t,r[0]),u=d(t,'" no existe.'),t.forEach(h),this.h()},h(){E(e,"class","svelte-12sn9tj")},m(l,t){A(l,e,t),i(e,s),i(e,n),i(e,u)},p(l,t){t&1&&L(n,l[0])},d(l){l&&h(e)}}}function N(r){let e,s,n,u,l,t,m=r[1].name+"",g,q,p,H,a=r[2]===404&&U(r);return{c(){e=v("body"),s=v("main"),n=v("h1"),u=_("Ups, sucedi\xF3 un error jeje"),l=w(),t=v("h1"),g=_(m),q=w(),p=_(r[2]),H=w(),a&&a.c(),this.h()},l(o){e=j(o,"BODY",{class:!0});var c=b(e);s=j(c,"MAIN",{});var f=b(s);n=j(f,"H1",{class:!0});var M=b(n);u=d(M,"Ups, sucedi\xF3 un error jeje"),M.forEach(h),l=k(f),t=j(f,"H1",{class:!0});var y=b(t);g=d(y,m),q=k(y),p=d(y,r[2]),y.forEach(h),H=k(f),a&&a.l(f),f.forEach(h),c.forEach(h),this.h()},h(){E(n,"class","svelte-12sn9tj"),E(t,"class","svelte-12sn9tj"),E(e,"class","svelte-12sn9tj")},m(o,c){A(o,e,c),i(e,s),i(s,n),i(n,u),i(s,l),i(s,t),i(t,g),i(t,q),i(t,p),i(s,H),a&&a.m(s,null)},p(o,[c]){c&2&&m!==(m=o[1].name+"")&&L(g,m),c&4&&L(p,o[2]),o[2]===404?a?a.p(o,c):(a=U(o),a.c(),a.m(s,null)):a&&(a.d(1),a=null)},i:S,o:S,d(o){o&&h(e),a&&a.d()}}}const z=({error:r,status:e})=>({props:{error:r,status:e}});function O(r,e,s){let{error:n}=e,{status:u}=e;I(()=>s(0,l=window.location.href));let{url:l}=e;return r.$$set=t=>{"error"in t&&s(1,n=t.error),"status"in t&&s(2,u=t.status),"url"in t&&s(0,l=t.url)},[l,n,u]}class F extends B{constructor(e){super(),C(this,e,O,N,D,{error:1,status:2,url:0})}}export{F as default,z as load};
