(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-60e1","chunk-70d5"],{"0nud":function(t,e,a){"use strict";a.d(e,"e",function(){return o}),a.d(e,"b",function(){return i}),a.d(e,"f",function(){return s}),a.d(e,"c",function(){return n}),a.d(e,"a",function(){return c}),a.d(e,"d",function(){return l});var r=a("t3Un");function o(t){return Object(r.a)({url:"/official/website/class/mate/list",method:"post",data:t})}function i(t){return Object(r.a)({url:"/official/website/class/mate",method:"post",data:t})}function s(t){return Object(r.a)({url:"/official/website/class/mate",method:"put",data:t})}function n(t){return Object(r.a)({url:"/official/website/class/mate/"+t,method:"delete"})}function c(t){return Object(r.a)({url:"/official/website/class/mate/checkout/"+t,method:"post"})}function l(t){return Object(r.a)({url:"/official/website/class/mate/clazzlist",method:"post",data:t})}},"46vv":function(t,e,a){},CYxZ:function(t,e,a){"use strict";a.d(e,"d",function(){return o}),a.d(e,"e",function(){return i}),a.d(e,"b",function(){return s}),a.d(e,"f",function(){return n}),a.d(e,"c",function(){return c}),a.d(e,"a",function(){return l});var r=a("t3Un");function o(t){return Object(r.a)({url:"/official/website/product/list",method:"post",data:t})}function i(t){return Object(r.a)({url:"/official/website/product/"+t,method:"get"})}function s(t){return Object(r.a)({url:"/official/website/product",method:"post",data:t})}function n(t){return Object(r.a)({url:"/official/website/product",method:"put",data:t})}function c(t){return Object(r.a)({url:"/official/website/product/"+t,method:"delete"})}function l(t){return Object(r.a)({url:"/official/website/product/checkout/"+t,method:"post"})}},HWVf:function(t,e,a){},Nxgf:function(t,e,a){"use strict";var r=a("HWVf");a.n(r).a},bWlM:function(t,e,a){"use strict";var r=a("46vv");a.n(r).a},ucEa:function(t,e,a){"use strict";a.r(e);var r=a("P2sY"),o=a.n(r),i=a("glbJ"),s=a("Grqa"),n=a("uARZ"),c=a("X4fA"),l=a("0nud"),d=a("CYxZ"),u={id:void 0,createdTime:void 0,firstHeading:"",secondaryHeading:"",tertiaryHeading:"",productSynopsis:"",productText:"",productPic:"",productClass:"",isEnable:"draft"},p={name:"ProductDetail",components:{Tinymce:i.a,MDinput:s.a,Sticky:n.a},props:{isEdit:{type:Boolean,default:!1}},data:function(){var t=this,e=function(e,a,r){""===a?(t.$message({message:e.field+"为必传项",type:"error"}),r(new Error(e.field+"为必传项"))):r()};return{productForm:o()({},u),loading:!1,productClassOptions:[],myHeaders:{"x-auth-token":Object(c.a)()},editFlag:this.isEdit,fileList:[],picVisible:!1,rules:{firstHeading:[{required:!0,trigger:"blur",validator:e}],productClass:[{required:!0,trigger:"blur",validator:e}],productText:[{required:!0,trigger:"blur",validator:e}]}}},computed:{synopsisLength:function(){return this.productForm.productSynopsis.length}},created:function(){var t=this;if(Object(l.d)({clazzName:"PRODUCT"}).then(function(e){2e4===e.data.code&&(t.productClassOptions=e.data.data)}),this.isEdit){var e=this.$route.params&&this.$route.params.id;this.fetchData(e)}else this.productForm=o()({},u)},methods:{uploadUrl:function(){return"http://111.230.146.130:8088/official/website/product/upload"},handleRemove:function(t,e){console.log(t,e)},handlePreview:function(t){console.log(t),this.productForm.productPic=t.response.data,this.picVisible=!0},handleSuccess:function(t,e,a){2e4===t.code&&(this.productForm.productPic=t.data)},fetchData:function(t){var e=this;Object(d.e)(t).then(function(t){e.productForm=t.data.data,e.fileList.splice(0,e.fileList.length),e.fileList.push({name:t.data.data.id,url:t.data.data.productPic})}).catch(function(t){console.log(t)})},submitForm:function(){var t=this;console.log(this.productForm),this.$refs.productForm.validate(function(e){if(!e)return console.log("error submit!!"),t.$message.error("信息填写有错误"),!1;t.loading=!0,t.productForm.isEnable="1",t.editFlag?Object(d.f)(t.productForm).then(function(e){2e4===e.data.code?t.$notify({title:"成功",message:"更新产品成功",type:"success",duration:2e3}):t.$notify({title:"失败",message:"更新产品失败",type:"fail",duration:2e3})}):Object(d.b)(t.productForm).then(function(e){2e4===e.data.code?(t.productForm.id=e.data.data.id,t.editFlag=!0,t.$notify({title:"成功",message:"发布产品成功",type:"success",duration:2e3})):t.$notify({title:"失败",message:"发布产品失败",type:"fail",duration:2e3})}),t.loading=!1})},draftForm:function(){var t=this;0!==this.productForm.productText.length&&0!==this.productForm.firstHeading.length?(this.loading=!0,this.productForm.isEnable="0",this.editFlag?Object(d.f)(this.productForm).then(function(e){2e4===e.data.code?t.$notify({title:"成功",message:"更新产品草稿成功",type:"success",duration:2e3}):t.$notify({title:"失败",message:"更新产品草稿失败",type:"fail",duration:2e3})}):Object(d.b)(this.productForm).then(function(e){t.productForm.id=e.data.data.id,t.editFlag=!0,2e4===e.data.code?t.$notify({title:"成功",message:"保存产品草稿成功",type:"success",duration:2e3}):t.$notify({title:"失败",message:"保存产品草稿失败",type:"fail",duration:2e3})}),this.loading=!1):this.$message({message:"请填写必要的标题和内容",type:"warning"})}}},m=(a("Nxgf"),a("KHd+")),f=Object(m.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"createProduct-container"},[a("el-form",{ref:"productForm",staticClass:"form-container",attrs:{model:t.productForm,rules:t.rules}},[a("sticky",{attrs:{"class-name":"sub-navbar "+t.productForm.isEnable}},[a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:t.submitForm}},[t._v("发布\n      ")]),t._v(" "),a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{type:"warning"},on:{click:t.draftForm}},[t._v("草稿")])],1),t._v(" "),a("div",{staticClass:"createProduct-main-container"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{prop:"title"}},[a("MDinput",{attrs:{maxlength:100,name:"name",required:""},model:{value:t.productForm.firstHeading,callback:function(e){t.$set(t.productForm,"firstHeading",e)},expression:"productForm.firstHeading"}},[t._v("\n              标题\n            ")])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:12,xs:12,sm:24,lg:12}},[a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"80px",label:"二级标题:"}},[a("el-input",{staticClass:"article-textarea",attrs:{rows:1,type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.productForm.secondaryHeading,callback:function(e){t.$set(t.productForm,"secondaryHeading",e)},expression:"productForm.secondaryHeading"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12,xs:12,sm:24,lg:12}},[a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"80px",label:"三级标题:"}},[a("el-input",{staticClass:"article-textarea",attrs:{rows:1,type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.productForm.tertiaryHeading,callback:function(e){t.$set(t.productForm,"tertiaryHeading",e)},expression:"productForm.tertiaryHeading"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"productInfo-container"},[a("el-row",[a("el-col",{attrs:{span:12,xs:12,sm:24,lg:12}},[a("el-form-item",{staticClass:"productInfo-container-item",attrs:{"label-width":"80px",label:"类别:"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.productForm.productClass,callback:function(e){t.$set(t.productForm,"productClass",e)},expression:"productForm.productClass"}},t._l(t.productClassOptions,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),a("el-col",{attrs:{span:12,xs:12,sm:24,lg:12}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"80px",label:"创建时间:"}},[a("el-date-picker",{attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期时间"},model:{value:t.productForm.createdTime,callback:function(e){t.$set(t.productForm,"createdTime",e)},expression:"productForm.createdTime"}})],1)],1)],1)],1)],1)],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"80px",label:"摘要:"}},[a("el-input",{staticClass:"article-textarea",attrs:{rows:1,type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.productForm.productSynopsis,callback:function(e){t.$set(t.productForm,"productSynopsis",e)},expression:"productForm.productSynopsis"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.synopsisLength,expression:"synopsisLength"}],staticClass:"word-counter"},[t._v(t._s(t.synopsisLength)+"字")])],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"80px",label:"图片:"}},[a("el-upload",{attrs:{"on-preview":t.handlePreview,"on-remove":t.handleRemove,"on-success":t.handleSuccess,headers:t.myHeaders,"file-list":t.fileList,action:t.uploadUrl(),"list-type":"picture-card"}},[a("i",{staticClass:"el-icon-plus"})]),t._v(" "),a("el-dialog",{attrs:{visible:t.picVisible},on:{"update:visible":function(e){t.picVisible=e}}},[a("img",{attrs:{src:t.productForm.productPic,width:"100%",alt:""}})])],1),t._v(" "),a("div",{staticClass:"editor-container"},[a("Tinymce",{ref:"editor",attrs:{height:400},model:{value:t.productForm.productText,callback:function(e){t.$set(t.productForm,"productText",e)},expression:"productForm.productText"}})],1)],1)],1)],1)},[],!1,null,"3f3a3947",null);f.options.__file="productDetail.vue";e.default=f.exports},vQqS:function(t,e,a){"use strict";a.r(e);var r={name:"EditProduct",components:{productDetail:a("ucEa").default}},o=(a("bWlM"),a("KHd+")),i=Object(o.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("product-detail",{attrs:{"is-edit":!0}})},[],!1,null,"2ff47946",null);i.options.__file="edit.vue";e.default=i.exports}}]);