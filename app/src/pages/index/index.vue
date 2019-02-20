<template>
  <div class="hx-index">

    <search></search>
    <img class="hx-index_banner" src="../../images/banner.png" alt="">
     <!-- <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a> -->
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

  methods: {
  },

  created () {
    let app = getApp()
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
}
</style>
