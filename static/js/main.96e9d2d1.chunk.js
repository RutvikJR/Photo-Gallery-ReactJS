(this["webpackJsonpphoto-gallery"]=this["webpackJsonpphoto-gallery"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,i){},,function(t,e,i){var c={"./1.jpg":15,"./10.jpg":16,"./11.jpg":17,"./12.jpg":18,"./13.jpg":19,"./14.jpg":20,"./2.jpg":21,"./3.jpg":22,"./4.jpg":23,"./5.jpg":24,"./6.jpg":25,"./7.jpg":26,"./8.jpg":27,"./9.jpg":28};function a(t){var e=n(t);return i(e)}function n(t){if(!i.o(c,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return c[t]}a.keys=function(){return Object.keys(c)},a.resolve=n,t.exports=a,a.id=14},function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/1.792f97d6.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/10.b347f1a8.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/11.98f57c1a.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/12.2d0091e6.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/13.8ac13714.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/14.646a7ff8.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/2.e722ae60.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/3.57adf29e.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/4.1508e0ae.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/5.837ebd5c.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/6.a01f854a.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/7.1caca4fe.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/8.ab205add.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/9.6be5f44b.jpg"},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var c=i(1),a=i(6),n=i.n(a),r=(i(12),i(7)),s=i(5),l=i(0);var d=function(t){return Object(l.jsx)("div",{className:t.imgclass,onClick:t.display,children:Object(l.jsx)("p",{className:"imagetitle",children:t.imgtitle})})};var u=function(t){var e=parseInt(t.displayimgno),c=t.displaytitle;return Object(l.jsxs)("div",{id:"display",children:[Object(l.jsx)("div",{id:"prev",onClick:t.Prev,children:Object(l.jsx)("button",{children:" \u2039"})}),Object(l.jsxs)("div",{id:"displayimgtitle",children:[Object(l.jsx)("img",{id:"displayimg",src:i(14)("./"+e+".jpg").default,alt:c}),Object(l.jsxs)("p",{id:"displaytitle",children:[" ",c," "]})," "]}),Object(l.jsx)("div",{id:"next",onClick:t.Next,children:Object(l.jsx)("button",{children:" \u203a"})}),Object(l.jsx)("div",{id:"close",onClick:t.closeDisplay,children:Object(l.jsx)("button",{children:" \u2716"})})]})};var o=function(){var t=["Smile","House","Japan","Flowers","Smart City","Food","Microsoft","Building","Work","Dell","Laptop","Coca cola","Natural View","Natural View"],e=Object(c.useState)(!1),i=Object(s.a)(e,2),a=i[0],n=i[1],o=Object(c.useState)([1,t[0]]),j=Object(s.a)(o,2),p=j[0],f=j[1];function g(t){var e=t.currentTarget.className.split("g")[1],i=t.currentTarget.children[0].innerHTML;f([e,i]),console.log(t.currentTarget.className),console.log(t.currentTarget.children[0].innerHTML),n(!0)}return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{id:"gallery",children:[Object(l.jsx)("h1",{children:"Photo Gallery"}),Object(r.a)(Array(14)).map((function(e,i,c){return Object(l.jsx)(d,{imgclass:"img"+(i+1),imgtitle:t[i],display:g},i)}))]}),a&&Object(l.jsx)(u,{displayimgno:p[0],displaytitle:p[1],closeDisplay:function(){n(!1)},Next:function(){var e=p[0];14===e&&(e=0),f([e+1,t[e-1+1]])},Prev:function(){var e=p[0];1===e&&(e=15),f([e-1,t[e-1-1]])}})]})};i(29);var j=function(){return Object(l.jsx)(o,{})};n.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.96e9d2d1.chunk.js.map