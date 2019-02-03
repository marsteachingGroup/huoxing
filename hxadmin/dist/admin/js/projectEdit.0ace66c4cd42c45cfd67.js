webpackJsonp([0],{125:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(r(1)),i=o(r(145));function o(t){return t&&t.__esModule?t:{default:t}}e.default=function(){new a.default({el:"#app",components:{App:i.default}})}},129:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.postPojectDelete=e.postTagAdd=e.getTagList=e.getPojectView=e.postPojectEdit=e.getPojectEdit=e.postPojectAdd=e.getPojectAdd=e.getPojectList=void 0;var a,i=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}}(r(131)),o=r(21),s=(a=o)&&a.__esModule?a:{default:a};e.getPojectList=function(t,e){var r=i.api.GET_POJECT_LIST;return s.default.get(r,t,e)},e.getPojectAdd=function(t,e){var r=i.api.GET_POJECT_ADD;return s.default.get(r,t,e)},e.postPojectAdd=function(t,e){var r=i.api.POST_POJECT_ADD;return s.default.post(r,t,e)},e.getPojectEdit=function(t,e){var r=i.api.GET_POJECT_EDIT;return s.default.get(r,t,e)},e.postPojectEdit=function(t,e){var r=i.api.POST_POJECT_EDIT;return s.default.post(r,t,e)},e.getPojectView=function(t,e){var r=i.api.GET_POJECT_VIEW;return s.default.get(r,t,e)},e.getTagList=function(t,e){var r=i.api.GET_TAG_LIST;return s.default.get(r,t,e)},e.postTagAdd=function(t,e){var r=i.api.POST_TAG_ADD;return s.default.post(r,t,e)},e.postPojectDelete=function(t,e){var r=i.api.POST_POJECT_DELETE;return s.default.post(r,t,e)}},130:function(t,e){t.exports=function(t,e,r,a,i,o){var s,l=t=t||{},n=typeof t.default;"object"!==n&&"function"!==n||(l=(s=t).default);var c,_="function"==typeof l?l.options:l;if(e&&(_.render=e.render,_.staticRenderFns=e.staticRenderFns,_._compiled=!0),r&&(_.functional=!0),i&&(_._scopeId=i),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},_._ssrRegister=c):a&&(c=a),c){var d=_.functional,p=d?_.render:_.beforeCreate;d?(_._injectStyles=c,_.render=function(t,e){return c.call(e),p(t,e)}):_.beforeCreate=p?[].concat(p,c):[c]}return{esModule:s,exports:l,options:_}}},131:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a="",i={GET_POJECT_LIST:(a="http://api.marsco.online/admin")+"/project",GET_POJECT_ADD:a+"/project/add",POST_POJECT_ADD:a+"/project/addPost",GET_POJECT_EDIT:a+"/project/edit",POST_POJECT_EDIT:a+"/project/editPost",GET_POJECT_VIEW:a+"/project/show",POST_POJECT_DELETE:a+"/project/delete",GET_TAG_LIST:a+"/tag",POST_TAG_ADD:a+"/tag/addPost"};e.api=i},132:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(129);e.default={data:function(){return{keyword:"",tagList:{},loading:!1,label:""}},props:{tagChoose:{type:Array}},methods:{handleTagList:function(){var e=this;this.loading=!0,(0,a.getTagList)({keywords:this.keyword}).then(function(t){e.loading=!1,e.tagList=t.data.list}).catch(function(){e.loading=!1})},handleAdd:function(){var e=this;this.loading=!0,(0,a.postTagAdd)({tag_name:this.label,tag_sub_name:"标签"}).then(function(t){e.handleTagList()}).catch(function(){e.loading=!1})},handleSave:function(){this.$emit("handleSave",this.tagChoose)}},created:function(){this.handleTagList()}}},133:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i=r(129),o=r(144),s=(a=o)&&a.__esModule?a:{default:a},l=r(46);e.default={components:{Tag:s.default},created:function(){var r=this,t=(0,l.formatUrlParams)(location.search);this.id=t.id?t.id:"",this.loading=!0,""===this.id?(0,i.getPojectAdd)().then(function(t){r.loading=!1;var e=t.data;r.school=e.school,r.links=t.page_resource}).catch(function(){r.loading=!1}):(0,i.getPojectEdit)({id:this.id}).then(function(t){r.loading=!1;var e=t.data.info;r.school=t.data.school,r.form.name=e.name,r.form.description=e.description,r.form.peoples=e.peoples,r.form.school=e.school_id,r.form.school_district=e.school_district,r.form.tag=e.tag_name,r.form.brand=e.brand,r.form.start_time=e.start_time,r.form.end_time=e.end_time,r.form.pr_start_time=e.registration.pr_start_time,r.form.pr_end_time=e.registration.pr_end_time,r.form.stall_start_time=e.registration.stall_start_time,r.form.stall_end_time=e.registration.stall_end_time,r.form.check_building_start_time=e.registration.check_building_start_time,r.form.check_building_end_time=e.registration.check_building_end_time,r.form.society_participants=e.registration.society_participants,r.form.stall_site=e.registration.stall_site,r.form.tp_start_time=e.training.tp_start_time,r.form.tp_end_time=e.training.tp_end_time,r.form.training_site=e.training.training_site,r.form.tr_participants=e.training.tr_participants,r.form.lector=e.training.lector,r.form.tp_is_exist_media=e.training.tp_is_exist_media,r.form.fap_start_time=e.award.fap_start_time,r.form.fap_end_time=e.award.fap_end_time,r.form.finals_site=e.award.finals_site,r.form.teams_num=e.award.teams_num,r.form.judge=e.award.judge,r.form.fap_is_exist_media=e.award.fap_is_exist_media,r.tagChoose=e.tag_name.split(","),r.links=t.page_resource}).catch(function(){r.loading=!1})},methods:{handleSave:function(t){var a=this;this.$refs[t].validate(function(t){if(t){var e=a.form,r={name:e.name,description:e.description,peoples:e.peoples,school_id:e.school,school_district:e.school_district,tag_name:e.tag,tag_sub_name:"标签",brand:e.brand,start_time:e.start_time,end_time:e.end_time,registration:{pr_start_time:e.pr_start_time,pr_end_time:e.pr_end_time,stall_start_time:e.stall_start_time,stall_end_time:e.stall_end_time,check_building_start_time:e.check_building_start_time,check_building_end_time:e.check_building_end_time,society_participants:e.society_participants,stall_site:e.stall_site},training:{tp_start_time:e.tp_start_time,tp_end_time:e.tp_end_time,training_site:e.training_site,tr_participants:e.tr_participants,lector:e.lector,tp_is_exist_media:e.tp_is_exist_media},award:{fap_start_time:e.fap_start_time,fap_end_time:e.fap_end_time,finals_site:e.finals_site,teams_num:e.teams_num,judge:e.judge,fap_is_exist_media:e.fap_is_exist_media}};a.loading=!0,""===a.id?(0,i.postPojectAdd)(r).then(function(t){a.loading=!1,window.location.href=t.page_resource.index}).catch(function(){a.loading=!1}):(r.id=a.id,(0,i.postPojectEdit)(r).then(function(t){a.loading=!1,a.$message({message:"修改成功",type:"success"})}).catch(function(){a.loading=!1}))}})},handleDialog:function(t){this.tagChoose=t,this.form.tag=t.join(","),this.dialog=!1}},data:function(){var a=this;return{id:"",loading:!1,dialog:!1,tagChoose:[],rules:{name:[{required:!0,message:"请填写项目名称",trigger:"change"}],peoples:[{validator:function(t,e,r){return""===e?r(new Error("报名人数不能为空")):""!==e&&e<=0?r(new Error("报名人数必须大于0")):r()},trigger:"change"}],school:[{required:!0,message:"请选择关联学校",trigger:"change"}],pr_start_time:[{required:!0,message:"请选择开始时间",trigger:"change"}],pr_end_time:[{validator:function(t,e,r){return""===e?r(new Error("请选择结束时间")):e<a.form.pr_start_time&&""!==a.form.pr_start_time?r(new Error("结束时间不能小于开始时间")):r()},trigger:"change"}],society_participants:[{validator:function(t,e,r){return""===e?r(new Error("社团人数不能为空")):""!==e&&e<=0?r(new Error("社团人数必须大于0")):r()},trigger:"change"}],stall_start_time:[{required:!0,message:"请选择开始时间",trigger:"change"}],stall_end_time:[{validator:function(t,e,r){return""===e?r(new Error("请选择结束时间")):e<a.form.stall_start_time&&""!==a.form.stall_start_time?r(new Error("摆摊结束时间不能小于摆摊开始时间")):r()},trigger:"change"}],check_building_start_time:[{required:!0,message:"请选择开始时间",trigger:"change"}],check_building_end_time:[{validator:function(t,e,r){return""===e?r(new Error("请选择结束时间")):e<a.form.check_building_start_time&&""!==a.form.check_building_start_time?r(new Error("扫楼结束时间不能小于扫楼开始时间")):r()},trigger:"change"}],tp_start_time:[{required:!0,message:"请选择开始时间",trigger:"change"}],tp_end_time:[{validator:function(t,e,r){return""===e?r(new Error("请选择结束时间")):e<a.form.tp_start_time&&""!==a.form.tp_start_time?r(new Error("结束时间不能小于开始时间")):r()},trigger:"change"}],tr_participants:[{validator:function(t,e,r){return""===e?r(new Error("参与培训人数不能为空")):""!==e&&e<=0?r(new Error("参与培训人数必须大于0")):r()},trigger:"change"}],start_time:[{required:!0,message:"请选择开始时间",trigger:"change"}],end_time:[{validator:function(t,e,r){return""===e?r(new Error("请选择结束时间")):e<a.form.start_time&&""!==a.form.start_time?r(new Error("结束时间不能小于开始时间")):r()},trigger:"change"}],fap_start_time:[{required:!0,message:"请选择开始时间",trigger:"change"}],fap_end_time:[{validator:function(t,e,r){return""===e?r(new Error("请选择结束时间")):e<a.form.fap_start_time&&""!==a.form.fap_start_time?r(new Error("结束时间不能小于开始时间")):r()},trigger:"change"}],teams_num:[{validator:function(t,e,r){return""===e?r(new Error("决赛团队数不能为空")):""!==e&&e<=0?r(new Error("决赛团队数必须大于0")):r()},trigger:"change"}],tag:[{required:!0,message:"请选择标签",trigger:"change"}],brand:[{required:!0,message:"请填写关联品牌",trigger:"change"}],stall_site:[{required:!0,message:"请填写摆摊场地",trigger:"change"}],training_site:[{required:!0,message:"请填写培训场地",trigger:"change"}],lector:[{required:!0,message:"请填写培训讲师",trigger:"change"}],finals_site:[{required:!0,message:"请填写决赛场地",trigger:"change"}],judge:[{required:!0,message:"请填写决赛评委",trigger:"change"}]},form:{name:"",description:"",peoples:"",school:"",school_district:"",brand:"",tag:"",start_time:"",end_time:"",pr_start_time:"",pr_end_time:"",stall_start_time:"",stall_end_time:"",check_building_start_time:"",check_building_end_time:"",society_participants:"",stall_site:"",tp_start_time:"",tp_end_time:"",training_site:"",tr_participants:"",lector:"",tp_is_exist_media:"2",fap_start_time:"",fap_end_time:"",finals_site:"",teams_num:"",judge:"",fap_is_exist_media:"2"},school:[],tag:[],links:{}}}}},136:function(t,e,r){(t.exports=r(123)(!1)).push([t.i,'.hx-projectEdit_header{position:relative;margin-bottom:20px}.hx-projectEdit_header-text{color:#333;font-size:14px;position:relative;margin-left:90px;z-index:2;background-color:#fff;display:inline-block;padding:0 15px}.hx-projectEdit_header-line{height:1px;content:"";width:100%;left:0;top:12px;display:block;background-color:#e6e6e6;z-index:1;position:absolute}.hx-projectEdit_title{background-color:#d7d7d7;padding:15px 0 15px 40px;font-size:14px;margin-bottom:20px}.hx-projectEdit_text{font-size:12px;padding:4px 0 4px 40px;margin-bottom:20px;background-color:#f2f2f2}.hx-projectEdit_content input{width:220px}.hx-projectEdit_checkbox .el-form-item__content{margin-left:40px!important}.hx-projectEdit_button{margin-top:60px;text-align:center}.hx-projectEdit_button button{width:120px}.hx-projectEdit_label .el-input.is-disabled .el-input__inner{border-color:#e4e7ed;background-color:#fff;color:#333}.hx-projectEdit .el-form-item.is-success .el-input__inner,.hx-projectEdit .el-form-item.is-success .el-input__inner:focus,.hx-projectEdit .el-form-item.is-success .el-textarea__inner,.hx-projectEdit .el-form-item.is-success .el-textarea__inner:focus{border:1px solid #dcdfe6}',""])},139:function(t,e,r){(t.exports=r(123)(!1)).push([t.i,".tag-input[data-v-7cda3bb0]{width:200px;margin-right:10px}.tag-content[data-v-7cda3bb0]{margin-top:30px}.tag-add[data-v-7cda3bb0]{margin-top:60px}",""])},140:function(t,e,r){var a=r(136);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(124)("6f6b2286",a,!0)},143:function(t,e,r){var a=r(139);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(124)("3ce2b636",a,!0)},144:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(132),i=r.n(a);for(var o in a)["default","default"].indexOf(o)<0&&function(t){r.d(e,t,function(){return a[t]})}(o);var s=r(151);var l=function(t){r(143)},n=r(130)(i.a,s.a,!1,l,"data-v-7cda3bb0",null);e.default=n.exports},145:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(133),i=r.n(a);for(var o in a)["default","default"].indexOf(o)<0&&function(t){r.d(e,t,function(){return a[t]})}(o);var s=r(148);var l=function(t){r(140)},n=r(130)(i.a,s.a,!1,l,null,null);e.default=n.exports},148:function(t,e,r){"use strict";var a={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"hx-pages hx-projectEdit"},[r("el-row",{staticClass:"hx-projectEdit_header"},[r("div",{staticClass:"hx-projectEdit_header-text"},[""===e.id?r("span",[e._v("添加比赛")]):r("span",{staticStyle:{"font-weight":"bold"}},[e._v("比赛编码："+e._s(e.id))])]),e._v(" "),r("div",{staticClass:"hx-projectEdit_header-line"})]),e._v(" "),r("el-form",{ref:"infoForm",attrs:{rules:e.rules,model:e.form,"label-width":"110px"}},[r("el-row",{staticClass:"hx-projectEdit_rows"},[r("el-row",{staticClass:"hx-projectEdit_title"},[e._v("基本信息")]),e._v(" "),r("el-form-item",{attrs:{label:"项目名称",prop:"name"}},[r("el-col",{attrs:{span:12}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"项目描述"}},[r("el-col",{attrs:{span:12}},[r("el-input",{attrs:{type:"textarea",rows:10},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"报名人数上限",prop:"peoples",required:""}},[r("el-col",{attrs:{span:12}},[r("el-input",{staticStyle:{width:"100px"},attrs:{type:"number"},model:{value:e.form.peoples,callback:function(t){e.$set(e.form,"peoples",t)},expression:"form.peoples"}})],1)],1)],1),e._v(" "),r("el-row",{staticClass:"hx-projectEdit_rows"},[r("el-row",{staticClass:"hx-projectEdit_title"},[e._v("关联方信息")]),e._v(" "),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"关联学校",prop:"school"}},[r("el-col",[r("el-select",{staticStyle:{width:"195px"},attrs:{placeholder:"选择学校"},model:{value:e.form.school,callback:function(t){e.$set(e.form,"school",t)},expression:"form.school"}},e._l(e.school,function(t,e){return r("el-option",{key:e,attrs:{label:t,value:e}})}),1)],1)],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"关联校区"}},[r("el-col",[r("el-input",{staticStyle:{width:"195px"},model:{value:e.form.school_district,callback:function(t){e.$set(e.form,"school_district",t)},expression:"form.school_district"}})],1)],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"关联品牌",prop:"brand"}},[r("el-col",{attrs:{span:12}},[r("el-input",{staticStyle:{width:"195px"},model:{value:e.form.brand,callback:function(t){e.$set(e.form,"brand",t)},expression:"form.brand"}})],1)],1)],1),e._v(" "),r("el-row",{staticClass:"hx-projectEdit_rows"},[r("el-row",{staticClass:"hx-projectEdit_title"},[e._v("标签信息")]),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{staticClass:"hx-projectEdit_label",attrs:{label:"标签",prop:"tag"}},[r("el-input",{attrs:{disabled:!0},model:{value:e.form.tag,callback:function(t){e.$set(e.form,"tag",t)},expression:"form.tag"}})],1)],1),e._v(" "),r("el-col",{staticStyle:{"margin-left":"15px"},attrs:{span:4}},[r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialog=!0}}},[e._v("添加标签")])],1)],1)],1),e._v(" "),r("el-row",{staticClass:"hx-projectEdit_rows"},[r("el-row",{staticClass:"hx-projectEdit_title",staticStyle:{"margin-bottom":"0"}},[e._v("流程信息")]),e._v(" "),r("el-row",{staticClass:"hx-projectEdit_content"},[r("el-row",{staticClass:"hx-projectEdit_text"},[e._v("宣传报名期")]),e._v(" "),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"开始时间",prop:"pr_start_time"}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"开始时间"},model:{value:e.form.pr_start_time,callback:function(t){e.$set(e.form,"pr_start_time",t)},expression:"form.pr_start_time"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"结束时间",prop:"pr_end_time",required:""}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"结束时间"},model:{value:e.form.pr_end_time,callback:function(t){e.$set(e.form,"pr_end_time",t)},expression:"form.pr_end_time"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"社团参与人数",prop:"society_participants",required:""}},[r("el-input",{attrs:{type:"number"},model:{value:e.form.society_participants,callback:function(t){e.$set(e.form,"society_participants",t)},expression:"form.society_participants"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"摆摊开始时间",prop:"stall_start_time"}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"开始时间"},model:{value:e.form.stall_start_time,callback:function(t){e.$set(e.form,"stall_start_time",t)},expression:"form.stall_start_time"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"摆摊结束时间",prop:"stall_end_time",required:""}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"结束时间"},model:{value:e.form.stall_end_time,callback:function(t){e.$set(e.form,"stall_end_time",t)},expression:"form.stall_end_time"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"摆摊场地",prop:"stall_site"}},[r("el-input",{model:{value:e.form.stall_site,callback:function(t){e.$set(e.form,"stall_site",t)},expression:"form.stall_site"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"扫楼开始时间",prop:"check_building_start_time"}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"开始时间"},model:{value:e.form.check_building_start_time,callback:function(t){e.$set(e.form,"check_building_start_time",t)},expression:"form.check_building_start_time"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"扫楼结束时间",prop:"check_building_end_time",required:""}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"结束时间"},model:{value:e.form.check_building_end_time,callback:function(t){e.$set(e.form,"check_building_end_time",t)},expression:"form.check_building_end_time"}})],1)],1)],1)],1),e._v(" "),r("el-row",{staticClass:"hx-projectEdit_content"},[r("el-row",{staticClass:"hx-projectEdit_text"},[e._v("培训动员期")]),e._v(" "),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"开始时间",prop:"tp_start_time"}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"开始时间"},model:{value:e.form.tp_start_time,callback:function(t){e.$set(e.form,"tp_start_time",t)},expression:"form.tp_start_time"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"结束时间",prop:"tp_end_time",required:""}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"结束时间"},model:{value:e.form.tp_end_time,callback:function(t){e.$set(e.form,"tp_end_time",t)},expression:"form.tp_end_time"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"培训场地",prop:"training_site"}},[r("el-input",{model:{value:e.form.training_site,callback:function(t){e.$set(e.form,"training_site",t)},expression:"form.training_site"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"参与培训人数",prop:"tr_participants",required:""}},[r("el-input",{attrs:{type:"number"},model:{value:e.form.tr_participants,callback:function(t){e.$set(e.form,"tr_participants",t)},expression:"form.tr_participants"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"培训讲师",prop:"lector"}},[r("el-input",{model:{value:e.form.lector,callback:function(t){e.$set(e.form,"lector",t)},expression:"form.lector"}})],1)],1),e._v(" "),r("el-col",{staticClass:"hx-projectEdit_checkbox",attrs:{span:8}},[r("el-form-item",{attrs:{label:""}},[r("el-checkbox",{attrs:{"true-label":"1","false-label":"2"},model:{value:e.form.tp_is_exist_media,callback:function(t){e.$set(e.form,"tp_is_exist_media",t)},expression:"form.tp_is_exist_media"}},[e._v("是否有多媒体设备")])],1)],1)],1)],1),e._v(" "),r("el-row",{staticClass:"hx-projectEdit_content"},[r("el-row",{staticClass:"hx-projectEdit_text"},[e._v("营销实战期")]),e._v(" "),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"开始时间",prop:"start_time"}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"开始时间"},model:{value:e.form.start_time,callback:function(t){e.$set(e.form,"start_time",t)},expression:"form.start_time"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"结束时间",prop:"end_time",required:""}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"结束时间"},model:{value:e.form.end_time,callback:function(t){e.$set(e.form,"end_time",t)},expression:"form.end_time"}})],1)],1)],1)],1),e._v(" "),r("el-row",{staticClass:"hx-projectEdit_content"},[r("el-row",{staticClass:"hx-projectEdit_text"},[e._v("决赛颁奖期")]),e._v(" "),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"开始时间",prop:"fap_start_time"}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"开始时间"},model:{value:e.form.fap_start_time,callback:function(t){e.$set(e.form,"fap_start_time",t)},expression:"form.fap_start_time"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"结束时间",prop:"fap_end_time",required:""}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"结束时间"},model:{value:e.form.fap_end_time,callback:function(t){e.$set(e.form,"fap_end_time",t)},expression:"form.fap_end_time"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"决赛场地",prop:"finals_site"}},[r("el-input",{model:{value:e.form.finals_site,callback:function(t){e.$set(e.form,"finals_site",t)},expression:"form.finals_site"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"决赛团队数",prop:"teams_num",required:""}},[r("el-input",{attrs:{type:"number"},model:{value:e.form.teams_num,callback:function(t){e.$set(e.form,"teams_num",t)},expression:"form.teams_num"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"决赛评委",prop:"judge"}},[r("el-input",{model:{value:e.form.judge,callback:function(t){e.$set(e.form,"judge",t)},expression:"form.judge"}})],1)],1),e._v(" "),r("el-col",{staticClass:"hx-projectEdit_checkbox",attrs:{span:8}},[r("el-form-item",{attrs:{label:""}},[r("el-checkbox",{attrs:{"true-label":"1","false-label":"2"},model:{value:e.form.fap_is_exist_media,callback:function(t){e.$set(e.form,"fap_is_exist_media",t)},expression:"form.fap_is_exist_media"}},[e._v("是否有多媒体设备")])],1)],1)],1)],1)],1),e._v(" "),r("el-row",{staticClass:"hx-projectEdit_button"},[r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.handleSave("infoForm")}}},[e._v("提交")]),e._v(" "),r("a",{attrs:{href:e.links.index}},[r("el-button",[e._v("返回")])],1)],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"",visible:e.dialog,width:"50%"},on:{"update:visible":function(t){e.dialog=t}}},[r("tag",{attrs:{tagChoose:e.tagChoose},on:{handleSave:e.handleDialog}})],1)],1)},staticRenderFns:[]};e.a=a},151:function(t,e,r){"use strict";var a={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"tag"},[r("el-row",{staticClass:"tag-header"},[r("el-input",{staticClass:"tag-input",attrs:{size:"small",placeholder:"请输入标签"},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),e._v(" "),r("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.handleTagList}},[e._v("搜索")]),e._v(" "),r("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.handleSave}},[e._v("选择并保存")])],1),e._v(" "),r("el-row",{staticClass:"tag-content"},[r("el-checkbox-group",{model:{value:e.tagChoose,callback:function(t){e.tagChoose=t},expression:"tagChoose"}},e._l(e.tagList,function(t,e){return r("el-checkbox",{key:e,attrs:{label:t.tag_name}})}),1)],1),e._v(" "),r("el-row",{staticClass:"tag-add"},[r("el-input",{staticClass:"tag-input",staticStyle:{width:"150px"},attrs:{size:"small",placeholder:"请输入新增标签"},model:{value:e.label,callback:function(t){e.label=t},expression:"label"}}),e._v(" "),r("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.handleAdd}},[e._v("新增")])],1)],1)},staticRenderFns:[]};e.a=a}});