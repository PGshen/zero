webpackJsonp([41],{VpFs:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"\n.role-form {\n  width: 92%;\n  margin-left: 8%;\n}\n.role-form .role-form-item {\n  display: inline-block;\n  width: 100%;\n}\n\n/*.role-tree .el-tree {*/\n\n/*border: 0;*/\n\n/*}*/\n.role-tree .el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {\n  background-color: lightblue;\n}\n",""])},WVHC:function(e,t,i){var l=i("VpFs");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);i("rjj0")("6dff9c84",l,!0)},"e/UM":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i("Dd8w"),n=i.n(l),a=i("0xDb"),s=i("NYxO"),o={name:"role_manager",data:function(){return{authProps:{children:"children",label:"name",value:"id"},list:null,total:null,listLoading:!0,listQuery:{page:1,size:10,order:"id",cond:{}},role:{id:"",name:"",alias:"",description:""},sortOptions:[{label:"按ID升序列",key:"id"},{label:"按ID降序",key:"id desc"}],dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑角色",create:"创建角色"},tableKey:0,dlgAuthVisible:!1,roleAuth:{id:"",menus:[]}}},created:function(){this.getList(),this.getMenuList()},computed:n()({},Object(s.c)(["roleList","menuTree"])),filters:{statusFilter:function(e){return{published:"success",draft:"gray",deleted:"danger"}[e]},typeFilter:function(e){return calendarTypeKeyValue[e]}},methods:n()({},Object(s.b)({GetRoleList:"GetRoleList",AddRole:"AddRole",UpdateRole:"UpdateRole",DeleteRole:"DeleteRole",GetMenuList:"GetMenuList",AuthRole:"AuthRole",AuthListRole:"AuthListRole"}),{getList:function(){var e=this;this.listLoading=!0,this.GetRoleList(this.listQuery).then(function(t){t?(e.$notify({title:"成功",message:"获取成功",type:"success",duration:500}),e.listLoading=!1):(e.$notify({title:"失败",message:"获取失败",type:"fail",duration:2e3}),e.listLoading=!1)})},getMenuList:function(){var e=this;this.GetMenuList().then(function(t){1!==t&&e.$notify({title:"失败",message:"获取菜单失败",type:"failure",duration:2e3})})},handleFilter:function(){this.getList()},handleSizeChange:function(e){this.listQuery.size=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleCreate:function(){this.resetRole(),this.dialogStatus="create",this.dialogFormVisible=!0},handleUpdate:function(e){this.role.id=e.id,this.role.name=e.name,this.role.alias=e.alias,this.role.description=e.description,this.dialogStatus="update",this.dialogFormVisible=!0},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.DeleteRole(e.id).then(function(e){e&&(t.$message({type:"success",message:"删除成功!"}),t.getList())})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},handleRoleAuthCancel:function(){this.dlgAuthVisible=!1,this.$refs.funcTree.setCheckedKeys([])},handleAuth:function(e){var t=this;this.role.name=e.name,this.role.alias=e.alias,this.roleAuth.id=e.id,this.roleAuth.menus=[],this.dlgAuthVisible=!0,this.AuthListRole({roleId:e.id}).then(function(e){1===e.status&&(t.roleAuth.menus=e.data,t.$nextTick(function(){t.$refs.funcTree.setCheckedKeys(t.roleAuth.menus)}))})},handleCheckChange:function(e,t,i){if(t||i){var l=!1;this.roleAuth.menus.forEach(function(t){t===e.id&&(l=!0)}),l||this.roleAuth.menus.push(e.id)}else{for(var n=0;n<this.roleAuth.menus.length&&this.roleAuth.menus[n]!==e.id;n++);this.roleAuth.menus.splice(n,1)}},handleRoleAuth:function(){var e=this;this.AuthRole(this.roleAuth).then(function(t){1===t&&(e.dlgAuthVisible=!1,e.$notify({title:"成功",message:"授权成功",type:"success",duration:2e3}))})},create:function(){var e=this;this.AddRole(this.role).then(function(t){t?(e.dialogFormVisible=!1,e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3}),e.getList()):e.$notify({title:"失败",message:"创建失败",type:"fail",duration:2e3})}).catch(function(t){e.$message.error(t)})},update:function(){var e=this;this.UpdateRole(this.role).then(function(t){t?(e.dialogFormVisible=!1,e.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3}),e.getList()):e.$notify({title:"失败",message:"更新失败",type:"fail",duration:2e3})}).catch(function(t){e.$message.error(t)})},resetRole:function(){this.role={id:void 0,name:"",alias:"",description:""}},handleDownload:function(){var e=this;Promise.all([i.e(2),i.e(62)]).then(function(){(0,i("zWO4").export_json_to_excel)(["时间","地区","类型","标题","重要性"],e.formatJson(["timestamp","province","type","title","importance"],e.list),"table数据")}.bind(null,i)).catch(i.oe)},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"timestamp"===e?Object(a.b)(t[e]):t[e]})})}})},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container calendar-list-container role-tree"},[i("div",{staticClass:"filter-container"},[i("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"名称"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.cond.name,callback:function(t){e.$set(e.listQuery.cond,"name",t)},expression:"listQuery.cond.name"}}),e._v(" "),i("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"排序"},on:{change:e.handleFilter},model:{value:e.listQuery.order,callback:function(t){e.$set(e.listQuery,"order",t)},expression:"listQuery.order"}},e._l(e.sortOptions,function(e){return i("el-option",{key:e.key,attrs:{label:e.label,value:e.key}})})),e._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),i("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"edit"},on:{click:e.handleCreate}},[e._v("\n      添加\n    ")]),e._v(" "),i("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"document"},on:{click:e.handleDownload}},[e._v("导出")])],1),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.roleList,border:"",fit:""}},[i("el-table-column",{attrs:{align:"center",label:"序号",width:"50",type:"index"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"ID",width:"210"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.id))])]}}])}),e._v(" "),i("el-table-column",{attrs:{width:"125",label:"名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"link-type",on:{click:function(i){e.handleUpdate(t.row)}}},[e._v(e._s(t.row.name))])]}}])}),e._v(" "),i("el-table-column",{attrs:{width:"125",label:"别名"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.alias))])]}}])}),e._v(" "),i("el-table-column",{attrs:{"min-width":"240px",label:"描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.description))])]}}])}),e._v(" "),i("el-table-column",{attrs:{width:"170px",align:"center",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.createdTime))])]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){e.handleUpdate(t.row)}}},[e._v("编辑\n        ")]),e._v(" "),i("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(i){e.handleAuth(t.row)}}},[e._v("授权\n        ")]),e._v(" "),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){e.handleDelete(t.row)}}},[e._v("删除\n        ")])]}}])})],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.size,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1),e._v(" "),i("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],size:"tiny","close-on-click-modal":!1,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{staticClass:"small-space role-form",attrs:{model:e.role,"label-position":"left","label-width":"70px"}},[i("el-form-item",{staticClass:"role-form-item",attrs:{label:"名称"}},[i("el-input",{staticClass:"filter-item",staticStyle:{width:"90%"},attrs:{placeholder:"请输入"},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}})],1),e._v(" "),i("el-form-item",{staticClass:"role-form-item",attrs:{label:"别名"}},[i("el-input",{staticClass:"filter-item",staticStyle:{width:"90%"},attrs:{placeholder:"请输入"},model:{value:e.role.alias,callback:function(t){e.$set(e.role,"alias",t)},expression:"role.alias"}})],1),e._v(" "),i("el-form-item",{staticClass:"role-form-item",attrs:{label:"描述"}},[i("el-input",{staticStyle:{width:"90%"},attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入内容"},model:{value:e.role.description,callback:function(t){e.$set(e.role,"description",t)},expression:"role.description"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),"create"==e.dialogStatus?i("el-button",{attrs:{type:"primary"},on:{click:e.create}},[e._v("确 定")]):i("el-button",{attrs:{type:"primary"},on:{click:e.update}},[e._v("确 定")])],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"角色授权",size:"small","close-on-click-modal":!1,visible:e.dlgAuthVisible},on:{"update:visible":function(t){e.dlgAuthVisible=t},close:e.handleRoleAuthCancel}},[i("div",{staticStyle:{"margin-left":"5%","margin-right":"5%"}},[i("el-row",{staticStyle:{display:"flex","flex-direction":"row","align-items":"center","margin-top":"5px"}},[i("el-col",{attrs:{span:3}},[e._v("\n          角色名称：\n        ")]),e._v(" "),i("el-col",{attrs:{span:9}},[i("el-input",{staticClass:"filter-item",staticStyle:{width:"90%"},attrs:{placeholder:"请输入"},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}})],1),e._v(" "),i("el-col",{attrs:{span:3}},[e._v("\n          角色别名：\n        ")]),e._v(" "),i("el-col",{attrs:{span:9}},[i("el-input",{staticClass:"filter-item",staticStyle:{width:"90%"},attrs:{placeholder:"请输入"},model:{value:e.role.alias,callback:function(t){e.$set(e.role,"alias",t)},expression:"role.alias"}})],1)],1),e._v(" "),i("el-row",{staticStyle:{"margin-top":"15px"}},[e._v("\n        功能权限:\n      ")]),e._v(" "),i("el-row",{staticStyle:{"margin-top":"8px"}},[i("el-col",[i("el-tree",{ref:"funcTree",staticStyle:{"min-height":"300px"},attrs:{data:e.menuTree,props:e.authProps,"node-key":"id","highlight-current":!0,"show-checkbox":"","check-strictly":""},on:{"check-change":e.handleCheckChange}})],1)],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.handleRoleAuthCancel}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.handleRoleAuth}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var c=i("VU/8")(o,r,!1,function(e){i("WVHC")},null,null);t.default=c.exports}});