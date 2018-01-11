webpackJsonp([6],Array(32).concat([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(64),i=n(120);var a=function(e){n(63)},s=n(19)(r.a,i.a,!1,a,null,null);t.default=s.exports},,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(125),i=n(143);var a=function(e){n(124)},s=n(19)(r.a,i.a,!1,a,null,null);t.default=s.exports},,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(30),i=n(12),a=n(60),s=n(144),o=n.n(s),c=n(148);n.n(c);n(56),r.a.config.productionTip=!1,r.a.use(i.default,{components:i,directives:i}),r.a.use(o.a),r.a.prototype.$e=new r.a,n(146),i.default.start(function(){new r.a({el:"#q-app",router:a.a,render:function(e){return e(n(150).default)}})})},function(e,t){},,,,function(e,t,n){"use strict";var r=n(30),i=n(61);function a(e){return function(){return n(62)("./"+e+".vue")}}r.a.use(i.a),t.a=new i.a({mode:"history",scrollBehavior:function(){return{y:0}},routes:[{path:"/",component:a("Index"),name:"Index"},{path:"/u/:username?",component:a("User"),name:"User"},{path:"*",component:a("Error404")}]})},,function(e,t,n){var r={"./Auth.vue":[32],"./Bus.vue":[266,4],"./Device.vue":[265,1],"./Error404.vue":[267,3],"./Index.vue":[268,0],"./ProfileEdit.vue":[48],"./User.vue":[269,2]};function i(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}i.keys=function(){return Object.keys(r)},i.id=62,e.exports=i},function(e,t){},function(e,t,n){"use strict";var r=n(13),i=n.n(r),a=n(14),s=n.n(a),o=n(46),c=(n.n(o),n(12));t.a={data:function(){return{form:{email:"",password:"",invitedById:null},pending:!1,rememberMe:!1,invitedByUser:null,registering:!1}},validations:{form:{email:{required:o.required,email:o.email}}},computed:{loginRdy:function(){if(!this.$v.form.$error)return!0}},methods:{submit:function(){var e=s()(i.a.mark(function e(){var t,n,r=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.$v.form.$touch(),!this.$v.form.$error){e.next=4;break}return c.Toast.create("Please review fields again."),e.abrupt("return");case 4:return this.pending=!0,delete this.form.invitedById,e.next=8,this.api.auth.login(this.form);case 8:if(!(t=e.sent).error){e.next=14;break}c.Toast.create.negative(t.error),setTimeout(function(){r.pending=!1},1500),e.next=21;break;case 14:return this.$router.push("/"),console.log("loginResult",t),e.next=18,this.api.user.get(t.id);case 18:n=e.sent,this.$emit("update:thisUser",n),this.$emit("update:authenticated",!0);case 21:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),join:function(){var e=s()(i.a.mark(function e(){var t,n,r=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.$v.form.$touch(),!this.$v.form.$error){e.next=4;break}return c.Toast.create("Please review fields again."),e.abrupt("return");case 4:return this.pending=!0,e.next=7,this.api.auth.authenticateUser(this.form);case 7:if(t=e.sent,console.log(t),!t.error){e.next=14;break}c.Toast.create.negative(t.error),setTimeout(function(){r.pending=!1},1500),e.next=20;break;case 14:return console.log("we are here"),e.next=17,this.api.user.get(t.id);case 17:n=e.sent,this.$emit("update:thisUser",n),this.$emit("update:authenticated",!0);case 20:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),checkInvitedBy:function(){var e=s()(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.$route.params.username)){e.next=5;break}return e.next=4,this.api.user.getByUsername(t);case 4:n=e.sent;case 5:n&&(this.form.invitedById=n.id,this.invitedByUser=n),this.$router.push("/");case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},props:["thisUser","authenticated","api","thisModal"],mounted:function(){var e=this;JSON.parse(window.localStorage.getItem("rememberMe"))&&(this.rememberMe=!0),console.log(),setTimeout(function(){e.checkInvitedBy()},1e3)},watch:{rememberMe:function(e){window.localStorage.setItem("rememberMe",e)}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-padding relative-position"},[n("q-transition",{attrs:{appear:"appear",enter:"fadeIn",leave:"fadeOut"}},[n("div",[n("h4",{staticClass:"light-paragraph text-center",staticStyle:{"font-family":"'Comfortaa', cursive",color:"#089cfc","user-select":"none","margin-bottom":"5px"}},[e._v("boid")]),n("h6",{staticClass:"light-paragraph text-center",staticStyle:{"margin-bottom":"30px"}},[e._v("The Social Supercomputer")]),e.invitedByUser?n("h6",{staticClass:"thin-paragraph text-center",staticStyle:{"margin-bottom":"30px"}},[e._v("You were invited by: "+e._s(e.invitedByUser.username))]):e._e(),e.registering?e._e():n("div",[n("q-input",{attrs:{error:e.$v.form.email.$error,"stack-label":"email",type:"text"},on:{blur:e.$v.form.email.$touch,keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.submit(t)}},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),n("q-input",{attrs:{"stack-label":"password",type:"password"},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.submit(t)}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),n("br"),n("q-checkbox",{attrs:{label:"remember me"},model:{value:e.rememberMe,callback:function(t){e.rememberMe=t},expression:"rememberMe"}})],1),n("br"),n("br"),n("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[n("q-btn",{staticClass:"text-center",staticStyle:{},attrs:{disabled:!e.loginRdy,invert:"invert",color:"blue"},on:{click:e.join}},[e._v("register")]),e.registering?e._e():n("q-btn",{staticClass:"text-center on-right",staticStyle:{},attrs:{disabled:!e.loginRdy,invert:"invert",color:"green"},on:{click:e.submit}},[e._v("Login")])],1),n("q-inner-loading",{attrs:{visible:e.pending}},[n("q-spinner-ball",{attrs:{size:"70px",color:"blue"}})],1)],1)])],1)},staticRenderFns:[]};t.a=r},,,,function(e,t){},function(e,t,n){"use strict";var r=n(13),i=n.n(r),a=n(14),s=n.n(a),o=n(46),c=(n.n(o),n(12)),u=n(126),l=n.n(u);t.a={data:function(){return{form:{imageURL:"",username:"",tagline:""},pending:!1}},validations:{form:{imageURL:{checkImage:function(e){return""===e||l()(e)}},username:{checkUsername:function(){var e=s()(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=2;break}return e.abrupt("return",!0);case 2:return e.next=4,this.api.user.checkValidUsername(t);case 4:return n=e.sent,e.abrupt("return",!n);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}}},computed:{rdy:function(){return!(""===this.form.username&&""===this.form.imageURL||this.$v.form.$invalid)}},methods:{init:function(){var e=s()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.form.imageURL="",this.form.username="",this.form.tagline="";case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),submit:function(){var e=s()(i.a.mark(function e(){var t,n,r=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.$v.form.$touch(),!this.$v.form.$error){e.next=4;break}return c.Toast.create("Please review fields again."),e.abrupt("return");case 4:return this.pending=!0,(t={}).userId=this.thisUser.id,""!=this.form.username&&(t.username=this.form.username),""!=this.form.imageURL&&(t.imageURL=this.form.imageURL),""!=this.form.tagline&&(t.tagline=this.form.tagline),e.next=12,this.api.user.updateProfile(t);case 12:n=e.sent,console.log(n),n.error?(c.Toast.create.negative(n.error),setTimeout(function(){r.pending=!1},1500)):(this.$e.$emit("refreshUser"),setTimeout(function(){r.pending=!1,r.thisModal.close()},1e3));case 15:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},props:["thisUser","api","thisModal"],created:function(){var e=this;this.$e.$on("openProfileEditModal",function(){e.init(),e.$v.form.$reset})},watch:{"form.username":function(e){e.split(" ").length>1&&(this.form.username=e.split(" ").join(""))},"form.imageURL":function(e){""===e&&this.$v.form.imageURL.$reset()}}}},,,,,,,,,,,,,,,,function(e,t){e.exports=["ase","art","bmp","blp","cd5","cit","cpt","cr2","cut","dds","dib","djvu","egt","exif","gif","gpl","grf","icns","ico","iff","jng","jpeg","jpg","jfif","jp2","jps","lbm","max","miff","mng","msp","nitf","ota","pbm","pc1","pc2","pc3","pcf","pcx","pdn","pgm","PI1","PI2","PI3","pict","pct","pnm","pns","ppm","psb","psd","pdd","psp","px","pxm","pxr","qfx","raw","rle","sct","sgi","rgb","int","bw","tga","tiff","tif","vtf","xbm","xcf","xpm","3dv","amf","ai","awg","cgm","cdr","cmx","dxf","e2d","egt","eps","fs","gbr","odg","svg","stl","vrml","x3d","sxd","v2d","vnd","wmf","emf","art","xar","png","webp","jxr","hdp","wdp","cur","ecw","iff","lbm","liff","nrrd","pam","pcx","pgf","sgi","rgb","rgba","bw","int","inta","sid","ras","sun","tga"]},,function(e,t,n){"use strict";var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-padding relative-position"},[n("q-transition",{attrs:{appear:"appear",enter:"fadeIn",leave:"fadeOut"}},[n("div",[n("h4",{staticClass:"light-paragraph text-center",staticStyle:{"font-family":"'Comfortaa', cursive",color:"#089cfc","user-select":"none","margin-bottom":"5px"}},[e._v("Update Profile")]),n("div",{staticClass:"layout-padding full-width relative-position",staticStyle:{height:"140px"}},[e.$v.form.imageURL.$invalid||""===e.form.imageURL?n("img",{staticClass:"avatar absolute-center block",staticStyle:{width:"120px",height:"120px"},attrs:{src:e.thisUser.image}}):n("img",{staticClass:"avatar absolute-center block",staticStyle:{width:"120px",height:"120px"},attrs:{src:e.form.imageURL}})]),e.rdy||e.$v.form.$pending?n("h5",{staticClass:"text-center"},[e._v(e._s(e.form.username))]):n("h5",{staticClass:"text-center"},[e._v(e._s(e.thisUser.username))]),e.thisUser.tagline||""!=e.form.tagline?n("div",{staticClass:"tagline"},[""===e.form.tagline?n("h6",{staticClass:"light-paragraph text-center"},[e._v(e._s(e.thisUser.tagline))]):n("h6",{staticClass:"light-paragraph text-center"},[e._v(e._s(e.form.tagline))])]):e._e(),n("br"),n("div",[n("q-input",{attrs:{error:e.$v.form.imageURL.$error,"stack-label":"Profile Image URL",type:"text",placeholder:e.thisUser.image},on:{input:function(t){e.$v.form.imageURL.$touch()}},model:{value:e.form.imageURL,callback:function(t){e.$set(e.form,"imageURL","string"==typeof t?t.trim():t)},expression:"form.imageURL"}}),e.$v.form.imageURL.$error?n("p",{staticClass:"text-red inline"},[e._v("Image URL needs to be valid (.jpg .png .svg)")]):e._e(),n("br"),n("q-field",{attrs:{count:15}},[n("q-input",{attrs:{"stack-label":"username",type:"text",error:e.$v.form.username.$error,placeholder:e.thisUser.username,"max-length":15,loading:this.$v.form.$pending},on:{input:function(t){e.$v.form.username.$touch()}},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username","string"==typeof t?t.trim():t)},expression:"form.username"}}),e.$v.form.username.$error?n("p",{staticClass:"text-red inline"},[e._v("Username already claimed")]):n("small",{staticClass:"thin-paragraph float-left"},[e._v("Changing your username will change your invite link")])],1),n("br"),n("q-field",{attrs:{count:50}},[n("q-input",{attrs:{"stack-label":"tagline",type:"text",placeholder:e.thisUser.tagline,"max-length":50},model:{value:e.form.tagline,callback:function(t){e.$set(e.form,"tagline","string"==typeof t?t.trim():t)},expression:"form.tagline"}}),n("small",{staticClass:"thin-paragraph float-left"},[e._v("Your tagline appears under your name in leaderboards")])],1),n("br")],1),n("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[n("q-btn",{staticClass:"text-center",staticStyle:{},attrs:{invert:"invert",color:"red"},on:{click:function(t){e.thisModal.close()}}},[e._v("cancel")]),n("q-btn",{staticClass:"text-center on-right",staticStyle:{},attrs:{disabled:!e.rdy,invert:"invert",color:"green"},on:{click:e.submit}},[e._v("Update")])],1),n("q-inner-loading",{attrs:{visible:e.pending}},[n("q-spinner-ball",{attrs:{size:"70px",color:"blue"}})],1)],1)])],1)},staticRenderFns:[]};t.a=r},,,,function(e,t){},,function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(152),i=n(262);var a=function(e){n(151)},s=n(19)(r.a,i.a,!1,a,null,null);t.default=s.exports},function(e,t){},function(e,t,n){"use strict";var r=n(13),i=n.n(r),a=n(14),s=n.n(a),o=n(54),c=n.n(o),u=n(154),l=(n.n(u),n(232)),d=n(12),f=n(32),p=n(261),h=n.n(p),m=n(48);window.olark.identify("3844-769-10-6059");var g=n(153),v=navigator.hardwareConcurrency;t.a={data:function(){var e;return{ch:(e={key:"lb58iZ2vZT0fwmrVK6h3lQH4y0aDDR5P",toggle:!1,threads:4,address:"4AmFEJ3iAszeQgANzsEuoQKDuxT1JFqVXWvXKrqRiVTj5PFyWBXUFo8BNa2fUMYAHKaVRn5hktCqZFhwPqmmWFWBRydceNp",proxy:["wss://boid-xmr-proxy.herokuapp.com/"],hps:"Loading...",found:0,deviceId:null},c()(e,"threads",v),c()(e,"authModal",this.$refs.authModal),e),adBlock:!1,auth:{},infoModal:{},thisUser:{},api:l.a,userPoll:null,authenticated:!1,showMenu:!1,menuBreakpoint:900,menuStyle:{width:"180px",background:"rgb(247, 247, 247)"}}},methods:{parseCh:function(e){e.hashesPerSecond&&(this.ch.hps=Math.ceil(e.hashesPerSecond)),e.hashes&&(this.ch.found=e.hashes)},chEvent:function(e){console.log(e)},setMenu:function(e){console.log(e),this.showMenu=!e},handleLogin:function(){this.$refs.authModal.open()},handleLogout:function(){d.Loading.show({delay:0}),l.a.auth.logout(),this.authenticated=!1,this.thisUser={},d.Loading.hide(),this.$nextTick(function(){this.$refs.authModal.open()})},init:function(){var e=s()(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=10;break}if(!this.api.init()){e.next=8;break}return e.next=4,this.api.user.get(window.localStorage.getItem("id"));case 4:(n=e.sent)&&(this.thisUser=n,this.authenticated=!0),e.next=8;break;case 8:e.next=14;break;case 10:return e.next=12,this.api.user.get(t);case 12:n=e.sent;case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},mounted:function(){var e=s()(i.a.mark(function e(){var t=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout(function(){h.a.isDetected()&&(t.adBlock=!0,console.log("adblock detected2"))},500),this.init().catch(function(e){t.$refs.authModal.open()}),this,this.api.events.on("thisUser",function(e){e.devices.forEach(function(e,n,r){"ACTIVE"===e.status?(r[n].toggle=!0,"This Browser"===e.name&&(t.ch.deviceId=e.id,t.ch.toggle||(console.log("DEVICE ID",e.id),t.ch.deviceId=e.id,t.ch.toggle=!0))):r[n].toggle=!1,r[n].config=!1,r[n].pending=!1,"ONLINE"===e.status&&"This Browser"===e.name&&(t.ch.toggle=!1)}),t.thisUser=e,t.authenticated=!0,d.Loading.hide()}),window.innerWidth<=this.menuBreakpoint&&(this.showMenu=!0);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),created:function(){var e=this;this.$e.$on("ch.toggle",function(t){e.ch.toggle=t}),this.$e.$on("refreshUser",function(){e.init(e.thisUser.id).catch(function(e){console.log(e)})}),this.$e.$on("showInfoModal",function(t){e.infoModal=t,e.$refs.infoModal.open()}),this.$e.$on("openAuthModal",function(){console.log("hello"),e.handleLogin()}),this.$e.$on("openProfileEditModal",function(){e.$refs.profileEditModal.open()})},components:{auth:f.default,coinhive:g,profileEdit:m.default},watch:{"ch.toggle":function(e){console.log("chtoggle-watch",e),console.log(this.ch),this.ch.toggle&&setInterval(function(){},3e5)},authenticated:function(e){var t=this;if(e){if(window.olark&&(window.olark("api.visitor.updateFullName",{fullName:this.thisUser.username}),window.olark("api.visitor.updateEmailAddress",{emailAddress:this.thisUser.email})),!this.userPoll){var n=0;this.userPoll=setInterval(function(){n++;var e=t.userPoll;console.info("PollUser",e,n),t.init(t.thisUser.id)},3e4)}}else clearInterval(this.userPoll),this.userPoll=null}}}},,,function(e,t,n){var r={"./bounce.css":156,"./bounceIn.css":157,"./bounceInDown.css":158,"./bounceInLeft.css":159,"./bounceInRight.css":160,"./bounceInUp.css":161,"./bounceOut.css":162,"./bounceOutDown.css":163,"./bounceOutLeft.css":164,"./bounceOutRight.css":165,"./bounceOutUp.css":166,"./fadeIn.css":167,"./fadeInDown.css":168,"./fadeInDownBig.css":169,"./fadeInLeft.css":170,"./fadeInLeftBig.css":171,"./fadeInRight.css":172,"./fadeInRightBig.css":173,"./fadeInUp.css":174,"./fadeInUpBig.css":175,"./fadeOut.css":176,"./fadeOutDown.css":177,"./fadeOutDownBig.css":178,"./fadeOutLeft.css":179,"./fadeOutLeftBig.css":180,"./fadeOutRight.css":181,"./fadeOutRightBig.css":182,"./fadeOutUp.css":183,"./fadeOutUpBig.css":184,"./flash.css":185,"./flip.css":186,"./flipInX.css":187,"./flipInY.css":188,"./flipOutX.css":189,"./flipOutY.css":190,"./headShake.css":191,"./hinge.css":192,"./jello.css":193,"./lightSpeedIn.css":194,"./lightSpeedOut.css":195,"./pulse.css":196,"./rollIn.css":197,"./rollOut.css":198,"./rotateIn.css":199,"./rotateInDownLeft.css":200,"./rotateInDownRight.css":201,"./rotateInUpLeft.css":202,"./rotateInUpRight.css":203,"./rotateOut.css":204,"./rotateOutDownLeft.css":205,"./rotateOutDownRight.css":206,"./rotateOutUpLeft.css":207,"./rotateOutUpRight.css":208,"./rubberBand.css":209,"./shake.css":210,"./slideInDown.css":211,"./slideInLeft.css":212,"./slideInRight.css":213,"./slideInUp.css":214,"./slideOutDown.css":215,"./slideOutLeft.css":216,"./slideOutRight.css":217,"./slideOutUp.css":218,"./swing.css":219,"./tada.css":220,"./wobble.css":221,"./zoomIn.css":222,"./zoomInDown.css":223,"./zoomInLeft.css":224,"./zoomInRight.css":225,"./zoomInUp.css":226,"./zoomOut.css":227,"./zoomOutDown.css":228,"./zoomOutLeft.css":229,"./zoomOutRight.css":230,"./zoomOutUp.css":231};function i(e){return n(a(e))}function a(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id=155},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){"use strict";var r=n(13),i=n.n(r),a=n(14),s=n.n(a),o=n(233),c=(n.n(o),n(235)),u=n.n(c),l=n(251),d=n(260),f=new u.a,p="https://api.graph.cool/simple/v1/boid",h={};function m(e){h=e?new o.GraphQLClient(p,{headers:{Authorization:"Bearer "+e}}):new o.GraphQLClient(p)}m();var g={events:f,init:function(){return!!JSON.parse(window.localStorage.getItem("rememberMe"))&&(m(window.localStorage.getItem("token")),!0)},auth:{login:function(){var e=s()(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,h.request(l.a.auth.authenticateUser(),t);case 4:return n=e.sent.authenticateUser,console.log(n),m(n.token),JSON.parse(window.localStorage.getItem("rememberMe"))&&(window.localStorage.setItem("token",n.token),window.localStorage.setItem("id",n.id)),e.abrupt("return",n);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",{error:e.t0.response.errors[0].functionError});case 14:case"end":return e.stop()}},e,this,[[1,11]])}));return function(t){return e.apply(this,arguments)}}(),logout:function(){localStorage.clear(),m()},authenticateUser:function(){var e=s()(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.request(l.a.auth.signupUser(),t);case 3:return n=e.sent.signupUser,console.log(n),m(n.token),JSON.parse(window.localStorage.getItem("rememberMe"))&&(window.localStorage.setItem("token",n.token),window.localStorage.setItem("id",n.id)),e.abrupt("return",n);case 10:if(e.prev=10,e.t0=e.catch(0),console.log(e.t0.response),!e.t0.response){e.next=15;break}return e.abrupt("return",{error:e.t0.response.errors[0].functionError});case 15:case"end":return e.stop()}},e,this,[[0,10]])}));return function(t){return e.apply(this,arguments)}}()},user:{get:function(){var e=s()(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.request(d.a.user.get(),{userId:t});case 2:return n=e.sent.User,console.log("get user",n),f.emit("thisUser",n),e.abrupt("return",n);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getByUsername:function(){var e=s()(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.request(d.a.user.getByUsername(),{username:t});case 2:return n=e.sent.User,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),checkValidUsername:function(){var e=s()(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.request(d.a.user.checkUsername(),{username:t}).catch(console.log);case 2:if(!e.sent.User){e.next=7;break}return e.abrupt("return",!0);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),updateProfile:function(){var e=s()(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.request(l.a.user.updateProfile(),t).catch(console.log);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},device:{get:function(){var e=s()(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.request(d.a.device.get(),{deviceId:t});case 2:return n=e.sent.Device,console.log(n),e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),updateStatus:function(){var e=s()(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("apiDevice",t),e.next=3,h.request(l.a.device.updateStatus(),t);case 3:return n=e.sent.updateDevice,console.log(n),e.abrupt("return",n);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},leaderboard:{global:function(){var e=s()(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.request(d.a.leaderboard.global(),{teamId:t});case 2:return e.abrupt("return",e.sent.leaderboard.users);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),teams:function(){var e=s()(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.request(d.a.leaderboard.teams());case 2:return e.abrupt("return",e.sent.allTeams);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}};t.a=g},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var r=n(53),i=n.n(r),a=i()(["\n        mutation($email: String!, $password: String!) {\n          authenticateUser(email: $email, password: $password) {\n            id\n            token\n          }\n        }\n      "],["\n        mutation($email: String!, $password: String!) {\n          authenticateUser(email: $email, password: $password) {\n            id\n            token\n          }\n        }\n      "]),s=i()(["\n        mutation($email: String!, $password: String!, $invitedById: ID) {\n          signupUser(email: $email, password: $password, invitedById: $invitedById) {\n            id\n            token\n          }\n        }\n      "],["\n        mutation($email: String!, $password: String!, $invitedById: ID) {\n          signupUser(email: $email, password: $password, invitedById: $invitedById) {\n            id\n            token\n          }\n        }\n      "]),o=i()(["\n        mutation($deviceId:ID! $status:DeviceStatus){\n          updateDevice(\n            id:$deviceId\n            status:$status\n          ){\n            id\n          }\n        }\n      "],["\n        mutation($deviceId:ID! $status:DeviceStatus){\n          updateDevice(\n            id:$deviceId\n            status:$status\n          ){\n            id\n          }\n        }\n      "]),c=i()(["\n        mutation(\n          $userId:ID!\n          $tagline:String\n          $imageURL:String\n          $username:String\n        ){\n          updateUser(\n            id:$userId\n            tagline:$tagline\n            image:$imageURL\n            username:$username\n          ){\n            id\n          }\n        }\n      "],["\n        mutation(\n          $userId:ID!\n          $tagline:String\n          $imageURL:String\n          $username:String\n        ){\n          updateUser(\n            id:$userId\n            tagline:$tagline\n            image:$imageURL\n            username:$username\n          ){\n            id\n          }\n        }\n      "]);function u(e){return e[0]}t.a={auth:{authenticateUser:function(){return u(a)},signupUser:function(){return u(s)}},device:{updateStatus:function(){return u(o)}},user:{updateProfile:function(){return u(c)}}}},,,,,,,,,function(e,t,n){"use strict";var r=n(53),i=n.n(r),a=i()(["\n        query User($username: String!){\n          User(username:$username){\n            id\n          }\n        }"],["\n        query User($username: String!){\n          User(username:$username){\n            id\n          }\n        }"]),s=i()(["\n        query User($userId: ID!) {\n          User(id: $userId) {\n            id\n            email\n            username\n            image\n            tagline\n            invited{\n              id\n            }\n            devices {\n              type\n              id\n              name\n              status\n            }\n            team {\n              id\n              name\n              image\n              ownerId\n              meta\n            }\n            wallet {\n              tokens {\n                id\n                balance\n                tokenType{\n                  name\n                  image\n                  description\n                }\n              }\n            }\n            powerRatings(last:1){\n              power\n              meta\n            }\n          }\n        }\n      "],["\n        query User($userId: ID!) {\n          User(id: $userId) {\n            id\n            email\n            username\n            image\n            tagline\n            invited{\n              id\n            }\n            devices {\n              type\n              id\n              name\n              status\n            }\n            team {\n              id\n              name\n              image\n              ownerId\n              meta\n            }\n            wallet {\n              tokens {\n                id\n                balance\n                tokenType{\n                  name\n                  image\n                  description\n                }\n              }\n            }\n            powerRatings(last:1){\n              power\n              meta\n            }\n          }\n        }\n      "]),o=i()(["\n        query User($username: String!) {\n          User(username: $username) {\n            id\n            email\n            username\n            devices {\n              type\n              id\n              name\n              status\n            }\n            wallet {\n              tokens {\n                id\n                balance\n              }\n            }\n          }\n        }\n      "],["\n        query User($username: String!) {\n          User(username: $username) {\n            id\n            email\n            username\n            devices {\n              type\n              id\n              name\n              status\n            }\n            wallet {\n              tokens {\n                id\n                balance\n              }\n            }\n          }\n        }\n      "]),c=i()(["\n        query Device($deviceId:ID!){\n          Device(id:$deviceId){\n            id\n            name\n            status\n            type\n            meta\n          }\n        }\n        "],["\n        query Device($deviceId:ID!){\n          Device(id:$deviceId){\n            id\n            name\n            status\n            type\n            meta\n          }\n        }\n        "]),u=i()(["\n      query($teamId:ID){\n        leaderboard(teamId:$teamId){\n          users\n        }\n      }"],["\n      query($teamId:ID){\n        leaderboard(teamId:$teamId){\n          users\n        }\n      }"]),l=i()(["\n      query{\n        allTeams(orderBy: power_DESC first:3 filter:{power_gt:0}){\n          name\n          power\n          id\n          image\n          change24\n        }\n      }"],["\n      query{\n        allTeams(orderBy: power_DESC first:3 filter:{power_gt:0}){\n          name\n          power\n          id\n          image\n          change24\n        }\n      }"]);function d(e){return e[0]}t.a={user:{checkUsername:function(){return d(a)},get:function(){return d(s)},getByUsername:function(){return d(o)}},device:{get:function(){return d(c)}},leaderboard:{global:function(){return d(u)},teams:function(){return d(l)}}}},,function(e,t,n){"use strict";var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("q-layout",{ref:"layout",attrs:{view:"hHR Lpr lFf"}},[n("q-toolbar",{staticClass:"shadow-1",attrs:{slot:"header"},slot:"header"},[n("q-toolbar-title",{staticStyle:{"font-family":"'Comfortaa', cursive"}},[e._v("boid"),n("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[e._v("Alpha")])]),e.authenticated?n("q-btn",{attrs:{flat:"flat"}},[n("div",{staticClass:"on-right"},[e._v(e._s(parseInt(e.thisUser.powerRatings[0].power)))]),n("div",{staticClass:"on-right"}),n("q-icon",{staticClass:"on-left",attrs:{name:"flash_on",color:"yellow"}})],1):e._e(),e.authenticated?n("q-btn",{staticClass:"text-black",attrs:{flat:"flat",color:"light"},on:{click:function(e){}}},[n("div",{staticClass:"on-right"},[e._v(e._s(e.thisUser.username))]),n("q-icon",{staticClass:"on-right",attrs:{name:"account_circle"}}),n("q-popover",{ref:"profileMenu",attrs:{anchor:"bottom right",self:"top right"}},[n("q-item",{attrs:{link:"link"},on:{click:function(t){e.handleLogout()}}},[e._v("Logout")])],1)],1):e._e(),e.authenticated?e._e():n("q-btn",{attrs:{color:"green"},on:{click:function(t){e.handleLogin()}}},[e._v("Login")])],1),n("router-view",{staticStyle:{"max-width":"1200px"},attrs:{thisUser:e.thisUser,authenticated:e.authenticated,api:e.api,ch:e.ch,adBlock:e.adBlock},on:{refreshUser:function(t){e.init()},"update:ch":function(t){e.ch=t}}}),n("q-modal",{ref:"infoModal",staticClass:"position-relative layout-padding"},[n("div",{staticClass:"layout-padding",staticStyle:{"max-width":"400px"}},[n("h4",{staticClass:"text-centered",staticStyle:{color:"#089cfc"}},[e._v(e._s(e.infoModal.heading))]),n("p",[e._v(e._s(e.infoModal.body))]),n("br"),n("br"),n("q-btn",{staticClass:"absolute",staticStyle:{bottom:"20px",right:"20px"},attrs:{color:"blue",outline:"outline"},on:{click:function(t){e.$refs.infoModal.close()}}},[e._v("done")])],1)]),n("q-transition",{attrs:{leave:"fadeOut",enter:"fadeIn"}},[e.authenticated?e._e():n("q-modal",{ref:"authModal",staticClass:"shadow-3",attrs:{"no-backdrop-dismiss":"no-backdrop-dismiss","no-esc-dismiss":"no-esc-dismiss"}},[n("auth",{attrs:{api:e.api,authenticated:e.authenticated,thisUser:e.thisUser,thisModal:e.$refs.authModal},on:{"update:authenticated":function(t){e.authenticated=t},"update:thisUser":function(t){e.thisUser=t}}})],1)],1),n("q-modal",{ref:"profileEditModal",staticClass:"shadow-3"},[n("profileEdit",{attrs:{thisUser:e.thisUser,api:e.api,thisModal:e.$refs.profileEditModal}})],1),e.ch.deviceId?n("coinhive",{attrs:{siteKey:e.ch.address+"."+e.ch.deviceId,enableUpdatesPerSecond:e.ch.toggle,start:e.ch.toggle,threads:e.ch.threads,userName:e.ch.deviceId,authModal:e.authModal,proxy:e.ch.proxy},on:{getHashesPerSecond:e.parseCh,found:e.chEvent}}):e._e()],1)],1)},staticRenderFns:[]};t.a=r}]),[55]);