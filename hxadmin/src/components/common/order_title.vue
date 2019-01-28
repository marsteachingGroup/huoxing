<template>
  <div class="jfk-order-title">
    <div v-text="title"></div>
  </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {}
    },
    props: {
      title: String
    },
    methods: {},
    created () {
    }
  }
</script>

<style scoped lang="postcss">
  .jfk-order-title {
    font-size: 18px;
    padding: 0 10px;
    font-family: "Microsoft YaHei";
    font-weight: 400;
    position: relative;
    &::after {
      position: absolute;
      content: '';
      left: 0;
      top: 50%;
      background-color: #b2945e;
      width: 3px;
      height: 17px;
      transform:translate(0, -50%);
      border-radius: 3px;
    }
  }
</style>
