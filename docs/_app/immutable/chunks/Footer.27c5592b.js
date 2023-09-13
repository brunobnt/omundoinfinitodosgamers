import{s as O,f as p,a as $,g as m,h as b,c as L,d as u,j as c,J as V,i as y,w as x,u as I,o as ne,v as te,r as R,I as se,l as D,m as F,S as ie,y as M,B as le,G as ae,K as U,L as j,e as q}from"./scheduler.029577ac.js";import{S,i as G,a as N,g as re,t as P,c as oe,f as C}from"./index.1a91680c.js";import{e as A,M as he,a as ce}from"./Paragraph.740ff94b.js";import{b as B}from"./paths.c0267b5e.js";import{f as W,c as Y,s as J}from"./index.1d80c879.js";function K(a,e,n){const t=a.slice();return t[5]=e[n],t}function Z(a){let e,n,t,s,l,r=`<h2 class="svelte-u2nhva">The infinite world of gamers</h2> <div id="language-selection" class="svelte-u2nhva"><a class="language-link pt svelte-u2nhva" href="${B+"/"}">PT 🇧🇷</a> <a class="language-link en selected svelte-u2nhva" href="${B+"/en"}">EN 🇺🇸</a></div>`,i,v,g,f,d=A(a[1]),h=[];for(let o=0;o<d.length;o+=1)h[o]=z(K(a,d,o));return{c(){e=p("div"),t=$(),s=p("div"),l=p("div"),l.innerHTML=r,i=$(),v=p("div");for(let o=0;o<h.length;o+=1)h[o].c();this.h()},l(o){e=m(o,"DIV",{id:!0,class:!0}),b(e).forEach(u),t=L(o),s=m(o,"DIV",{id:!0,class:!0});var k=b(s);l=m(k,"DIV",{"data-svelte-h":!0}),te(l)!=="svelte-1pkcrh9"&&(l.innerHTML=r),i=L(k),v=m(k,"DIV",{});var _=b(v);for(let w=0;w<h.length;w+=1)h[w].l(_);_.forEach(u),k.forEach(u),this.h()},h(){c(e,"id","menu-screen-overlay"),c(e,"class","svelte-u2nhva"),c(s,"id","navigation-menu"),c(s,"class","svelte-u2nhva")},m(o,k){y(o,e,k),y(o,t,k),y(o,s,k),x(s,l),x(s,i),x(s,v);for(let _=0;_<h.length;_+=1)h[_]&&h[_].m(v,null);f=!0},p(o,k){if(k&14){d=A(o[1]);let _;for(_=0;_<d.length;_+=1){const w=K(o,d,_);h[_]?h[_].p(w,k):(h[_]=z(w),h[_].c(),h[_].m(v,null))}for(;_<h.length;_+=1)h[_].d(1);h.length=d.length}},i(o){f||(o&&R(()=>{f&&(n||(n=C(e,W,{duration:300},!0)),n.run(1))}),o&&R(()=>{f&&(g||(g=C(s,J,{duration:300,easing:Y,axis:"y"},!0)),g.run(1))}),f=!0)},o(o){o&&(n||(n=C(e,W,{duration:300},!1)),n.run(0)),o&&(g||(g=C(s,J,{duration:300,easing:Y,axis:"y"},!1)),g.run(0)),f=!1},d(o){o&&(u(e),u(t),u(s)),o&&n&&n.end(),se(h,o),o&&g&&g.end()}}}function z(a){let e,n=a[5].text+"",t,s,l;return{c(){e=p("a"),t=D(n),this.h()},l(r){e=m(r,"A",{href:!0,class:!0});var i=b(e);t=F(i,n),i.forEach(u),this.h()},h(){c(e,"href",B+a[5].href),c(e,"class","svelte-u2nhva"),ie(e,"active-link",a[2](a[5].href))},m(r,i){y(r,e,i),x(e,t),s||(l=I(e,"click",a[3]),s=!0)},p:M,d(r){r&&u(e),s=!1,l()}}}function ue(a){let e,n;return{c(){e=p("img"),this.h()},l(t){e=m(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){le(e.src,n=he)||c(e,"src",n),c(e,"alt","Menu"),c(e,"class","svelte-u2nhva")},m(t,s){y(t,e,s)},d(t){t&&u(e)}}}function fe(a){let e,n;return{c(){e=p("img"),this.h()},l(t){e=m(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){le(e.src,n=ce)||c(e,"src",n),c(e,"alt","Menu"),c(e,"class","svelte-u2nhva")},m(t,s){y(t,e,s)},d(t){t&&u(e)}}}function de(a){let e,n,t,s,l,r,i=a[0]&&Z(a);function v(d,h){return d[0]?fe:ue}let g=v(a),f=g(a);return{c(){e=p("nav"),i&&i.c(),n=$(),t=p("button"),f.c(),this.h()},l(d){e=m(d,"NAV",{class:!0});var h=b(e);i&&i.l(h),n=L(h),t=m(h,"BUTTON",{id:!0,class:!0,type:!0});var o=b(t);f.l(o),o.forEach(u),h.forEach(u),this.h()},h(){c(t,"id","menu-button"),c(t,"class",s=V(a[0]?"menu-displayed":"")+" svelte-u2nhva"),c(t,"type","button"),c(e,"class","svelte-u2nhva")},m(d,h){y(d,e,h),i&&i.m(e,null),x(e,n),x(e,t),f.m(t,null),l||(r=I(t,"click",a[3]),l=!0)},p(d,[h]){d[0]?i?(i.p(d,h),h&1&&N(i,1)):(i=Z(d),i.c(),N(i,1),i.m(e,n)):i&&(re(),P(i,1,1,()=>{i=null}),oe()),g!==(g=v(d))&&(f.d(1),f=g(d),f&&(f.c(),f.m(t,null))),h&1&&s!==(s=V(d[0]?"menu-displayed":"")+" svelte-u2nhva")&&c(t,"class",s)},i(d){N(i)},o(d){P(i)},d(d){d&&u(e),i&&i.d(),f.d(),l=!1,r()}}}function ve(a,e,n){let t="",s=!1,l=[{index:0,href:"/en",text:"Introduction"},{index:1,href:"/en/choose-your-player",text:"1 - Choose your player"},{index:2,href:"/en/the-great-league",text:"2 - The great league"},{index:3,href:"/en/life-vs-fantasy",text:"3 - Life vs Fantasy"},{index:4,href:"/en/the-toxic-side",text:"4 - The toxic side"},{index:5,href:"/en/exploring-the-map",text:"5 - Exploring the map"},{index:6,href:"/en/insights-for-brands",text:"Insights for brands"},{index:7,href:"/en/press-start",text:"Your brand in the game"}];const r=v=>t.endsWith(v),i=()=>n(0,s=!s);return ne(()=>t=window.location.href),[s,l,r,i]}class Me extends S{constructor(e){super(),G(this,e,ve,de,O,{})}}function Q(a,e,n){const t=a.slice();return t[7]=e[n],t}function _e(a){let e,n,t=a[7].index+"",s;return{c(){e=p("div"),n=D("Chapter "),s=D(t),this.h()},l(l){e=m(l,"DIV",{class:!0});var r=b(e);n=F(r,"Chapter "),s=F(r,t),r.forEach(u),this.h()},h(){c(e,"class","chapter-index svelte-cghwx7")},m(l,r){y(l,e,r),x(e,n),x(e,s)},p:M,d(l){l&&u(e)}}}function ge(a){let e,n;return{c(){e=U("svg"),n=U("path"),this.h()},l(t){e=j(t,"svg",{class:!0});var s=b(e);n=j(s,"path",{d:!0,class:!0}),b(n).forEach(u),s.forEach(u),this.h()},h(){c(n,"d","M4.63636 0L0 4.63636L7.72727 12.3636L0 20.0909L4.63636 24.7273L17 12.3636L4.63636 0Z"),c(n,"class","svelte-cghwx7"),c(e,"class","svelte-cghwx7")},m(t,s){y(t,e,s),x(e,n)},d(t){t&&u(e)}}}function X(a){let e,n,t,s,l,r=a[7].text+"",i,v,g,f,d,h=a[7].index<=5&&_e(a),o=a[7].index<=5&&ge();function k(){return a[3](a[7])}function _(){return a[5](a[7])}return{c(){e=p("a"),h&&h.c(),n=$(),t=p("div"),o&&o.c(),s=$(),l=p("span"),i=D(r),v=$(),this.h()},l(w){e=m(w,"A",{class:!0,href:!0});var E=b(e);h&&h.l(E),n=L(E),t=m(E,"DIV",{class:!0});var T=b(t);o&&o.l(T),s=L(T),l=m(T,"SPAN",{class:!0});var H=b(l);i=F(H,r),H.forEach(u),T.forEach(u),v=L(E),E.forEach(u),this.h()},h(){c(l,"class","svelte-cghwx7"),c(t,"class","chapter-title svelte-cghwx7"),c(e,"class",g=V(`${a[0]===a[7].index?"highlighted-option":""} 
					${a[0]&&a[0]!==a[7].index?"unhighlighted-option":""}`)+" svelte-cghwx7"),c(e,"href",B+a[7].href)},m(w,E){y(w,e,E),h&&h.m(e,null),x(e,n),x(e,t),o&&o.m(t,null),x(t,s),x(t,l),x(l,i),x(e,v),f||(d=[I(e,"mouseover",k),I(e,"mouseleave",a[4]),I(e,"focus",_),I(e,"blur",a[6])],f=!0)},p(w,E){a=w,a[7].index<=5&&h.p(a,E),E&1&&g!==(g=V(`${a[0]===a[7].index?"highlighted-option":""} 
					${a[0]&&a[0]!==a[7].index?"unhighlighted-option":""}`)+" svelte-cghwx7")&&c(e,"class",g)},d(w){w&&u(e),h&&h.d(),o&&o.d(),f=!1,ae(d)}}}function pe(a){let e,n,t=A(a[1]),s=[];for(let l=0;l<t.length;l+=1)s[l]=X(Q(a,t,l));return{c(){e=p("nav"),n=p("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=m(l,"NAV",{class:!0});var r=b(e);n=m(r,"DIV",{id:!0,class:!0});var i=b(n);for(let v=0;v<s.length;v+=1)s[v].l(i);i.forEach(u),r.forEach(u),this.h()},h(){c(n,"id","nav-container"),c(n,"class","svelte-cghwx7"),c(e,"class","svelte-cghwx7")},m(l,r){y(l,e,r),x(e,n);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(n,null)},p(l,[r]){if(r&7){t=A(l[1]);let i;for(i=0;i<t.length;i+=1){const v=Q(l,t,i);s[i]?s[i].p(v,r):(s[i]=X(v),s[i].c(),s[i].m(n,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=t.length}},i:M,o:M,d(l){l&&u(e),se(s,l)}}}function me(a,e,n){const t=[{index:1,href:"/en/choose-your-player",text:"Choose your player"},{index:2,href:"/en/the-great-league",text:"The great league"},{index:3,href:"/en/life-vs-fantasy",text:"Life vs Fantasy"},{index:4,href:"/en/the-toxic-side",text:"The toxic side"},{index:5,href:"/en/exploring-the-map",text:"Exploring the map"},{index:6,href:"/en/insights-for-brands",text:"Insights for brands"},{index:7,href:"/en/press-start",text:"Your brand in the game"}];let s=null;const l=f=>n(0,s=f);return[s,t,l,f=>l(f.index),()=>l(null),f=>l(f.index),()=>l(null)]}class Te extends S{constructor(e){super(),G(this,e,me,pe,O,{})}}const xe=""+new URL("../assets/talk-live-en.8c6b7355.png",import.meta.url).href,be=""+new URL("../assets/sponsors-brands-en.632f1be3.png",import.meta.url).href;function ee(a){let e;return{c(){e=p("div"),this.h()},l(n){e=m(n,"DIV",{id:!0,class:!0}),b(e).forEach(u),this.h()},h(){c(e,"id","footer-easter-egg"),c(e,"class","svelte-xy4t1w")},m(n,t){y(n,e,t)},d(n){n&&u(e)}}}function ye(a){let e,n=`<div id="footer-content-wrapper" class="svelte-xy4t1w"><div id="footer-content-lines-wrapper" class="svelte-xy4t1w"><div id="footer-content-line-1" class="svelte-xy4t1w"><img src="${xe}" alt="" class="svelte-xy4t1w"/> <h2 class="svelte-xy4t1w">The Infinite World of Gamers</h2></div> <div id="footer-content-line-2" class="svelte-xy4t1w"><img src="${be}" alt="" class="svelte-xy4t1w"/></div></div> <div id="footer-content-line-3" class="svelte-xy4t1w">design by <a href="https://odd.studio/" target="blank" class="svelte-xy4t1w">odd.studio</a></div></div>`,t,s,l=a[0]&&ee();return{c(){e=p("footer"),e.innerHTML=n,t=$(),l&&l.c(),s=q(),this.h()},l(r){e=m(r,"FOOTER",{class:!0,"data-svelte-h":!0}),te(e)!=="svelte-1xaa99j"&&(e.innerHTML=n),t=L(r),l&&l.l(r),s=q(),this.h()},h(){c(e,"class","svelte-xy4t1w")},m(r,i){y(r,e,i),y(r,t,i),l&&l.m(r,i),y(r,s,i)},p(r,[i]){r[0]?l||(l=ee(),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},i:M,o:M,d(r){r&&(u(e),u(t),u(s)),l&&l.d(r)}}}function we(a,e,n){let{showEasterEgg:t=!0}=e;return a.$$set=s=>{"showEasterEgg"in s&&n(0,t=s.showEasterEgg)},[t]}class Ce extends S{constructor(e){super(),G(this,e,we,ye,O,{showEasterEgg:0})}}export{Te as C,Me as F,xe as L,Ce as a};