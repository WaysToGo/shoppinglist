(window["webpackJsonpshopping-list"]=window["webpackJsonpshopping-list"]||[]).push([[0],{13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(5),o=r.n(c),s=(r(13),r(2)),l=r(3),i=r.n(l),u=r(6),m=r(1);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach(function(t){Object(m.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d=function(e,t,r,n){e.preventDefault();var a=p({},r);if(a.cartItems.find(function(e){return e.id==t.id})){var c=a.cartItems.map(function(e){if(t.id===e.id){var r=Object.assign({},e);return r.quantity=e.quantity+1,r}return e});a.cartItems=c}else a.cartItems.push(t);n(p({},a))},b=function(e,t,r,n){e.preventDefault();var a=p({},r);if(a.cartItems.find(function(e){return e.id==t.id})){var c=a.cartItems.map(function(e){if(t.id===e.id){var r=Object.assign({},e);return e.quantity>1&&(r.quantity=e.quantity-1,r)}return e});a.cartItems=c}else a.cartItems.push(t);n(p({},a))},y=function(e,t,r,n){e.preventDefault();var a=p({},r);if(a.cartItems.find(function(e){return e.id==t.id})){var c=a.cartItems.map(function(e){return t.id!==e.id&&e});a.cartItems=c}else a.cartItems.push(t);n(p({},a))},v=function(e){var t=e.price,r=e.img_url,n=e.discount,c=e.name,o=e.afterDiscount;return a.a.createElement("div",null,a.a.createElement("div",{className:"px-8 py-6 border-gray-100 border "},a.a.createElement("div",{className:"xl:max-w-lg xl:ml-auto"},a.a.createElement("img",{className:"mt-6 rounded-lg shadow-xl sm:mt-8 w-full sm:w-full sm:object-cover sm:object-center min-h-full h-56",src:r}),a.a.createElement("div",{className:"pb-2 mt-4"},c),a.a.createElement("div",null,a.a.createElement("span",{className:"px-2 font-bold "},"\u20b9",o),a.a.createElement("span",{className:"px-2 font-bold text-gray-600 line-through"},t),a.a.createElement("span",{className:"text-green-500 font-bold"},n,"% off")),a.a.createElement("div",{className:"mt-4 sm:mt-6"},a.a.createElement("a",{className:"inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 text-sm text-white uppercase tracking-wider font-semibold sm:text-base cursor-pointer",onClick:function(t){d(t,e,e.store,e.setStore)}},"Add to cart")))))},h=function(e,t){var r=parseFloat((e*t/100).toString()).toFixed(2);return e-parseFloat(r)},O=function(e){var t=Object(n.useState)([]),r=Object(s.a)(t,2),c=r[0],o=r[1],l=Object(n.useState)([]),m=Object(s.a)(l,2),f=m[0],p=m[1],d=Object(n.useState)(!1),b=Object(s.a)(d,2),y=b[0],O=b[1];return Object(n.useEffect)(function(){function e(){return(e=Object(u.a)(i.a.mark(function e(){var t,r,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.myjson.com/bins/qzuzi");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,n=r.map(function(e){return e.afterDiscount=h(e.price,e.discount),e.quantity=1,e}),p(n),o(n),O(!1);case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}O(!0),function(){e.apply(this,arguments)}()},[]),Object(n.useEffect)(function(){o(function(){var t=f.filter(function(t){return t.name.toLowerCase().includes(e.store.searchBy.toLowerCase())&&t.afterDiscount>e.store.filterBy});switch(e.store.sortBy){case L.NONE:return t;case L.DISCOUNT:return t.sort(function(e,t){return t.discount-e.discount});case L.HIGH:return t.sort(function(e,t){return t.afterDiscount-e.afterDiscount});case L.LOW:return t.sort(function(e,t){return e.afterDiscount-t.afterDiscount})}}())},[e.store]),a.a.createElement("div",{className:"container  flex flex-wrap "},c.map(function(t){return a.a.createElement("div",{className:"w-full sm:w-1/2 lg:w-1/4"},a.a.createElement(v,Object.assign({},t,{setStore:e.setStore,store:e.store})))}),!c.length&&!y&&a.a.createElement("div",{className:"flex justify-center items-center font-bold text-gray-700  h-screen w-full"},"No Products Available"),y&&a.a.createElement("div",{className:"flex justify-center items-center font-bold text-gray-700  h-screen w-full"},"Products are on there way..."))};function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(r,!0).forEach(function(t){Object(m.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var E=function(e){var t=Object(n.useState)(100),r=Object(s.a)(t,2),c=r[0],o=r[1];return a.a.createElement("div",{className:"h-full w-1/5 hidden sm:block"},a.a.createElement("div",null,a.a.createElement("div",{className:"font-bold my-5"},"Filters"),a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("span",{className:"pr-1"},"\u20b9100"),a.a.createElement("span",{className:"pl-20"},"\u20b910000")),a.a.createElement("input",{type:"range",name:"points",min:"100",max:"10000",className:"bg-green-500",onChange:function(e){o(e.target.value)},value:c})),a.a.createElement("button",{className:"my-5 inline-block px-5 py-3 rounded-lg shadow-lg bg-blue-700 text-sm text-white uppercase tracking-wider font-semibold sm:text-base",onClick:function(){var t=g({},e.store);t.filterBy=c,e.setStore(g({},t))}},"Apply")))};function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(r,!0).forEach(function(t){Object(m.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var x=function(e){var t=function(t){var r=N({},e.store);r.sortBy=t,e.setStore(N({},r))};return a.a.createElement("div",{className:" items-center h-20 hidden sm:flex"},a.a.createElement("span",{className:"font-extrabold p-12"},"Sort BY"),a.a.createElement("span",{className:"text-gray-500 p-6 font-bold  cursor-pointer ".concat(e.store.sortBy==L.HIGH?"text-blue-500 underline":""),onClick:function(){return t(L.HIGH)}},"Price--High Low"),a.a.createElement("span",{className:"text-gray-500 font-bold p-6 cursor-pointer ".concat(e.store.sortBy==L.LOW?"text-blue-500 underline":""),onClick:function(){return t(L.LOW)}},"Price--Low High"),a.a.createElement("span",{className:"text-gray-500 font-bold p-6 cursor-pointer ".concat(e.store.sortBy==L.DISCOUNT?"text-blue-500 underline":""),onClick:function(){return t(L.DISCOUNT)}},"Discount"))},P=r(7),S=r.n(P);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(r,!0).forEach(function(t){Object(m.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var I=function(e){return a.a.createElement("div",{className:"self-center"},a.a.createElement("div",{className:"flex"},a.a.createElement("input",{className:"w-full p-2 bg-transparent text-white placeholder-white border-b-2 border-white",type:"text",placeholder:"Search",onChange:function(t){!function(t){var r=D({},e.store);r.searchBy=t.target.value,e.setStore(D({},r))}(t)},value:e.store.searchBy}),a.a.createElement("button",{className:"w-auto flex justify-end items-center text-blue p-2 hover:text-blue-light"},a.a.createElement("i",{className:"text-white absolute fill-current "},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},a.a.createElement("path",{className:"heroicon-ui",d:"M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"}))))))};function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(r,!0).forEach(function(t){Object(m.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var q=function(e){return a.a.createElement("div",{className:"self-center pr-5 pl-2 "},a.a.createElement("i",{className:"text-white  fill-current cursor-pointer",onClick:function(){var t=B({},e.store);t.showCheckout=!0,e.setStore(B({},t))}},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},a.a.createElement("path",{className:"heroicon-ui",d:"M17 16a3 3 0 1 1-2.83 2H9.83a3 3 0 1 1-5.62-.1A3 3 0 0 1 5 12V4H3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v1h14a1 1 0 0 1 .9 1.45l-4 8a1 1 0 0 1-.9.55H5a1 1 0 0 0 0 2h12zM7 12h9.38l3-6H7v6zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"})),a.a.createElement("i",{className:"absolute h-4 text-xs rounded-full w-4 bg-red-600 top-0 bottom-auto"},e.store.cartItems.reduce(function(e,t){return t.quantity&&(e+=t.quantity),e},0))))};function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(r,!0).forEach(function(t){Object(m.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var L,W=function(e){var t=e.store,r=e.setStore;return a.a.createElement("div",null,a.a.createElement("nav",{className:"h-16 bg-blue-700 flex justify-between w-full"},a.a.createElement("img",{src:S.a,className:"w-12 ml-5 cursor-pointer",alt:"logo",onClick:function(){var t=z({},e.store);t.showCheckout=!1,e.setStore(z({},t))}}),a.a.createElement("div",{className:"flex self-center relative"},a.a.createElement(I,{store:t,setStore:r}),a.a.createElement(q,{store:t,setStore:r}))))},F=function(e){return a.a.createElement(a.a.Fragment,null,e.store.cartItems.map(function(t){return t&&a.a.createElement("div",{className:"flex justify-between items-center border-black border-2 h-40"},a.a.createElement("div",{className:"sm:ml-6 sm"},a.a.createElement("div",{className:"sm:px-3 sm:py-6 "},a.a.createElement("div",{className:"xl:max-w-lg xl:ml-auto flex  items-center ml-4"},a.a.createElement("img",{className:"rounded-lg shadow-xl w-24 sm:object-cover sm:object-center",src:t.img_url}),a.a.createElement("div",null,a.a.createElement("div",{className:"pb-2"},t.name),a.a.createElement("div",null,a.a.createElement("span",{className:"px-2 font-bold "},"\u20b9",t.afterDiscount),a.a.createElement("span",{className:"px-2 font-bold text-gray-600 line-through"},t.price),a.a.createElement("span",{className:"text-green-500 font-bold"},t.discount,"% off")),a.a.createElement("div",{className:"sm:hidden mt-3"},a.a.createElement("span",{className:"inline-block h-8 text-xl rounded-full w-8 border-2 top-0 border-dashed border-gray-700 cursor-pointer",onClick:function(r){return b(r,t,e.store,e.setStore)}},"-"),a.a.createElement("span",{className:"p-4 font-bold"},"| ",t.quantity),a.a.createElement("span",{className:"inline-block h-8 text-xl rounded-full w-8 border-2 top-0 border-dashed border-gray-700 cursor-pointer",onClick:function(r){return d(r,t,e.store,e.setStore)}},"+")),a.a.createElement("button",{className:" sm:hidden uppercase text-red-500 border-red-500  p-1 mr-3 mt-3  font-bold",onClick:function(r){return y(r,t,e.store,e.setStore)}},"Remove"))))),a.a.createElement("div",{className:"hidden sm:block"},a.a.createElement("span",{className:"inline-block h-8 text-xl rounded-full w-8 border-2 top-0 border-dashed border-gray-700 cursor-pointer",onClick:function(r){return b(r,t,e.store,e.setStore)}},"-"),a.a.createElement("span",{className:"p-4 font-bold"},"| ",t.quantity),a.a.createElement("span",{className:"inline-block h-8 text-xl rounded-full w-8 border-2 top-0 border-dashed border-gray-700 cursor-pointer",onClick:function(r){return d(r,t,e.store,e.setStore)}},"+")),a.a.createElement("button",{className:"hidden sm:block uppercase text-red-500 border-red-500 border-2 p-2 mr-6 font-bold",onClick:function(r){return y(r,t,e.store,e.setStore)}},"Remove"))}))},T=function(e){return a.a.createElement("div",null,a.a.createElement("div",{className:"border-black border-2"},a.a.createElement("div",{className:"font-bold text-gray-600 m-4"},"Price Details"),a.a.createElement("div",{className:"border-gray-300 border-2"}),a.a.createElement("div",null,a.a.createElement("div",{className:"m-3"},a.a.createElement("span",{className:"inline-block w-1/4"},"Price "),a.a.createElement("span",{className:"inline-block w-1/4"},e.store.cartItems.reduce(function(e,t){return t&&(e+=t.price*t.quantity),e},0))),a.a.createElement("div",{className:"m-3"},a.a.createElement("span",{className:"inline-block w-1/4"},"Discount "),a.a.createElement("span",{className:"inline-block w-1/4"},e.store.cartItems.reduce(function(e,t){return t&&(e+=(t.price-t.afterDiscount)*t.quantity),e},0))),a.a.createElement("div",{className:"font-bold m-5"},a.a.createElement("span",{className:"inline-block w-1/4"},"Total Payable  "),a.a.createElement("span",{className:"inline-block w-1/4"},e.store.cartItems.reduce(function(e,t){return t&&(e+=t.afterDiscount*t.quantity),e},0))))))},A=function(e){return a.a.createElement("div",{className:"flex flex-col sm:flex-row"},a.a.createElement("div",{className:"lg:w-2/3  m-2"},a.a.createElement(F,{setStore:e.setStore,store:e.store})),a.a.createElement("div",{className:"lg:w-1/3 m-2 "},a.a.createElement(T,{setStore:e.setStore,store:e.store})))};!function(e){e.HIGH="high",e.LOW="low",e.DISCOUNT="discount",e.NONE="none"}(L||(L={}));var G=function(){var e=Object(n.useState)({filterBy:100,sortBy:L.NONE,searchBy:"",cartItems:[],showCheckout:!1}),t=Object(s.a)(e,2),r=t[0],c=t[1];return a.a.createElement("div",{className:"m-auto antialiased  font-mono text-center"},a.a.createElement("body",null,a.a.createElement(W,{store:r,setStore:c}),r.showCheckout&&a.a.createElement(A,{store:r,setStore:c}),!r.showCheckout&&a.a.createElement("div",{className:"flex"},a.a.createElement(E,{store:r,setStore:c}),a.a.createElement("div",null,a.a.createElement(x,{store:r,setStore:c}),a.a.createElement(O,{store:r,setStore:c})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,r){e.exports=r.p+"static/media/logo.5d5d9eef.svg"},8:function(e,t,r){e.exports=r(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.fdf50ba0.chunk.js.map