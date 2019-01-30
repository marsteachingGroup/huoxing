<template>
  <div class="hx-pages hx-projectEdit" v-loading="loading">
    <el-row class="hx-projectEdit_header">
      <div class="hx-projectEdit_header-text">添加比赛</div>
      <div class="hx-projectEdit_header-line"></div>
    </el-row>

    <el-form ref="infoForm" :rules="rules" :model="form" label-width="110px">

      <el-row class="hx-projectEdit_rows">
         <el-row class="hx-projectEdit_title">基本信息</el-row>
          <el-form-item label="项目名称">
            <el-col :span="12">
              <el-input v-model="form.name"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="项目描述">
            <el-col :span="12">
              <el-input type="textarea" :autosize="{minRows: 6, maxRows: 8}" v-model="form.description"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="报名人数上限">
            <el-col :span="12">
              <el-input v-model="form.peoples" type="number" style="width:100px;"></el-input>
            </el-col>
          </el-form-item>
      </el-row>

      <el-row class="hx-projectEdit_rows">
         <el-row class="hx-projectEdit_title">关联方信息</el-row>

         <el-row>
           <el-col :span="8">
              <el-form-item label="关联学校">
                <el-col>
                  <el-select v-model="form.school" placeholder="选择学校"  style="width:195px;">
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
            <el-button type="danger">添加标签</el-button>
          </el-col>
        </el-row>
      </el-row>

      <el-row class="hx-projectEdit_rows">
        <el-row class="hx-projectEdit_title" style="margin-bottom: 0;">流程信息</el-row>

        <el-row class="hx-projectEdit_content">

          <el-row class="hx-projectEdit_text">宣传报名期</el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="开始时间">
                <el-date-picker
                  v-model="form.pr_start_time"
                  type="datetime"
                  placeholder="开始时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="结束时间">
                <el-date-picker
                  v-model="form.pr_end_time"
                  type="datetime"
                  placeholder="结束时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="社团参与人数">
                <el-input v-model="form.society_participants" type="number"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="摆摊开始时间">
                <el-date-picker
                  v-model="form.stall_start_time"
                  type="datetime"
                  placeholder="开始时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="摆摊结束时间">
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
              <el-form-item label="扫楼开始时间">
                <el-date-picker
                  v-model="form.check_building_start_time"
                  type="datetime"
                  placeholder="开始时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="扫楼结束时间">
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
              <el-form-item label="开始时间">
                <el-date-picker
                  v-model="form.tp_start_time"
                  type="datetime"
                  placeholder="开始时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="结束时间">
                <el-date-picker
                  v-model="form.tp_end_time"
                  type="datetime"
                  placeholder="结束时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="培训场地">
                <el-input v-model="form.training_site"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="开始时间">
                <el-date-picker
                  v-model="form.stall_start_time"
                  type="datetime"
                  placeholder="开始时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="结束时间">
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

        </el-row>
      </el-row>

    </el-form>
  </div>
</template>
<script>
  import { getPojectAdd } from '@/service/project/http'
  export default {
    data () {
      return {
        loading: false,
        rules: {},
        form: {
          name: '',
          description: '',
          peoples: '',
          school: '',
          school_district: '',
          brand: '',
          tag: [],
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
          tp_is_exist_media: ''
        }
      }
    },
    created () {
      this.loading = true
      getPojectAdd().then((res) => {
        this.loading = false
      })
    },
    methods: {
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
}
</style>
