(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),o=n.n(l),c=(n(14),n(8)),u=n(4);var i=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"KeeperApp"))};var m=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \u24d2 ",e))};var s=function(e){return r.a.createElement("div",{className:"note"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content),r.a.createElement("button",{onClick:function(){e.deleteNote(e.id)}},"DELETE"))},f=n(3),E=n(7);var d=function(e){var t=r.a.useState({title:"",content:""}),n=Object(u.a)(t,2),a=n[0],l=n[1];function o(e){var t=e.target,n=t.name,a=t.value;l((function(e){return Object(E.a)({},e,Object(f.a)({},n,a))}))}return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{name:"title",placeholder:"Title",onChange:o,value:a.title}),r.a.createElement("textarea",{name:"content",placeholder:"Take a note...",rows:"3",onChange:o,value:a.content}),r.a.createElement("button",{onClick:function(t){t.preventDefault(),e.addNote(a),l({title:"",content:""})}},"+")))};var v=function(){var e=r.a.useState([]),t=Object(u.a)(e,2),n=t[0],a=t[1];function l(e){a((function(t){return t.filter((function(t,n){return n!==e}))}))}return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(d,{addNote:function(e){a((function(t){return[].concat(Object(c.a)(t),[e])}))}}),n.map((function(e,t){return r.a.createElement(s,{key:t,id:t,title:e.title,content:e.content,deleteNote:l})})),r.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.bd7f320b.chunk.js.map