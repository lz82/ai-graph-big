<template>
  <div class="btn-group-wrapper">
      <span @click="onBackClick">返回</span>
      <span @click="onHomeClick">回到首页</span>
  </div>
</template>

<script>
export default {
  name: 'BtnGroup',

  methods: {
    onBackClick () {
      this.$router.go(-1)
    },

    onHomeClick () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
  .btn-group-wrapper {
    height: 80px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    color: #fff;
    font-size: 16px;
    span {
      margin-right: 15px;
      background: #2e4391;
      border-radius: 10px;
      width: 220px;
      height: 50px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
    }
  }
</style>
