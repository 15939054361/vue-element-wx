(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa1aa"],{"101f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,stripe:""}},[a("el-table-column",{attrs:{prop:"_id",label:"id",width:"180","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"total",label:"运动步数",width:"180"}}),a("el-table-column",{attrs:{prop:"nickName",label:"用户名",width:"180"}}),a("el-table-column",{attrs:{label:"头像"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-avatar",{attrs:{src:t.row.avatarUrl}})]}}])})],1)},r=[],o=(a("4160"),a("159b"),a("96cf"),a("1da1")),l=a("b775");function i(t){return Object(l["a"])({url:"/admin/common/step/inquire",method:"GET",data:t})}var s={name:"user-list",components:{},props:{},data:function(){return{list:[]}},computed:{},watch:{},created:function(){this.init()},mounted:function(){},methods:{init:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:a=e.sent,200===a.status&&a.data.forEach((function(e){t.list.push({_id:e._id,total:e.total,avatarUrl:e.users[0].avatarUrl,nickName:e.users[0].nickName})})),console.log(a);case 5:case"end":return e.stop()}}),e)})))()}}},c=s,u=a("2877"),d=Object(u["a"])(c,n,r,!1,null,"f503150c",null);e["default"]=d.exports}}]);