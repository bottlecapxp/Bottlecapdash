(this.webpackJsonpbottlecapdash=this.webpackJsonpbottlecapdash||[]).push([[0],{13:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},27:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),d=c(15),s=c.n(d),r=(c(24),c(17)),a=c(2),j=(c(13),c(9)),l=(c(25),c.p+"static/media/load.35be0998.gif"),o=c.p+"static/media/logo-sapporo.223799fd.png",h=c(0),b=function(e){console.log(e.total);var t=[{name:"Sapporo Premium",total:e.total}];return Object(h.jsx)("div",{id:"card_wrapper",children:t.map((function(t,c){return Object(h.jsxs)("div",{className:"card",onClick:function(){!function(e){console.log(e)}(c)},children:[Object(h.jsxs)("div",{id:"title_w_img",children:[Object(h.jsx)("img",{style:{width:"60px",height:"45px"},src:o,alt:""}),Object(h.jsx)("h2",{children:t.name})]}),0===e.total?Object(h.jsx)("img",{style:{width:"6%",margin:"4px 0 4px 0"},src:l,alt:""}):Object(h.jsx)("span",{id:"total",children:t.total})]},c)}))})},p=(c(27),c(16)),O=c.n(p),x=function(e){return Object(h.jsx)("div",{id:"Footer_wrapper",children:Object(h.jsx)(O.a,{id:"btn_bg",data:e.data,filename:"Sapporo.csv",children:"Download .csv"})})},u=(c(29),function(e){return Object(h.jsx)("div",{id:"header_wrapper",children:Object(h.jsx)("div",{id:"id_card",children:Object(h.jsx)("div",{id:"id_",children:Object(h.jsx)("p",{children:"C"})})})})}),m=c.p+"static/media/BottleCap_Logo.4b835454.svg",f=(c(30),c.p+"static/media/hand.d4a009a2.png"),v=function(e){return Object(h.jsxs)("div",{id:"SideBar_wrapper",children:[Object(h.jsx)("div",{id:"logo",children:Object(h.jsx)("img",{src:m,alt:"Logo"})}),Object(h.jsx)("div",{id:"menu_wrapper",children:Object(h.jsxs)("div",{children:["Hello Member! Welcome to BottleCap's Beta Portal",Object(h.jsx)("img",{style:{width:"20px"},src:f,alt:""})]})})]})},g=function(e){var t,c=[],i=[],d=Object(n.useState)([]),s=Object(j.a)(d,2),r=s[0],a=s[1],l=Object(n.useState)([]),o=Object(j.a)(l,2),p=o[0],O=o[1],m=Object(n.useState)(0),f=Object(j.a)(m,2),g=f[0],_=f[1];return Object(n.useEffect)((function(){fetch("https://bottlecapdev.pythonanywhere.com/test",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){for(t=0;t<e.id.length;t++)c.push({id:e.id[t],name:e.name[t],address:e.address[t],province:e.province[1],email:e.email[t],tel:e.tel[t],points:e.points[t],prize:e.prize[t],ballots:e.ballots[t]}),i.push({name:e.name[t],address:e.address[t],province:e.province[1],postal:e.postal[1]}),a(c),O(i);_(e.id.length)}))}),[]),Object(h.jsxs)("div",{id:"dash_Home",children:[Object(h.jsx)(v,{}),Object(h.jsxs)("div",{id:"content_holder",children:[Object(h.jsx)(u,{}),Object(h.jsxs)("div",{id:"content_wrapper",children:[Object(h.jsx)(b,{total:g}),Object(h.jsx)("div",{id:"table_content",children:Object(h.jsxs)("table",{children:[Object(h.jsx)("tbody",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"address"}),Object(h.jsx)("th",{children:"province"}),Object(h.jsx)("th",{children:"email"}),Object(h.jsx)("th",{children:"Tel"}),Object(h.jsx)("th",{children:"Points"}),Object(h.jsx)("th",{children:"Prize"}),Object(h.jsx)("th",{children:"Ballots"})]})}),Object(h.jsx)("tbody",{children:r.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.name},t),Object(h.jsx)("td",{children:e.address},t),Object(h.jsx)("td",{children:e.province},t),Object(h.jsx)("td",{children:e.email},t),Object(h.jsx)("td",{children:e.tel},t),Object(h.jsx)("td",{children:e.points},t),Object(h.jsx)("td",{children:e.prize},t),Object(h.jsx)("td",{children:e.ballots},t)]})}))})]})}),Object(h.jsx)(x,{data:p})]})]})]})};var _=function(){return Object(h.jsx)(r.a,{basename:"/Bottlecapdash",children:Object(h.jsx)(a.c,{children:Object(h.jsx)(a.a,{path:"/",exact:!0,strict:!0,component:g})})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,d=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),d(e),s(e)}))};s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root")),w()}},[[36,1,2]]]);
//# sourceMappingURL=main.e5ff46b4.chunk.js.map