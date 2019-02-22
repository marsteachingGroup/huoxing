<template>
  <div class="hx-detail">
      <swiper v-if="imgUrls.length > 0" indidator-dots="imgUrls.length > 1" >
        <block v-for="(item, index) in imgUrls" :key="index" >
          <swiper-item>
            <image  class="hx-detail_images" :src="item" mode="scaleToFill"></image>
          </swiper-item>
        </block>
      </swiper>

      <div class="hx-detail_wrapper">
        <div class="hx-detail_title">{{info.name}}</div>

        <div class="hx-detail_tag">
          <div class="hx-detail_tag-item hx-detail_tag-purple" v-for="(value, key) in tag">{{value}}</div>
        </div>

        <div class="hx-detail_time">
          <div class="hx-detail_time-item">报名截止时间：{{info.registration.pr_start_time}}</div>
          <div class="hx-detail_time-item">活动截止时间：{{info.registration.pr_end_time}}</div>
        </div>
        <div class="hx-detail_word">主办方：火星实践</div>
        <div class="hx-detail_word">承办方：{{info.school_name}}</div>

        <div class="hx-detail_rows">
          <div class="hx-detail_label">比赛简介</div>
          <div class="hx-detail_content">
            {{info.description}}
          </div>
        </div>

        <div class="hx-detail_rows">
          <div class="hx-detail_label">报名要求</div>
          <div class="hx-detail_content">
            无
          </div>
        </div>

        <div class="hx-detail_rows">
          <div class="hx-detail_label">合作品牌</div>
          <div class="hx-detail_content">
            {{info.brand}}
          </div>
        </div>

        <div class="hx-detail_rows">
          <div class="hx-detail_label">赛程安排</div>
          <div class="hx-detail_content">
            报名注册：{{info.registration.pr_start_time}}-{{info.registration.pr_end_time}} <br>
            赛前培训：{{info.training.tp_start_time}}-{{info.training.tp_end_time}}<br>
            营销实战：{{info.start_time}}-{{info.end_time}} <br>
            评比颁奖：{{info.award.fap_start_time}}-{{info.award.fap_end_time}}
          </div>
        </div>

        <div class="hx-detail_rows">
          <div class="hx-detail_label">评比规则</div>
          <div class="hx-detail_content">
            无
          </div>
        </div>

        <div class="hx-detail_rows">
          <div class="hx-detail_label">奖项设置</div>
          <div class="hx-detail_content">
            无
          </div>
        </div>
      </div>

      <div class="hx-detail_bottom">
        <div class="hx-detail_bottom-item">
          <img class="hx-detail_bottom-img" src="../../images/heart.png" alt="">
          <span class="hx-detail_bottom-num">0</span>
        </div>
        <div class="hx-detail_bottom-item">
          <img class="hx-detail_bottom-img" src="../../images/start.png" alt="">
          <span class="hx-detail_bottom-num">0</span>
        </div>
        <a  :href="'/pages/signup/main?aid=' + id" class="hx-detail_bottom-item">我要报名</a>
      </div>
  </div>
</template>

<script>
import api from '@/utils/api'
export default {

  data () {
    return {
      imgUrls: [
        '../../images/banner01.png',
        '../../images/banner.png'
      ],
      id: '',
      info: {},
      school: {},
      tag: []
    }
  },
  methods: {
    async getData () {
      wx.showLoading({
        title: '加载中',
        mask: true
      })
      try {
        const res = await api.getDetail({id: this.id})
        const data = res.data
        this.info = data.info
        this.school = data.school
        this.tag = data.info.tag_name.split(',')
      } catch (e) {
        console.log(e)
      }
      wx.hideLoading()
    }
  },

  onLoad ({id}) {
    this.id = id
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.hx-detail{
  &_images{
    width: 100%;
    height: 160px;
  }
  &_wrapper{
    padding: 0 60rpx 140rpx 60rpx;
    margin-top: 15rpx;
  }
  &_title{
    font-size: 16px;
    color: #333333;
  }
  &_word{
    margin-top: 13rpx;
    font-size: 16px;
    color: #666666;
  }
  &_tag{
    margin-top: 15rpx;
    display: flex;
    font-size: 14px;
    &-item{
      color: #fff;
      padding: 6rpx 20rpx;
      border-radius: 8rpx;
      margin-right: 30rpx;
      margin-bottom: 8rpx;
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);
    }
    &-purple{
      background-color: #8a3d85;
    }
    &-green{
      background-color: #acd639;
    }
  }
  &_time{
    display: flex;
    font-size: 11px;
    margin-bottom: 20rpx;
    color: #b2b2b2;
    &-item{
      flex: 1;
    }
  }
  &_rows{
    margin-top: 25rpx;
  }
  &_label{
    color: #3fc9d4;
    padding: 6rpx 20rpx;
    border-radius: 8rpx;
    margin-right: 30rpx;
    margin-bottom: 8rpx;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
    background: #ffffff;
    font-size: 14px;
    display: inline-block;
  }
  &_content{
    color: #666666;
    font-size: 14px;
    margin-top: 10rpx;
  }
  &_bottom{
    display: flex;
    background-color: #3fc9d4;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: #ffffff;
    font-size: 16px;
    &-item{
      flex: 1;
      border-right: 1rpx solid #ffffff;
      padding: 16px 0;
      display: block;
      &:last-child{
        border: 0;
      }
    }
    &-img{
      width: 32rpx;
      height: 32rpx;
      vertical-align: middle;
      margin-right: 8rpx;
      display: inline-block;
      margin-top: -1px;
    }
  }
}
</style>
