<template>
  <div class="hx-pages hx-projectList" v-loading="loading">
    <el-row class="hx-projectList_search">
      <div class="hx-projectList_search-rows"><span class="hx-projectList_word">学校名称：</span><el-input  class="hx-projectList_input" size="small" v-model="school_name" placeholder="请输入学校名称"></el-input></div>
      <div class="hx-projectList_search-rows"><span class="hx-projectList_word">团队名称关键字：</span><el-input  class="hx-projectList_input" size="small" v-model="keywords" placeholder="请输入团队名称关键字"></el-input></div>
      <div class="hx-projectList_search-rows"><span class="hx-projectList_word">请输入团队编号：</span><el-input  class="hx-projectList_input" size="small" v-model="team_no" placeholder="请输入团队编号"></el-input></div>
      <div class="hx-projectList_search-rows"><span class="hx-projectList_word">姓名：</span><el-input  class="hx-projectList_input" size="small" v-model="name" placeholder="请输入姓名"></el-input></div>
      <el-button type="primary"  size="small" icon="el-icon-circle-plus-outline" @click="handleSearch">查询</el-button>
      <el-button type="primary"  size="small" icon="el-icon-error" @click="handleClear">清空</el-button>
      <el-button @click.stop="handleExport" type="primary" size="small">导出Excel</el-button>
    </el-row>
    <el-table
      border
      :data="list"
      @row-click="handleRow"
      style="width: 100%;margin-top: 30px;">
      <el-table-column
        prop="project_name"
        label="营销大赛名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="team_name"
        label="团队名称"
        width="180">
      </el-table-column>
      <el-table-column
        label="角色"
        prop="role_type_text"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        width="100"
        label="性别">
        <template slot-scope="scope">
          <span v-if="scope.row.sex === '1'">男</span>
          <span v-else-if="scope.row.sex === '2'">女</span>
          <span v-else>未填写</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="school_name"
        label="学校">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
        width="180">
      </el-table-column>
    </el-table>

    <div  class="hx-projectList_page">
       <el-pagination
        background
        layout="total, prev, pager, next"
        :page-size="size"
        @current-change="current"
        :total="total">
      </el-pagination>
    </div>

    <el-dialog
      title="学生信息"
      :visible.sync="dialogInfo"
      width="50%">
      
      <el-col class="hx-projectEdit_info" :span="12">团队编号：{{info.team_no}}</el-col>
      <el-col class="hx-projectEdit_info" :span="12">团队名称：{{info.team_name}}</el-col>
      <el-col class="hx-projectEdit_info" :span="12">姓名：{{info.name}}</el-col>
      <el-col class="hx-projectEdit_info" :span="12">性别：
        <span v-if="info.sex === '1'">男</span>
        <span v-else-if="info.sex === '2'">女</span>
        <span v-else>未填写</span>
      </el-col>
      <el-col class="hx-projectEdit_info" :span="12">手机号码：{{info.phone}}</el-col>
      <el-col class="hx-projectEdit_info" :span="12">邮箱：{{info.email}}</el-col>
      <el-col class="hx-projectEdit_info" :span="12">身份证：{{info.identify_number}}</el-col>
      <el-col class="hx-projectEdit_info" :span="12">血型：{{info.blood_type}}</el-col>
      <el-col class="hx-projectEdit_info" :span="12">学校：{{info.school_name}}</el-col>
      <el-col class="hx-projectEdit_info" :span="12">校区：{{info.school_zone}}</el-col>
      <el-col class="hx-projectEdit_info" :span="12">学院：{{info.college}}</el-col>
      <el-col class="hx-projectEdit_info" :span="12">专业：{{info.major}}</el-col>
      <el-col class="hx-projectEdit_info" :span="12">毕业学历：
        <span v-if="info.degree_type === '1'">专科</span>
        <span v-if="info.degree_type === '2'">全日制本科</span>
        <span v-if="info.degree_type === '3'">硕士</span>
        <span v-if="info.degree_type === '4'">博士</span>
      </el-col>
      <el-col class="hx-projectEdit_info" :span="12">入学时间：{{info.entrance_date}}</el-col>
      <el-col class="hx-projectEdit_info" :span="12">籍贯：{{info.native_place}}</el-col>
      <el-col class="hx-projectEdit_info" :span="12">报名时间：{{info.createtime}}</el-col>
      <el-col class="hx-projectEdit_info" :span="12">状态：
        <span v-if="info.status === '1'">未审核</span>
        <span v-if="info.status === '2'">已审核</span>
      </el-col>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogInfo = false">返 回</el-button>
      </span>
      
    </el-dialog>
  </div>
</template>
<script>
  import { getEnrollRecord } from '@/service/project/http'
  export default {
    data () {
      return {
        keywords: '',
        team_no: '',
        loading: false,
        list: [],
        links: {},
        dialogInfo: false,
        info: {},
        total: 0,
        size: 1,
        page: 1,
        school_name: '',
        name: ''
      }
    },
    created () {
      this.handleSearch()
    },
    methods: {
      handleSearch () {
        this.loading = true
        let arg = {
          keywords: this.keywords,
          team_no: this.team_no,
          school_name: this.school_name,
          name: this.name,
          page: this.page
        }
        getEnrollRecord(arg).then((res) => {
          const data = res.data
          this.loading = false
          this.list = data.list
          this.links = res.page_resource
          this.total = data.total
          this.size = data.list_rows
        }).catch((res) => {
          this.links = res.page_resource
          this.loading = false
        })
      },
      handleRow (row) {
        this.dialogInfo = true
        this.info = row
      },
      current (page) {
        this.page = page
        this.handleSearch()
      },
      handleClear () {
        this.keywords = ''
        this.team_no = ''
        this.school_name = ''
        this.name = ''
        this.handleSearch()
      },
      handleExport () {
        window.open('/admin/activity_enroll_record/export_excel_ex?keywords=' + this.keywords + '&team_no=' + this.team_no + '&school_name=' + this.school_name + '&name=' + this.name)
      }
    }
  }
</script>
<style  lang="postcss">
.hx-projectList{
 &_search{
   &-rows{
     display: inline-block;
     margin-bottom: 20px;
   }
 }
 &_input{
   width: 180px;
   margin: 0 15px;
 }
 &_word{
   font-size: 14px;
 }
 &_table{
   margin-top: 30px;
 }
 &_delete{
   margin-top: 30px;
 }
 &_page{
   text-align: center;
   margin-top: 30px;
 }
 .hx-projectEdit_info{
   margin-bottom: 30px;
 }
}
</style>
