<template>
  <div class="hot-pannel-wrapper">
    <pannel class="pannel">
      <template #title>
        <span class="comm-title">热词推荐</span>
      </template>
      <ul>
        <li v-for="item in list1" :key="item">{{item}}</li>
      </ul>
      <ul>
        <li v-for="item in list2" :key="item">{{item}}</li>
      </ul>
    </pannel>
  </div>
</template>

<script>
import Pannel from '@/components/pannel'
export default {
  name: 'HotPannel',
  components: {
    Pannel
  },
  inject: ['routerRefresh'], // 在子组件中注入在父组件中出创建的属性
  data () {
    return {
      list1: ['知识库', '机器学习', '支持向量机', '人脸识别', '模式识别', '深度学习', '卷积神经网络', '人工智能', '计算机视觉', '自然语言处理'],
      list2: ['吴恩达', '周志华', '韩家炜', 'Geoffrey Hinton', 'Yoshua Bengio', 'Yann Lecun', 'Michael I. Jordan', '谭铁牛', '李飞飞', 'Sebastian Thrun']
    }
  },

  methods: {
    goSearch (keyword) {
      this.$router.push(`/search/${keyword}`)
      this.routerRefresh()
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/style/variables.less';

  .hot-pannel-wrapper {
    padding-top: 15px;
    // .comm-title{
    //   padding: 15px 0;
    //   color: #fff;
    //   font-size: 20px;
    //   font-weight: 600;
    // }
    ul {
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
  .hot-pannel-wrapper ul:nth-of-type(2){
    padding-top: 25px;
  }
</style>
