import{s as q,f as b,a as M,g as k,h as T,c as A,d,j as u,i as E,w as v,u as B,y as G,l as y,m as z,n as C,v as V,I as Q,r as R,B as W}from"./scheduler.029577ac.js";import{S as X,i as Y,a as F,h as j,g as J,t as K,c as Z,f as L}from"./index.1a91680c.js";import{e as N}from"./Paragraph.740ff94b.js";import{s as x}from"./maozinha.77d64535.js";import{a as O}from"./index.1d80c879.js";function H(i,e,r){const t=i.slice();return t[11]=e[r],t[13]=r,t}function $(i){let e,r,t,s=i[0][i[1]].word+"",n;return{c(){e=b("div"),r=y(`What is the meaning of the term:
			`),t=b("span"),n=y(s),this.h()},l(l){e=k(l,"DIV",{id:!0,class:!0});var a=T(e);r=z(a,`What is the meaning of the term:
			`),t=k(a,"SPAN",{id:!0,class:!0});var p=T(t);n=z(p,s),p.forEach(d),a.forEach(d),this.h()},h(){u(t,"id","current-word"),u(t,"class","svelte-12z2u1i"),u(e,"id","title"),u(e,"class"," svelte-12z2u1i")},m(l,a){E(l,e,a),v(e,r),v(e,t),v(t,n)},p(l,a){a&3&&s!==(s=l[0][l[1]].word+"")&&C(n,s)},d(l){l&&d(e)}}}function ee(i){let e,r='<span id="current-word" class="svelte-12z2u1i">GG!</span>';return{c(){e=b("div"),e.innerHTML=r,this.h()},l(t){e=k(t,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),V(e)!=="svelte-t21om"&&(e.innerHTML=r),this.h()},h(){u(e,"id","title"),u(e,"class"," svelte-12z2u1i")},m(t,s){E(t,e,s)},p:G,d(t){t&&d(e)}}}function te(i){let e,r=`Your answer is
			<span id="current-word" class="svelte-12z2u1i">Incorrect!</span>`;return{c(){e=b("div"),e.innerHTML=r,this.h()},l(t){e=k(t,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),V(e)!=="svelte-1nlnlig"&&(e.innerHTML=r),this.h()},h(){u(e,"id","title"),u(e,"class","wrong svelte-12z2u1i")},m(t,s){E(t,e,s)},p:G,d(t){t&&d(e)}}}function re(i){let e,r=`Your answer is
			<span id="current-word" class="svelte-12z2u1i">Correct!</span>`;return{c(){e=b("div"),e.innerHTML=r,this.h()},l(t){e=k(t,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),V(e)!=="svelte-1shmv0s"&&(e.innerHTML=r),this.h()},h(){u(e,"id","title"),u(e,"class","right svelte-12z2u1i")},m(t,s){E(t,e,s)},p:G,d(t){t&&d(e)}}}function se(i){let e,r=N(i[0][i[1]].options),t=[];for(let s=0;s<r.length;s+=1)t[s]=U(H(i,r,s));return{c(){e=b("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=k(s,"DIV",{id:!0,class:!0});var n=T(e);for(let l=0;l<t.length;l+=1)t[l].l(n);n.forEach(d),this.h()},h(){u(e,"id","options"),u(e,"class","svelte-12z2u1i")},m(s,n){E(s,e,n);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,null)},p(s,n){if(n&143){r=N(s[0][s[1]].options);let l;for(l=0;l<r.length;l+=1){const a=H(s,r,l);t[l]?t[l].p(a,n):(t[l]=U(a),t[l].c(),t[l].m(e,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=r.length}},i:G,o:G,d(s){s&&d(e),Q(t,s)}}}function ie(i){let e,r,t,s,n,l=i[0].length+"",a,p;return{c(){e=b("div"),r=y(`Score:
			`),t=b("span"),s=y(i[4]),n=y("/"),a=y(l),this.h()},l(h){e=k(h,"DIV",{id:!0,class:!0});var f=T(e);r=z(f,`Score:
			`),t=k(f,"SPAN",{class:!0});var w=T(t);s=z(w,i[4]),n=z(w,"/"),a=z(w,l),w.forEach(d),f.forEach(d),this.h()},h(){u(t,"class","svelte-12z2u1i"),u(e,"id","score"),u(e,"class","svelte-12z2u1i")},m(h,f){E(h,e,f),v(e,r),v(e,t),v(t,s),v(t,n),v(t,a)},p(h,f){f&16&&C(s,h[4]),f&1&&l!==(l=h[0].length+"")&&C(a,l)},i(h){h&&(p||R(()=>{p=j(e,O,{y:-100,duration:1e3}),p.start()}))},o:G,d(h){h&&d(e)}}}function P(i){let e,r,t,s;return{c(){e=b("img"),this.h()},l(n){e=k(n,"IMG",{id:!0,src:!0,alt:!0,class:!0}),this.h()},h(){u(e,"id","selected-img"),W(e.src,r=x)||u(e,"src",r),u(e,"alt","Opção selecionada"),u(e,"class","svelte-12z2u1i")},m(n,l){E(n,e,l),s=!0},i(n){s||(n&&R(()=>{s&&(t||(t=L(e,O,{x:-50,duration:100},!0)),t.run(1))}),s=!0)},o(n){n&&(t||(t=L(e,O,{x:-50,duration:100},!1)),t.run(0)),s=!1},d(n){n&&d(e),n&&t&&t.end()}}}function U(i){let e,r,t,s=i[13]+1+"",n,l,a,p=i[11].text+"",h,f,w,I,m,c=i[2]==i[13]+1&&P();function S(){return i[8](i[13])}return{c(){e=b("button"),r=b("div"),c&&c.c(),t=y(`
						Option `),n=y(s),l=M(),a=b("div"),h=y(p),f=M(),this.h()},l(g){e=k(g,"BUTTON",{id:!0,class:!0});var o=T(e);r=k(o,"DIV",{class:!0});var _=T(r);c&&c.l(_),t=z(_,`
						Option `),n=z(_,s),_.forEach(d),l=A(o),a=k(o,"DIV",{class:!0});var D=T(a);h=z(D,p),D.forEach(d),f=A(o),o.forEach(d),this.h()},h(){u(r,"class","option-title svelte-12z2u1i"),u(a,"class","option-text svelte-12z2u1i"),u(e,"id","option"+(i[13]+1)),u(e,"class",w="option "+(i[2]==i[13]+1?"option-selected":"")+" "+(i[3]==1?"option-right":"")+" "+(i[3]==-1?"option-wrong":"")+" svelte-12z2u1i")},m(g,o){E(g,e,o),v(e,r),c&&c.m(r,null),v(r,t),v(r,n),v(e,l),v(e,a),v(a,h),v(e,f),I||(m=B(e,"click",S),I=!0)},p(g,o){i=g,i[2]==i[13]+1?c?o&4&&F(c,1):(c=P(),c.c(),F(c,1),c.m(r,t)):c&&(J(),K(c,1,1,()=>{c=null}),Z()),o&3&&p!==(p=i[11].text+"")&&C(h,p),o&12&&w!==(w="option "+(i[2]==i[13]+1?"option-selected":"")+" "+(i[3]==1?"option-right":"")+" "+(i[3]==-1?"option-wrong":"")+" svelte-12z2u1i")&&u(e,"class",w)},d(g){g&&d(e),c&&c.d(),I=!1,m()}}}function le(i){let e="<Select an option>",r;return{c(){r=y(e)},l(t){r=z(t,e)},m(t,s){E(t,r,s)},d(t){t&&d(r)}}}function ne(i){let e="< Play again",r;return{c(){r=y(e)},l(t){r=z(t,e)},m(t,s){E(t,r,s)},d(t){t&&d(r)}}}function oe(i){let e;return{c(){e=y("Check the answer")},l(r){e=z(r,"Check the answer")},m(r,t){E(r,e,t)},d(r){r&&d(e)}}}function ae(i){let e="Next word >",r;return{c(){r=y(e)},l(t){r=z(t,e)},m(t,s){E(t,r,s)},d(t){t&&d(r)}}}function ce(i){let e,r,t,s,n,l,a;function p(o,_){return o[3]==1?re:o[3]==-1?te:o[5]?ee:$}let h=p(i),f=h(i);function w(o,_){return o[5]?ie:se}let I=w(i),m=I(i);function c(o,_){return o[3]!=0?ae:o[2]!=0?oe:o[5]?ne:le}let S=c(i),g=S(i);return{c(){e=b("div"),f.c(),r=M(),m.c(),t=M(),s=b("button"),g.c(),this.h()},l(o){e=k(o,"DIV",{id:!0,class:!0});var _=T(e);f.l(_),r=A(_),m.l(_),t=A(_),s=k(_,"BUTTON",{id:!0,class:!0});var D=T(s);g.l(D),D.forEach(d),_.forEach(d),this.h()},h(){u(s,"id","next"),u(s,"class",n=(i[2]!=0||i[5]?"selected":"")+" "+(i[3]==1?"answered-right":"")+" "+(i[3]==-1?"answered-wrong":"")+" svelte-12z2u1i"),u(e,"id","quiz-container"),u(e,"class","svelte-12z2u1i")},m(o,_){E(o,e,_),f.m(e,null),v(e,r),m.m(e,null),v(e,t),v(e,s),g.m(s,null),l||(a=B(s,"click",i[6]),l=!0)},p(o,[_]){h===(h=p(o))&&f?f.p(o,_):(f.d(1),f=h(o),f&&(f.c(),f.m(e,r))),I===(I=w(o))&&m?m.p(o,_):(m.d(1),m=I(o),m&&(m.c(),F(m,1),m.m(e,t))),S!==(S=c(o))&&(g.d(1),g=S(o),g&&(g.c(),g.m(s,null))),_&44&&n!==(n=(o[2]!=0||o[5]?"selected":"")+" "+(o[3]==1?"answered-right":"")+" "+(o[3]==-1?"answered-wrong":"")+" svelte-12z2u1i")&&u(s,"class",n)},i(o){F(m)},o:G,d(o){o&&d(e),f.d(),m.d(),g.d(),l=!1,a()}}}function ue(i,e,r){let t=[{word:"EASTER EGG",options:[{text:"Surprise element that releases a pet in children's games.",correct:!1},{text:"Surprises or references deliberately left for the players to discover.",correct:!0}]},{word:"CAMPER",options:[{text:"A person who stands in a fixed place to kill other players. Famous in multiplayer games.",correct:!0},{text:"Anyone who loves games that imitate camping, such as Farmville or Animal Crossing.",correct:!1}]},{word:"F",options:[{text:'F is used when the character dies ("F for respects"). It is used when someone has died miserably in a game.',correct:!0},{text:'F is used when the character asks the opponent to play fairly, ("F for fair", "press F for fair").',correct:!1}]},{word:"GG",options:[{text:"Good Game. Used in multiplayer matches where people have given their best.",correct:!0},{text:"Go Game. Used to encourage players before the match starts.",correct:!1}]},{word:"TO LURE",options:[{text:"To lure a target to a specific location in order to gain an advantage.",correct:!0},{text:"Lure is to bring good luck to players when things aren't going well.",correct:!1}]},{word:"TO NERF",options:[{text:"A term used when game developers weaken a character or element with the intention of balancing the game.",correct:!0},{text:"It's the term for a player who has killed too many people with a single weapon in a game.",correct:!1}]},{word:"NOOB",options:[{text:"Players who are new to the game, or don't know how to play it.",correct:!0},{text:"It means winning by a very large margin and humiliating your opponent.",correct:!1}]},{word:"X1",options:[{text:"1×1 (one versus one) which means a duel between two players to see who is the best.",correct:!0},{text:"X1 is the player with the highest score in a multiplayer game, the mvp of that group.",correct:!1}]}],{data:s=t}=e,n=0,l=0,a=0,p=0,h=!1;s.sort(()=>Math.random()-.5),s.forEach(c=>{c.options.sort(()=>Math.random()-.5)});const f=c=>{c.correct?(r(3,a=1),r(4,p+=1)):r(3,a=-1)},w=()=>{if(h&&(r(1,n=0),r(2,l=0),r(3,a=0),r(4,p=0),r(5,h=!1)),l!=0)if(a!=0){n<s.length-1?r(1,n+=1):r(5,h=!0),r(2,l=0),r(3,a=0);return}else f(s[n].options[l-1])},I=c=>{a==0?r(2,l=c):w()},m=c=>{I(c+1)};return i.$$set=c=>{"data"in c&&r(0,s=c.data)},[s,n,l,a,p,h,w,I,m]}class me extends X{constructor(e){super(),Y(this,e,ue,ce,q,{data:0})}}export{me as Q};