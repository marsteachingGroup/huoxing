<template>
  <el-row class="tag">
    <el-row class="tag-header">
      <el-input size="small" class="tag-input" v-model="keyword" placeholder="请输入标签"></el-input>
      <el-button size="small" type="primary">搜索</el-button>
      <el-button size="small" type="primary">选择并保存</el-button>
    </el-row>

    <el-row  class="tag-content">
       <el-checkbox-group v-model="checkList">
         <el-checkbox v-for="(value, key) in tag" :key="key" :label="value"></el-checkbox>
       </el-checkbox-group>
    </el-row>

    <el-row class="tag-add">
      <el-input size="small" class="tag-input" v-model="keyword" style="width: 150px;" placeholder="请输入新增标签"></el-input>
      <el-button size="small" type="primary">新增</el-button>
    </el-row>
  </el-row>
</template>

<script>
  import { getTagList } from '@/service/project/http'
  export default {
    data () {
      return {
        keyword: '',
        checkList: []
      }
    },
    props: {
      tag: {
        type: Array
      }
    },
    methods: {
    },
    created () {
      getTagList().then((res) => {
        console.log(res)
      })
    }
  }
</script>

<style scoped lang="postcss">
.tag{
  &-input{
    width: 200px;
    margin-right: 10px;
  }
  &-content{
    margin-top: 30px;
  }
  &-add{
    margin-top: 60px;
  }
}
</style>
