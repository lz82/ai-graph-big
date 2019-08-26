<template>
  <div class="org-wrapper text-wrapper">
    <h2 class="comm-title">{{title}}</h2>
    <ul>
      <li v-for="item in list" :key="item">
        {{item}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'OrgPannel',
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
ul{
  display: flex;
  flex-flow: row wrap;
  padding-bottom: 35px;
  li{
    padding: 15px 25px 0 0;
  }
}
</style>
