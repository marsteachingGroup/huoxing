{"source":"webpackJsonp([1],{128:function(t,e,a){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var o=r(a(1)),i=r(a(152));function r(t){return t&&t.__esModule?t:{default:t}}e.default=function(){new o.default({el:\"#app\",components:{App:i.default}})}},130:function(t,e,a){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0}),e.postEnrollRecord=e.getEnrollRecordTeam=e.getExcelEx=e.getExcel=e.postRecordCheck=e.postRecordDelete=e.getEnrollRecord=e.postTagDelete=e.postPojectDelete=e.postTagAdd=e.getTagList=e.getPojectView=e.postPojectEdit=e.getPojectEdit=e.postPojectAdd=e.getPojectAdd=e.getPojectList=void 0;var o,i=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}}(a(132)),r=a(21),l=(o=r)&&o.__esModule?o:{default:o};e.getPojectList=function(t,e){var a=i.api.GET_POJECT_LIST;return l.default.get(a,t,e)},e.getPojectAdd=function(t,e){var a=i.api.GET_POJECT_ADD;return l.default.get(a,t,e)},e.postPojectAdd=function(t,e){var a=i.api.POST_POJECT_ADD;return l.default.post(a,t,e)},e.getPojectEdit=function(t,e){var a=i.api.GET_POJECT_EDIT;return l.default.get(a,t,e)},e.postPojectEdit=function(t,e){var a=i.api.POST_POJECT_EDIT;return l.default.post(a,t,e)},e.getPojectView=function(t,e){var a=i.api.GET_POJECT_VIEW;return l.default.get(a,t,e)},e.getTagList=function(t,e){var a=i.api.GET_TAG_LIST;return l.default.get(a,t,e)},e.postTagAdd=function(t,e){var a=i.api.POST_TAG_ADD;return l.default.post(a,t,e)},e.postPojectDelete=function(t,e){var a=i.api.POST_POJECT_DELETE;return l.default.post(a,t,e)},e.postTagDelete=function(t,e){var a=i.api.POST_TAG_DELETE;return l.default.post(a,t,e)},e.getEnrollRecord=function(t,e){var a=i.api.GET_ENROLL_RECORD;return l.default.get(a,t,e)},e.postRecordDelete=function(t,e){var a=i.api.POST_RECORD_DELETE;return l.default.post(a,t,e)},e.postRecordCheck=function(t,e){var a=i.api.POST_RECORD_CHECK;return l.default.post(a,t,e)},e.getExcel=function(t,e){var a=i.api.GET_EXCEL;return l.default.get(a,t,e)},e.getExcelEx=function(t,e){var a=i.api.GET_EXCEL_EX;return l.default.get(a,t,e)},e.getEnrollRecordTeam=function(t,e){var a=i.api.GET_ENROLL_TEAM;return l.default.get(a,t,e)},e.postEnrollRecord=function(t,e){var a=i.api.POST_ENROLL_TEAM;return l.default.post(a,t,e)}},131:function(t,e){t.exports=function(t,e,a,o,i,r){var l,s=t=t||{},n=typeof t.default;\"object\"!==n&&\"function\"!==n||(s=(l=t).default);var c,_=\"function\"==typeof s?s.options:s;if(e&&(_.render=e.render,_.staticRenderFns=e.staticRenderFns,_._compiled=!0),a&&(_.functional=!0),i&&(_._scopeId=i),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||\"undefined\"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},_._ssrRegister=c):o&&(c=o),c){var d=_.functional,p=d?_.render:_.beforeCreate;d?(_._injectStyles=c,_.render=function(t,e){return c.call(e),p(t,e)}):_.beforeCreate=p?[].concat(p,c):[c]}return{esModule:l,exports:s,options:_}}},132:function(t,e,a){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var o=\"\",i={GET_POJECT_LIST:(o=\"http://api.marsco.online/admin\")+\"/project\",GET_POJECT_ADD:o+\"/project/add\",POST_POJECT_ADD:o+\"/project/addPost\",GET_POJECT_EDIT:o+\"/project/edit\",POST_POJECT_EDIT:o+\"/project/editPost\",GET_POJECT_VIEW:o+\"/project/show\",POST_POJECT_DELETE:o+\"/project/delete\",GET_TAG_LIST:o+\"/tag\",POST_TAG_ADD:o+\"/tag/addPost\",POST_TAG_DELETE:o+\"/tag/delete\",GET_ENROLL_RECORD:o+\"/project/enroll_record\",POST_RECORD_DELETE:o+\"/record/delete\",POST_RECORD_CHECK:o+\"/record/check\",GET_EXCEL:\"/admin/activity_enroll_record/export_excel\",GET_EXCEL_EX:\"/admin/activity_enroll_record/export_excel_ex\",GET_ENROLL_TEAM:o+\"/project/get_enroll_team\",POST_ENROLL_TEAM:o+\"/project/modify_enroll_team\"};e.api=i},137:function(t,e,a){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var o=a(130),i=a(46);e.default={created:function(){var t=(0,i.formatUrlParams)(location.search);this.id=t.id?t.id:\"\",this.loading=!0,\"\"===this.id?this.$message.error(\"找不到项目ID\"):this.getData()},methods:{handleTeam:function(){var a=this;this.loading=!0,(0,o.getEnrollRecordTeam)({team_name:this.info.team_name,team_no:this.info.team_no}).then(function(t){for(var e in a.loading=!1,a.team=t.data.list,a.leader=\"\",a.team.team)\"2\"===a.team.team[e].role_type&&(a.leader=a.team.team[e].record_id);a.dialogInfo=!1,a.dialogTeam=!0}).catch(function(){a.loading=!1})},handleSave:function(){var e=this;\"\"===this.team.team_name?this.$message({message:\"团队名称不能为空\",type:\"warning\"}):(this.loading=!0,(0,o.postEnrollRecord)({team_name:this.team.team_name,team_no:this.team.team_no,record_id:this.leader}).then(function(t){e.dialogTeam=!1,e.getData()}).catch(function(){e.loading=!1}))},handleEdit:function(t){},handleExport:function(){window.open(\"/admin/activity_enroll_record/export_excel?activity_id=\"+this.id)},handleStatus:function(t){var e=this;this.loading=!0,(0,o.postRecordCheck)({record_id:t.record_id}).then(function(t){e.getData()}).catch(function(){e.loading=!1})},handleDelete:function(t){var e=this;this.$confirm(\"确定删除该报名信息?\",\"提示\",{confirmButtonText:\"确定\",cancelButtonText:\"取消\",type:\"warning\"}).then(function(){e.loading=!0,(0,o.postRecordDelete)({record_id:t.record_id}).then(function(t){e.getData()}).catch(function(){e.loading=!1})})},handleQrcode:function(){window.open(this.qrCode)},handleKey:function(t){for(var e in this.school)if(this.school[e]===t)return e},handleRow:function(t){this.dialogInfo=!0,this.info=t},getData:function(){var r=this;(0,o.getPojectView)({id:this.id}).then(function(t){r.loading=!1;var e=t.data.info,a=t.data.teams.teams;for(var o in 0===t.data.teams.length&&(r.list=\"\"),a)for(var i in r.list[o]=[],r.list[o].push(a[o]),a[o].team_member)r.list[o].push(a[o].team_member[i]);r.contestNo=e.contest_no,r.school=t.data.school,r.levelList=t.data.level,r.school_zone=t.data.school_zone,r.form.name=e.name,r.form.level=e.level,r.form.description=e.description,r.form.peoples=e.peoples,r.form.school_info=e.school_info,r.form.tag=e.tag_name,r.form.brand=e.brand,r.form.start_time=e.start_time,r.form.end_time=e.end_time,r.form.sign_up_required=e.sign_up_required,r.form.score_rule=e.score_rule,r.form.prize_setting=e.prize_setting,r.form.pr_start_time=e.registration.pr_start_time,r.form.pr_end_time=e.registration.pr_end_time,r.form.stall_start_time=e.registration.stall_start_time,r.form.stall_end_time=e.registration.stall_end_time,r.form.check_building_start_time=e.registration.check_building_start_time,r.form.check_building_end_time=e.registration.check_building_end_time,r.form.society_participants=e.registration.society_participants,r.form.stall_site=e.registration.stall_site,r.form.tp_start_time=e.training.tp_start_time,r.form.tp_end_time=e.training.tp_end_time,r.form.training_site=e.training.training_site,r.form.tr_participants=e.training.tr_participants,r.form.lector=e.training.lector,r.form.tp_is_exist_media=e.training.tp_is_exist_media,r.form.fap_start_time=e.award.fap_start_time,r.form.fap_end_time=e.award.fap_end_time,r.form.finals_site=e.award.finals_site,r.form.teams_num=e.award.teams_num,r.form.judge=e.award.judge,r.form.fap_is_exist_media=e.award.fap_is_exist_media,r.qrCode=e.qr_url,r.links=t.page_resource}).catch(function(){r.loading=!1})}},data:function(){return{id:\"\",loading:!1,dialogTeam:!1,dialogInfo:!1,active:\"info\",rules:{},levelList:{},team:{},qrCode:\"\",list:{},leader:\"\",form:{name:\"\",level:\"\",description:\"\",peoples:\"\",school_info:[],brand:\"\",tag:\"\",start_time:\"\",end_time:\"\",sign_up_required:\"\",score_rule:\"\",prize_setting:\"\",pr_start_time:\"\",pr_end_time:\"\",stall_start_time:\"\",stall_end_time:\"\",check_building_start_time:\"\",check_building_end_time:\"\",society_participants:\"\",stall_site:\"\",tp_start_time:\"\",tp_end_time:\"\",training_site:\"\",tr_participants:\"\",lector:\"\",tp_is_exist_media:\"2\",fap_start_time:\"\",fap_end_time:\"\",finals_site:\"\",teams_num:\"\",judge:\"\",fap_is_exist_media:\"2\"},school:[],school_zone:[],tag:[],contestNo:\"\",links:{},info:{}}}}},140:function(t,e,a){(t.exports=a(123)(!1)).push([t.i,'.hx-projectEdit_header{position:relative;margin-bottom:20px}.hx-projectEdit_header-text{color:#333;font-size:14px;position:relative;margin-left:90px;z-index:2;background-color:#fff;display:inline-block;padding:0 15px}.hx-projectEdit_header-line{height:1px;content:\"\";width:100%;left:0;top:12px;display:block;background-color:#e6e6e6;z-index:1;position:absolute}.hx-projectEdit_title{background-color:#d7d7d7;padding:15px 0 15px 40px;font-size:14px;margin-bottom:20px}.hx-projectEdit_info{margin-bottom:30px}.hx-projectEdit_tab{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-top:0;padding-bottom:0;cursor:pointer}.hx-projectEdit_tab-row{margin-right:40px;padding:15px 10px}.hx-projectEdit_tab-active{color:#496397;border-bottom:1px solid #496397}.hx-projectEdit_table{margin-bottom:20px}.hx-projectEdit_text{font-size:12px;padding:4px 0 4px 40px;margin-bottom:20px;background-color:#f2f2f2}.hx-projectEdit_content input{width:220px}.hx-projectEdit_checkbox .el-form-item__content{margin-left:40px!important}.hx-projectEdit_button{margin-top:60px;text-align:center}.hx-projectEdit_button button{width:120px}.hx-projectEdit_qrcode{text-align:center}.hx-projectEdit_img img{width:140px;height:140px}.hx-projectEdit_img-button a{color:#fff}.hx-projectEdit_radio{display:block;margin-bottom:20px}.hx-projectEdit .el-input.is-disabled .el-input__inner,.hx-projectEdit .el-textarea.is-disabled .el-textarea__inner{border-color:#e4e7ed;color:#333}.hx-projectEdit .el-form-item.is-success .el-input__inner,.hx-projectEdit .el-form-item.is-success .el-input__inner:focus,.hx-projectEdit .el-form-item.is-success .el-textarea__inner,.hx-projectEdit .el-form-item.is-success .el-textarea__inner:focus{border:1px solid #dcdfe6}',\"\"])},145:function(t,e,a){var o=a(140);\"string\"==typeof o&&(o=[[t.i,o,\"\"]]),o.locals&&(t.exports=o.locals);a(124)(\"495300a6\",o,!0)},152:function(t,e,a){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var o=a(137),i=a.n(o);for(var r in o)[\"default\",\"default\"].indexOf(r)<0&&function(t){a.d(e,t,function(){return o[t]})}(r);var l=a(155);var s=function(t){a(145)},n=a(131)(i.a,l.a,!1,s,null,null);e.default=n.exports},155:function(t,e,a){\"use strict\";var o={render:function(){var a=this,t=a.$createElement,o=a._self._c||t;return o(\"div\",{directives:[{name:\"loading\",rawName:\"v-loading\",value:a.loading,expression:\"loading\"}],staticClass:\"hx-pages hx-projectEdit\"},[o(\"el-row\",{staticClass:\"hx-projectEdit_header\"},[o(\"div\",{staticClass:\"hx-projectEdit_header-text\"},[\"\"===a.id?o(\"span\",[a._v(\"添加比赛\")]):o(\"span\",{staticStyle:{\"font-weight\":\"bold\"}},[a._v(\"比赛编码：\"+a._s(a.contestNo))])]),a._v(\" \"),o(\"div\",{staticClass:\"hx-projectEdit_header-line\"})]),a._v(\" \"),o(\"el-form\",{ref:\"infoForm\",attrs:{rules:a.rules,model:a.form,\"label-width\":\"110px\"}},[o(\"el-row\",{staticClass:\"hx-projectEdit_rows\"},[o(\"el-row\",{staticClass:\"hx-projectEdit_title hx-projectEdit_tab\"},[o(\"p\",{staticClass:\"hx-projectEdit_tab-row\",class:{\"hx-projectEdit_tab-active\":\"info\"===a.active},on:{click:function(t){a.active=\"info\"}}},[a._v(\"基本信息\")]),a._v(\" \"),o(\"p\",{staticClass:\"hx-projectEdit_tab-row\",class:{\"hx-projectEdit_tab-active\":\"list\"===a.active},on:{click:function(t){a.active=\"list\"}}},[a._v(\"报名信息\")])]),a._v(\" \"),\"info\"===a.active?o(\"div\",[o(\"el-form-item\",{attrs:{label:\"项目名称\",prop:\"name\"}},[o(\"el-col\",{attrs:{span:12}},[o(\"el-input\",{attrs:{disabled:!0},model:{value:a.form.name,callback:function(t){a.$set(a.form,\"name\",t)},expression:\"form.name\"}})],1)],1),a._v(\" \"),o(\"el-form-item\",{attrs:{label:\"项目描述\"}},[o(\"el-col\",{attrs:{span:12}},[o(\"el-input\",{attrs:{type:\"textarea\",rows:10,disabled:!0},model:{value:a.form.description,callback:function(t){a.$set(a.form,\"description\",t)},expression:\"form.description\"}})],1),a._v(\" \"),o(\"el-col\",{staticClass:\"hx-projectEdit_qrcode\",attrs:{span:12}},[o(\"div\",{staticClass:\"hx-projectEdit_img\"},[o(\"img\",{attrs:{src:a.qrCode,alt:\"\"}})]),a._v(\" \"),o(\"div\",{staticClass:\"hx-projectEdit_img-button\"},[o(\"el-button\",{attrs:{type:\"danger\"}},[o(\"a\",{attrs:{href:a.qrCode,download:\"二维码\"}},[a._v(\"保存二维码\")])])],1)])],1),a._v(\" \"),o(\"el-form-item\",{attrs:{label:\"报名人数上限\",prop:\"peoples\"}},[o(\"el-col\",{attrs:{span:12}},[o(\"el-input\",{staticStyle:{width:\"100px\"},attrs:{type:\"number\",disabled:!0},model:{value:a.form.peoples,callback:function(t){a.$set(a.form,\"peoples\",t)},expression:\"form.peoples\"}})],1)],1),a._v(\" \"),o(\"el-form-item\",{attrs:{label:\"报名要求\",prop:\"sign_up_required\"}},[o(\"el-col\",{attrs:{span:12}},[o(\"el-input\",{attrs:{type:\"textarea\",rows:6,disabled:!0},model:{value:a.form.sign_up_required,callback:function(t){a.$set(a.form,\"sign_up_required\",t)},expression:\"form.sign_up_required\"}})],1)],1),a._v(\" \"),o(\"el-form-item\",{attrs:{label:\"评比规则\",prop:\"score_rule\"}},[o(\"el-col\",{attrs:{span:12}},[o(\"el-input\",{attrs:{type:\"textarea\",rows:8,disabled:!0},model:{value:a.form.score_rule,callback:function(t){a.$set(a.form,\"score_rule\",t)},expression:\"form.score_rule\"}})],1)],1),a._v(\" \"),o(\"el-form-item\",{attrs:{label:\"奖项设置\",prop:\"prize_setting\"}},[o(\"el-col\",{attrs:{span:12}},[o(\"el-input\",{attrs:{type:\"textarea\",rows:8,disabled:!0},model:{value:a.form.prize_setting,callback:function(t){a.$set(a.form,\"prize_setting\",t)},expression:\"form.prize_setting\"}})],1)],1),a._v(\" \"),o(\"el-form-item\",{attrs:{label:\"比赛级别\",prop:\"level\"}},[o(\"el-select\",{attrs:{disabled:!0,placeholder:\"请选择比赛级别\"},model:{value:a.form.level,callback:function(t){a.$set(a.form,\"level\",t)},expression:\"form.level\"}},a._l(a.levelList,function(t,e){return o(\"el-option\",{key:e,attrs:{label:t,value:e}})}),1)],1)],1):a._e(),a._v(\" \"),\"list\"===a.active?o(\"div\",[\"\"===a.list?o(\"div\",{staticStyle:{\"text-align\":\"center\"}},[a._v(\"报名信息为空...\")]):o(\"div\",[o(\"div\",{staticStyle:{\"text-align\":\"right\"}},[o(\"el-button\",{staticStyle:{\"margin-bottom\":\"30px\"},attrs:{type:\"primary\",size:\"small\"},on:{click:function(t){return t.stopPropagation(),a.handleExport(t)}}},[a._v(\"导出Excel\")])],1),a._v(\" \"),a._l(a.list,function(t,e){return o(\"el-table\",{staticClass:\"hx-projectEdit_table\",staticStyle:{width:\"100%\"},attrs:{border:\"\",data:t},on:{\"row-click\":a.handleRow}},[o(\"el-table-column\",{attrs:{prop:\"team_name\",label:\"团队名称\",width:\"180\"}}),a._v(\" \"),o(\"el-table-column\",{attrs:{prop:\"team_no\",label:\"团队编号\",width:\"150\"}}),a._v(\" \"),o(\"el-table-column\",{attrs:{label:\"角色\",width:\"100\"},scopedSlots:a._u([{key:\"default\",fn:function(t){return[\"2\"===t.row.role_type?o(\"span\",[a._v(\"队长\")]):o(\"span\",[a._v(\"队员\")])]}}])}),a._v(\" \"),o(\"el-table-column\",{attrs:{prop:\"name\",label:\"姓名\",width:\"120\"}}),a._v(\" \"),o(\"el-table-column\",{attrs:{width:\"100\",label:\"性别\"},scopedSlots:a._u([{key:\"default\",fn:function(t){return[\"1\"===t.row.sex?o(\"span\",[a._v(\"男\")]):\"2\"===t.row.sex?o(\"span\",[a._v(\"女\")]):o(\"span\",[a._v(\"未填写\")])]}}])}),a._v(\" \"),o(\"el-table-column\",{attrs:{prop:\"school_name\",label:\"学校\"}}),a._v(\" \"),o(\"el-table-column\",{attrs:{prop:\"phone\",label:\"电话\",width:\"150\"}}),a._v(\" \"),o(\"el-table-column\",{attrs:{label:\"状态\",width:\"80\"},scopedSlots:a._u([{key:\"default\",fn:function(t){return[\"1\"===t.row.status?o(\"span\",[a._v(\"未审核\")]):\"2\"===t.row.status?o(\"span\",[a._v(\"已审核\")]):o(\"span\",[a._v(\"未填写\")])]}}])}),a._v(\" \"),o(\"el-table-column\",{attrs:{label:\"操作\",width:\"220\"},scopedSlots:a._u([{key:\"default\",fn:function(e){return[\"1\"===e.row.status?o(\"el-button\",{attrs:{type:\"primary\",size:\"small\"},on:{click:function(t){t.stopPropagation(),a.handleStatus(e.row)}}},[a._v(\"审核\")]):a._e(),a._v(\" \"),\"1\"===e.row.role_type?o(\"el-button\",{attrs:{type:\"danger\",size:\"small\"},on:{click:function(t){t.stopPropagation(),a.handleDelete(e.row)}}},[a._v(\"删除\")]):a._e()]}}])})],1)})],2)]):a._e()],1),a._v(\" \"),\"info\"===a.active?o(\"el-row\",{staticClass:\"hx-projectEdit_rows\"},[o(\"el-row\",{staticClass:\"hx-projectEdit_title\"},[a._v(\"关联方信息\")]),a._v(\" \"),a._l(a.form.school_info,function(e,t){return o(\"el-row\",[o(\"el-col\",{attrs:{span:8}},[o(\"el-form-item\",{attrs:{label:\"关联学校\"}},[o(\"el-col\",[o(\"el-select\",{attrs:{disabled:!0,placeholder:\"选择学校\"},model:{value:e.name,callback:function(t){a.$set(e,\"name\",t)},expression:\"value.name\"}},a._l(a.school,function(t,e){return o(\"el-option\",{key:e,attrs:{label:t,value:t}})}),1)],1)],1)],1),a._v(\" \"),o(\"el-col\",{attrs:{span:8}},[o(\"el-form-item\",{attrs:{label:\"关联校区\"}},[o(\"el-col\",[o(\"el-select\",{attrs:{placeholder:\"关联校区\",disabled:!0},model:{value:e.zone,callback:function(t){a.$set(e,\"zone\",t)},expression:\"value.zone\"}},a._l(a.school_zone[a.handleKey(e.name)],function(t,e){return o(\"el-option\",{key:e,attrs:{label:t,value:t}})}),1)],1)],1)],1)],1)}),a._v(\" \"),o(\"el-form-item\",{attrs:{label:\"关联品牌\",prop:\"brand\"}},[o(\"el-col\",{attrs:{span:12}},[o(\"el-input\",{staticStyle:{width:\"195px\"},attrs:{disabled:!0},model:{value:a.form.brand,callback:function(t){a.$set(a.form,\"brand\",t)},expression:\"form.brand\"}})],1)],1)],2):a._e(),a._v(\" \"),\"info\"===a.active?o(\"el-row\",{staticClass:\"hx-projectEdit_rows\"},[o(\"el-row\",{staticClass:\"hx-projectEdit_title\"},[a._v(\"标签信息\")]),a._v(\" \"),o(\"el-row\",[o(\"el-col\",{attrs:{span:12}},[o(\"el-form-item\",{staticClass:\"hx-projectEdit_label\",attrs:{label:\"标签\",prop:\"tag\"}},[o(\"el-input\",{attrs:{disabled:!0},model:{value:a.form.tag,callback:function(t){a.$set(a.form,\"tag\",t)},expression:\"form.tag\"}})],1)],1)],1)],1):a._e(),a._v(\" \"),\"info\"===a.active?o(\"el-row\",{staticClass:\"hx-projectEdit_rows\"},[o(\"el-row\",{staticClass:\"hx-projectEdit_title\",staticStyle:{\"margin-bottom\":\"0\"}},[a._v(\"流程信息\")]),a._v(\" \"),o(\"el-row\",{staticClass:\"hx-projectEdit_content\"},[o(\"el-row\",{staticClass:\"hx-projectEdit_text\"},[a._v(\"宣传报名期\")]),a._v(\" \"),o(\"el-row\",[o(\"el-col\",{attrs:{span:8}},[o(\"el-form-item\",{attrs:{label:\"开始时间\",prop:\"pr_start_time\"}},[o(\"el-date-picker\",{attrs:{type:\"datetime\",disabled:!0,placeholder:\"开始时间\"},model:{value:a.form.pr_start_time,callback:function(t){a.$set(a.form,\"pr_start_time\",t)},expression:\"form.pr_start_time\"}})],1)],1),a._v(\" \"),o(\"el-col\",{attrs:{span:8}},[o(\"el-form-item\",{attrs:{label:\"结束时间\",prop:\"pr_end_time\",required:\"\"}},[o(\"el-date-picker\",{attrs:{type:\"datetime\",disabled:!0,placeholder:\"结束时间\"},model:{value:a.form.pr_end_time,callback:function(t){a.$set(a.form,\"pr_end_time\",t)},expression:\"form.pr_end_time\"}})],1)],1),a._v(\" \"),o(\"el-col\",{attrs:{span:8}},[o(\"el-form-item\",{attrs:{label:\"社团参与数\",prop:\"society_participants\",required:\"\"}},[o(\"el-input\",{attrs:{disabled:!0,type:\"number\"},model:{value:a.form.society_participants,callback:function(t){a.$set(a.form,\"society_participants\",t)},expression:\"form.society_participants\"}})],1)],1)],1),a._v(\" \"),o(\"el-row\",[o(\"el-col\",{attrs:{span:8}},[o(\"el-form-item\",{attrs:{label:\"摆摊开始时间\",prop:\"stall_start_time\"}},[o(\"el-date-picker\",{attrs:{type:\"datetime\",disabled:!0,placeholder:\"开始时间\"},model:{value:a.form.stall_start_time,callback:function(t){a.$set(a.form,\"stall_start_time\",t)},expression:\"form.stall_start_time\"}})],1)],1),a._v(\" \"),o(\"el-col\",{attrs:{span:8}},[o(\"el-form-item\",{attrs:{label:\"摆摊结束时间\",prop:\"stall_end_time\",required:\"\"}},[o(\"el-date-picker\",{attrs:{type:\"datetime\",disabled:!0,placeholder:\"结束时间\"},model:{value:a.form.stall_end_time,callback:function(t){a.$set(a.form,\"stall_end_time\",t)},expression:\"form.stall_end_time\"}})],1)],1),a._v(\" \"),o(\"el-col\",{attrs:{span:8}},[o(\"el-form-item\",{attrs:{label:\"摆摊场地\",prop:\"stall_site\"}},[o(\"el-input\",{attrs:{disabled:!0},model:{value:a.form.stall_site,callback:function(t){a.$set(a.form,\"stall_site\",t)},expression:\"form.stall_site\"}})],1)],1)],1),a._v(\" \"),o(\"el-row\",[o(\"el-col\",{attrs:{span:8}},[o(\"el-form-item\",{attrs:{label:\"扫楼开始时间\",prop:\"check_building_start_time\"}},[o(\"el-date-picker\",{attrs:{type:\"datetime\",disabled:!0,placeholder:\"开始时间\"},model:{value:a.form.check_building_start_time,callback:function(t){a.$set(a.form,\"check_building_start_time\",t)},expression:\"form.check_building_start_time\"}})],1)],1),a._v(\" \"),o(\"el-col\",{attrs:{span:8}},[o(\"el-form-item\",{attrs:{label:\"扫楼结束时间\",prop:\"check_building_end_time\",required:\"\"}},[o(\"el-date-picker\",{attrs:{type:\"datetime\",disabled:!0,placeholder:\"结束时间\"},model:{value:a.form.check_building_end_time,callback:function(t){a.$set(a.form,\"check_building_end_time\",t)},expression:\"form.check_building_end_time\"}})],1)],1)],1)],1),a._v(\" \"),o(\"el-row\",{staticClass:\"hx-projectEdit_content\"},[o(\"el-row\",{staticClass:\"hx-projectEdit_text\"},[a._v(\"培训动员期\")]),a._v(\" \"),o(\"el-row\",[o(\"el-col\",{attrs:{span:8}},[o(\"el-form-item\",{attrs:{label:\"开始时间\",prop:\"tp_start_time\"}},[o(\"el-date-picker\",{attrs:{type:\"datetime\",disabled:!0,placeholder:\"开始时间\"},model:{value:a.form.tp_start_time,callback:function(t){a.$set(a.form,\"tp_start_time\",t)},expression:\"form.tp_start_time\"}})],1)],1),a._v(\" \"),o(\"el-col\",{attrs:{span:8}},[o(\"el-form-item\",{attrs:{label:\"结束时间\",prop:\"tp_end_time\",required:\"\"}},[o(\"el-date-picker\",{attrs:{type:\"datetime\",disabled:!0,placeholder:\"结束时间\"},model:{value:a.form.tp_end_time,callback:function(t){a.$set(a.form,\"tp_end_time\",t)},expression:\"form.tp_end_time\"}})],1)],1),a._v(\" \"),o(\"el-col\",{attrs:{span:8}},[o(\"el-form-item\",{attrs:{label:\"培训场地\",prop:\"training_site\"}},[o(\"el-input\",{attrs:{disabled:!0},model:{value:a.form.training_site,callback:function(t){a.$set(a.form,\"training_site\",t)},expression:\"form.training_site\"}})],1)],1)],1),a._v(\" \"),o(\"el-row\",[o(\"el-col\",{attrs:{span:8}},[o(\"el-form-item\",{attrs:{label:\"参与培训人数\",prop:\"tr_participants\",required:\"\"}},[o(\"el-input\",{attrs:{type:\"number\",disabled:!0},model:{value:a.form.tr_participants,callback:function(t){a.$set(a.form,\"tr_participants\",t)},expression:\"form.tr_participants\"}})],1)],1),a._v(\" \"),o(\"el-col\",{attrs:{span:8}},[o(\"el-form-item\",{attrs:{label:\"培训讲师\",prop:\"lector\"}},[o(\"el-input\",{attrs:{disabled:!0},model:{value:a.form.lector,callback:function(t){a.$set(a.form,\"lector\",t)},expression:\"form.lector\"}})],1)],1),a._v(\" \"),o(\"el-col\",{staticClass:\"hx-projectEdit_checkbox\",attrs:{span:8}},[o(\"el-form-item\",{attrs:{label:\"\"}},[o(\"el-checkbox\",{attrs:{disabled:!0,\"true-label\":\"1\",\"false-label\":\"2\"},model:{value:a.form.tp_is_exist_media,callback:function(t){a.$set(a.form,\"tp_is_exist_media\",t)},expression:\"form.tp_is_exist_media\"}},[a._v(\"是否有多媒体设备\")])],1)],1)],1)],1),a._v(\" \"),o(\"el-row\",{staticClass:\"hx-projectEdit_content\"},[o(\"el-row\",{staticClass:\"hx-projectEdit_text\"},[a._v(\"营销实战期\")]),a._v(\" \"),o(\"el-row\",[o(\"el-col\",{attrs:{span:8}},[o(\"el-form-item\",{attrs:{label:\"开始时间\",prop:\"start_time\"}},[o(\"el-date-picker\",{attrs:{type:\"datetime\",disabled:!0,placeholder:\"开始时间\"},model:{value:a.form.start_time,callback:function(t){a.$set(a.form,\"start_time\",t)},expression:\"form.start_time\"}})],1)],1),a._v(\" \"),o(\"el-col\",{attrs:{span:8}},[o(\"el-form-item\",{attrs:{label:\"结束时间\",prop:\"end_time\"}},[o(\"el-date-picker\",{attrs:{type:\"datetime\",disabled:!0,placeholder:\"结束时间\"},model:{value:a.form.end_time,callback:function(t){a.$set(a.form,\"end_time\",t)},expression:\"form.end_time\"}})],1)],1)],1)],1),a._v(\" \"),o(\"el-row\",{staticClass:\"hx-projectEdit_content\"},[o(\"el-row\",{staticClass:\"hx-projectEdit_text\"},[a._v(\"决赛颁奖期\")]),a._v(\" \"),o(\"el-row\",[o(\"el-col\",{attrs:{span:8}},[o(\"el-form-item\",{attrs:{label:\"开始时间\",prop:\"fap_start_time\"}},[o(\"el-date-picker\",{attrs:{type:\"datetime\",disabled:!0,placeholder:\"开始时间\"},model:{value:a.form.fap_start_time,callback:function(t){a.$set(a.form,\"fap_start_time\",t)},expression:\"form.fap_start_time\"}})],1)],1),a._v(\" \"),o(\"el-col\",{attrs:{span:8}},[o(\"el-form-item\",{attrs:{label:\"结束时间\",prop:\"fap_end_time\"}},[o(\"el-date-picker\",{attrs:{type:\"datetime\",disabled:!0,placeholder:\"结束时间\"},model:{value:a.form.fap_end_time,callback:function(t){a.$set(a.form,\"fap_end_time\",t)},expression:\"form.fap_end_time\"}})],1)],1),a._v(\" \"),o(\"el-col\",{attrs:{span:8}},[o(\"el-form-item\",{attrs:{label:\"决赛场地\",prop:\"finals_site\"}},[o(\"el-input\",{attrs:{disabled:!0},model:{value:a.form.finals_site,callback:function(t){a.$set(a.form,\"finals_site\",t)},expression:\"form.finals_site\"}})],1)],1)],1),a._v(\" \"),o(\"el-row\",[o(\"el-col\",{attrs:{span:8}},[o(\"el-form-item\",{attrs:{label:\"决赛团队数\",prop:\"teams_num\",required:\"\"}},[o(\"el-input\",{attrs:{type:\"number\",disabled:!0},model:{value:a.form.teams_num,callback:function(t){a.$set(a.form,\"teams_num\",t)},expression:\"form.teams_num\"}})],1)],1),a._v(\" \"),o(\"el-col\",{attrs:{span:8}},[o(\"el-form-item\",{attrs:{label:\"决赛评委\",prop:\"judge\"}},[o(\"el-input\",{attrs:{disabled:!0},model:{value:a.form.judge,callback:function(t){a.$set(a.form,\"judge\",t)},expression:\"form.judge\"}})],1)],1),a._v(\" \"),o(\"el-col\",{staticClass:\"hx-projectEdit_checkbox\",attrs:{span:8}},[o(\"el-form-item\",{attrs:{label:\"\"}},[o(\"el-checkbox\",{attrs:{disabled:!0,\"true-label\":\"1\",\"false-label\":\"2\"},model:{value:a.form.fap_is_exist_media,callback:function(t){a.$set(a.form,\"fap_is_exist_media\",t)},expression:\"form.fap_is_exist_media\"}},[a._v(\"是否有多媒体设备\")])],1)],1)],1)],1)],1):a._e(),a._v(\" \"),o(\"el-row\",{staticClass:\"hx-projectEdit_button\"},[o(\"a\",{attrs:{href:a.links.index}},[o(\"el-button\",[a._v(\"返回\")])],1)])],1),a._v(\" \"),o(\"el-dialog\",{attrs:{title:\"学生信息\",visible:a.dialogInfo,width:\"50%\"},on:{\"update:visible\":function(t){a.dialogInfo=t}}},[o(\"el-col\",{staticClass:\"hx-projectEdit_info\",attrs:{span:12}},[a._v(\"团队编号：\"+a._s(a.info.team_no))]),a._v(\" \"),o(\"el-col\",{staticClass:\"hx-projectEdit_info\",attrs:{span:12}},[a._v(\"团队名称：\"+a._s(a.info.team_name))]),a._v(\" \"),o(\"el-col\",{staticClass:\"hx-projectEdit_info\",attrs:{span:12}},[a._v(\"姓名：\"+a._s(a.info.name))]),a._v(\" \"),o(\"el-col\",{staticClass:\"hx-projectEdit_info\",attrs:{span:12}},[a._v(\"性别：\\n      \"),\"1\"===a.info.sex?o(\"span\",[a._v(\"男\")]):\"2\"===a.info.sex?o(\"span\",[a._v(\"女\")]):o(\"span\",[a._v(\"未填写\")])]),a._v(\" \"),o(\"el-col\",{staticClass:\"hx-projectEdit_info\",attrs:{span:12}},[a._v(\"手机号码：\"+a._s(a.info.phone))]),a._v(\" \"),o(\"el-col\",{staticClass:\"hx-projectEdit_info\",attrs:{span:12}},[a._v(\"邮箱：\"+a._s(a.info.email))]),a._v(\" \"),o(\"el-col\",{staticClass:\"hx-projectEdit_info\",attrs:{span:12}},[a._v(\"身份证：\"+a._s(a.info.identify_number))]),a._v(\" \"),o(\"el-col\",{staticClass:\"hx-projectEdit_info\",attrs:{span:12}},[a._v(\"血型：\"+a._s(a.info.blood_type))]),a._v(\" \"),o(\"el-col\",{staticClass:\"hx-projectEdit_info\",attrs:{span:12}},[a._v(\"学校：\"+a._s(a.info.school_name))]),a._v(\" \"),o(\"el-col\",{staticClass:\"hx-projectEdit_info\",attrs:{span:12}},[a._v(\"校区：\"+a._s(a.info.school_zone))]),a._v(\" \"),o(\"el-col\",{staticClass:\"hx-projectEdit_info\",attrs:{span:12}},[a._v(\"学院：\"+a._s(a.info.college))]),a._v(\" \"),o(\"el-col\",{staticClass:\"hx-projectEdit_info\",attrs:{span:12}},[a._v(\"专业：\"+a._s(a.info.major))]),a._v(\" \"),o(\"el-col\",{staticClass:\"hx-projectEdit_info\",attrs:{span:12}},[a._v(\"毕业学历：\\n      \"),\"1\"===a.info.degree_type?o(\"span\",[a._v(\"专科\")]):a._e(),a._v(\" \"),\"2\"===a.info.degree_type?o(\"span\",[a._v(\"全日制本科\")]):a._e(),a._v(\" \"),\"3\"===a.info.degree_type?o(\"span\",[a._v(\"硕士\")]):a._e(),a._v(\" \"),\"4\"===a.info.degree_type?o(\"span\",[a._v(\"博士\")]):a._e()]),a._v(\" \"),o(\"el-col\",{staticClass:\"hx-projectEdit_info\",attrs:{span:12}},[a._v(\"入学时间：\"+a._s(a.info.entrance_date))]),a._v(\" \"),o(\"el-col\",{staticClass:\"hx-projectEdit_info\",attrs:{span:12}},[a._v(\"籍贯：\"+a._s(a.info.native_place))]),a._v(\" \"),o(\"el-col\",{staticClass:\"hx-projectEdit_info\",attrs:{span:12}},[a._v(\"报名时间：\"+a._s(a.info.createtime))]),a._v(\" \"),o(\"el-col\",{staticClass:\"hx-projectEdit_info\",attrs:{span:12}},[a._v(\"状态：\\n      \"),\"1\"===a.info.status?o(\"span\",[a._v(\"未审核\")]):a._e(),a._v(\" \"),\"2\"===a.info.status?o(\"span\",[a._v(\"已审核\")]):a._e()]),a._v(\" \"),o(\"span\",{staticClass:\"dialog-footer\",attrs:{slot:\"footer\"},slot:\"footer\"},[o(\"el-button\",{attrs:{type:\"primary\"},on:{click:a.handleTeam}},[a._v(\"团队变更\")]),a._v(\" \"),o(\"el-button\",{attrs:{type:\"primary\"},on:{click:function(t){a.dialogInfo=!1}}},[a._v(\"返 回\")])],1)],1),a._v(\" \"),o(\"el-dialog\",{attrs:{title:\"团队变更\",visible:a.dialogTeam,width:\"50%\"},on:{\"update:visible\":function(t){a.dialogTeam=t}}},[o(\"el-col\",{staticClass:\"hx-projectEdit_info\",attrs:{span:24}},[a._v(\"团队编号：\"+a._s(a.team.team_no))]),a._v(\" \"),o(\"el-col\",{staticClass:\"hx-projectEdit_info\",attrs:{span:24}},[a._v(\"团队名称：\"),o(\"el-input\",{staticStyle:{width:\"300px\"},attrs:{maxlength:\"20\"},model:{value:a.team.team_name,callback:function(t){a.$set(a.team,\"team_name\",t)},expression:\"team.team_name\"}})],1),a._v(\" \"),o(\"el-col\",{staticClass:\"hx-projectEdit_info\",attrs:{span:24}},[o(\"span\",{staticStyle:{\"vertical-align\":\"top\"}},[a._v(\"队长变更：\")]),a._v(\" \"),o(\"el-radio-group\",{model:{value:a.leader,callback:function(t){a.leader=t},expression:\"leader\"}},a._l(a.team.team,function(t,e){return o(\"el-radio\",{staticClass:\"hx-projectEdit_radio\",attrs:{label:t.record_id}},[a._v(a._s(t.name))])}),1)],1),a._v(\" \"),o(\"span\",{staticClass:\"dialog-footer\",attrs:{slot:\"footer\"},slot:\"footer\"},[o(\"el-button\",{attrs:{type:\"primary\"},on:{click:function(t){a.dialogTeam=!1}}},[a._v(\"返 回\")]),a._v(\" \"),o(\"el-button\",{attrs:{type:\"primary\"},on:{click:a.handleSave}},[a._v(\"保 存\")])],1)],1)],1)},staticRenderFns:[]};e.a=o}});"}