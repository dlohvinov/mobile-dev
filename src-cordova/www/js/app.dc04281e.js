(function(e){function t(t){for(var r,i,s=t[0],l=t[1],u=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1cfc":function(e,t,n){"use strict";var r=n("4c92"),a=n.n(r);a.a},"4c92":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("router-view")],1)],1)},o=[],i=n("8aa5"),s=n.n(i),l={name:"app",mounted:function(){var e=s.a.auth().currentUser;e||"/login"===this.$route.path||this.$router.push("/login")}},u=l,c=(n("1cfc"),n("2877")),d=Object(c["a"])(u,a,o,!1,null,null,null),p=d.exports,f=n("8c4f"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("section",{staticClass:"content"},[r("h1",[e._v(e._s(this.username)+", Welcome to Vue")]),r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("v-btn",{attrs:{loading:e.loading},on:{click:e.submit}},[e._v("Sign out")])],1)])},h=[],v=(n("8e6e"),n("ac6a"),n("456d"),n("96cf"),n("3b8d")),b=n("bd86"),g=n("2f62");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(b["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x={name:"the-home",data:function(){return{loading:!1}},computed:y({},Object(g["b"])(["username"])),methods:{submit:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,e.next=4,s.a.auth().signOut();case 4:this.$router.push("/login"),e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](1),this.loading=!1,console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,7]])})));function t(){return e.apply(this,arguments)}return t}()}},_=x,k=Object(c["a"])(_,m,h,!1,null,"3de21478",null),O=k.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("header",{staticClass:"app-title text-center"},[n("h3",[e._v("Log in")]),n("v-divider")],1),n("section",{staticClass:"auth"},[n("v-form",{staticClass:"auth-form",on:{submit:e.submit},model:{value:e.validation,callback:function(t){e.validation=t},expression:"validation"}},[n("v-subheader",{staticClass:"subtitle-1"},[e._v("Enter your credentials below:")]),n("v-text-field",{staticClass:"login-form__input",attrs:{rules:e.emailValidation,label:"email",placeholder:"email",solo:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),n("v-text-field",{staticClass:"login-form__input",attrs:{rules:e.passwordValidation,label:"password",placeholder:"password",type:"password",solo:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),n("div",{staticClass:"auth-link text-right"},[n("router-link",{attrs:{to:"/register"}},[e._v("Don't have an account?")])],1),n("v-btn",{attrs:{disabled:!e.validation,loading:e.loading},on:{click:e.submit}},[e._v("\n                Login\n            ")]),n("v-btn",{on:{click:e.quit}},[e._v("quit")])],1)],1)])},C=[],E={name:"the-login",data:function(){return{form:{email:null,password:null},validation:!1,emailValidation:[function(e){return!!e||"E-mail is required"},function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)||"E-mail must be valid"}],passwordValidation:[function(e){return!!e||"Password is required"}],loading:!1}},mounted:function(){document.addEventListener("deviceready",this.backClose,!1)},destroyed:function(){document.removeEventListener("deviceready",this.backClose,!1)},methods:{submit:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,e.next=4,s.a.auth().signInWithEmailAndPassword(this.form.email,this.form.password);case 4:return e.next=6,s.a.auth().currentUser;case 6:return t=e.sent,console.log(t),e.next=10,this.$store.dispatch("setUsername",t.displayName);case 10:this.$router.push("/"),this.loading=!1,e.next=19;break;case 14:throw e.prev=14,e.t0=e["catch"](1),this.loading=!1,console.log(e.t0),e.t0;case 19:case"end":return e.stop()}}),e,this,[[1,14]])})));function t(){return e.apply(this,arguments)}return t}(),backClose:function(){document.addEventListener("backbutton",(function(e){e.preventDefault(),navigator.app.exitApp()}),!1)}}},P=E,$=Object(c["a"])(P,j,C,!1,null,"533ea946",null),A=$.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("header",{staticClass:"app-title text-center"},[n("h3",[e._v("Register")]),n("v-divider")],1),n("section",{staticClass:"auth"},[n("v-form",{staticClass:"auth-form",on:{submit:e.submit},model:{value:e.validation,callback:function(t){e.validation=t},expression:"validation"}},[n("v-subheader",{staticClass:"subtitle-1"},[e._v("Enter your credentials below: ")]),n("v-text-field",{staticClass:"login-form__input",attrs:{rules:e.emailValidation,label:"email",placeholder:"email",solo:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),n("v-text-field",{staticClass:"login-form__input",attrs:{rules:e.required,label:"name",placeholder:"name",solo:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),n("v-text-field",{staticClass:"login-form__input",attrs:{rules:e.phoneValidation,label:"phone",placeholder:"phone",solo:""},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),n("v-text-field",{staticClass:"login-form__input",attrs:{rules:e.required,label:"password",placeholder:"password",type:"password",solo:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),n("div",{staticClass:"auth-link text-right"},[n("router-link",{attrs:{to:"/login"}},[e._v("Already have an account?")])],1),n("v-btn",{attrs:{disabled:!e.validation,loading:e.loading},on:{click:e.submit}},[e._v("\n                Register")])],1)],1)])},q=[],S=(n("7f7f"),{name:"the-register",data:function(){return{form:{email:null,password:null},validation:!1,emailValidation:[function(e){return!!e||"E-mail is required"},function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)||"E-mail must be valid"}],phoneValidation:[function(e){return!!e||"Phone is required"}],required:[function(e){return!!e||"Field is required"}],loading:!1}},mounted:function(){document.addEventListener("deviceready",this.backClose,!1)},destroyed:function(){document.removeEventListener("deviceready",this.backClose,!1)},methods:{submit:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){var t,n,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,e.next=4,s.a.auth().createUserWithEmailAndPassword(this.form.email,this.form.password);case 4:return t=e.sent,console.log(t),e.next=8,s.a.auth().currentUser;case 8:return n=e.sent,console.log(n),e.next=12,n.updateProfile({displayName:this.form.name,phoneNumber:this.form.phone});case 12:return e.sent,e.next=15,s.a.auth().onAuthStateChanged(function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("user",t),e.next=3,r.$store.dispatch("setUsername",t.displayName);case 3:r.$router.push("/");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 15:e.sent,this.loading=!1,e.next=23;break;case 19:e.prev=19,e.t0=e["catch"](1),this.loading=!1,console.log(e.t0);case 23:case"end":return e.stop()}}),e,this,[[1,19]])})));function t(){return e.apply(this,arguments)}return t}(),backClose:function(){document.addEventListener("backbutton",(function(e){e.preventDefault(),navigator.app.exitApp()}),!1)}}}),U=S,V=Object(c["a"])(U,R,q,!1,null,"62f1e3fb",null),D=V.exports;r["default"].use(f["a"]);var F=new f["a"]({base:"",routes:[{path:"/login",name:"login",component:A},{path:"/register",name:"register",component:D},{path:"/",name:"home",component:O,meta:{requiresAuth:!0}}]});F.beforeEach((function(e,t,n){var r=s.a.auth().currentUser,a=e.matched.some((function(e){return e.meta.requiresAuth}));console.log(r,a),!r&&a?n("/login"):n()}));var L=F,z=n("ce5b"),I=n.n(z);n("bf40");r["default"].use(I.a);var M=new I.a({theme:{themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},icons:{iconfont:"mdi"}}),N=(n("d5e8"),n("5363"),{apiKey:"AIzaSyCihZARE9G06XeftARD4c9ewv6kBMNEgC8",authDomain:"mobile-dev-d6b61.firebaseapp.com",databaseURL:"https://mobile-dev-d6b61.firebaseio.com",projectId:"mobile-dev-d6b61",storageBucket:"",messagingSenderId:"252093777943",appId:"1:252093777943:web:75d73858dab99b27da7452"});s.a.initializeApp(N),r["default"].use(g["a"]);var Z=new g["a"].Store({state:{username:"io"},actions:{setUsername:function(e,t){e.commit("setUsername",t)}},mutations:{setUsername:function(e,t){e.username=t}}});r["default"].config.productionTip=!1,new r["default"]({router:L,vuetify:M,store:Z,render:function(e){return e(p)}}).$mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.dc04281e.js.map