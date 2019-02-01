<template>
  <el-row class="tag" v-loading="loading">
    <el-row class="tag-header">
      <el-input size="small" class="tag-input" v-model="keyword" placeholder="请输入标签"></el-input>
      <el-button size="small" @click="handleTagList" type="primary">搜索</el-button>
      <el-button size="small" @click="handleSave" type="primary">选择并保存</el-button>
    </el-row>

    <el-row  class="tag-content">
       <el-checkbox-group v-model="tagChoose">
         <el-checkbox v-for="(value, key) in tagList" :key="key" :label="value.tag_name"></el-checkbox>
       </el-checkbox-group>
    </el-row>

    <el-row class="tag-add">
      <el-input size="small" class="tag-input" v-model="label" style="width: 150px;" placeholder="请输入新增标签"></el-input>
      <el-button size="small" type="primary" @click="handleAdd">新增</el-button>
    </el-row>
  </el-row>
</template>

<script>
  import { getTagList, postTagAdd } from '@/service/project/http'
  export default {
    data () {
      return {
        keyword: '',
        tagList: {},
        loading: false,
        label: ''
      }
    },
    props: {
      tagChoose: {
        type: Array
      }
    },
    methods: {
      handleTagList () {
        this.loading = true
        getTagList({keywords: this.keyword}).then((res) => {
          this.loading = false
          this.tagList = res.data.list
        }).catch(() => {
          this.loading = false
        })
      },
      handleAdd () {
        this.loading = true
        postTagAdd({tag_name: this.label, tag_sub_name: '标签'}).then((res) => {
          this.handleTagList()
        }).catch(() => {
          this.loading = false
        })
      },
      handleSave () {
        this.$emit('handleSave', this.tagChoose)
      }
    },
    created () {
      this.handleTagList()
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
