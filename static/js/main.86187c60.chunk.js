(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{109:function(t,e,c){},110:function(t,e,c){},111:function(t,e,c){},119:function(t,e,c){"use strict";c.r(e);var n=c(2),a=c(1),s=c.n(a),i=c(16),r=c.n(i),o=c(25),j=c(3),u=c(4),f=c.n(u),b=c.p+"static/media/tree.ab871074.svg",l=c(17),d=c.n(l);function p(t){var e=t.positionTop,c=t.positionLeft,a=["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#CDDC39"],s={backgroundColor:a[Math.floor(Math.random()*a.length)],top:e,left:c};return Object(n.jsx)("div",{className:d.a.circle,style:s})}p.defaultProps={positionTop:0,positionLeft:0};var O=p,m=c(11),h=c(13),x=c(18),v=c.p+"static/media/Gift1.4de2d7fc.svg",g=c.p+"static/media/Gift2.87d57f82.svg",_=c.p+"static/media/Gift3.fd92ab2c.svg",G=c(5),w=c.n(G),N=c(12),C=c.n(N),S=c(19);c(109);var T=function(){var t=Object(a.useState)(""),e=Object(j.a)(t,2),c=e[0],s=e[1],i=Object(a.useState)(""),r=Object(j.a)(i,2),o=r[0],u=r[1];function f(){return(f=Object(S.a)(C.a.mark((function t(){var e,c,n,a,i;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.themealdb.com/api/json/v1/1/random.php");case 2:return e=t.sent,t.next=5,e.json();case 5:c=t.sent,n=c.meals,a=n[0].strMeal,i=n[0].strMealThumb,s(a),u(i);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){f.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){setTimeout((function(){return document.title="A time of gifts!"}),3e3)}),[]),Object(n.jsx)("div",{className:"GiftDescrFood",children:c&&Object(n.jsxs)("div",{className:"mealDescr",children:[Object(n.jsx)("p",{className:"mealDescr",children:" \u0412\u0430\u0448 \u043f\u043e\u0434\u0430\u0440\u043e\u043a - \u0438\u0434\u0435\u044f \u0434\u043b\u044f \u043f\u0440\u0430\u0437\u0434\u043d\u0438\u0447\u043d\u043e\u0433\u043e \u0431\u043b\u044e\u0434\u0430!"}),Object(n.jsxs)("p",{className:"mealDescr",children:[" \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 ",c," "]}),Object(n.jsx)("img",{src:o,alt:c,className:"meal"})]})})};c(110);var D=function(){var t=Object(a.useState)(""),e=Object(j.a)(t,2),c=e[0],s=e[1],i=Object(a.useState)(!1),r=Object(j.a)(i,2),o=r[0],u=r[1],f=Object(a.useState)(""),b=Object(j.a)(f,2),l=b[0],d=b[1],p=Object(a.useState)(""),O=Object(j.a)(p,2),m=O[0],h=O[1],x=m.toString();function v(){fetch("https://api.github.com/users/".concat(c)).then((function(t){return t.json()})).then((function(t){u(t.name),d(t.avatar_url);var e=new Date,c=new Date(Date.parse(t.created_at));h(((e-c)/1e3/60/60/24).toFixed(0))}))}return Object(a.useEffect)((function(){setTimeout((function(){return document.title="A time of gifts!"}),3e3)}),[]),Object(n.jsxs)("div",{className:"GiftDescrGit",children:[Object(n.jsx)("p",{children:" \u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u043f\u043e\u0434\u0430\u0440\u043e\u043a, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0439 API GitHub.  "}),Object(n.jsx)("p",{children:" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u043b\u043e\u0433\u0438\u043d: "}),Object(n.jsx)("input",{value:c,onChange:function(t){s(t.target.value)},onKeyPress:function(t){"Enter"===t.key&&v()},type:"text"}),Object(n.jsx)("button",{onClick:v,children:"\u0423\u0437\u043d\u0430\u0442\u044c \u043f\u043e\u0432\u043e\u0434 \u0434\u043b\u044f \u043f\u0440\u0430\u0437\u0434\u043d\u0438\u043a\u0430!"}),o&&Object(n.jsxs)("div",{children:[Object(n.jsxs)("p",{children:[" \u0418\u043c\u044f: ",o," "]}),Object(n.jsxs)("p",{children:[" \u0412\u044b \u043d\u0430 github \u0443\u0436\u0435 ",m,1===+x.match(/\d\b/g)?Object(n.jsx)("span",{children:" \u0434\u0435\u043d\u044c "}):2===+x.match(/\d\b/g)||3===+x.match(/\d\b/g)||4===+x.match(/\d\b/g)?Object(n.jsx)("span",{children:" \u0434\u043d\u044f"}):Object(n.jsx)("span",{children:" \u0434\u043d\u0435\u0439"}),"! \u042d\u0442\u043e \u0442\u043e\u0447\u043d\u043e \u043f\u043e\u0432\u043e\u0434 \u0434\u043b\u044f \u043f\u0440\u0430\u0437\u0434\u043d\u0438\u043a\u0430!"]}),Object(n.jsx)("img",{src:l,alt:o,className:"avatar"})]})]})},k=c(21),A=c.n(k),M=c(20),y=c.n(M);c(111);var F=function(){Object(a.useEffect)((function(){setTimeout((function(){return document.title="A time of gifts!"}),3e3)}),[]);var t=A()(),e=t.width,c=t.height;return Object(n.jsx)(y.a,{width:e,height:c})};function X(){var t=Object(m.a)(["",""]);return X=function(){return t},t}function E(){var t=Object(m.a)(["animation: 6s "," infinite"]);return E=function(){return t},t}var L=function(){var t=Object(a.useState)(!1),e=Object(j.a)(t,2),c=e[0],s=e[1],i=Object(a.useState)(!1),r=Object(j.a)(i,2),o=r[0],u=r[1],f=Object(a.useState)(!1),b=Object(j.a)(f,2),l=b[0],d=b[1],p=h.a.div(E(),Object(h.b)(X(),x.bounce));return Object(n.jsxs)("div",{className:w.a.wrapGifts,children:[Object(n.jsx)(p,{children:Object(n.jsxs)("div",{className:w.a.Gifts,children:[Object(n.jsx)("img",{src:v,alt:"gift",title:"\u041f\u043e\u0434\u0430\u0440\u043e\u043a GitHub",className:w.a.Gift,onClick:function(){s(!0)}}),Object(n.jsx)("img",{src:g,alt:"gift",title:"\u041f\u043e\u0434\u0430\u0440\u043e\u043a Food",className:w.a.Gift,onClick:function(){u(!0)}}),Object(n.jsx)("img",{src:_,alt:"gift",title:"\u041f\u043e\u0434\u0430\u0440\u043e\u043a Animation",className:w.a.Gift,onClick:function(){d(!0)}})]})}),c&&Object(n.jsx)(D,{}),o&&Object(n.jsx)(T,{}),l&&Object(n.jsx)(F,{})]})};var P=function(){var t=Object(a.useState)([]),e=Object(j.a)(t,2),c=e[0],s=e[1];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("div",{className:f.a.wrap,children:Object(n.jsxs)("div",{className:f.a.wrap_start,children:[Object(n.jsx)("p",{className:f.a.description,children:"\u0401\u043b\u043a\u0430 \u0437\u0430\u0441\u0432\u0435\u0442\u0438\u0442\u0441\u044f \u043e\u0433\u043e\u043d\u044c\u043a\u0430\u043c\u0438, \u043a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u044b \u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u043f\u043e \u043d\u0435\u0439!"}),Object(n.jsx)("p",{className:f.a.description,children:" 10 \u043e\u0433\u043e\u043d\u044c\u043a\u043e\u0432 - \u0438 \u043f\u043e\u044f\u0432\u044f\u0442\u0441\u044f \u043f\u043e\u0434\u0430\u0440\u043a\u0438!"}),Object(n.jsx)("img",{src:b,alt:"XMastree",className:f.a.XMasTree,onClick:function(t){s([].concat(Object(o.a)(c),[{coordX:t.pageX,coordY:t.pageY,id:c.length}]))}}),c.length>=10&&Object(n.jsx)(L,{})]})}),Object(n.jsx)("div",{className:f.a.circle_array,children:c.map((function(t){var e=t.coordX,c=t.coordY,a=t.id;return Object(n.jsx)(O,{positionTop:c,positionLeft:e},a)}))})]})},H=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,120)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,s=e.getLCP,i=e.getTTFB;c(t),n(t),a(t),s(t),i(t)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(P,{})}),document.getElementById("root")),H()},17:function(t,e,c){t.exports={circle:"Circle_circle__b7mxG"}},4:function(t,e,c){t.exports={wrap:"App_wrap__2TWKq",wrap_start:"App_wrap_start__35zWU",XMasTree:"App_XMasTree__1e66z",description:"App_description__11Hqz"}},5:function(t,e,c){t.exports={wrapGifts:"Gifts_wrapGifts__3H03a",Gifts:"Gifts_Gifts__2sdIR",Gift:"Gifts_Gift__2qOjJ"}}},[[119,1,2]]]);
//# sourceMappingURL=main.86187c60.chunk.js.map