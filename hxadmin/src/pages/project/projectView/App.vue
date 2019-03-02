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
              <el-input v-model="form.name" :disabled="true"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="项目描述">
            <el-col :span="12">
              <el-input type="textarea" :rows="10" v-model="form.description" :disabled="true"></el-input>
            </el-col>
            <el-col  class="hx-projectEdit_qrcode" :span="12">
              <div class="hx-projectEdit_img">
                <img :src="qrCode" alt="">
              </div>
              <div class="hx-projectEdit_img-button">
                <el-button type="danger" ><a :href="qrCode" download="二维码">保存二维码</a></el-button>
              </div>
            </el-col>
          </el-form-item>
          <el-form-item label="报名人数上限" prop="peoples">
            <el-col :span="12">
              <el-input v-model="form.peoples" type="number" style="width:100px;"  :disabled="true"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="报名要求" prop="sign_up_required">
            <el-col :span="12">
              <el-input type="textarea" :rows="6" v-model="form.sign_up_required" :disabled="true"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="评比规则" prop="score_rule">
            <el-col :span="12">
              <el-input type="textarea" :rows="8" v-model="form.score_rule" :disabled="true"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="奖项设置" prop="prize_setting">
            <el-col :span="12">
              <el-input type="textarea" :rows="8" v-model="form.prize_setting" :disabled="true"></el-input>
            </el-col>
          </el-form-item>
      </el-row>

      <el-row class="hx-projectEdit_rows">
         <el-row class="hx-projectEdit_title">关联方信息</el-row>

        <el-row v-for="(value, key) in form.school_info">
           <el-col :span="8">
              <el-form-item label="关联学校">
                <el-col>
                  <el-select 
                   :disabled="true"
                  v-model="value.name" 
                  placeholder="选择学校" 
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
                  <el-select v-model="value.zone" placeholder="关联校区"  :disabled="true">
                    <el-option
                      v-for="(value, key) in school_zone[handleKey(value.name)]"
                      :key="key"
                      :label="value"
                      :value="value">
                    </el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>

         </el-row>

         <el-form-item label="关联品牌"  prop="brand">
            <el-col :span="12">
              <el-input v-model="form.brand"  :disabled="true" style="width:195px;"></el-input>
            </el-col>
          </el-form-item>
      </el-row>

      <el-row class="hx-projectEdit_rows">
        <el-row class="hx-projectEdit_title">标签信息</el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item class="hx-projectEdit_label" label="标签" prop="tag">
              <el-input v-model="form.tag"  :disabled="true"></el-input>
            </el-form-item>
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
                   :disabled="true"
                  placeholder="开始时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="结束时间" prop="pr_end_time" required>
                <el-date-picker
                  v-model="form.pr_end_time"
                  type="datetime"
                  :disabled="true"
                  placeholder="结束时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="社团参与数" prop="society_participants" required>
                <el-input v-model="form.society_participants" :disabled="true" type="number"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="摆摊开始时间" prop="stall_start_time">
                <el-date-picker
                  v-model="form.stall_start_time"
                  type="datetime"
                  :disabled="true"
                  placeholder="开始时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="摆摊结束时间" prop="stall_end_time" required>
                <el-date-picker
                  v-model="form.stall_end_time"
                  type="datetime"
                  :disabled="true"
                  placeholder="结束时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="摆摊场地" prop="stall_site">
                <el-input :disabled="true" v-model="form.stall_site"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="扫楼开始时间" prop="check_building_start_time">
                <el-date-picker
                  v-model="form.check_building_start_time"
                  type="datetime"
                  :disabled="true"
                  placeholder="开始时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="扫楼结束时间" prop="check_building_end_time" required>
                <el-date-picker
                  v-model="form.check_building_end_time"
                  type="datetime"
                  :disabled="true"
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
                  :disabled="true"
                  placeholder="开始时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="结束时间" prop="tp_end_time" required>
                <el-date-picker
                  v-model="form.tp_end_time"
                  type="datetime"
                  :disabled="true"
                  placeholder="结束时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="培训场地" prop="training_site">
                <el-input v-model="form.training_site" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="参与培训人数" prop="tr_participants" required>
                <el-input v-model="form.tr_participants" type="number" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="培训讲师" prop="lector">
                <el-input v-model="form.lector" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" class="hx-projectEdit_checkbox">
              <el-form-item label="">
                <el-checkbox v-model="form.tp_is_exist_media" :disabled="true" true-label="1" false-label="2">是否有多媒体设备</el-checkbox>
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
                  :disabled="true"
                  placeholder="开始时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="结束时间" prop="end_time">
                <el-date-picker
                  v-model="form.end_time"
                  type="datetime"
                  :disabled="true"
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
                  :disabled="true"
                  placeholder="开始时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="结束时间" prop="fap_end_time">
                <el-date-picker
                  v-model="form.fap_end_time"
                  type="datetime"
                  :disabled="true"
                  placeholder="结束时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="决赛场地" prop="finals_site">
                <el-input v-model="form.finals_site" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="决赛团队数" prop="teams_num" required> 
                <el-input v-model="form.teams_num" type="number" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="决赛评委" prop="judge">
                <el-input v-model="form.judge" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" class="hx-projectEdit_checkbox">
              <el-form-item label="">
                <el-checkbox v-model="form.fap_is_exist_media" :disabled="true" true-label="1" false-label="2">是否有多媒体设备</el-checkbox>
              </el-form-item>
            </el-col>
          </el-row>
        </el-row>
      </el-row>


      <el-row class="hx-projectEdit_button">
        <a :href="links.index"><el-button>返回</el-button></a>
      </el-row>
    </el-form>

  </div>
</template>
<script>
  import { getPojectView } from '@/service/project/http'
  import { formatUrlParams } from '@/utils/utils'
  export default {
    created () {
      let params = formatUrlParams(location.search)
      this.id = params.id ? params.id : ''
      this.loading = true
      if (this.id === '') {
        this.$message.error('找不到项目ID')
      } else {
        getPojectView({id: this.id}).then((res) => {
          this.loading = false
          const info = res.data.info
          this.contestNo = info.contest_no
          this.school = res.data.school
          this.school_zone = res.data.school_zone
          this.form['name'] = info.name
          this.form['description'] = info.description
          this.form['peoples'] = info.peoples
          this.form['school_info'] = info.school_info
          this.form['tag'] = info.tag_name
          this.form['brand'] = info.brand
          this.form['start_time'] = info.start_time
          this.form['end_time'] = info.end_time
          this.form['sign_up_required'] = info.sign_up_required
          this.form['score_rule'] = info.score_rule
          this.form['prize_setting'] = info.prize_setting

          this.form['pr_start_time'] = info.registration.pr_start_time
          this.form['pr_end_time'] = info.registration.pr_end_time
          this.form['stall_start_time'] = info.registration.stall_start_time
          this.form['stall_end_time'] = info.registration.stall_end_time
          this.form['check_building_start_time'] = info.registration.check_building_start_time
          this.form['check_building_end_time'] = info.registration.check_building_end_time
          this.form['society_participants'] = info.registration.society_participants
          this.form['stall_site'] = info.registration.stall_site

          this.form['tp_start_time'] = info.training.tp_start_time
          this.form['tp_end_time'] = info.training.tp_end_time
          this.form['training_site'] = info.training.training_site
          this.form['tr_participants'] = info.training.tr_participants
          this.form['lector'] = info.training.lector
          this.form['tp_is_exist_media'] = info.training.tp_is_exist_media

          this.form['fap_start_time'] = info.award.fap_start_time
          this.form['fap_end_time'] = info.award.fap_end_time
          this.form['finals_site'] = info.award.finals_site
          this.form['teams_num'] = info.award.teams_num
          this.form['judge'] = info.award.judge
          this.form['fap_is_exist_media'] = info.award.fap_is_exist_media

          this.qrCode = info.qr_url
          this.links = res.page_resource
        }).catch(() => {
          this.loading = false
        })
      }
    },
    methods: {
      handleQrcode () {
        window.open(this.qrCode)
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
      return {
        id: '',
        loading: false,
        rules: {},
        qrCode: '',
        form: {
          // 基础信息
          name: '',
          description: '',
          peoples: '',
          school_info: [],
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
        contestNo: '',
        links: {}
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
  &_qrcode{
    text-align: center;
  }
  &_img{
    img{
      width: 140px;
      height: 140px;
    }
    &-button{
      a{
        color: #fff;
      }
    }
  }
  .el-input.is-disabled .el-input__inner, .el-textarea.is-disabled .el-textarea__inner{
    border-color: #e4e7ed;
    /* background-color: #fff; */
    color: #333333; 
  }
  .el-form-item.is-success .el-input__inner, 
  .el-form-item.is-success .el-input__inner:focus, 
  .el-form-item.is-success .el-textarea__inner, 
  .el-form-item.is-success .el-textarea__inner:focus{
    border: 1px solid #dcdfe6;
  }
}
</style>
