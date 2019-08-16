<template>
  <div class="hot-pannel-wrapper">
    <h3 class="comm-title">专家推荐</h3>
    <ul>
      <li v-for="item in list2" :key="item" @click="goSearch(item)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ExpertRecPannel',

  data () {
    return {
      list2: ['吴恩达', '周志华', '韩家炜', 'Geoffrey Hinton', 'Yoshua Bengio', 'Yann Lecun', 'Michael I. Jordan', '谭铁牛', '李飞飞', 'Sebastian Thrun']
    }
  },

  methods: {
    goSearch (keyword) {
      // this.$router.push(`/search/result/${keyword}`)
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/style/variables.less';

  .hot-pannel-wrapper {
    padding-top: 30px;
    .comm-title{
      padding: 15px 0;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
    }
    ul {
      margin-bottom: 25px;
      display: flex;
      flex-flow: row wrap;
      li {
        font-size: 16px;
        color: #fff;
        margin-right: 20px;
        line-height: 30px;
        cursor: pointer;
      }
    }
  }
</style>
