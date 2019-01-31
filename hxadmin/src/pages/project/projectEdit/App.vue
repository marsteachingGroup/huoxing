<template>
  <div class="hx-pages hx-projectEdit" v-loading="loading">
    <el-row class="hx-projectEdit_header">
      <div class="hx-projectEdit_header-text">添加比赛</div>
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
              <el-input type="textarea" :autosize="{minRows: 6, maxRows: 8}" v-model="form.description"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="报名人数上限" prop="peoples">
            <el-col :span="12">
              <el-input v-model="form.peoples" type="number" style="width:100px;"></el-input>
            </el-col>
          </el-form-item>
      </el-row>

      <el-row class="hx-projectEdit_rows">
         <el-row class="hx-projectEdit_title">关联方信息</el-row>

         <el-row>
           <el-col :span="8">
              <el-form-item label="关联学校" prop="school">
                <el-col>
                  <el-select v-model="form.school" placeholder="选择学校"  style="width:195px;">
                    <el-option
                      v-for="(value, key) in school"
                      :key="key"
                      :label="value"
                      :value="key">
                    </el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="关联校区">
                <el-col>
                  <el-input v-model="form.school_district" style="width:195px;">></el-input>
                </el-col>
              </el-form-item>
            </el-col>
         </el-row>

         <el-form-item label="关联品牌">
            <el-col :span="12">
              <el-input v-model="form.brand" style="width:195px;"></el-input>
            </el-col>
          </el-form-item>
      </el-row>

      <el-row class="hx-projectEdit_rows">
        <el-row class="hx-projectEdit_title">标签信息</el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="标签">
              <el-input v-model="form.tag"></el-input>
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
                  placeholder="开始时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="结束时间" prop="pr_end_time">
                <el-date-picker
                  v-model="form.pr_end_time"
                  type="datetime"
                  placeholder="结束时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="社团参与人数" prop="society_participants">
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
                  placeholder="开始时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="摆摊结束时间" prop="stall_end_time">
                <el-date-picker
                  v-model="form.stall_end_time"
                  type="datetime"
                  placeholder="结束时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="摆摊场地">
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
                  placeholder="开始时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="扫楼结束时间" prop="check_building_end_time">
                <el-date-picker
                  v-model="form.check_building_end_time"
                  type="datetime"
                  placeholder="结束时间">
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
                  placeholder="开始时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="结束时间" prop="tp_end_time">
                <el-date-picker
                  v-model="form.tp_end_time"
                  type="datetime"
                  placeholder="结束时间">
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
              <el-form-item label="参与培训人数" prop="tr_participants">
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
                  placeholder="开始时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="结束时间" prop="end_time">
                <el-date-picker
                  v-model="form.end_time"
                  type="datetime"
                  placeholder="结束时间">
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
                  placeholder="开始时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="结束时间" prop="fap_end_time">
                <el-date-picker
                  v-model="form.fap_end_time"
                  type="datetime"
                  placeholder="结束时间">
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
              <el-form-item label="决赛团队数" prop="teams_num">
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
        <el-button>返回</el-button>
      </el-row>
    </el-form>

    <el-dialog
      title=""
      :visible.sync="dialog"
      width="50%">
        <tag :tag="tag"></tag>
    </el-dialog>
  </div>
</template>
<script>
  import { getPojectAdd } from '@/service/project/http'
  import Tag from '@/components/common/tag'
  export default {
    components: {
      Tag
    },
    created () {
      this.loading = true
      getPojectAdd().then((res) => {
        this.loading = false
        const data = res.data
        this.school = data.school
        for (let item in data.tag) {
          this.tag.push(data.tag[item])
        }
      })
    },
    methods: {
      handleSave (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.form)
          }
        })
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
        if (value < this.form.pr_start_time && this.form.pr_start_time !== '') {
          return callback(new Error('结束时间不能小于开始时间'))
        }
        return callback()
      }
      const checkSocietyParticipants = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('社团人数不能为空'))
        }
        if (value !== '' && value <= 0) {
          return callback(new Error('社团人数必须大于0'))
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
        loading: false,
        dialog: false,
        rules: {
          name: [
            { required: true, message: '请输入项目名称', trigger: 'change' }
          ],
          peoples: [
            { validator: checkPeople, trigger: 'change' }
          ],
          school: [
            { required: true, message: '请选择关联学校', trigger: 'change' }
          ],
          pr_start_time: [
            { required: true, message: '请选择开始时间', trigger: 'change' }
          ],
          pr_end_time: [
            { validator: checkPretime, trigger: 'change' }
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
          ]
        },
        form: {
          // 基础信息
          name: '',
          description: '',
          peoples: '',
          school: '',
          school_district: '',
          brand: '',
          tag: '',
          start_time: '',
          end_time: '',
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
          tp_is_exist_media: '',
          // 决赛颁奖期信息
          fap_start_time: '',
          fap_end_time: '',
          finals_site: '',
          teams_num: '',
          judge: '',
          fap_is_exist_media: ''
        },
        school: [],
        tag: []
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
}
</style>
