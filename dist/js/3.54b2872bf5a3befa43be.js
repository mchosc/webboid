webpackJsonp([3],{368:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e(388),s=e(404);var n=function(t){e(402)},o=e(24)(a.a,s.a,!1,n,null,null);i.default=o.exports},388:function(t,i,e){"use strict";i.a={name:"index",data:function(){return{team:{}}},computed:{},methods:{},watch:{team:function(t){console.log("gotTeam",t)}},created:function(){var t=this;this.$e.$on("team",function(i){t.team=i})},props:["thisUser","api","authenticated"]}},402:function(t,i,e){var a=e(403);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(360)("0e5e8562",a,!0,{})},403:function(t,i,e){(t.exports=e(359)(!1)).push([t.i,".q-card{padding:10px;box-shadow:0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}.tokenimg{width:50px}",""])},404:function(t,i,e){"use strict";var a={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"layout-padding"},[t.authenticated?t._e():e("div",{staticClass:"layout-padding full-width",staticStyle:{}},[e("div",{staticClass:"row justify-center gutter"},[e("q-btn",{staticStyle:{"font-size":"35px"},attrs:{big:"big",rounded:"rounded",push:"push",glossy:"glossy",color:"green"},on:{click:function(i){t.$e.$emit("openAuthModal",!0)}}},[t._v("Join Boid")])],1)]),e("div",{staticClass:"row row-gutter"},[e("div",{staticClass:"col"},[e("q-card",{staticClass:"animate-scale relative-position",staticStyle:{"min-width":"300px"}},[e("div",{staticClass:"layout-padding full-width relative-position",staticStyle:{height:"140px"}},[e("img",{staticClass:"absolute-center block",staticStyle:{width:"120px",height:"120px"},attrs:{src:t.team.image}})])])],1)]),e("div",{staticClass:"row justify-center gutter"},[t.authenticated?t._e():e("div",{staticClass:"layout-padding"},[e("div",{staticClass:"layout-padding"},[e("q-btn",{staticStyle:{"font-size":"35px"},attrs:{big:"big",rounded:"rounded",push:"push",glossy:"glossy",color:"green"},on:{click:function(i){t.$e.$emit("openAuthModal")}}},[t._v("Join Boid")])],1)])])])},staticRenderFns:[]};i.a=a}});