webpackJsonp([4],{367:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(387),i=a(401);var r=function(t){a(399)},n=a(24)(s.a,i.a,!1,r,null,null);e.default=n.exports},387:function(t,e,a){"use strict";var s=a(26),i=a.n(s),r=a(27),n=a.n(r);e.a={name:"index",data:function(){return{team:{_membersMeta:{count:0},owner:{image:"",username:"placeholder",tagline:"",powerRatings:[{power:0}]}},leaderboard:[]}},computed:{},methods:{setupLeaderboard:function(){var t=n()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.api.leaderboard.global(this.team.id);case 2:this.leaderboard=t.sent,console.log("Team Leaderboard:",this.leaderboard);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},watch:{team:function(t){console.log("gotTeam",t)}},created:function(){var t=this;this.$e.$on("team",function(e){t.team=e,t.setupLeaderboard()})},props:["thisUser","api","authenticated"]}},399:function(t,e,a){var s=a(400);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(360)("28b58db4",s,!0,{})},400:function(t,e,a){(t.exports=a(359)(!1)).push([t.i,".q-card{padding:10px;box-shadow:0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}.tokenimg{width:50px}.user:hover{background-color:#f5f5f5}",""])},401:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout-padding"},[t.authenticated?t._e():a("div",{staticClass:"layout-padding full-width",staticStyle:{}},[a("div",{staticClass:"row justify-center gutter"},[a("q-btn",{staticStyle:{"font-size":"35px"},attrs:{big:"big",rounded:"rounded",push:"push",glossy:"glossy",color:"green"},on:{click:function(e){t.$e.$emit("openAuthModal",!0)}}},[t._v("Join US")])],1)]),a("div",{staticClass:"row gutter justify-center"},[a("div",{staticClass:"col"},[a("q-card",{staticClass:"animate-scale relative-position",staticStyle:{"min-width":"300px"}},[a("div",{staticClass:"layout-padding full-width relative-position",staticStyle:{height:"140px"}},[a("img",{staticClass:"absolute-center block",staticStyle:{width:"120px",height:"120px"},attrs:{src:t.team.image}})]),a("h5",{staticClass:"text-center"},[t._v(t._s(t._f("removeDash")(t.team.name)))]),a("h6",{staticClass:"light-paragraph text-center"},[t._v(t._s(t.team.tagline))]),a("br")])],1)]),a("div",{staticClass:"row gutter justify-center items-stretch"},[a("q-card",{staticClass:"animate-scale",staticStyle:{"min-width":"70px"}},[a("div",{staticClass:"relative-position",staticStyle:{margin:"auto","margin-top":"30px"}},[a("p",{staticClass:"text-center",staticStyle:{"z-index":"5"}},[t._v(t._s(parseInt(t.team.power))),a("q-icon",{staticClass:"text-center absolute-center",staticStyle:{"font-size":"70px","z-index":"-4"},attrs:{color:"yellow-3",name:"flash_on"}})],1)])]),a("q-card",{staticClass:"animate-scale",staticStyle:{"min-width":"70px"}},[a("div",{staticClass:"relative-position",staticStyle:{margin:"auto","margin-top":"30px"}},[a("p",{staticClass:"text-center",staticStyle:{"z-index":"5"}},[t._v(t._s(parseInt(t.team._membersMeta.count))),a("q-icon",{staticClass:"text-center absolute-center",staticStyle:{"font-size":"50px","z-index":"-4"},attrs:{color:"green-1",name:"fa-users"}})],1)])]),t.team.owner?a("q-card",[a("p",{staticClass:"light-paragraph text-center"},[t._v("Manager")]),a("q-item",{attrs:{highlight:"highlight",to:{name:"User",params:{username:t.team.owner.username}}}},[a("q-item-side",{attrs:{avatar:t.team.owner.image}}),a("q-item-main",[a("q-item-tile",{attrs:{label:"label"}},[t._v(t._s(t.team.owner.username))]),a("q-item-tile",{attrs:{sublabel:"sublabel"}},[t._v(t._s(t.team.owner.tagline))])],1),a("q-item-side",{attrs:{right:"right",icon:"flash_on",stamp:""}},[a("small",{staticClass:"text-center"},[t._v(t._s(parseInt(t.team.owner.powerRatings[0].power)))])])],1)],1):t._e()],1),a("div",{staticClass:"row gutter justify-center"},[a("div",{staticClass:"col"},[a("q-card",{staticClass:"animate-scale"},[a("p",{staticClass:"light-paragraph text-center"},[t._v("Top Users on "+t._s(t._f("removeDash")(t.team.name)))]),a("table",{staticClass:"q-table horizontal-separator",staticStyle:{width:"100%"}},[a("thead",[a("tr",[a("th"),a("th",[t._v("Username")]),a("th",[t._v("Power"),a("q-icon",{attrs:{name:"flash_on",color:"yellow"}})],1),a("th",[t._v("Rank")])])]),t._l(t.leaderboard,function(e,s){return a("tbody",{key:e.id},[a("tr",{staticClass:"user cursor-pointer",on:{click:function(a){t.$router.push({name:"User",params:{username:e.username}})}}},[a("td",[a("img",{staticClass:"avatar",attrs:{src:e.image}})]),a("td",{staticClass:"ellipsis",staticStyle:{"max-width":"20px"},attrs:{"data-th":"Username"}},[t._v(t._s(e.username)),a("small",{staticClass:"block light-paragraph"},[t._v(t._s(e.tagline))])]),a("td",{attrs:{"data-th":"Power"}},[t._v(t._s(parseInt(e.power)))]),a("td",[t._v(t._s(s+1))])])])})],2)])],1)]),a("div",{staticClass:"row justify-center gutter"},[t.authenticated?t._e():a("div",{staticClass:"layout-padding"},[a("div",{staticClass:"layout-padding"},[a("q-btn",{staticStyle:{"font-size":"35px"},attrs:{big:"big",rounded:"rounded",push:"push",glossy:"glossy",color:"green"},on:{click:function(e){t.$e.$emit("openAuthModal")}}},[t._v("Join US")])],1)])])])},staticRenderFns:[]};e.a=s}});