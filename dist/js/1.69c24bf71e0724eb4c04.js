webpackJsonp([1],{369:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(379),a=i(385);var o=function(t){i(383)},s=i(13)(n.a,a.a,!1,o,"data-v-e2e7c81a",null);e.default=s.exports},379:function(t,e,i){"use strict";var n=i(129),a=i.n(n),o=i(26),s=i.n(o),c=i(27),r=i.n(c),l=i(382);i(18);function d(t){return t?(e="Darwin"===t.os.name?"MAC":"WINDOWS",{status:"ACTIVE",cpid:t.cpid,name:t.name,type:e,meta:t}):null;var e}e.a={data:function(){return{ipcRenderer:null,loading:!0,parseDevice:l.a,onBatteries:!1,deviceStatePoll:null,actionbg:{backgroundColor:"white"},config:{run_if_user_active:null},boincStatus:"Initializing....",boincStatusIcon:"check",activeTasks:[],thisDevice:{name:null,power:"",status:"",id:"",meta:{},icon:"WINDOWS",type:"WINDOWS",powerRatings:[]},deviceId:null,pending:!1,toggle:!1}},computed:{},methods:{openConfigModal:function(){this.$e.$emit("openBoincConfigModal",this.config)},modulateTaskProgress:function(t){return t=100*parseFloat(t)+function(t){return Math.floor(Math.random()*Math.floor(t))}(2)},handleLocalDevice:function(){var t=r()(s.a.mark(function t(e){var i,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=6;break}return console.log("received blank localDevice"),window.local.ipcRenderer.send("initBoinc"),t.abrupt("return");case 6:if(!e.cpid){t.next=51;break}return t.prev=7,t.next=10,this.api.device.getByCpid(e.cpid).catch(console.log);case 10:if(i=t.sent,console.log("RESULT FROM CHECK",i),this.$e.$emit("closeAuthModal",!1),i){t.next=30;break}return console.log("device does not exist, User can claim device"),t.prev=15,t.next=18,this.api.device.add(d(e));case 18:return n=t.sent,t.next=21,this.api.device.get(n.id);case 21:this.thisDevice=t.sent,t.next=28;break;case 24:return t.prev=24,t.t0=t.catch(15),console.log(t.t0),t.abrupt("return");case 28:t.next=44;break;case 30:if(i.owner.id!==this.thisUser.id){t.next=42;break}return t.prev=31,t.next=34,this.api.device.get(i.id);case 34:this.thisDevice=t.sent,t.next=40;break;case 37:return t.prev=37,t.t1=t.catch(31),t.abrupt("return",console.log(t.t1));case 40:t.next=44;break;case 42:this.$e.$emit("logout"),alert("This device is already claimed by a different account. 😢 \n \n Contact us: support@boid.com");case 44:t.next=49;break;case 46:t.prev=46,t.t2=t.catch(7),console.log(t.t2);case 49:t.next=53;break;case 51:this.$router.push({name:"Auth"}),alert("This device is acting up. 😢 \n \n Contact us: support@boid.com");case 53:if(!e.wcgid){t.next=62;break}if(this.thisDevice.wcgid!==e.wcgid){t.next=58;break}return t.abrupt("return");case 58:return t.next=60,this.api.device.updateWcgid({deviceId:this.thisDevice.id,wcgid:e.wcgid});case 60:i=t.sent,console.log(i);case 62:case"end":return t.stop()}},t,this,[[7,46],[15,24],[31,37]])}));return function(e){return t.apply(this,arguments)}}(),init:function(){var t=this;window.local&&this.authenticated&&setTimeout(function(){console.log("LOCAL DEVICE",window.local.ipcRenderer.sendSync("localDevice")),t.handleLocalDevice(window.local.ipcRenderer.sendSync("localDevice"))},200)}},props:["thisUser","authenticated","api","thisModal","ch"],created:function(){var t=this;setInterval(function(){t.init()},4e3),this.init(),window.local&&(this.ipcRenderer=window.local.ipcRenderer,window.local.ipcRenderer.send("boinc.config.get"),window.local.ipcRenderer.on("boinc.toggle",function(e,i){console.log("GOT TOGGLE:",i),t.loading||(t.toggle=i)}),window.local.ipcRenderer.on("boinc.config",function(e,i){console.log("GOT CONFIG",i),t.config=i}),window.local.ipcRenderer.on("boinc.activeTasks",function(e,i){i&&(t.activeTasks=i)}),window.local.ipcRenderer.on("boinc.suspended",function(e,i){console.log("GOT BOINC SUSPENDED:",i),i?(t.onBatteries=!0,t.boincStatus="Paused: "+i,t.boincStatusIcon="pause"):(t.onBatteries=!1,t.boincStatus="Computing Tasks...",t.boincStatusIcon="check")}),window.local.ipcRenderer.on("deviceReady",function(t,e){console.log("GOT DEVICE:",e)}),window.local.ipcRenderer.on("boinc.error",function(t,e){console.log("got errorfrom boinc",e),alert(e)}))},watch:{activeTasks:function(t){t.length>0&&t.some(function(t){return 1==t.active_task_state[0]})&&(this.onBatteries||(this.boincStatus="Computing Tasks...",this.boincStatusIcon="check"))},thisDevice:function(){var t=r()(s.a.mark(function t(e){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e&&(window.local.ipcRenderer.send("boinc.config.get"),this.loading=!1,console.log(a()(this.thisDevice)),this.thisDevice.icon=l.a.icon(this.thisDevice));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),toggle:function(){var t=r()(s.a.mark(function t(e){var i;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.pending=!0,t.prev=1,i={deviceId:this.thisDevice.id},e?(i.status="ACTIVE",this.actionbg.backgroundColor="li",window.local.ipcRenderer.send("startBoinc"),clearInterval(this.deviceStatePoll),this.deviceStatePoll=setInterval(function(){window.local.ipcRenderer.send("boinc.activeTasks")},1e3)):(i.status="ONLINE",this.actionbg.backgroundColor="white",window.local.ipcRenderer.send("boinc.cmd","quit"),clearInterval(this.deviceStatePoll)),t.next=11;break;case 6:t.prev=6,t.t0=t.catch(1),console.log("error"),alert(t.t0),console.log(t.t0);case 11:return t.prev=11,t.next=14,this.api.device.get(this.thisDevice.id);case 14:return this.thisDevice=t.sent,this.pending=!1,t.finish(11);case 17:case"end":return t.stop()}},t,this,[[1,6,11,17]])}));return function(e){return t.apply(this,arguments)}}()}}},382:function(t,e,i){"use strict";e.a={icon:function(t){return"BROWSER"===t.type?"tab":"DESKTOP"===t.type?"flash_on":"MOBILE"===t.type?"phone_android":"WINDOWS"===t.type?"fa-windows":"MAC"===t.type?"fa-apple":"add"},color:function(t){return"OFFLINE"===t.status?"grey":"ONLINE"===t.status?"blue":"ACTIVE"===t.status?"green":void 0}}},383:function(t,e,i){var n=i(384);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(368)("6a47c67a",n,!0,{})},384:function(t,e,i){(t.exports=i(367)(!1)).push([t.i,".layout-padding[data-v-e2e7c81a]{max-width:700px}.infobtn[data-v-e2e7c81a]{color:$grey-6;font-size:15px;right:5px;top:5px}.taller[data-v-e2e7c81a]{height:60px}body[data-v-e2e7c81a]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}",""])},385:function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[!t.loading&&t.thisDevice.name?i("div",{staticClass:"layout-padding relative-position"},[i("h6",{staticClass:"text-center",staticStyle:{padding:"0px",margin:"0px"}},[t._v(t._s(t.thisDevice.name)+" "),i("q-icon",{staticClass:"float-lefth on-right inline",staticStyle:{"padding-bottom":"3px"},attrs:{name:t.parseDevice.icon(t.thisDevice),color:t.parseDevice.color(t.thisDevice)}}),i("q-tooltip",[t._v("Your Device Name")])],1),i("q-card",{staticStyle:{width:"90vw","max-height":"400px"}},[i("q-card-media",{staticClass:"relative-position"},[i("q-btn",{staticClass:"infobtn absolute-top-right",attrs:{color:"blue",flat:"flat",round:"round"},on:{click:function(e){t.openConfigModal()}}},[i("q-icon",{attrs:{color:"grey-7",name:"settings"}}),i("q-tooltip",[t._v("Settings")])],1),i("div",{staticClass:"row"},[i("div",{staticClass:"col-auto"},[i("img",{staticStyle:{opacity:".9",width:"100px",height:"100px",padding:"15px"},attrs:{src:"statics/images/magnifyingglass.svg"}})]),i("div",{staticClass:"col-7 relative-position"},[i("h6",{staticClass:"light-paragraph"},[t._v("Device Boid Power"),i("q-tooltip",[t._v("Boid Power is updated as each Work Unit is finished. Give it some time!")])],1),t.thisDevice.powerRatings[0]?i("div",[i("img",{staticStyle:{height:"20px",top:"5px"},attrs:{src:"/statics/images/BoidPower.svg"}}),t._v(t._s(t.thisDevice.powerRatings[0].power.toFixed(4)))]):t._e(),i("q-btn",{staticClass:"absolute-bottom light-paragraph",staticStyle:{"margin-bottom":"5px"},attrs:{flat:"flat"},on:{click:function(e){t.ipcRenderer.send("openURL","https://app.boid.com/impact")}}},[t._v("Mapping Cancer Markers"),i("q-tooltip",[t._v("Learn more about the current computational task")])],1)],1)])],1),t.toggle?i("q-card-main",[t.activeTasks.length>0?i("p",[t._v("Work Units"),i("q-tooltip",[t._v("Work Units are small tasks that help solve huge problems.")])],1):i("p",[t._v("Downloading Work Units....")]),t._l(t.activeTasks,function(e,n){return t.activeTasks.length>0?i("div",{key:e.slot[0],staticStyle:{"margin-bottom":"5px"}},[1!=e.active_task_state[0]||t.onBatteries?i("q-progress",{attrs:{buffer:0,height:"40px",stripe:"stripe",percentage:100*e.checkpoint_fraction_done[0],color:"grey-4"}}):i("q-progress",{staticStyle:{height:"10px"},attrs:{buffer:0,height:"40px",stripe:"stripe",animate:"animate",percentage:t.modulateTaskProgress(e.checkpoint_fraction_done[0])}}),i("q-tooltip",[i("p",{staticStyle:{margin:"0px"}},[t._v("Task:")]),t._v(t._s(e.result_name[0])+" "),i("div",{staticStyle:{height:"10px"}}),i("p",{staticStyle:{margin:"0px"}},[t._v("Progress:")]),t._v(t._s((100*e.checkpoint_fraction_done[0]).toFixed(0))+"%")])],1):t._e()})],2):t._e(),i("q-card-separator"),i("q-card-actions",{staticClass:"taller relative-position"},[i("q-btn",{attrs:{small:"small",round:"round",flat:"flat"}},[t.toggle?i("q-icon",{staticClass:"on-right",attrs:{name:t.boincStatusIcon}}):t._e()],1),t.toggle?i("h6",{staticClass:"text-grey-8 on-right",staticStyle:{"padding-top":"5px"}},[t._v(t._s(t.boincStatus))]):t._e(),t.toggle?i("q-spinner-grid",{staticClass:"inline on-right absolute-right",staticStyle:{right:"70px",top:"20px"},attrs:{size:20,color:"grey-4"}}):t._e(),i("q-toggle",{staticClass:"absolute-right",staticStyle:{padding:"20px"},attrs:{color:"green",disable:t.pending},model:{value:t.toggle,callback:function(e){t.toggle=e},expression:"toggle"}})],1)],1)],1):i("div",{staticClass:"layout-padding relative-position"},[i("div",{staticClass:"text-center"},[t._v("Initializing....")])])])},staticRenderFns:[]};e.a=n}});