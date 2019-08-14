<template>
  <div class="category-wrapper">
    this is category page
    <router-link to="/">back</router-link>
  </div>
</template>

<script>
export default {
  name: 'Category',

  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
  .category-wrapper {
    position: relative;
    width: 1920px;
    height: 1080px;
    background: url('../home/img/bg.png') center no-repeat fixed;
    background-size: cover;

    color: #fff;
    font-size: 36px;
  }
</style>
