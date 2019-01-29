<template>
  <div class="hx-pages hx-projectList">
    <el-row class="hx-projectList_search">
      <el-button type="primary"  icon="el-icon-circle-plus-outline">添加比赛</el-button>
      <el-input v-model="keyword" placeholder="请输入标题"></el-input>
      <el-button type="primary"  icon="el-icon-circle-plus-outline">查询</el-button>
    </el-row>
    
  </div>
</template>
<script>
  import { getClubMenu } from '@/service/project/http'
  export default {
    data () {
      return {
        keyword: ''
      }
    },
    created () {
      getClubMenu().then((res) => {
        console.log(res)
      })
    },
    methods: {
    }
  }
</script>
<style  lang="postcss">
.hx-projectList{
 &_search{
   padding-left: 35px;
 }
}
</style>
