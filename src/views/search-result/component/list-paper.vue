<template>
  <div class="paper-list-wraper">
     <ul>
        <li v-for="item in list" :key="item.id">
          <h3>{{item.title}}</h3>
          <p><span>专利权人：{{item.author}}</span> <span>分类号：G06</span></p>
          <div class="remark">
            摘&nbsp;&nbsp;要：{{item.summary}}
          </div>
        </li>
          <!-- <li>
          <h3>互联网时代中职计算机网络课程教学模式探索</h3>
          <p><span>专利权人：xxx</span> <span>分类号：G06</span></p>
          <div class="remark">
            摘要：下一些过去沿用的授课模式受到冲击,在中式受到冲击,在中职的多的问题逐渐暴露看了......
          </div>
        </li>
          <li>
          <h3>1、互联网时代中职计算机网络课程教学模式探索</h3>
          <p><span>专利权人：xxx</span> <span>分类号：G06</span></p>
          <div class="remark">
            摘要：下一些过去沿用的授课模式受到冲击,在中式受到冲击,在中职的多的问题逐渐暴露看了......
          </div>
        </li> -->
      </ul>
  </div>
</template>
<script>
import { searchApi } from '@/service'
export default {
  name: 'PaperList',

  data () {
    return {
      keyword: '李飞飞',
      type: 'expert',
      list: null
    }
  },

  created () {
    this.getData()
  },

  methods: {
    async getData () {
      const paperList = await searchApi.QueryPaperByKeyword(this.keyword, this.type)
      console.log(paperList[0])
      if (paperList) {
        this.list = paperList
      }
    }
  }

}
</script>
<style scoped>

</style>
