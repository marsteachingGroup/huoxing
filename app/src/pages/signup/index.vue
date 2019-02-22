<template>
  <div v-if="aid !== ''">
    <web-view :src="url"></web-view>
  </div>
</template>

<script>
export default {

  data () {
    return {
      aid: '',
      url: ''
    }
  },
  onLoad ({aid}) {
    this.aid = aid
    this.url = 'https://marsco.online/activity/index?aid=' + this.aid
  }
}
</script>
