(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2ba0"],{FWry:function(t,e,a){},MSNs:function(t,e,a){"use strict";a.d(e,"a",function(){return r});var o=a("t3Un");function r(){return Object(o.a)({url:"/qiniu/upload/token",method:"get"})}},Q4Fy:function(t,e,a){"use strict";var o=a("aJFS");a.n(o).a},TRlW:function(t,e,a){"use strict";var o=a("FWry");a.n(o).a},aJFS:function(t,e,a){},wu5D:function(t,e,a){"use strict";a.r(e);var o=a("P2sY"),r=a.n(o),i=a("Grqa"),s=a("4d7F"),l=a.n(s),n=a("MSNs"),c={name:"SingleImageUpload",props:{value:{type:String,default:""}},data:function(){return{tempUrl:"",dataObj:{token:"",key:""}}},computed:{imageUrl:function(){return this.value}},methods:{rmImage:function(){this.emitInput("")},emitInput:function(t){this.$emit("input",t)},handleImageSuccess:function(){this.emitInput(this.tempUrl)},beforeUpload:function(){var t=this,e=this;return new l.a(function(a,o){Object(n.a)().then(function(o){var r=o.data.qiniu_key,i=o.data.qiniu_token;e._data.dataObj.token=i,e._data.dataObj.key=r,t.tempUrl=o.data.qiniu_url,a(!0)}).catch(function(t){console.log(t),o(!1)})})}}},p=(a("Q4Fy"),a("KHd+")),u=Object(p.a)(c,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"upload-container"},[a("el-upload",{staticClass:"image-uploader",attrs:{data:t.dataObj,multiple:!1,"show-file-list":!1,"on-success":t.handleImageSuccess,drag:"",action:"https://httpbin.org/post"}},[a("i",{staticClass:"el-icon-upload"}),t._v(" "),a("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),a("em",[t._v("点击上传")])])]),t._v(" "),a("div",{staticClass:"image-preview"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.imageUrl.length>1,expression:"imageUrl.length>1"}],staticClass:"image-preview-wrapper"},[a("img",{attrs:{src:t.imageUrl+"?imageView2/1/w/200/h/200"}}),t._v(" "),a("div",{staticClass:"image-preview-action"},[a("i",{staticClass:"el-icon-delete",on:{click:t.rmImage}})])])])],1)},[],!1,null,"569a3b07",null);u.options.__file="singleImage.vue";var d=u.exports,m=a("iWu5"),g=a("PLwA"),h=a("Yfch"),b=a("t3Un");var w={siteName:"",logoUrl:"",qrCodeUrl:"",keyWords:"",description:"",contact:"",record:"",copyright:""},f={name:"WebInfo",components:{MDinput:i.a,Upload:d,ImageCropper:m.a,PanThumb:g.a},data:function(){var t=this,e=function(e,a,o){""===a?(t.$message({message:e.field+"为必传项",type:"error"}),o(new Error(e.field+"为必传项"))):o()},a=function(e,a,o){a?Object(h.b)(a)?o():(t.$message({message:"外链url填写不正确",type:"error"}),o(new Error("外链url填写不正确"))):o()};return{webForm:r()({},w),loading:!1,userListOptions:[],logoShow:!1,qrCodeShow:!1,logoCropperKey:0,qrCodeCropperKey:0,rules:{siteName:[{validator:e}],description:[{validator:e}],keyWords:[{validator:e}],logoUrl:[{validator:a,trigger:"blur"}],qrCodeUrl:[{validator:a,trigger:"blur"}]}}},computed:{contentShortLength:function(){return this.webForm.description.length}},created:function(){this.fetchInfo()},methods:{cropLogoSuccess:function(t){this.logoShow=!1,this.logoCropperKey=this.logoCropperKey+1,this.webForm.logoUrl=t.data},closeLogo:function(){this.logoShow=!1},cropQRCodeSuccess:function(t){this.qrCodeShow=!1,this.qrCodeCropperKey=this.qrCodeCropperKey+1,this.webForm.qrCodeUrl=t.data},closeQRCode:function(){this.qrCodeShow=!1},fetchInfo:function(){var t=this;Object(b.a)({url:"/official/website/base/info",method:"get"}).then(function(e){e.data.status?(t.$notify({title:"成功",message:"获取信息成功",type:"success",duration:2e3}),t.webForm=e.data.data,t.webForm.logoUrl=e.data.data.logoUrl,t.webForm.qrCodeUrl=e.data.data.qrCodeUrl):t.$notify({title:"失败",message:"获取失败",type:"fail",duration:2e3})})},update:function(){var t=this;console.log(this.webForm),this.loading=!0,this.$refs.webForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0,function(t){return Object(b.a)({url:"/official/website/base/info",method:"put",data:t})}(t.webForm).then(function(e){e.data.status?(t.webForm=e.data.data,t.$notify({title:"成功",message:"更新网站信息成功",type:"success",duration:2e3})):t.$notify({title:"失败",message:"更新失败",type:"fail",duration:2e3})}),t.loading=!1})}}},v=(a("TRlW"),Object(p.a)(f,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"baseInfo-container"},[a("el-form",{ref:"webForm",staticClass:"form-container",attrs:{model:t.webForm,rules:t.rules}},[a("div",{staticClass:"baseInfo-main-container"},[a("el-alert",{staticStyle:{width:"200px",display:"inline-block","vertical-align":"middle"},attrs:{closable:!1,title:"网站基本信息配置",type:"success"}}),t._v(" "),a("el-button",{attrs:{size:"small",type:"success"},on:{click:t.update}},[t._v("更新")]),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{prop:"siteName"}},[a("MDinput",{attrs:{maxlength:100,name:"name",required:""},model:{value:t.webForm.siteName,callback:function(e){t.$set(t.webForm,"siteName",e)},expression:"webForm.siteName"}},[t._v("\n              网站名称\n            ")])],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:32}},[a("el-col",{staticStyle:{"padding-left":"0"},attrs:{xs:24,sm:24,lg:24}},[a("div",{staticClass:"input-wrapper"},[a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"100px",label:"网站Logo:"}},[a("pan-thumb",{attrs:{image:t.webForm.logoUrl}}),t._v(" "),a("el-button",{staticStyle:{position:"absolute",bottom:"15px","margin-left":"40px"},attrs:{type:"primary",icon:"upload"},on:{click:function(e){t.logoShow=!0}}},[t._v("Change Logo\n              ")]),t._v(" "),a("image-cropper",{directives:[{name:"show",rawName:"v-show",value:t.logoShow,expression:"logoShow"}],key:t.logoCropperKey,attrs:{width:300,height:300,url:"/official/website/base/info/upload","lang-type":"en"},on:{close:t.closeLogo,"crop-upload-success":t.cropLogoSuccess}})],1)],1)]),t._v(" "),a("el-col",{staticStyle:{"padding-left":"0"},attrs:{xs:24,sm:24,lg:24}},[a("div",{staticClass:"input-wrapper"},[a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"100px",label:"二维码:"}},[a("img",{staticClass:"qrcode",attrs:{src:t.webForm.qrCodeUrl}}),t._v(" "),a("el-button",{staticStyle:{position:"absolute",bottom:"15px","margin-left":"40px"},attrs:{type:"primary",icon:"upload"},on:{click:function(e){t.qrCodeShow=!0}}},[t._v("Change QRcode\n              ")]),t._v(" "),a("image-cropper",{directives:[{name:"show",rawName:"v-show",value:t.qrCodeShow,expression:"qrCodeShow"}],key:t.qrCodeCropperKey,attrs:{width:300,height:300,url:"/official/website/base/info/upload","lang-type":"en"},on:{close:t.closeQRCode,"crop-upload-success":t.cropQRCodeSuccess}})],1)],1)])],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"100px",label:"网站关键字:"}},[a("el-input",{staticClass:"article-textarea",attrs:{rows:1,type:"textarea",autosize:"",placeholder:"请输入关键字"},model:{value:t.webForm.keyWords,callback:function(e){t.$set(t.webForm,"keyWords",e)},expression:"webForm.keyWords"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"100px",label:"首页描述:"}},[a("el-input",{staticClass:"article-textarea",attrs:{rows:1,type:"textarea",autosize:"",placeholder:"请输入描述"},model:{value:t.webForm.description,callback:function(e){t.$set(t.webForm,"description",e)},expression:"webForm.description"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.contentShortLength,expression:"contentShortLength"}],staticClass:"word-counter"},[t._v(t._s(t.contentShortLength)+"字")])],1),t._v(" "),a("el-row",{attrs:{gutter:32}},[a("el-col",{staticStyle:{padding:"0"},attrs:{xs:24,sm:24,lg:8}},[a("div",{staticClass:"input-wrapper"},[a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"100px",label:"联系方式:"}},[a("el-input",{staticClass:"article-textarea",attrs:{rows:1,type:"textarea",autosize:"",placeholder:"请输入联系方式"},model:{value:t.webForm.contact,callback:function(e){t.$set(t.webForm,"contact",e)},expression:"webForm.contact"}})],1)],1)]),t._v(" "),a("el-col",{staticStyle:{padding:"0"},attrs:{xs:24,sm:24,lg:8}},[a("div",{staticClass:"input-wrapper"},[a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"100px",label:"备案信息:"}},[a("el-input",{staticClass:"article-textarea",attrs:{rows:1,type:"textarea",autosize:"",placeholder:"请输入备案信息"},model:{value:t.webForm.record,callback:function(e){t.$set(t.webForm,"record",e)},expression:"webForm.record"}})],1)],1)]),t._v(" "),a("el-col",{staticStyle:{padding:"0"},attrs:{xs:24,sm:24,lg:8}},[a("div",{staticClass:"input-wrapper"},[a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"100px",label:"版权信息:"}},[a("el-input",{staticClass:"article-textarea",attrs:{rows:1,type:"textarea",autosize:"",placeholder:"请输入版权信息"},model:{value:t.webForm.copyright,callback:function(e){t.$set(t.webForm,"copyright",e)},expression:"webForm.copyright"}})],1)],1)])],1)],1)])],1)},[],!1,null,"5f626974",null));v.options.__file="web-info.vue";e.default=v.exports}}]);