<template>
  <el-row class="tag" v-loading="loading">
    <el-row class="tag-header">
      <el-input size="small" class="tag-input" v-model="keyword" placeholder="请输入标签"></el-input>
      <el-button size="small" @click="handleTagList" type="primary">搜索</el-button>
      <el-button size="small" @click="handleSave" type="primary">选择并保存</el-button>
    </el-row>

    <el-row  class="tag-content">
       <el-checkbox-group v-model="tagChooseList">
         <el-checkbox v-for="(value, key) in tagList" :key="key" :label="value" :value="value">{{value.tag_name}}</el-checkbox>
       </el-checkbox-group>
    </el-row>

    <el-row class="tag-add">
      <el-input size="small" class="tag-input" v-model="label" style="width: 150px;" placeholder="请输入新增标签"></el-input>
      <el-button size="small" type="primary" @click="handleAdd">新增</el-button>
      <el-button size="small" type="primary" @click="handleDelete">删除标签</el-button>
    </el-row>
  </el-row>
</template>

<script>
  import { getTagList, postTagAdd, postTagDelete } from '@/service/project/http'
  export default {
    data () {
      return {
        keyword: '',
        tagList: {},
        loading: false,
        label: '',
        tagChooseList: []
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
        this.tagChooseList = []
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
        let arr = []
        for (let item in this.tagChooseList) {
          arr.push(this.tagChooseList[item].tag_name)
        }
        this.$emit('handleSave', arr)
      },
      handleDelete () {
        if (this.tagChooseList.length === 0) {
          this.$message({
            message: '请选择标签',
            type: 'warning'
          })
        } else {
          this.loading = true
          let arr = []
          for (let item in this.tagChooseList) {
            arr.push(this.tagChooseList[item].tag_id)
          }
          postTagDelete({id: arr.join(',')}).then((res) => {
            this.handleTagList()
          }).catch(() => {
            this.loading = false
          })
        }
      }
    },
    created () {
      this.handleTagList()
    },
    watch: {
      tagChoose (val) {
        this.tagChooseList = this.tagChoose
      }
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
  .el-checkbox{
    margin-bottom: 15px;
  }
}
</style>
