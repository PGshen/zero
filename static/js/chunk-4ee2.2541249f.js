(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4ee2"],{CYxZ:function(t,e,i){"use strict";i.d(e,"d",function(){return s}),i.d(e,"e",function(){return a}),i.d(e,"b",function(){return r}),i.d(e,"f",function(){return l}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return u});var n=i("t3Un");function s(t){return Object(n.a)({url:"/official/website/product/list",method:"post",data:t})}function a(t){return Object(n.a)({url:"/official/website/product/"+t,method:"get"})}function r(t){return Object(n.a)({url:"/official/website/product",method:"post",data:t})}function l(t){return Object(n.a)({url:"/official/website/product",method:"put",data:t})}function o(t){return Object(n.a)({url:"/official/website/product/"+t,method:"delete"})}function u(t){return Object(n.a)({url:"/official/website/product/checkout/"+t,method:"post"})}},ZEdl:function(t,e,i){},sb3z:function(t,e,i){"use strict";var n=i("ZEdl");i.n(n).a},xsvy:function(t,e,i){"use strict";i.r(e);var n=i("QbLZ"),s=i.n(n),a=i("L2JU"),r=i("CYxZ"),l={name:"ProductList",filters:{statusFilter:function(t){return"1"===t?"success":"info"},statusFilter2:function(t){return"1"===t?"已发布":"未发布"}},data:function(){return{list:null,total:0,listLoading:!0,listQuery:{page:1,size:10,order:"updateTime",cond:{isEnable:"-1",firstHeading:""}},product:{id:null,updateTime:"",productClass:"",firstHeading:"",secondaryHeading:"",tertiaryHeading:"",isEnable:"",productSynopsis:""},statusOptions:[{label:"全部",key:"-1"},{label:"已发布",key:"1"},{label:"未发布",key:"0"}]}},computed:s()({},Object(a.c)(["permList"])),created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(r.d)(this.listQuery).then(function(e){t.list=e.data.data.list,t.total=e.data.data.total,t.page=e.data.data.pages,t.listLoading=!1})},handleSizeChange:function(t){this.listQuery.size=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleFilter:function(){this.getList()},handleDelete:function(t){var e=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r.c)(t.id).then(function(t){t.data.status?(e.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3}),e.getList()):e.$notify({title:"失败",message:"删除失败",type:"fail",duration:2e3})}).catch(function(t){e.$message.error(t)})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},checkoutStatus:function(t){var e=this;Object(r.a)(t.id).then(function(t){t.data.status?(e.$notify({title:"成功",message:"更新状态成功",type:"success",duration:2e3}),e.getList()):e.$notify({title:"失败",message:"更新状态失败",type:"fail",duration:2e3})}).catch(function(t){e.$message.error(t)})}}},o=(i("sb3z"),i("KHd+")),u=Object(o.a)(l,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"标题"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleFilter(e):null}},model:{value:t.listQuery.cond.firstHeading,callback:function(e){t.$set(t.listQuery.cond,"firstHeading",e)},expression:"listQuery.cond.firstHeading"}}),t._v(" "),i("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"筛选"},on:{change:t.handleFilter},model:{value:t.listQuery.cond.isEnable,callback:function(e){t.$set(t.listQuery.cond,"isEnable",e)},expression:"listQuery.cond.isEnable"}},t._l(t.statusOptions,function(t){return i("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})})),t._v(" "),i("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"search"},on:{click:t.handleFilter}},[t._v("搜索")])],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"ID",width:"80",type:"index"}}),t._v(" "),i("el-table-column",{attrs:{width:"160px",align:"center",label:"Date"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(t._f("parseTime")(e.row.updateTime,"{y}-{m}-{d} {h}:{i}")))])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"120px",align:"center",label:"Product_Type"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.productClass))])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"180px",align:"center",label:"First_Heading"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.firstHeading))])]}}])}),t._v(" "),i("el-table-column",{attrs:{"class-name":"status-col",label:"Status",width:"110px"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tag",{attrs:{type:t._f("statusFilter")(e.row.isEnable)}},[t._v(t._s(t._f("statusFilter2")(e.row.isEnable)))])]}}])}),t._v(" "),i("el-table-column",{attrs:{"min-width":"300px",label:"Product_Synopsis"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("router-link",{staticClass:"link-type",attrs:{to:"/official-site/product/edit/"+e.row.id}},[i("span",[t._v(t._s(e.row.productSynopsis))])])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"Actions",width:"260"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("router-link",{attrs:{to:"/official-site/product/edit/"+e.row.id}},[void 0!==t.permList&&-1!==t.permList.indexOf("sys:user:update")?i("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("编辑")]):t._e()],1),t._v(" "),void 0!==t.permList&&-1!==t.permList.indexOf("sys:user:ban")&&"1"===e.row.isEnable?i("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(i){t.checkoutStatus(e.row)}}},[t._v("草稿\n        ")]):void 0!==t.permList&&-1!==t.permList.indexOf("sys:user:ban")&&"0"===e.row.isEnable?i("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(i){t.checkoutStatus(e.row)}}},[t._v("发布\n        ")]):t._e(),t._v(" "),void 0!==t.permList&&-1!==t.permList.indexOf("sys:user:delete")?i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){t.handleDelete(e.row)}}},[t._v("删除\n        ")]):t._e()]}}])})],1),t._v(" "),i("div",{staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[5,10,20,30],"page-size":t.listQuery.size,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},[],!1,null,"311ba75c",null);u.options.__file="list.vue";e.default=u.exports}}]);