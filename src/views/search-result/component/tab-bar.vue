<template>
  <div class="tab-wrapper">
    <ul class="tab-bar">
      <li
        class="item"
        v-for="(item, index) in tabBarData"
        :class="{'active': nowIndex===index}"
        @click="switchTab(item, index)"
        :key="index"
      >{{item.name}}</li>
    </ul>
    <!-- tab con -->
    <div class="tabConWrap">
      <div class="conItem">
        <!-- 论文 -->
        <ul v-if="showPaper">
          <li v-for="item in tabContent.paperVO" :key="item.id">
            <h3>{{item.title}}</h3>
            <p>
              <span v-html="'作者：'+item.author"></span>
              <span>发表时间：{{item.publishDate}}</span>
              <!-- <span>被引指数：{{item.citedIndex}}</span> -->
            </p>
            <div class="remark">摘&nbsp;&nbsp;要：{{item.summaryAll}}</div>
          </li>
        </ul>
        <!-- 专利 -->
        <ul v-if="showPatent">
          <li v-for="item in tabContent.patentVO" :key="item.id">
            <h3>{{item.title}}</h3>
            <p>
              <span v-html="'专利权人：'+item.inventor"></span>
              <span>分类号：{{item.categoryNo}}</span>
            </p>
            <div class="remark">摘&nbsp;&nbsp;要：{{item.summaryAll}}</div>
          </li>
        </ul>
        <!-- 标准 -->
        <ul v-if="showStandard">
          <li v-for="item in tabContent.standardVO" :key="item.id">
            <h3 v-html="item.nameCN"></h3>
            <p>
              <span>标准号：{{item.standardNo}}</span>
              <!-- <span>发布时间：{{item.publishDate}}</span> -->
              <!-- <span>状态：{{item.status}}</span> -->
            </p>
            <div class="remark">摘&nbsp;&nbsp;要：{{item.summaryAll}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabBar',

  props: {
    tabContent: Object
  },

  data () {
    return {
      tabBarData: [{ name: '论文' }, { name: '专利' }, { name: '标准' }],
      nowIndex: 0,
      keyword: '李飞飞',
      type: 'expert'
    }
  },

  methods: {
    switchTab (item, index) {
      this.nowIndex = index
      // this.$root.evenHub.$emit('switchTab',item, index)
    }
  },

  computed: {
    showPaper () {
      return this.nowIndex === 0 && this.tabContent.paperVO.length > 0
    },
    showPatent () {
      return this.nowIndex === 1 && this.tabContent.patentVO.length > 0
    },
    showStandard () {
      return this.nowIndex === 2 && this.tabContent.standardVO.length > 0
    }
  }
}
</script>
<style>
.tabConWrap .conItem .highlight {
  background-color: rgba(0, 0, 0, 0) !important;
  color: #fff!important;
}
</style>
<style lang='less' scoped>
@import "~@/style/variables.less";
.tab-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #4b6ff4;
  font-size: 16px;
  height: 50px;
  border-bottom: 2px solid @borderColor;
  margin: 20px 0;
}
.tab-bar .item {
  padding: 19px 20px;
}
.tab-bar .item.active {
  color: @fontColor;
  border-bottom: 3px solid #fff;
  padding-bottom: 16px;
}
/* tab con */
.tabConWrap {
  // height: 770px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 5px 8px 5px 0px;
  .conItem li {
    width: 410px;
    height: 140px;
    border: 1px solid #4b6ff4;
    border-radius: 5px;
    background: rgba(46, 67, 145, 0.3);
    color: #fff;
    padding: 20px 15px;
    margin-bottom: 15px;
    letter-spacing: 1px;
    box-sizing: border-box;
  }
  .conItem li h3 {
    font-size: 16px;
    padding-bottom: 15px;
  }
  .conItem li p {
    font-size: 14px;
    line-height: 26px;
    display: flex;
    justify-content: space-between;
  }
  .conItem li .remark {
    font-size: 14px;
    line-height: 26px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
}
</style>
