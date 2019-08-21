<template>
  <div class="teach-wrapper text-wrapper">
    <h2 class="comm-title">相关技术推荐</h2>
    <ul>
      <li v-for="item in list" :key="item">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'PannelTech',
  data () {
    return {
      list: ['Object recognition', 'Supervised learning', 'learning (artificial intelligence)', 'Computer vision']
    }
  }

}
</script>
<style lang='less' scoped>
 @import '~@/style/variables.less';
.teach-wrapper{
  ul{
    display: flex;
    flex-flow: row wrap;
    padding-bottom: 35px;
    li{
      text-decoration: underline;
      padding: 15px 25px 0 0;
    }
  }
}
</style>
