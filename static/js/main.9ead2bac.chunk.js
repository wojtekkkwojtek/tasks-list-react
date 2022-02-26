(this["webpackJsonptasks-list-react"]=this["webpackJsonptasks-list-react"]||[]).push([[0],{40:function(n,e,t){"use strict";t.r(e);var r,c,a,o,i,s,d,u,b,l,j,p,x,g,f=t(1),O=t.n(f),h=t(15),k=t.n(h),m=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),a(n),o(n)}))},v=t(5),w=t(6),y=Object(w.a)(r||(r=Object(v.a)(["\n    html {\n        box-sizing: border-box;\n    }\n\n    *, ::after, ::before {\n        box-sizing: inherit;\n    }\n\n    body {\n        background:rgb(178, 199, 218);\n    }\n"]))),z=t(26),D=w.c.form(c||(c=Object(v.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-gap: 20px;\n\n    @media (max-width: 767px) {\n        grid-template-columns: 1fr;\n    }\n"]))),T=w.c.input(a||(a=Object(v.a)(["\n    padding: 10px;\n    border: 1px solid #ddd;\n"]))),C=w.c.button(o||(o=Object(v.a)(["\n    padding: 10px;\n    background: teal;\n    color: white;\n    border: none;\n    transition: 0.5s;\n    cursor: pointer;\n\n    &:hover {\n        background: rgb(0, 128, 90);\n        transform: scale(1.3); \n    }\n\n    &:active {\n        background: rgb(0, 128, 43);\n    }\n"]))),S=t(7),F=t(12),I=t(23),E="tasks",H=function(n){return localStorage.setItem(E,JSON.stringify(n))},J=Object(F.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(E))||[],hideDone:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t[c].done=!t[c].done},removeTask:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t.splice(c,1)},setAllDone:function(n){var e,t=n.tasks,r=Object(I.a)(t);try{for(r.s();!(e=r.n()).done;){e.value.done=!0}}catch(c){r.e(c)}finally{r.f()}},fetchExampleTasks:function(){},setTasks:function(n,e){var t=e.payload;n.tasks=t}}}),L=J.actions,P=L.addTask,R=L.toggleHideDone,A=L.toggleTaskDone,B=L.removeTask,N=L.setAllDone,U=L.fetchExampleTasks,M=L.setTasks,q=function(n){return n.tasks},G=function(n){return q(n).tasks},K=function(n){return q(n).hideDone},Q=function(n){return 0===G(n).length},V=function(n){return G(n).every((function(n){return n.done}))},W=J.reducer,X=t(3),Y=function(){var n=Object(f.useState)(""),e=Object(z.a)(n,2),t=e[0],r=e[1],c=Object(f.useRef)(null),a=Object(S.b)();return Object(X.jsxs)(D,{onSubmit:function(n){n.preventDefault();var e=t.trim();e&&(a(P({content:e,done:!1,id:Object(F.c)()})),r(""),c.current.focus())},children:[Object(X.jsx)(T,{autoFocus:!0,ref:c,value:t,placeholder:"Rzecz do zrobienia",onChange:function(n){return r(n.target.value)}}),Object(X.jsx)(C,{children:"Dodaj zadanie"})]})},Z=w.c.ul(i||(i=Object(v.a)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"]))),$=w.c.li(s||(s=Object(v.a)(["\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    grid-gap: 10px;\n    align-items: center;\n    padding: 10px;\n    border-bottom: 1px solid #ddd;\n    word-break: break-word;\n\n    ","\n"])),(function(n){return n.hidden&&Object(w.b)(d||(d=Object(v.a)(["\n        display: none;\n    "])))})),_=w.c.span(u||(u=Object(v.a)(["\n    ","\n"])),(function(n){return n.done&&Object(w.b)(b||(b=Object(v.a)(["\n        text-decoration: line-through;\n    "])))})),nn=w.c.button(l||(l=Object(v.a)(["\n    border: none;\n    background-color: white;\n    width: 30px;\n    height: 30px;\n    padding: 0;\n    transition: background-color 0.5s;\n    cursor: pointer;\n\n    ","\n\n    ","\n"])),(function(n){return n.toggleDone&&Object(w.b)(j||(j=Object(v.a)(["\n        background-color: rgb(0, 128, 64);\n\n        &:hover {\n            background-color: rgb(1, 95, 48);\n        }\n\n        &:active {\n            background-color: rgb(2, 49, 25);\n        }\n    "])))}),(function(n){return n.remove&&Object(w.b)(p||(p=Object(v.a)(["\n        background-color: rgb(199, 3, 3);\n\n        &:hover {\n            background-color: rgb(138, 3, 3);\n        }\n\n        &:active {\n            background-color: rgb(80, 1, 1);\n        }\n    "])))})),en=function(){var n=Object(S.c)(G),e=Object(S.c)(K),t=Object(S.b)();return Object(X.jsx)(Z,{children:n.map((function(n){return Object(X.jsxs)($,{hidden:n.done&&e,children:[Object(X.jsx)(nn,{toggleDone:!0,onClick:function(){return t(A(n.id))},children:n.done?"\u2713":""}),Object(X.jsx)(_,{done:n.done,children:n.content}),Object(X.jsx)(nn,{remove:!0,onClick:function(){return t(B(n.id))},children:"\ud83d\uddd1"})]},n.id)}))})},tn=t(8),rn=t.n(tn),cn=t(10),an=t(24),on=function(){var n=Object(an.a)(rn.a.mark((function n(){var e;return rn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/tasks-list-react/exampleTasks.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),sn=rn.a.mark(bn),dn=rn.a.mark(ln),un=rn.a.mark(jn);function bn(){var n;return rn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(cn.c)(1e3);case 3:return e.next=5,Object(cn.b)(on);case 5:return n=e.sent,e.next=8,Object(cn.d)(M(n));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(cn.b)(alert,"Something went wrong :/");case 14:case"end":return e.stop()}}),sn,null,[[0,10]])}function ln(){var n;return rn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(cn.e)(G);case 2:return n=e.sent,e.next=5,Object(cn.b)(H,n);case 5:case"end":return e.stop()}}),dn)}function jn(){return rn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(cn.g)(U.type,bn);case 2:return n.next=4,Object(cn.f)("*",ln);case 4:case"end":return n.stop()}}),un)}var pn,xn,gn,fn,On,hn=w.c.div(x||(x=Object(v.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    font-size: medium;\n"]))),kn=w.c.button(g||(g=Object(v.a)(["\n    background: transparent;\n    color: teal;\n    border: none;\n    margin: 10px;\n    transition: background-color 0.5s;\n    cursor: pointer;\n\n    @media (max-width: 767px) {\n        flex-basis: 100%;\n        margin: 10px;\n    }\n\n    &:hover {\n        color: rgb(2, 73, 73);\n    }\n\n    &:active {\n        color: rgb(1, 22, 22);\n    }\n\n    &:disabled {\n        color: #ccc;\n        cursor: not-allowed;\n    }\n"]))),mn=function(){var n=Object(S.c)(Q),e=Object(S.c)(V),t=Object(S.c)(K),r=Object(S.b)();return Object(X.jsxs)(hn,{children:[Object(X.jsx)(kn,{onClick:function(){return r(U())},children:"Pobierz przyk\u0142adowe zadania"}),!n&&Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)(kn,{onClick:function(){return r(R())},children:[t?"Poka\u017c ":"Ukryj ","zrobione"]}),Object(X.jsx)(kn,{onClick:function(){return r(N())},disabled:e,children:"Uko\u0144cz wszystkie"})]})]})},vn=w.c.section(pn||(pn=Object(v.a)(["\n    margin: 10px 0;\n    background: white;\n    box-shadow: 0 0 5px #ddd;\n"]))),wn=w.c.header(xn||(xn=Object(v.a)(["\n    border-bottom: 1px solid #ddd;\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-gap: 20px;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n\n    @media (max-width: 767px) {\n        grid-template-columns: 1fr;\n    }\n"]))),yn=w.c.div(gn||(gn=Object(v.a)(["\n    padding: 20px;\n"]))),zn=w.c.h2(fn||(fn=Object(v.a)(["\n    font-size: 1.5em;\n    margin: 0;\n"]))),Dn=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return Object(X.jsxs)(vn,{children:[Object(X.jsxs)(wn,{children:[Object(X.jsx)(zn,{children:e}),r]}),Object(X.jsx)(yn,{children:t})]})},Tn=function(n){var e=n.title;return Object(X.jsx)("header",{children:Object(X.jsx)("h1",{children:e})})},Cn=w.c.div(On||(On=Object(v.a)(["\n    max-width: 900px;\n    padding: 20px;\n    margin: 0 auto;\n    font-family: 'Roboto', sans-serif;\n"]))),Sn=function(n){var e=n.children;return Object(X.jsx)(Cn,{children:e})};var Fn=function(){return Object(X.jsxs)(Sn,{children:[Object(X.jsx)(Tn,{title:"Lista zada\u0144"}),Object(X.jsx)(Dn,{title:"Dodaj nowe zadanie",body:Object(X.jsx)(Y,{})}),Object(X.jsx)(Dn,{title:"Lista zada\u0144",body:Object(X.jsx)(en,{}),extraHeaderContent:Object(X.jsx)(mn,{})})]})},In=function(){return Object(X.jsx)(Fn,{})},En=t(25),Hn=rn.a.mark(Jn);function Jn(){return rn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(cn.a)([jn()]);case 2:case"end":return n.stop()}}),Hn)}var Ln=Object(En.a)(),Pn=Object(F.a)({reducer:{tasks:W},middleware:[Ln]});Ln.run(Jn);var Rn=Pn;k.a.render(Object(X.jsx)(O.a.StrictMode,{children:Object(X.jsxs)(S.a,{store:Rn,children:[Object(X.jsx)(y,{}),Object(X.jsx)(In,{})]})}),document.getElementById("root")),m()}},[[40,1,2]]]);
//# sourceMappingURL=main.9ead2bac.chunk.js.map