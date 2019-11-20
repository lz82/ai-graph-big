<template>
  <div class="teach-wrapper text-wrapper">
    <pannel class="pannel">
      <template #title><span class="comm-title">相关技术推荐</span></template>
      <ul>
        <li v-for="item in list" :key="item">{{item}}</li>
      </ul>
    </pannel>
  </div>
</template>
<script>
import Pannel from '@/components/pannel'
export default {
  name: 'PannelTech',
  components: {
    Pannel
  },
  props: {
    list: Array
  },
  data () {
    return {
      // list: ['Object recognition', 'Supervised learning', 'learning (artificial intelligence)', 'Computer vision']
    }
  }

}
</script>
<style lang='less' scoped>
 @import '~@/style/variables.less';
.teach-wrapper{
  .pannel{
    margin-bottom: 15px;
  }
  ul{
    display: flex;
    flex-flow: row wrap;
    li{
      // text-decoration: underline;
      padding: 10px 25px 0 0;
    }
  }
}
</style>
