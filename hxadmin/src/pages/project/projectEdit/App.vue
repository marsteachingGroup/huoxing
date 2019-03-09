<template>
  <div class="hx-pages hx-projectEdit" v-loading="loading">
    <el-row class="hx-projectEdit_header">
      <div class="hx-projectEdit_header-text">
        <span v-if="id === ''">添加比赛</span>
        <span v-else style="font-weight: bold;">比赛编码：{{contestNo}}</span>
      </div>
      <div class="hx-projectEdit_header-line"></div>
    </el-row>

    <el-form ref="infoForm" :rules="rules" :model="form" label-width="110px">

      <el-row class="hx-projectEdit_rows">
         <el-row class="hx-projectEdit_title">基本信息</el-row>
          <el-form-item label="项目名称" prop="name">
            <el-col :span="12">
              <el-input v-model="form.name"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="项目描述">
            <el-col :span="12">
              <el-input type="textarea" :rows="10" v-model="form.description"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="报名人数上限" prop="peoples" class="is-required">
            <el-col :span="12">
              <el-input v-model="form.peoples" type="number" style="width:100px;"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="报名要求" prop="sign_up_required">
            <el-col :span="12">
              <el-input type="textarea" :rows="6" v-model="form.sign_up_required"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="评比规则" prop="score_rule">
            <el-col :span="12">
              <el-input type="textarea" :rows="8" v-model="form.score_rule"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="奖项设置" prop="prize_setting">
            <el-col :span="12">
              <el-input type="textarea" :rows="8" v-model="form.prize_setting"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="比赛级别" prop="level">
            <el-select 
              v-model="form.level"
              placeholder="请选择比赛级别">
                <el-option
                  v-for="(value, key) in levelList"
                  :key="key"
                  :label="value"
                  :value="key">
                </el-option>
              </el-select>
          </el-form-item>
      </el-row>

      <el-row class="hx-projectEdit_rows">
         <el-row class="hx-projectEdit_title">关联方信息</el-row>

         <el-row v-for="(value, key) in form.school_info">
           <el-col :span="8">
              <el-form-item label="关联学校">
                <el-col>
                  <el-select 
                  v-model="value.name" 
                  placeholder="选择学校" 
                  @change="value.zone = ''"
                  >
                    <el-option
                      v-for="(value, key) in school"
                      :key="key"
                      :label="value"
                      :value="value">
                    </el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="关联校区">
                <el-col>
                  <el-select v-model="value.zone" placeholder="关联校区" >
                    <el-option
                      v-for="(value, key) in school_zone[handleKey(value.name)]"
                      :key="key"
                      :label="value"
                      :value="value">
                    </el-option>
                  </el-select>
                  <!-- <el-input v-model="value.zone" style="width:195px;"></el-input> -->
                </el-col>
              </el-form-item>
            </el-col>
            <i v-if="form.school_info.length > 1"  @click="handlReduce(key)" class="hx-projectEdit_icon el-icon-remove-outline"></i>
            <i v-if="key === form.school_info.length - 1" @click="handleIcon" class="hx-projectEdit_icon el-icon-circle-plus-outline"></i>
         </el-row>

         <el-form-item label="关联品牌"  prop="brand">
            <el-col :span="12">
              <el-input v-model="form.brand" style="width:195px;"></el-input>
            </el-col>
          </el-form-item>
      </el-row>

      <el-row class="hx-projectEdit_rows">
        <el-row class="hx-projectEdit_title">标签信息</el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item class="hx-projectEdit_label" label="标签" prop="tag">
              <el-input v-model="form.tag" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4" style="margin-left: 15px;">
            <el-button @click="dialog = true" type="danger">添加标签</el-button>
          </el-col>
        </el-row>
      </el-row>

      <el-row class="hx-projectEdit_rows">
        <el-row class="hx-projectEdit_title" style="margin-bottom: 0;">流程信息</el-row>

        <el-row class="hx-projectEdit_content">

          <el-row class="hx-projectEdit_text">宣传报名期</el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="开始时间" prop="pr_start_time">
                <el-date-picker
                  v-model="form.pr_start_time"
                  type="datetime"
                  placeholder="开始时间"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="结束时间" prop="pr_end_time" class="is-required">
                <el-date-picker
                  v-model="form.pr_end_time"
                  type="datetime"
                  placeholder="结束时间"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="社团参与数" prop="society_participants" class="is-required">
                <el-input v-model="form.society_participants" type="number"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="摆摊开始时间" prop="stall_start_time">
                <el-date-picker
                  v-model="form.stall_start_time"
                  type="datetime"
                  placeholder="开始时间"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="摆摊结束时间" prop="stall_end_time"  class="is-required">
                <el-date-picker
                  v-model="form.stall_end_time"
                  type="datetime"
                  placeholder="结束时间"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="摆摊场地" prop="stall_site">
                <el-input v-model="form.stall_site"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="扫楼开始时间" prop="check_building_start_time">
                <el-date-picker
                  v-model="form.check_building_start_time"
                  type="datetime"
                  placeholder="开始时间"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="扫楼结束时间" prop="check_building_end_time"  class="is-required">
                <el-date-picker
                  v-model="form.check_building_end_time"
                  type="datetime"
                  placeholder="结束时间"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>

        </el-row>

        <el-row class="hx-projectEdit_content">

          <el-row class="hx-projectEdit_text">培训动员期</el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="开始时间"  prop="tp_start_time">
                <el-date-picker
                  v-model="form.tp_start_time"
                  type="datetime"
                  placeholder="开始时间"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="结束时间" prop="tp_end_time"  class="is-required">
                <el-date-picker
                  v-model="form.tp_end_time"
                  type="datetime"
                  placeholder="结束时间"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="培训场地" prop="training_site">
                <el-input v-model="form.training_site"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="参与培训人数" prop="tr_participants"  class="is-required">
                <el-input v-model="form.tr_participants" type="number"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="培训讲师" prop="lector">
                <el-input v-model="form.lector" ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" class="hx-projectEdit_checkbox">
              <el-form-item label="">
                <el-checkbox v-model="form.tp_is_exist_media" true-label="1" false-label="2">是否有多媒体设备</el-checkbox>
              </el-form-item>
            </el-col>
          </el-row>

        </el-row>

        <el-row class="hx-projectEdit_content">
          <el-row class="hx-projectEdit_text">营销实战期</el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="开始时间" prop="start_time">
                <el-date-picker
                  v-model="form.start_time"
                  type="datetime"
                  placeholder="开始时间"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="结束时间" prop="end_time"  class="is-required">
                <el-date-picker
                  v-model="form.end_time"
                  type="datetime"
                  placeholder="结束时间"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-row>

        <el-row class="hx-projectEdit_content">
          <el-row class="hx-projectEdit_text">决赛颁奖期</el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="开始时间" prop="fap_start_time">
                <el-date-picker
                  v-model="form.fap_start_time"
                  type="datetime"
                  placeholder="开始时间"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="结束时间" prop="fap_end_time"  class="is-required">
                <el-date-picker
                  v-model="form.fap_end_time"
                  type="datetime"
                  placeholder="结束时间"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="决赛场地" prop="finals_site">
                <el-input v-model="form.finals_site"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="决赛团队数" prop="teams_num"  class="is-required"> 
                <el-input v-model="form.teams_num" type="number"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="决赛评委" prop="judge">
                <el-input v-model="form.judge" ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" class="hx-projectEdit_checkbox">
              <el-form-item label="">
                <el-checkbox v-model="form.fap_is_exist_media" true-label="1" false-label="2">是否有多媒体设备</el-checkbox>
              </el-form-item>
            </el-col>
          </el-row>
        </el-row>
      </el-row>


      <el-row class="hx-projectEdit_button">
        <el-button type="danger" @click="handleSave('infoForm')">提交</el-button>
        <a :href="links.index"><el-button>返回</el-button></a>
      </el-row>
    </el-form>

    <el-dialog
      title=""
      :visible.sync="dialog"
      width="50%">
        <tag :tagChoose="tagChoose" @handleSave="handleDialog"></tag>
    </el-dialog>
  </div>
</template>
<script>
  import { getPojectAdd, postPojectAdd, getPojectEdit, postPojectEdit } from '@/service/project/http'
  import Tag from '@/components/common/tag'
  import { formatUrlParams } from '@/utils/utils'
  export default {
    components: {
      Tag
    },
    created () {
      let params = formatUrlParams(location.search)
      this.id = params.id ? params.id : ''
      this.loading = true
      if (this.id === '') {
        getPojectAdd().then((res) => {
          this.loading = false
          const data = res.data
          this.levelList = data.level
          this.school = data.school
          this.school_zone = data.school_zone
          this.links = res.page_resource
        }).catch(() => {
          this.loading = false
        })
      } else {
        getPojectEdit({id: this.id}).then((res) => {
          this.loading = false
          const info = res.data.info
          this.levelList = res.data.level
          this.contestNo = info.contest_no
          this.school = res.data.school
          this.school_zone = res.data.school_zone
          this.form['name'] = info.name
          this.form['level'] = info.level
          this.form['description'] = info.description
          this.form['peoples'] = info.peoples
          this.form['tag'] = info.tag_name
          this.form['brand'] = info.brand
          this.form['start_time'] = new Date(info.start_time)
          this.form['end_time'] = new Date(info.end_time)
          this.form['sign_up_required'] = info.sign_up_required
          this.form['score_rule'] = info.score_rule
          this.form['prize_setting'] = info.prize_setting
          this.form['school_info'] = info.school_info
          this.form['pr_start_time'] = new Date(info.registration.pr_start_time)
          this.form['pr_end_time'] = new Date(info.registration.pr_end_time)
          this.form['stall_start_time'] = new Date(info.registration.stall_start_time)
          this.form['stall_end_time'] = new Date(info.registration.stall_end_time)
          this.form['check_building_start_time'] = new Date(info.registration.check_building_start_time)
          this.form['check_building_end_time'] = new Date(info.registration.check_building_end_time)
          this.form['society_participants'] = info.registration.society_participants
          this.form['stall_site'] = info.registration.stall_site

          this.form['tp_start_time'] = new Date(info.training.tp_start_time)
          this.form['tp_end_time'] = new Date(info.training.tp_end_time)
          this.form['training_site'] = info.training.training_site
          this.form['tr_participants'] = info.training.tr_participants
          this.form['lector'] = info.training.lector
          this.form['tp_is_exist_media'] = info.training.tp_is_exist_media

          this.form['fap_start_time'] = new Date(info.award.fap_start_time)
          this.form['fap_end_time'] = new Date(info.award.fap_end_time)
          this.form['finals_site'] = info.award.finals_site
          this.form['teams_num'] = info.award.teams_num
          this.form['judge'] = info.award.judge
          this.form['fap_is_exist_media'] = info.award.fap_is_exist_media

          // this.tagChoose = info.tag_name.split(',')
          this.links = res.page_resource
        }).catch(() => {
          this.loading = false
        })
      }
    },
    methods: {
      handleSave (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const form = this.form
            let arg = {
              'name': form.name,
              'description': form.description,
              'peoples': form.peoples,
              'school_info': form.school_info,
              'tag_name': form.tag,
              'tag_sub_name': '标签',
              'level': form.level,
              'brand': form.brand,
              'start_time': form.start_time,
              'end_time': form.end_time,
              'sign_up_required': form.sign_up_required,
              'score_rule': form.score_rule,
              'prize_setting': form.prize_setting,
              'registration': {
                'pr_start_time': form.pr_start_time,
                'pr_end_time': form.pr_end_time,
                'stall_start_time': form.stall_start_time,
                'stall_end_time': form.stall_end_time,
                'check_building_start_time': form.check_building_start_time,
                'check_building_end_time': form.check_building_end_time,
                'society_participants': form.society_participants,
                'stall_site': form.stall_site
              },
              'training': {
                'tp_start_time': form.tp_start_time,
                'tp_end_time': form.tp_end_time,
                'training_site': form.training_site,
                'tr_participants': form.tr_participants,
                'lector': form.lector,
                'tp_is_exist_media': form.tp_is_exist_media
              },
              'award': {
                'fap_start_time': form.fap_start_time,
                'fap_end_time': form.fap_end_time,
                'finals_site': form.finals_site,
                'teams_num': form.teams_num,
                'judge': form.judge,
                'fap_is_exist_media': form.fap_is_exist_media
              }
            }
            this.loading = true
            if (this.id === '') {
              postPojectAdd(arg).then((res) => {
                this.loading = false
                window.location.href = res.page_resource.index
              }).catch(() => {
                this.loading = false
              })
            } else {
              arg['id'] = this.id
              postPojectEdit(arg).then((res) => {
                this.loading = false
                this.$message({
                  message: '修改成功',
                  type: 'success'
                })
              }).catch(() => {
                this.loading = false
              })
            }
          }
        })
      },
      handleDialog (checkList) {
        // this.tagChoose = checkList
        this.form.tag = checkList.join(',')
        this.dialog = false
      },
      handleIcon () {
        this.form.school_info.push({
          'name': '',
          'zone': ''
        })
      },
      handlReduce (key) {
        this.form.school_info.splice(key, 1)
      },
      handleKey (name) {
        for (let item in this.school) {
          if (this.school[item] === name) {
            return item
          }
        }
      }
    },
    data () {
      const checkPeople = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('报名人数不能为空'))
        }
        if (value !== '' && value <= 0) {
          return callback(new Error('报名人数必须大于0'))
        }
        return callback()
      }
      const checkPretime = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('请选择结束时间'))
        }
        if ((value < this.form.pr_start_time) && this.form.pr_start_time !== '') {
          return callback(new Error('结束时间不能小于开始时间'))
        }
        return callback()
      }
      const checkSocietyParticipants = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('社团参与数不能为空'))
        }
        if (value !== '' && value <= 0) {
          return callback(new Error('社团参与数必须大于0'))
        }
        return callback()
      }
      const checkStallEtime = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('请选择结束时间'))
        }
        if (value < this.form.stall_start_time && this.form.stall_start_time !== '') {
          return callback(new Error('摆摊结束时间不能小于摆摊开始时间'))
        }
        return callback()
      }
      const checkBuildingEtime = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('请选择结束时间'))
        }
        if (value < this.form.check_building_start_time && this.form.check_building_start_time !== '') {
          return callback(new Error('扫楼结束时间不能小于扫楼开始时间'))
        }
        return callback()
      }
      const checktpEtime = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('请选择结束时间'))
        }
        if (value < this.form.tp_start_time && this.form.tp_start_time !== '') {
          return callback(new Error('结束时间不能小于开始时间'))
        }
        return callback()
      }
      const checkEtime = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('请选择结束时间'))
        }
        if (value < this.form.start_time && this.form.start_time !== '') {
          return callback(new Error('结束时间不能小于开始时间'))
        }
        return callback()
      }
      const checkFapEtime = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('请选择结束时间'))
        }
        if (value < this.form.fap_start_time && this.form.fap_start_time !== '') {
          return callback(new Error('结束时间不能小于开始时间'))
        }
        return callback()
      }
      const checkTeamsNum = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('决赛团队数不能为空'))
        }
        if (value !== '' && value <= 0) {
          return callback(new Error('决赛团队数必须大于0'))
        }
        return callback()
      }
      const checkParticipants = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('参与培训人数不能为空'))
        }
        if (value !== '' && value <= 0) {
          return callback(new Error('参与培训人数必须大于0'))
        }
        return callback()
      }
      return {
        id: '',
        loading: false,
        dialog: false,
        tagChoose: [],
        levelList: {},
        rules: {
          name: [
            { required: true, message: '请填写项目名称', trigger: 'blur' }
          ],
          peoples: [
            { validator: checkPeople, trigger: 'blur' }
          ],
          pr_start_time: [
            { required: true, message: '请选择开始时间', trigger: 'change' }
          ],
          pr_end_time: [
            { validator: checkPretime, trigger: 'blur' }
          ],
          society_participants: [
            { validator: checkSocietyParticipants, trigger: 'change' }
          ],
          stall_start_time: [
            { required: true, message: '请选择开始时间', trigger: 'change' }
          ],
          stall_end_time: [
            { validator: checkStallEtime, trigger: 'change' }
          ],
          check_building_start_time: [
           { required: true, message: '请选择开始时间', trigger: 'change' }
          ],
          check_building_end_time: [
            { validator: checkBuildingEtime, trigger: 'change' }
          ],
          tp_start_time: [
           { required: true, message: '请选择开始时间', trigger: 'change' }
          ],
          tp_end_time: [
            { validator: checktpEtime, trigger: 'change' }
          ],
          tr_participants: [
            { validator: checkParticipants, trigger: 'change' }
          ],
          start_time: [
            { required: true, message: '请选择开始时间', trigger: 'change' }
          ],
          end_time: [
            { validator: checkEtime, trigger: 'change' }
          ],
          fap_start_time: [
            { required: true, message: '请选择开始时间', trigger: 'change' }
          ],
          fap_end_time: [
            { validator: checkFapEtime, trigger: 'change' }
          ],
          teams_num: [
            { validator: checkTeamsNum, trigger: 'change' }
          ],
          tag: [
            { required: true, message: '请选择标签', trigger: 'change' }
          ],
          brand: [
            { required: true, message: '请填写关联品牌', trigger: 'blur' }
          ],
          stall_site: [
            { required: true, message: '请填写摆摊场地', trigger: 'blur' }
          ],
          training_site: [
            { required: true, message: '请填写培训场地', trigger: 'blur' }
          ],
          lector: [
            { required: true, message: '请填写培训讲师', trigger: 'blur' }
          ],
          finals_site: [
            { required: true, message: '请填写决赛场地', trigger: 'blur' }
          ],
          judge: [
            { required: true, message: '请填写决赛评委', trigger: 'blur' }
          ],
          sign_up_required: [
            { required: true, message: '请填写报名要求', trigger: 'blur' }
          ],
          score_rule: [
            { required: true, message: '请填写评比规则', trigger: 'blur' }
          ],
          prize_setting: [
            { required: true, message: '请填写奖项设置', trigger: 'blur' }
          ],
          level: [
            { required: true, message: '请选择比赛级别', trigger: 'change' }
          ]
        },
        form: {
          // 基础信息
          name: '',
          description: '',
          peoples: '',
          school_info: [
            {
              'name': '',
              'zone': ''
            }
          ],
          level: '',
          brand: '',
          tag: '',
          start_time: '',
          end_time: '',
          sign_up_required: '',
          score_rule: '',
          prize_setting: '',
          // 宣传报名期相关数据
          pr_start_time: '',
          pr_end_time: '',
          stall_start_time: '',
          stall_end_time: '',
          check_building_start_time: '',
          check_building_end_time: '',
          society_participants: '',
          stall_site: '',
          // 培训动员期相关数据
          tp_start_time: '',
          tp_end_time: '',
          training_site: '',
          tr_participants: '',
          lector: '',
          tp_is_exist_media: '2',
          // 决赛颁奖期信息
          fap_start_time: '',
          fap_end_time: '',
          finals_site: '',
          teams_num: '',
          judge: '',
          fap_is_exist_media: '2'
        },
        school: [],
        school_zone: [],
        tag: [],
        links: {},
        contestNo: '',
        pickerOptions: {
          disabledDate (time) {
            return time.getTime() < Date.now() - 8.64e7
          }
        }
      }
    }
  }
</script>
<style  lang="postcss">
.hx-projectEdit{
  &_header{
    position: relative;
    margin-bottom: 20px;
    &-text{
      color: #333333;
      font-size: 14px;
      position: relative;
      margin-left: 90px;
      z-index: 2;
      background-color: #fff;
      display: inline-block;
      padding: 0 15px;
    }
    &-line{
      height: 1px;
      content: '';
      width: 100%;
      left: 0;
      top: 12px;
      display: block;
      background-color: #e6e6e6;
      z-index: 1;
      position: absolute;
    }
  }
  &_title{
    background-color: #d7d7d7;
    padding: 15px 0 15px 40px;
    font-size: 14px;
    margin-bottom: 20px;
  }
  &_text{
    font-size: 12px;
    padding: 4px 0 4px 40px;
    margin-bottom: 20px;
    background-color: #f2f2f2;
  }
  &_content{
    input{
      width: 220px;
    }
  }
  &_checkbox{
    .el-form-item__content{
      margin-left: 40px!important;
    }
  }
  &_button{
    margin-top: 60px;
    text-align: center;
    button{
      width: 120px;
    }
  }
  &_label{
    .el-input.is-disabled .el-input__inner{
      border-color: #e4e7ed;
      background-color: #fff;
      color: #333333; 
    }
  }
  &_icon{
    font-size: 22px;
    margin-top: 10px;
    cursor: pointer;
  }
  .el-form-item.is-success .el-input__inner, 
  .el-form-item.is-success .el-input__inner:focus, 
  .el-form-item.is-success .el-textarea__inner, 
  .el-form-item.is-success .el-textarea__inner:focus{
    border: 1px solid #dcdfe6;
  }
}
</style>
