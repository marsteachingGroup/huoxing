<template>
  <div class="hx-index">

    <search></search>
    
    <img class="hx-index_banner" src="../../images/banner.png" alt="">

    <div class="hx-index_nav">
      <div class="hx-index_nav-item">
          <img class="hx-index_nav-img" src="../../images/nav1.png" alt="">
          <p class="hx-index_nav-word">公益实践</p>
      </div>
      <div class="hx-index_nav-item">
          <img class="hx-index_nav-img" src="../../images/nav2.png" alt="">
          <p class="hx-index_nav-word">营销实践</p>
      </div>
      <div class="hx-index_nav-item">
          <img class="hx-index_nav-img" src="../../images/nav3.png" alt="">
          <p class="hx-index_nav-word">创业实践</p>
      </div>
      <div class="hx-index_nav-item">
          <img class="hx-index_nav-img" src="../../images/nav4.png" alt="">
          <p class="hx-index_nav-word">实习实践</p>
      </div>
    </div>

    <div class="hx-index_hot"><span class="hx-index_hot-word">为你推荐热门实践</span></div>

    <div class="hx-index_content">

      <a class="hx-index_rows" :href="'/pages/detail/main?id=' + value.id" v-for="(value, key) in list" :key="key">
        <p class="hx-index_title">{{value.name}}</p>
        <div class="hx-index_detail">
          <div class="hx-index_images" >
            <img src="../../images/text.png" alt="">
          </div>
          <div class="hx-index_info">
            <div class="hx-index_tag">
              <div class="hx-index_tag-item" v-for="(item, index) in value.tagArr" :key="index">{{item}}</div>
            </div>
            <div class="hx-index_brief">{{value.description}}</div>
          </div>
        </div>
      </a>

    </div>
  </div>
</template>

<script>
import api from '@/utils/api'
import search from '@/components/search'

export default {
  data () {
    return {
      list: []
    }
  },

  components: {
    search
  },

  methods: {
    async getData () {
      wx.showLoading({
        title: '加载中',
        mask: true
      })
      try {
        const res = await api.getIndexData()
        this.list = res.data.list
        for (let item in this.list) {
          this.list[item].tagArr = this.list[item].tag_name.split(',')
        }
      } catch (e) {
        console.log(e)
      }
      wx.hideLoading()
    }
  },

  created () {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.hx-index{
  &_banner{
    width: 100%;
    height: 270rpx;
    display: block;
  }
  &_nav{
    display: flex;
    text-align: center;
    justify-content: center;
    margin-top: 40rpx;
    &-item{
      flex: 1;
    }
    &-img{
      width: 85rpx;
      height: 85rpx;
    }
    &-word{
      font-size: 14px;
    }
  }
  &_hot{
    text-align: center;
    color: #b2b2b2;
    font-size: 12px;
    background-color: #f9f9f9;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    padding: 5px 0;
    margin-top: 30rpx;
  }
  &_content{
    padding: 0 30rpx;
  }
  &_rows{
    padding: 10px 0;
    border-bottom: 1rpx solid #e6e6e6;
    display: block;
    &:last-child{
      border: 0;
    }
  }
  &_title{
    font-size: 16px;
    margin-bottom: 10px;
    color: #353535;
  }
  &_detail{
    display: flex;
  }
  &_images{
    width: 210rpx;
    margin-right: 40rpx;
    img{
      width: 100%;
      height: 210rpx;
    }
  }
  &_info{
    flex: 1;
  }
  &_tag{
    display: flex;
    font-size: 14px;
    flex-wrap: wrap;
    margin-bottom: 25rpx;
    &-item{
      color: #8a3d85;
      border-radius: 4px;
      border: 1rpx solid;
      padding: 3rpx 15rpx;
      margin-right: 14rpx;
      margin-bottom: 10rpx;
    }
  }
  &_brief{
    font-size: 14px;
    color: #888888;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
}
</style>
