<template>
  <div class="hx-search">
    <input v-model="keyword" class="hx-search_input" type="text">
    <div class="hx-search_word" v-if="keyword === ''"><img  class="hx-search_icon" src="../images/search.png" alt="">搜索实践活动</div>
  </div>
</template>

<script>
export default {
  props: [],
  data () {
	  return {
			keyword: ''
	  }
	}
}
</script>

<style lang="scss" scoped>
.hx-search{
  background-color: #3fc9d4;
  padding: 16rpx 30rpx;
  position: relative;
  &_input{
    background-color: #ffffff;
    border-radius: 8rpx;
    font-size: 28rpx;
    padding: 5rpx 0 5rpx 5rpx;
  }
  &_word{
    position: absolute;
    width: 100%;
    left: 0;
    text-align: center;
    font-size: 24rpx;
    top: 27.5rpx;
    color:#b2b2b2;
  }
  &_icon{
    width: 22rpx;
    height: 22rpx;
    display: inline-block;
    margin-right: 12rpx;
    vertical-align: middle;
    margin-top: -2rpx;
  }
}
</style>
