(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d9336042"],{"9f7b":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return u}));var n=a("b775");function r(t){return Object(n["a"])({url:"/admin/user/add",method:"POST",data:t})}function u(t){return Object(n["a"])({url:"/admin/user/inquire",method:"GET",data:t})}},a58f:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"user",label:"账号",width:"180"}}),a("el-table-column",{attrs:{prop:"nickName",label:"昵称",width:"180"}}),a("el-table-column",{attrs:{prop:"avatar",label:"头像"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-avatar",{attrs:{src:t.row.avatar}})]}}])})],1)],1)},r=[],u=(a("96cf"),a("1da1")),c=a("9f7b"),o={name:"admin-list",components:{},props:{},data:function(){return{tableData:[]}},computed:{},watch:{},created:function(){this.init()},mounted:function(){},methods:{init:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["a"])();case 2:a=e.sent,200===a.status&&(console.log(a),t.tableData=a.data);case 4:case"end":return e.stop()}}),e)})))()}}},i=o,s=a("2877"),l=Object(s["a"])(i,n,r,!1,null,"6f3d69b6",null);e["default"]=l.exports}}]);