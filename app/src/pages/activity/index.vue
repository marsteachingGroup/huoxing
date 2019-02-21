<template>
  <div class="hx-activity">
      <search></search>
       <div class="hx-activity_content">

        <div class="hx-activity_rows">
          <p class="hx-activity_title">广州大学校园营销挑战赛开赛啦!</p>
          <div class="hx-activity_detail">
            <div class="hx-activity_images" >
              <img src="../../images/text.png" alt="">
            </div>
            <div class="hx-activity_info">
              <div class="hx-activity_tag">
                <div class="hx-activity_tag-item">校级</div>
                <div class="hx-activity_tag-item">营销实践</div>
              </div>
              <div class="hx-activity_brief">活动简介活动简介活动活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介简介活动简介活动简介活动简介活动简介活动简介活动简介</div>
              <div class="hx-activity_times">简历提交截止时间：2018年12月11日</div>
            </div>
          </div>

          <div class="hx-activity_views">
            <div class="hx-activity_views-rows">
              <img class="hx-activity_views-img" src="../../images/heart.png" alt="">
              <span class="hx-activity_views-num">200</span>
            </div>
            <div class="hx-activity_views-rows">
              <img class="hx-activity_views-img" src="../../images/start.png" alt="">
              <span class="hx-activity_views-num">20</span>
            </div>
          </div>
        </div>
        <div class="hx-activity_rows">
          <p class="hx-activity_title">广州大学校园营销挑战赛开赛啦!</p>
          <div class="hx-activity_detail">
            <div class="hx-activity_images" >
              <img src="../../images/text.png" alt="">
            </div>
            <div class="hx-activity_info">
              <div class="hx-activity_tag">
                <div class="hx-activity_tag-item">校级</div>
                <div class="hx-activity_tag-item">营销实践</div>
              </div>
              <div class="hx-activity_brief">活动简介活动简介活动活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介简介活动简介活动简介活动简介活动简介活动简介活动简介</div>
              <div class="hx-activity_times">简历提交截止时间：2018年12月11日</div>
            </div>
          </div>

          <div class="hx-activity_views">
            <div class="hx-activity_views-rows">
              <img class="hx-activity_views-img" src="../../images/heart.png" alt="">
              <span class="hx-activity_views-num">200</span>
            </div>
            <div class="hx-activity_views-rows">
              <img class="hx-activity_views-img" src="../../images/start.png" alt="">
              <span class="hx-activity_views-num">20</span>
            </div>
          </div>
        </div>

        <div class="hx-activity_rows">
          <p class="hx-activity_title">广州大学校园营销挑战赛开赛啦!</p>
          <div class="hx-activity_detail">
            <div class="hx-activity_images" >
              <img src="../../images/text.png" alt="">
            </div>
            <div class="hx-activity_info">
              <div class="hx-activity_tag">
                <div class="hx-activity_tag-item">校级</div>
                <div class="hx-activity_tag-item">营销实践</div>
              </div>
              <div class="hx-activity_brief">活动简介活动简介活动活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介简介活动简介活动简介活动简介活动简介活动简介活动简介</div>
              <div class="hx-activity_times">简历提交截止时间：2018年12月11日</div>
            </div>
          </div>

          <div class="hx-activity_views">
            <div class="hx-activity_views-rows">
              <img class="hx-activity_views-img" src="../../images/heart.png" alt="">
              <span class="hx-activity_views-num">200</span>
            </div>
            <div class="hx-activity_views-rows">
              <img class="hx-activity_views-img" src="../../images/start.png" alt="">
              <span class="hx-activity_views-num">20</span>
            </div>
          </div>
        </div>

      </div>
  </div>
</template>

<script>
import search from '@/components/search'
export default {

  data () {
    return {
    }
  },
  components: {
    search
  },
  created () {
  }
}
</script>
<style lang="scss" scoped>
.hx-activity{
  min-height: 100vh;
  padding-bottom: 30rpx;
  background-color:#f4f4f7;
  &_rows{
    padding: 10px 30rpx;
    background-color: #ffffff;
    margin-bottom: 20rpx;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
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
    margin-bottom: 15rpx;
    padding-top: 10rpx;
    &-item{
      color: #8a3d85;
      border-radius: 4px;
      border: 1rpx solid;
      padding: 3rpx 15rpx;
      margin-right: 14rpx;
    }
  }
  &_brief{
    font-size: 14px;
    color: #888888;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  &_times{
    font-size: 12px;
    color: #b2b2b2;
    margin-top: 20rpx;
  }
  &_views{
    border: 1rpx solid #d2d2d2;
    display: flex;
    border-radius: 4px;
    align-items: center;
    &-rows{
      padding: 5rpx 0;
      flex: 1;
      text-align: center;
      &:first-child{
        border-right: 1rpx solid #d2d2d2;
      }
    }
    &-img{
      width: 25rpx;
      height: 25rpx;
      vertical-align: middle;
      margin-right: 5rpx;
      display: inline-block;
      margin-top: -1px;
    }
    &-num{
      font-size: 14px;
      color: #888888;
    }
  }
}
</style>
