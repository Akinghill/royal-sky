(this["webpackJsonproyal-sky"]=this["webpackJsonproyal-sky"]||[]).push([[0],{59:function(e,t,n){e.exports=n(95)},77:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(29),i=n.n(c),l=n(17),o=n(6),s=n(47),u=n(10),m=n(32),p=(n(68),n(57)),d=n(48),f=n.n(d),b=n(3),E="SET_CURRENT_USER",v={currentUser:null},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(b.a)(Object(b.a)({},e),{},{currentUser:t.payload});default:return e}},O={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",REMOVE_ITEM:"REMOVE_ITEM"},g=n(56),y=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(b.a)(Object(b.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(g.a)(e),[Object(b.a)(Object(b.a)({},t),{},{quantity:1})])},j=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(b.a)(Object(b.a)({},e),{},{quantity:e.quantity-1}):e}))},C={hidden:!0,cartItems:[]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.TOGGLE_CART_HIDDEN:return Object(b.a)(Object(b.a)({},e),{},{hidden:!e.hidden});case O.ADD_ITEM:return Object(b.a)(Object(b.a)({},e),{},{cartItems:y(e.cartItems,t.payload)});case O.REMOVE_ITEM:return Object(b.a)(Object(b.a)({},e),{},{cartItems:j(e.cartItems,t.payload)});case O.CLEAR_ITEM_FROM_CART:return Object(b.a)(Object(b.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},w={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;return t.type,e},I={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"},x={collections:null,isFetching:!1,errorMessage:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.FETCH_COLLECTIONS_START:return Object(b.a)(Object(b.a)({},e),{},{isFetching:!0});case I.FETCH_COLLECTIONS_SUCCESS:return Object(b.a)(Object(b.a)({},e),{},{isFetching:!1,collections:t.payload});case I.FETCH_COLLECTIONS_FAILURE:return Object(b.a)(Object(b.a)({},e),{},{isFetching:!1,errorMessage:t.payload});default:return e}},S={key:"root",storage:f.a,whitelist:["cart"]},_=Object(u.c)({user:h,cart:N,directory:k,shop:T}),L=Object(m.a)(S,_),R=n(8),U=n.n(R),A=n(21),H=n(18),F=n(26),M=n.n(F),P=(n(72),n(75),function(){var e=Object(H.a)(U.a.mark((function e(t,n){var a,r,c,i;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=q.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,a.set(Object(b.a)({displayName:r,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error ceating user",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}()),D=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,a=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:a}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})};M.a.initializeApp({apiKey:"AIzaSyC-YHVpnOS6nfYmRuDsvUDHTxZStT1qayI",authDomain:"royal-sky-clothing.firebaseapp.com",databaseURL:"https://royal-sky-clothing.firebaseio.com",projectId:"royal-sky-clothing",storageBucket:"royal-sky-clothing.appspot.com",messagingSenderId:"840435294055",appId:"1:840435294055:web:27121f65be7482b0c319c2",measurementId:"G-HMW299XBFV"});var G=M.a.auth(),q=M.a.firestore(),V=new M.a.auth.GoogleAuthProvider;V.setCustomParameters({prompt:"select_account"});var z=function(){return G.signInWithPopup(V)},W=(M.a,function(){return{type:I.FETCH_COLLECTIONS_START}}),B=function(e){return{type:I.FETCH_COLLECTIONS_SUCCESS,payload:e}},Y=function(e){return{type:I.FETCH_COLLECTIONS_FAILURE,payload:e}},$=U.a.mark(K),J=U.a.mark(Q);function K(){var e,t,n;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e=q.collection("collections"),a.next=4,e.get();case 4:return t=a.sent,a.next=7,Object(A.b)(D,t);case 7:return n=a.sent,a.next=10,Object(A.c)(B(n));case 10:a.next=16;break;case 12:return a.prev=12,a.t0=a.catch(0),a.next=16,Object(A.c)(Y(a.t0.message));case 16:case"end":return a.stop()}}),$,null,[[0,12]])}function Q(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.d)(I.FETCH_COLLECTIONS_START,K);case 2:case"end":return e.stop()}}),J)}var X=U.a.mark(Z);function Z(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.a)([Object(A.b)(Q)]);case 2:case"end":return e.stop()}}),X)}var ee=Object(p.a)(),te=[ee];var ne=Object(u.e)(L,u.a.apply(void 0,te));ee.run(Z);var ae=Object(m.b)(ne),re=n(49),ce=n(50),ie=n(58),le=n(55),oe=n(9),se=n(5),ue=n(14),me=n(15);function pe(){var e=Object(ue.a)(["\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: 'Open Sans Condensed';\n    padding: 20px 40px;\n\n    @media screen and (max-width 800px) {\n      paadding: 10px\n    }\n  }\n\n  a {\n    text-decoration: none;\n    color: black;\n  }\n"]);return pe=function(){return e},e}var de=Object(me.a)(pe()),fe=n(13),be=Object(se.a)([function(e){return e.directory}],(function(e){return e.sections})),Ee=(n(77),Object(oe.g)((function(e){var t=e.title,n=e.imageUrl,a=e.size,c=e.history,i=e.linkUrl,l=e.match;return r.a.createElement("div",{className:"".concat(a," menu-item"),onClick:function(){return c.push("".concat(l.url).concat(i))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),ve=(n(79),Object(se.b)({sections:be})),he=Object(o.b)(ve)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,n=Object(fe.a)(e,["id"]);return r.a.createElement(Ee,Object.assign({key:t},n))})))})),Oe=(n(80),function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(he,null))}),ge=function(e){return e.shop},ye=Object(se.a)([ge],(function(e){return e.collections})),je=Object(se.a)([ye],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),Ce=Object(se.a)([ge],(function(e){return e.isFetching})),Ne=Object(se.a)([ge],(function(e){return!!e.collections}));function we(){var e=Object(ue.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return we=function(){return e},e}function ke(){var e=Object(ue.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return ke=function(){return e},e}var Ie=me.b.div(ke()),xe=me.b.div(we()),Te=function(e){return function(t){var n=t.isLoading,a=Object(fe.a)(t,["isLoading"]);return n?r.a.createElement(Ie,null,r.a.createElement(xe,null)):r.a.createElement(e,a)}},Se=(n(81),function(){return{type:O.TOGGLE_CART_HIDDEN}}),_e=function(e){return{type:O.ADD_ITEM,payload:e}},Le=(n(82),function(e){var t=e.children,n=e.isGoogleSignIn,a=e.inverted,c=Object(fe.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:"".concat(a?"inverted":""," \n    ").concat(n?"google-sign-in":""," \n    custom-button")},c),t)}),Re=Object(o.b)(null,(function(e){return{addItem:function(t){return e(_e(t))}}}))((function(e){var t=e.item,n=e.addItem,a=t.name,c=t.price,i=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},c)),r.a.createElement(Le,{onClick:function(){return n(t)},inverted:!0},"Add to cart"))})),Ue=(n(83),Object(o.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(se.a)([ye],(function(e){return e?e[n]:null})))(e)};var n}))((function(e){var t=e.collection,n=t.title,a=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},n),r.a.createElement("div",{className:"items"},a.map((function(e){return r.a.createElement(Re,{key:e.id,item:e})}))))}))),Ae=Object(se.b)({isLoading:function(e){return!Ne(e)}}),He=Object(u.d)(Object(o.b)(Ae),Te)(Ue),Fe=(n(84),function(e){var t=e.title,n=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},n.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(Re,{key:e.id,item:e})}))))}),Me=(n(85),Object(se.b)({collections:je})),Pe=Object(o.b)(Me)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,n=Object(fe.a)(e,["id"]);return r.a.createElement(Fe,Object.assign({key:t},n))})))})),De=Object(se.b)({isLoading:Ce}),Ge=Object(u.d)(Object(o.b)(De),Te)(Pe),qe=Object(o.b)(null,(function(e){return{fetchCollectionsStart:function(){return e(W())}}}))((function(e){var t=e.match,n=e.fetchCollectionsStart;return Object(a.useEffect)((function(){n()}),[]),r.a.createElement("div",{className:"shop-page"},r.a.createElement(oe.b,{exact:!0,path:"".concat(t.path),component:Ge}),r.a.createElement(oe.b,{path:"".concat(t.path,"/:collectionId"),component:He}))})),Ve=function(e){return e.cart},ze=Object(se.a)([Ve],(function(e){return e.cartItems})),We=(Object(se.a)([Ve],(function(e){return e.hidden})),Object(se.a)([ze],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)}))),Be=Object(se.a)([ze],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),Ye=(n(86),Object(o.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:O.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(_e(t))},removeItem:function(t){return e(function(e){return{type:O.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,a=e.addItem,c=e.removeItem,i=t.name,l=t.imageUrl,o=t.price,s=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:l,alt:"item"})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity "},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},s),r.a.createElement("div",{className:"arrow",onClick:function(){return a(t)}},"\u276f")),r.a.createElement("span",{className:"price"},o),r.a.createElement("div",{className:"remove-button",onClick:function(){n(t)}},"\u2715"))}))),$e=n(54),Je=n.n($e),Ke=function(e){var t=e.price,n=100*t;return r.a.createElement(Je.a,{label:"Pay Now",name:"Royal Sky",billingAddress:!0,shippingAddress:!0,image:"https://sendeyo.com/up/d/f3eb2117da",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")}})},Qe=(n(87),Object(se.b)({cartItems:ze,total:Be})),Xe=Object(o.b)(Qe)((function(e){var t=e.cartItems,n=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(Ye,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"TOTAL: $",n)),r.a.createElement("div",{className:"test-warning"},"*Please use the following test credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/22 - CVV: 123"),r.a.createElement(Ke,{price:n}))}));function Ze(){return(Ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function et(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var tt=r.a.createElement("g",null),nt=r.a.createElement("g",null),at=r.a.createElement("g",null),rt=r.a.createElement("g",null),ct=r.a.createElement("g",null),it=r.a.createElement("g",null),lt=r.a.createElement("g",null),ot=r.a.createElement("g",null),st=r.a.createElement("g",null),ut=r.a.createElement("g",null),mt=r.a.createElement("g",null),pt=r.a.createElement("g",null),dt=r.a.createElement("g",null),ft=r.a.createElement("g",null),bt=r.a.createElement("g",null),Et=function(e){var t=e.svgRef,n=e.title,a=et(e,["svgRef","title"]);return r.a.createElement("svg",Ze({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),tt,nt,at,rt,ct,it,lt,ot,st,ut,mt,pt,dt,ft,bt)},vt=r.a.forwardRef((function(e,t){return r.a.createElement(Et,Ze({svgRef:t},e))})),ht=(n.p,n(88),Object(se.b)({itemCount:We})),Ot=Object(o.b)(ht,(function(e){return{toggleCartHidden:function(){return e(Se())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(vt,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},n))})),gt=(n(89),function(e){var t=e.item,n=t.imageUrl,a=t.price,c=t.name,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:n,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},i," x $",a)))}),yt=(n(90),Object(se.b)({cartItems:ze})),jt=Object(oe.g)(Object(o.b)(yt)((function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(gt,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(Le,{onClick:function(){n.push("/checkout"),a(Se())}},"GO TO CHECKOUT"))})));function Ct(){return(Ct=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Nt(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var wt=r.a.createElement("title",null,"Group"),kt=r.a.createElement("desc",null,"Created with Sketch."),It=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),xt=function(e){var t=e.svgRef,n=e.title,a=Nt(e,["svgRef","title"]);return r.a.createElement("svg",Ct({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},a),void 0===n?wt:n?r.a.createElement("title",null,n):null,kt,It)},Tt=r.a.forwardRef((function(e,t){return r.a.createElement(xt,Ct({svgRef:t},e))}));n.p;function St(){var e=Object(ue.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n"]);return St=function(){return e},e}function _t(){var e=Object(ue.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]);return _t=function(){return e},e}function Lt(){var e=Object(ue.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n"]);return Lt=function(){return e},e}function Rt(){var e=Object(ue.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n"]);return Rt=function(){return e},e}var Ut=me.b.div(Rt()),At=Object(me.b)(l.b)(Lt()),Ht=me.b.div(_t()),Ft=Object(me.b)(l.b)(St()),Mt=Object(o.b)((function(e){return{currentUser:e.user.currentUser,hidden:e.cart.hidden}}))((function(e){var t=e.currentUser,n=e.hidden;return r.a.createElement(Ut,null,r.a.createElement(At,{to:"/"},r.a.createElement(Tt,{className:"logo"})),r.a.createElement(Ht,null,r.a.createElement(Ft,{to:"/shop"},"SHOP"),r.a.createElement(Ft,{to:"/shop"},"CONTACT"),t?r.a.createElement(Ft,{as:"div",onClick:function(){return G.signOut()}},"SIGN OUT"):r.a.createElement(Ft,{to:"/signin"},"SIGN IN"),r.a.createElement(Ot,null)),n?null:r.a.createElement(jt,null))})),Pt=n(25),Dt=n(33),Gt=(n(91),function(e){var t=e.handleChange,n=e.label,a=Object(fe.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},a)),n?r.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},n):null)}),qt=(n(92),function(){var e=Object(a.useState)({email:"",password:""}),t=Object(Dt.a)(e,2),n=t[0],c=t[1],i=n.email,l=n.password,o=function(){var e=Object(H.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,G.signInWithEmailAndPassword(i,l);case 4:c({email:"",password:""}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:c({email:"",password:""});case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),s=function(e){var t=e.target,a=t.value,r=t.name;c(Object(b.a)(Object(b.a)({},n),{},Object(Pt.a)({},r,a)))};return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:o},r.a.createElement(Gt,{name:"email",type:"email",value:i,handleChange:s,label:"email",required:!0}),r.a.createElement(Gt,{name:"password",type:"password",value:l,handleChange:s,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(Le,{type:"submit"},"Sign In"),r.a.createElement(Le,{type:"button",onClick:z,isGoogleSignIn:!0},"Sign In With Google"))))}),Vt=(n(93),function(){var e=Object(a.useState)({displayName:"",email:"",password:"",confirmPassword:""}),t=Object(Dt.a)(e,2),n=t[0],c=t[1],i=n.displayName,l=n.email,o=n.password,s=n.confirmPassword,u=function(){var e=Object(H.a)(U.a.mark((function e(t){var n,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),o===s){e.next=4;break}return alert("Passwords do not match"),e.abrupt("return");case 4:return e.prev=4,e.next=7,G.createUserWithEmailAndPassword(l,o);case 7:return n=e.sent,a=n.user,e.next=11,P(a,{displayName:i});case 11:c({displayName:"",email:"",password:"",confirmPassword:""}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.target,a=t.name,r=t.value;c(Object(b.a)(Object(b.a)({},n),{},Object(Pt.a)({},a,r)))};return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have an account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{onSubmit:u,className:"sign-up-form"},r.a.createElement(Gt,{type:"text",name:"displayName",value:i,onChange:m,label:"Display Name",required:!0}),r.a.createElement(Gt,{type:"email",name:"email",value:l,onChange:m,label:"Email",required:!0}),r.a.createElement(Gt,{type:"password",name:"password",value:o,onChange:m,label:"Password",required:!0}),r.a.createElement(Gt,{type:"password",name:"confirmPassword",value:s,onChange:m,label:"Confirm Password",required:!0}),r.a.createElement(Le,{type:"submit"},"SIGN UP")))}),zt=(n(94),function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(qt,null),r.a.createElement(Vt,null))}),Wt=Object(se.a)([function(e){return e.user}],(function(e){return e.currentUser})),Bt=function(e){Object(ie.a)(n,e);var t=Object(le.a)(n);function n(){var e;Object(re.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(ce.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=G.onAuthStateChanged(function(){var t=Object(H.a)(U.a.mark((function t(n){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,P(n);case 3:t.sent.onSnapshot((function(t){e(Object(b.a)({id:t.id},t.data()))})),t.next=8;break;case 7:e(n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(de,null),r.a.createElement(Mt,null),r.a.createElement(oe.d,null,r.a.createElement(oe.b,{exact:!0,path:"/",component:Oe}),r.a.createElement(oe.b,{path:"/shop",component:qe}),r.a.createElement(oe.b,{exact:!0,path:"/checkout",component:Xe}),r.a.createElement(oe.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?r.a.createElement(oe.a,{to:"/"}):r.a.createElement(zt,null)}})))}}]),n}(r.a.Component),Yt=Object(se.b)({currentUser:Wt}),$t=Object(o.b)(Yt,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:E,payload:e}}(t))}}}))(Bt);i.a.render(r.a.createElement(o.a,{store:ne},r.a.createElement(l.a,{basename:"royal-sky"},r.a.createElement(s.a,{persistor:ae},r.a.createElement($t,null)))),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.832ffc91.chunk.js.map