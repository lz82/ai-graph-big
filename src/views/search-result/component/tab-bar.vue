<template>
  <ul class="tab-bar">
    <li class="item" v-for="(item, index) in tabBarData" :class="{'active': nowIndex===index}" @click='switchTab(item, index)' :key="index">
      {{item.name}}
    </li>
  </ul>
</template>
<script>
export default {
  name: 'TabBar',

  data () {
    return {
      tabBarData: [
        { name: '论文' },
        { name: '专利' },
        { name: '标准' }
      ],
      nowIndex: 0
    }
  },

  methods: {
    switchTab (item, index) {
      this.nowIndex = index
      // this.$root.evenHub.$emit('switchTab',item, index)
    }
  },

  computed: {
    // showPaper () {
    //   return this.nowIndex === 0
    // },
    // showPatent () {
    //   return this.nowIndex === 1
    // },
    // showStandard () {
    //   return this.nowIndex === 2
    // }
  }
}
</script>
<style lang='less' scoped>
 @import '~@/style/variables.less';
  .tab-bar{
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #4b6ff4;
    font-size: 16px;
    height: 50px;
    border-bottom:2px solid @borderColor;
    margin: 20px 0;
  }
  .tab-bar .item{
    padding: 19px 20px;
  }
  .tab-bar .item.active{
    color: @fontColor;
    border-bottom:3px solid #fff;
    padding-bottom:19px;
  }
</style>
