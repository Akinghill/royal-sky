(this["webpackJsonproyal-sky"]=this["webpackJsonproyal-sky"]||[]).push([[0],{43:function(e,t,a){e.exports=a(83)},55:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),i=a.n(c),l=a(9),s=a(2),o=a(39),m=a(10),u=a(27),p=(a(52),a(40)),d=a.n(p),b=a(1),h="SET_CURRENT_USER",g={currentUser:null},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(b.a)(Object(b.a)({},e),{},{currentUser:t.payload});default:return e}},E={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",REMOVE_ITEM:"REMOVE_ITEM"},v=a(42),y=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(b.a)(Object(b.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(v.a)(e),[Object(b.a)(Object(b.a)({},t),{},{quantity:1})])},O=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(b.a)(Object(b.a)({},e),{},{quantity:e.quantity-1}):e}))},k={hidden:!0,cartItems:[]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.TOGGLE_CART_HIDDEN:return Object(b.a)(Object(b.a)({},e),{},{hidden:!e.hidden});case E.ADD_ITEM:return Object(b.a)(Object(b.a)({},e),{},{cartItems:y(e.cartItems,t.payload)});case E.REMOVE_ITEM:return Object(b.a)(Object(b.a)({},e),{},{cartItems:O(e.cartItems,t.payload)});case E.CLEAR_ITEM_FROM_CART:return Object(b.a)(Object(b.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},w={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;return t.type,e},C={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return t.type,e},I={key:"root",storage:d.a,whitelist:["cart"]},T=Object(m.c)({user:f,cart:j,directory:N,shop:U}),S=Object(u.a)(I,T);var x=Object(m.d)(S,m.a.apply(void 0,[])),R=Object(u.b)(x),A=(a(55),a(7)),M=a.n(A),B=a(12),P=a(18),D=a(19),_=a(21),G=a(20),H=a(3),W=(a(57),a(13)),q=a(4),V=Object(q.a)([function(e){return e.directory}],(function(e){return e.sections})),L=(a(58),Object(H.g)((function(e){var t=e.title,a=e.imageUrl,n=e.size,c=e.history,i=e.linkUrl,l=e.match;return r.a.createElement("div",{className:"".concat(n," menu-item"),onClick:function(){return c.push("".concat(l.url).concat(i))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),J=(a(60),Object(q.b)({sections:V})),z=Object(s.b)(J)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,a=Object(W.a)(e,["id"]);return r.a.createElement(L,Object.assign({key:t},a))})))})),F=(a(61),function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(z,null))}),Y=(a(62),function(){return{type:E.TOGGLE_CART_HIDDEN}}),K=function(e){return{type:E.ADD_ITEM,payload:e}},Q=(a(63),function(e){var t=e.children,a=e.isGoogleSignIn,n=e.inverted,c=Object(W.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:"".concat(n?"inverted":""," \n    ").concat(a?"google-sign-in":""," \n    custom-button")},c),t)}),X=Object(s.b)(null,(function(e){return{addItem:function(t){return e(K(t))}}}))((function(e){var t=e.item,a=e.addItem,n=t.name,c=t.price,i=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},n),r.a.createElement("span",{className:"price"},c)),r.a.createElement(Q,{onClick:function(){return a(t)},inverted:!0},"Add to cart"))})),Z=(a(64),function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(X,{key:e.id,item:e})}))))}),$=Object(q.a)([function(e){return e.shop}],(function(e){return e.collections})),ee=Object(q.a)([$],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),te=(a(65),Object(q.b)({collections:ee})),ae=Object(s.b)(te)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,a=Object(W.a)(e,["id"]);return r.a.createElement(Z,Object.assign({key:t},a))})))})),ne=(a(66),Object(s.b)((function(e,t){return{collection:(a=t.match.params.collectionId,Object(q.a)([$],(function(e){return e[a]})))(e)};var a}))((function(e){var t=e.collection,a=t.title,n=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},a),r.a.createElement("div",{className:"items"},n.map((function(e){return r.a.createElement(X,{key:e.id,item:e})}))))}))),re=function(e){var t=e.match;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(H.b,{exact:!0,path:"".concat(t.path),component:ae}),r.a.createElement(H.b,{path:"".concat(t.path,"/:collectionId"),component:ne}))},ce=function(e){return e.cart},ie=Object(q.a)([ce],(function(e){return e.cartItems})),le=(Object(q.a)([ce],(function(e){return e.hidden})),Object(q.a)([ie],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)}))),se=Object(q.a)([ie],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),oe=(a(67),Object(s.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:E.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(K(t))},removeItem:function(t){return e(function(e){return{type:E.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,a=e.clearItem,n=e.addItem,c=e.removeItem,i=t.name,l=t.imageUrl,s=t.price,o=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:l,alt:"item"})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity "},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},o),r.a.createElement("div",{className:"arrow",onClick:function(){return n(t)}},"\u276f")),r.a.createElement("span",{className:"price"},s),r.a.createElement("div",{className:"remove-button",onClick:function(){a(t)}},"\u2715"))}))),me=a(41),ue=a.n(me),pe=function(e){var t=e.price,a=100*t;return r.a.createElement(ue.a,{label:"Pay Now",name:"Royal Sky",billingAddress:!0,shippingAddress:!0,image:"https://sendeyo.com/up/d/f3eb2117da",description:"Your total is $".concat(t),amount:a,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")}})},de=(a(68),Object(q.b)({cartItems:ie,total:se})),be=Object(s.b)(de)((function(e){var t=e.cartItems,a=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(oe,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"TOTAL: $",a)),r.a.createElement("div",{className:"test-warning"},"*Please use the following test credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/22 - CVV: 123"),r.a.createElement(pe,{price:a}))})),he=a(22),ge=a.n(he),fe=(a(69),a(73),function(){var e=Object(B.a)(M.a.mark((function e(t,a){var n,r,c,i;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=ve.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,n.set(Object(b.a)({displayName:r,email:c,createdAt:i},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error ceating user",e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}());ge.a.initializeApp({apiKey:"AIzaSyC-YHVpnOS6nfYmRuDsvUDHTxZStT1qayI",authDomain:"royal-sky-clothing.firebaseapp.com",databaseURL:"https://royal-sky-clothing.firebaseio.com",projectId:"royal-sky-clothing",storageBucket:"royal-sky-clothing.appspot.com",messagingSenderId:"840435294055",appId:"1:840435294055:web:27121f65be7482b0c319c2",measurementId:"G-HMW299XBFV"});var Ee=ge.a.auth(),ve=ge.a.firestore(),ye=new ge.a.auth.GoogleAuthProvider;ye.setCustomParameters({prompt:"select_account"});var Oe=function(){return Ee.signInWithPopup(ye)};ge.a;function ke(){return(ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function je(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var we=r.a.createElement("g",null),Ne=r.a.createElement("g",null),Ce=r.a.createElement("g",null),Ue=r.a.createElement("g",null),Ie=r.a.createElement("g",null),Te=r.a.createElement("g",null),Se=r.a.createElement("g",null),xe=r.a.createElement("g",null),Re=r.a.createElement("g",null),Ae=r.a.createElement("g",null),Me=r.a.createElement("g",null),Be=r.a.createElement("g",null),Pe=r.a.createElement("g",null),De=r.a.createElement("g",null),_e=r.a.createElement("g",null),Ge=function(e){var t=e.svgRef,a=e.title,n=je(e,["svgRef","title"]);return r.a.createElement("svg",ke({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),we,Ne,Ce,Ue,Ie,Te,Se,xe,Re,Ae,Me,Be,Pe,De,_e)},He=r.a.forwardRef((function(e,t){return r.a.createElement(Ge,ke({svgRef:t},e))})),We=(a.p,a(75),Object(q.b)({itemCount:le})),qe=Object(s.b)(We,(function(e){return{toggleCartHidden:function(){return e(Y())}}}))((function(e){var t=e.toggleCartHidden,a=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(He,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},a))})),Ve=(a(76),function(e){var t=e.item,a=t.imageUrl,n=t.price,c=t.name,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:a,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},i," x $",n)))}),Le=(a(77),Object(q.b)({cartItems:ie})),Je=Object(H.g)(Object(s.b)(Le)((function(e){var t=e.cartItems,a=e.history,n=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(Ve,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(Q,{onClick:function(){a.push("/checkout"),n(Y())}},"GO TO CHECKOUT"))})));function ze(){return(ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Fe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Ye=r.a.createElement("title",null,"Group"),Ke=r.a.createElement("desc",null,"Created with Sketch."),Qe=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),Xe=function(e){var t=e.svgRef,a=e.title,n=Fe(e,["svgRef","title"]);return r.a.createElement("svg",ze({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?Ye:a?r.a.createElement("title",null,a):null,Ke,Qe)},Ze=r.a.forwardRef((function(e,t){return r.a.createElement(Xe,ze({svgRef:t},e))})),$e=(a.p,a(78),Object(s.b)((function(e){return{currentUser:e.user.currentUser,hidden:e.cart.hidden}}))((function(e){var t=e.currentUser,a=e.hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(l.b,{to:"/royal-sky"},r.a.createElement(Ze,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(l.b,{className:"option",to:"/royal-sky/shop"},"SHOP"),r.a.createElement(l.b,{className:"option",to:"/royal-sky/contact"},"CONTACT"),t?r.a.createElement("div",{className:"option",onClick:function(){return Ee.signOut()}},"SIGN OUT"):r.a.createElement(l.b,{className:"option",to:"/royal-sky/signin"},"SIGN IN"),r.a.createElement(qe,null)),a?null:r.a.createElement(Je,null))}))),et=a(17),tt=(a(79),function(e){var t=e.handleChange,a=e.label,n=Object(W.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},a):null)}),at=(a(80),function(e){Object(_.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(P.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(B.a)(M.a.mark((function e(t){var a,r,c;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,r=a.email,c=a.password,e.prev=2,e.next=5,Ee.signInWithEmailAndPassword(r,c);case 5:n.setState({email:"",password:""}),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(2);case 10:n.setState({email:"",password:""});case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(et.a)({},r,a))},n.state={email:"",password:""},n}return Object(D.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(tt,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"email",required:!0}),r.a.createElement(tt,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(Q,{type:"submit"},"Sign In"),r.a.createElement(Q,{type:"button",onClick:Oe,isGoogleSignIn:!0},"Sign In With Google"))))}}]),a}(r.a.Component)),nt=(a(81),function(e){Object(_.a)(a,e);var t=Object(G.a)(a);function a(){var e;return Object(P.a)(this,a),(e=t.call(this)).handleSubmit=function(){var t=Object(B.a)(M.a.mark((function t(a){var n,r,c,i,l,s,o;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.displayName,c=n.email,i=n.password,l=n.confirmPassword,i===l){t.next=5;break}return alert("Passwords do not match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,Ee.createUserWithEmailAndPassword(c,i);case 8:return s=t.sent,o=s.user,t.next=12,fe(o,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(et.a)({},n,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(D.a)(a,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have an account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit,className:"sign-up-form"},r.a.createElement(tt,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(tt,{type:"email",name:"email",value:a,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(tt,{type:"password",name:"password",value:n,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(tt,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(Q,{type:"submit"},"SIGN UP")))}}]),a}(r.a.Component)),rt=(a(82),function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(at,null),r.a.createElement(nt,null))}),ct=function(e){Object(_.a)(a,e);var t=Object(G.a)(a);function a(){var e;Object(P.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(D.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=Ee.onAuthStateChanged(function(){var t=Object(B.a)(M.a.mark((function t(a){return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}return t.next=3,fe(a);case 3:t.sent.onSnapshot((function(t){e(Object(b.a)({id:t.id},t.data()))})),t.next=8;break;case 7:e(a);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement($e,null),r.a.createElement(H.d,null,r.a.createElement(H.b,{exact:!0,path:"/",component:F}),r.a.createElement(H.b,{path:"/shop",component:re}),r.a.createElement(H.b,{exact:!0,path:"/checkout",component:be}),r.a.createElement(H.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?r.a.createElement(H.a,{to:"/"}):r.a.createElement(rt,null)}})))}}]),a}(r.a.Component),it=Object(s.b)((function(e){return{currentUser:e.currentUser}}),(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:h,payload:e}}(t))}}}))(ct);i.a.render(r.a.createElement(s.a,{store:x},r.a.createElement(l.a,null,r.a.createElement(o.a,{persistor:R},r.a.createElement(it,null)))),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.5194cb93.chunk.js.map