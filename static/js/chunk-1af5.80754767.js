(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1af5","chunk-6189"],{"0nud":function(e,t,s){"use strict";s.d(t,"e",function(){return i}),s.d(t,"b",function(){return o}),s.d(t,"f",function(){return r}),s.d(t,"c",function(){return n}),s.d(t,"a",function(){return c}),s.d(t,"d",function(){return l});var a=s("t3Un");function i(e){return Object(a.a)({url:"/official/website/class/mate/list",method:"post",data:e})}function o(e){return Object(a.a)({url:"/official/website/class/mate",method:"post",data:e})}function r(e){return Object(a.a)({url:"/official/website/class/mate",method:"put",data:e})}function n(e){return Object(a.a)({url:"/official/website/class/mate/"+e,method:"delete"})}function c(e){return Object(a.a)({url:"/official/website/class/mate/checkout/"+e,method:"post"})}function l(e){return Object(a.a)({url:"/official/website/class/mate/clazzlist",method:"post",data:e})}},"1z51":function(e,t,s){"use strict";s.d(t,"e",function(){return i}),s.d(t,"d",function(){return o}),s.d(t,"b",function(){return r}),s.d(t,"f",function(){return n}),s.d(t,"c",function(){return c}),s.d(t,"a",function(){return l});var a=s("t3Un");function i(e){return Object(a.a)({url:"/official/website/customer/case/list",method:"post",data:e})}function o(e){return Object(a.a)({url:"/official/website/customer/case/"+e,method:"get"})}function r(e){return Object(a.a)({url:"/official/website/customer/case",method:"post",data:e})}function n(e){return Object(a.a)({url:"/official/website/customer/case",method:"put",data:e})}function c(e){return Object(a.a)({url:"/official/website/customer/case/"+e,method:"delete"})}function l(e){return Object(a.a)({url:"/official/website/customer/case/checkout/"+e,method:"post"})}},RWDU:function(e,t,s){"use strict";s.r(t);var a={name:"EditCustomerCase",components:{customerCaseDetail:s("VLB5").default}},i=(s("e5PX"),s("KHd+")),o=Object(i.a)(a,function(){var e=this.$createElement;return(this._self._c||e)("customer-case-detail",{attrs:{"is-edit":!0}})},[],!1,null,"79e541a2",null);o.options.__file="edit.vue";t.default=o.exports},VLB5:function(e,t,s){"use strict";s.r(t);var a=s("P2sY"),i=s.n(a),o=s("glbJ"),r=s("Grqa"),n=s("uARZ"),c=s("X4fA"),l=s("0nud"),u=s("1z51"),m={id:void 0,createdTime:void 0,firstHeading:"",secondaryHeading:"",tertiaryHeading:"",customerCaseSynopsis:"",caseText:"",casePic:"",caseClass:"",isEnable:"draft"},d={name:"CustomerCaseDetail",components:{Tinymce:o.a,MDinput:r.a,Sticky:n.a},props:{isEdit:{type:Boolean,default:!1}},data:function(){var e=this,t=function(t,s,a){""===s?(e.$message({message:t.field+"为必传项",type:"error"}),a(new Error(t.field+"为必传项"))):a()};return{customerCaseForm:i()({},m),loading:!1,customerCaseClassOptions:[],myHeaders:{"x-auth-token":Object(c.a)()},editFlag:this.isEdit,fileList:[],picVisible:!1,rules:{first_heading:[{validator:t}],case_text:[{validator:t}],case_pic:[{validator:t}]}}},computed:{synopsisLength:function(){return this.customerCaseForm.customerCaseSynopsis.length}},created:function(){var e=this;if(Object(l.d)({clazzName:"CASE"}).then(function(t){2e4===t.data.code&&(e.customerCaseClassOptions=t.data.data)}),this.isEdit){var t=this.$route.params&&this.$route.params.id;this.fetchData(t)}else this.customerCaseForm=i()({},m)},methods:{handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e),this.customerCaseForm.casePic=e.response.data,this.picVisible=!0},handleSuccess:function(e,t,s){2e4===e.code&&(this.customerCaseForm.casePic=e.data)},fetchData:function(e){var t=this;Object(u.d)(e).then(function(e){t.customerCaseForm=e.data.data,t.fileList.splice(0,t.fileList.length),t.fileList.push({name:e.data.data.id,url:e.data.data.casePic})}).catch(function(e){console.log(e)})},submitForm:function(){var e=this;console.log(this.customerCaseForm),this.$refs.customerCaseForm.validate(function(t){if(!t)return console.log("error submit!!"),e.$message.error("信息填写有错误"),!1;e.loading=!0,e.customerCaseForm.isEnable="1",e.editFlag?Object(u.f)(e.customerCaseForm).then(function(t){2e4===t.data.code?e.$notify({title:"成功",message:"更新案例成功",type:"success",duration:2e3}):e.$notify({title:"失败",message:"更新案例失败",type:"fail",duration:2e3})}):Object(u.b)(e.customerCaseForm).then(function(t){2e4===t.data.code?(e.customerCaseForm.id=t.data.data.id,e.editFlag=!0,e.$notify({title:"成功",message:"发布案例成功",type:"success",duration:2e3})):e.$notify({title:"失败",message:"发布案例失败",type:"fail",duration:2e3})}),e.loading=!1})},draftForm:function(){var e=this;0!==this.customerCaseForm.caseText.length&&0!==this.customerCaseForm.firstHeading.length?(this.loading=!0,this.customerCaseForm.isEnable="0",this.editFlag?Object(u.f)(this.customerCaseForm).then(function(t){2e4===t.data.code?e.$notify({title:"成功",message:"更新案例草稿成功",type:"success",duration:2e3}):e.$notify({title:"失败",message:"更新案例草稿失败",type:"fail",duration:2e3})}):Object(u.b)(this.customerCaseForm).then(function(t){e.customerCaseForm.id=t.data.data.id,e.editFlag=!0,2e4===t.data.code?e.$notify({title:"成功",message:"保存案例草稿成功",type:"success",duration:2e3}):e.$notify({title:"失败",message:"保存案例草稿失败",type:"fail",duration:2e3})}),this.loading=!1):this.$message({message:"请填写必要的标题和内容",type:"warning"})}}},f=(s("u3oE"),s("KHd+")),p=Object(f.a)(d,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"createCustomerCase-container"},[s("el-form",{ref:"customerCaseForm",staticClass:"form-container",attrs:{model:e.customerCaseForm,rules:e.rules}},[s("sticky",{attrs:{"class-name":"sub-navbar "+e.customerCaseForm.isEnable}},[s("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:e.submitForm}},[e._v("发布\n      ")]),e._v(" "),s("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{type:"warning"},on:{click:e.draftForm}},[e._v("草稿")])],1),e._v(" "),s("div",{staticClass:"createCustomerCase-main-container"},[s("el-row",[s("el-col",{attrs:{span:24}},[s("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{prop:"title"}},[s("MDinput",{attrs:{maxlength:100,name:"name",required:""},model:{value:e.customerCaseForm.firstHeading,callback:function(t){e.$set(e.customerCaseForm,"firstHeading",t)},expression:"customerCaseForm.firstHeading"}},[e._v("\n              标题\n            ")])],1),e._v(" "),s("el-row",[s("el-col",{attrs:{span:12,xs:12,sm:24,lg:12}},[s("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"80px",label:"二级标题:"}},[s("el-input",{staticClass:"article-textarea",attrs:{rows:1,type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:e.customerCaseForm.secondaryHeading,callback:function(t){e.$set(e.customerCaseForm,"secondaryHeading",t)},expression:"customerCaseForm.secondaryHeading"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12,xs:12,sm:24,lg:12}},[s("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"80px",label:"三级标题:"}},[s("el-input",{staticClass:"article-textarea",attrs:{rows:1,type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:e.customerCaseForm.tertiaryHeading,callback:function(t){e.$set(e.customerCaseForm,"tertiaryHeading",t)},expression:"customerCaseForm.tertiaryHeading"}})],1)],1)],1),e._v(" "),s("div",{staticClass:"customerCaseInfo-container"},[s("el-row",[s("el-col",{attrs:{span:12,xs:12,sm:24,lg:12}},[s("el-form-item",{staticClass:"customerInfo-container-item",attrs:{"label-width":"80px",label:"类别:"}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.customerCaseForm.caseClass,callback:function(t){e.$set(e.customerCaseForm,"caseClass",t)},expression:"customerCaseForm.caseClass"}},e._l(e.customerCaseClassOptions,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),s("el-col",{attrs:{span:12,xs:12,sm:24,lg:12}},[s("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"80px",label:"创建时间:"}},[s("el-date-picker",{attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期时间"},model:{value:e.customerCaseForm.createdTime,callback:function(t){e.$set(e.customerCaseForm,"createdTime",t)},expression:"customerCaseForm.createdTime"}})],1)],1)],1)],1)],1)],1),e._v(" "),s("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"80px",label:"摘要:"}},[s("el-input",{staticClass:"article-textarea",attrs:{rows:1,type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:e.customerCaseForm.customerCaseSynopsis,callback:function(t){e.$set(e.customerCaseForm,"customerCaseSynopsis",t)},expression:"customerCaseForm.customerCaseSynopsis"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.synopsisLength,expression:"synopsisLength"}],staticClass:"word-counter"},[e._v(e._s(e.synopsisLength)+"字")])],1),e._v(" "),s("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"80px",label:"图片:"}},[s("el-upload",{attrs:{"on-preview":e.handlePreview,"on-remove":e.handleRemove,"on-success":e.handleSuccess,headers:e.myHeaders,"file-list":e.fileList,action:"http://111.230.146.130:8088/official/website/customer/case/upload","list-type":"picture-card"}},[s("i",{staticClass:"el-icon-plus"})]),e._v(" "),s("el-dialog",{attrs:{visible:e.picVisible},on:{"update:visible":function(t){e.picVisible=t}}},[s("img",{attrs:{src:e.customerCaseForm.casePic,width:"100%",alt:""}})])],1),e._v(" "),s("div",{staticClass:"editor-container"},[s("Tinymce",{ref:"editor",attrs:{height:400},model:{value:e.customerCaseForm.caseText,callback:function(t){e.$set(e.customerCaseForm,"caseText",t)},expression:"customerCaseForm.caseText"}})],1)],1)],1)],1)},[],!1,null,"bcc38cfc",null);p.options.__file="customerCaseDetail.vue";t.default=p.exports},W29d:function(e,t,s){},e5PX:function(e,t,s){"use strict";var a=s("kfcj");s.n(a).a},kfcj:function(e,t,s){},u3oE:function(e,t,s){"use strict";var a=s("W29d");s.n(a).a}}]);