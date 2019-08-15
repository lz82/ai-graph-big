<template>
  <div class="page-header-wrapper">
    <div class="left"></div>
    <div class="title">{{title}}</div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',

  props: {
    title: {
      type: String,
      required: true
    }
  },

  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
  .page-header-wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 850px;
    height: 80px;
    .left {
      flex: 0 0 260px;
      height: 80px;
      background: url('./img/left.png') no-repeat 0 35px;
    }

    .right {
      flex: 0 0 260px;
      height: 80px;
      background: url('./img/right.png') no-repeat 0 35px;
    }

    .title {
      flex: 1 1 auto;
      color: #fff;
      font-size: 24px;
      text-align: center;
    }
  }
</style>
