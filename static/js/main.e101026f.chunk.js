(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{29:function(e,t,a){e.exports=a(60)},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a.n(l),m=a(8),u=a(1);function o(e){return r.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},r.a.createElement(m.b,{className:"navbar-item is-tab",activeClassName:"is-active",exact:!0,to:"/"},"Home"),r.a.createElement(m.b,{className:"navbar-item is-tab",activeClassName:"is-active",to:"/people"},"People"))}function i(e){return r.a.createElement("h2",{className:"title"},"Home page")}var s=a(28);a(39);function p(e){var t=e.name,a=e.sex,n=e.born,l=e.died,c=e.motherName,m=e.fatherName;return r.a.createElement("tr",null,r.a.createElement("th",null,t),r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,l),r.a.createElement("td",null,c),r.a.createElement("td",null,m))}function E(e){var t=e.people;return r.a.createElement("table",{className:"table is-striped is-fullwidth"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Sex"),r.a.createElement("th",null,"Born"),r.a.createElement("th",null,"Died"),r.a.createElement("th",null,"Mother"),r.a.createElement("th",null,"Father"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement(p,{key:e.slug,name:e.name,sex:e.sex,born:e.born,died:e.died,motherName:e.motherName,fatherName:e.fatherName})}))))}p.defaultProps={motherName:null,fatherName:null},p.defaultProps={motherName:null,fatherName:null};var h=a(13),f=a.n(h),d=a(26),b=a(27),v=a.n(b),N=function(){var e=Object(d.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://mate-academy.github.io/react_people-table/api/people.json");case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();function g(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){N().then(l)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title"},"People page"),r.a.createElement(E,{people:a}))}function x(e){return r.a.createElement("h2",null,"Page not found")}a(59);var w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,null),r.a.createElement("div",{className:"App"},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/people",render:function(e){return r.a.createElement(g,e)}}),r.a.createElement(u.b,{path:"/",exact:!0,render:function(e){return r.a.createElement(i,e)}}),r.a.createElement(u.b,{path:"/notfound",component:x}),r.a.createElement(u.a,{path:"/home",to:"/"}),r.a.createElement(u.a,{path:"/",to:"/notfound"}))))};c.a.render(r.a.createElement(m.a,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.e101026f.chunk.js.map