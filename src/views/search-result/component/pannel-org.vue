<template>
  <div class="org-wrapper text-wrapper">
    <pannel class="pannel">
      <template #title><span class="comm-title">{{title}}</span></template>
      <ul>
        <li v-for="item in list" :key="item">
          {{item}}
        </li>
      </ul>
    </pannel>
  </div>
</template>
<script>
import Pannel from '@/components/pannel'
export default {
  name: 'OrgPannel',
  components: {
    Pannel
  },
  props: {
    list: Array
  },
  data () {
    return {
      title: '合作机构'
    }
  }

}
</script>
<style lang='less' scoped>
 @import '~@/style/variables.less';
 .org-wrapper{
   padding-bottom: 30px;
   ul{
    display: flex;
    flex-flow: row wrap;
    li{
      padding: 15px 25px 0 0;
    }
  }
 }

</style>
