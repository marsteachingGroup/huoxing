<template>
  <div class="hx-pages hx-projectList" v-loading="loading">
    <el-row class="hx-projectList_search">
      <a :href="links.add"><el-button type="primary" size="small" icon="el-icon-circle-plus-outline">添加比赛</el-button></a>
      <el-input  class="hx-projectList_input" size="small" v-model="keyword" placeholder="请输入标题"></el-input>
      <el-button type="primary"  size="small" icon="el-icon-circle-plus-outline" @click="handleSearch">查询</el-button>
    </el-row>
    <el-table
      :data="list"
      class="hx-projectList_table"
      border
      style="width: 100%">
      <!-- <el-table-column
        prop="id"
        label="ID"
        width="100">
      </el-table-column> -->
      <el-table-column
        prop="name"
        label="项目标题"
        width="250">
        <template slot-scope="scope">
          <a style="color: #496397;" :href="links.show + '?id=' + scope.row.id">{{scope.row.name}}</a>
        </template>
      </el-table-column>
      <el-table-column
        prop="contest_no"
        label="比赛编号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="level_name"
        label="比赛级别"
        width="120">
      </el-table-column>
      <!-- <el-table-column
        label="关联学校"
        width="220">
        <template slot-scope="scope">
          <p v-for="(value, key) in scope.row.school_info">{{value.name}}-{{value.zone}}</p>
        </template>
      </el-table-column> -->
      <!-- <el-table-column
        prop="brand"
        label="关联品牌"
        width="160">
      </el-table-column> -->
      <el-table-column
        prop="status_text"
        label="状态"
        width="120">
      </el-table-column>
      <el-table-column
        prop="brand"
        label="开始时间-结束时间"
        width="">
        <template slot-scope="scope">
          <span>{{scope.row.start_time}} - {{scope.row.end_time}}</span>
        </template>
      </el-table-column>
      <el-table-column
      label="基本操作"
      width="150">
      <template slot-scope="scope">
        <a :href="links.edit + '?id=' + scope.row.id"><el-button type="primary" size="small">修改</el-button></a>
        <el-button @click="handleDelete(scope.row)"  type="danger" size="small">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    <!-- <el-row class="hx-projectList_delete">
      <el-button icon="el-icon-delete"  type="primary" size="small">删除选中</el-button>
    </el-row> -->
  </div>
</template>
<script>
  import { getPojectList, postPojectDelete } from '@/service/project/http'
  export default {
    data () {
      return {
        keyword: '',
        loading: false,
        list: [],
        links: {}
      }
    },
    created () {
      this.handleSearch()
    },
    methods: {
      handleSearch () {
        this.loading = true
        getPojectList({keywords: this.keyword}).then((res) => {
          const data = res.data
          this.loading = false
          this.list = data.list
          this.links = res.page_resource
        }).catch((res) => {
          this.links = res.page_resource
          this.loading = false
        })
      },
      handleDelete (obj) {
        this.$confirm('确认删除该项目?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.loading = true
          postPojectDelete({id: obj.id}).then((res) => {
            this.handleSearch()
          }).catch(() => {
            this.loading = false
          })
        })
      }
    }
  }
</script>
<style  lang="postcss">
.hx-projectList{
 &_input{
   width: 180px;
   margin: 0 15px;
 }
 &_table{
   margin-top: 30px;
 }
 &_delete{
   margin-top: 30px;
 }
}
</style>
