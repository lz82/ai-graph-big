<template>
    <div class="search-layout-wrapper">
      <div class="side-bar side-left">
        <h2 class='comm-title'>{{title}}信息</h2>
        <!-- expert info -->
        <expert-info v-if="isExpert()"></expert-info>
        <!-- tab bar  -->
        <tab-bar v-bind:class="{'tab-wrap-expert':isExpert(),'tab-wrap-key':!isExpert()}"></tab-bar>
      </div>
      <div class="main-wrap">
        <header>
            <page-header
              title="知识图谱"
              class="title"
            />
          </header>
          <know-graph></know-graph>
      </div>
      <div class="side-right">
        <btn-group></btn-group>
        <div class="side-bar side-right-con">
          <!-- 同领域专家 -->
          <expert-pannel></expert-pannel>

          <!-- 相关技术推荐 -->
          <tech-pannel></tech-pannel>

          <!-- 合作机构 -->
          <org-pannel></org-pannel>

          <!-- 热词推荐 -->
          <hot-pannel></hot-pannel>

          <!-- 专家推荐 -->
          <expert-rec></expert-rec>
        </div>
      </div>
    </div>
</template>

<script>
import PageHeader from '@/components/page-header'
import ExpertInfo from './component/expert-info'
import TabBar from './component/tab-bar'
import KnowGraph from './component/knowledge-graph'
import HotPannel from './component/pannel-hot'
import ExpertRec from './component/pannel-expert-rec'
import ExpertPannel from './component/pannel-expert'
import TechPannel from './component/pannel-tech'
import OrgPannel from './component/pannel-org'
import BtnGroup from '@/components/btn-group'
import { searchApi } from '@/service'
export default {
  name: 'SearchResult',
  components: {
    PageHeader,
    ExpertInfo,
    TabBar,
    KnowGraph,
    HotPannel,
    ExpertRec,
    ExpertPannel,
    TechPannel,
    OrgPannel,
    BtnGroup
  },
  data () {
    return {
      tabBarData: [
        { name: '论文' },
        { name: '专利' },
        { name: '标准' }
      ],
      type: 'expert',
      nowIndex: 0,
      title: '专家',
      activeName: 'all',
      keyword: this.$route.params.searchKey,
      transitionName: 'slide-left',
      paperList: [],
      patentList: [],
      standardList: []
    }
  },

  created () {
    this.getData()
  },

  methods: {
    async getData () {
      try {
        const data = await searchApi.QueryDataByKeyword(this.keyword, this.type)
        if (data) {
          console.log(data)
          this.paperList = data.paperList
          this.patentList = data.patentList
          this.standardList = data.standardList
        }
      } catch (error) {

      }
    },

    switchTab (item, index) {
      this.nowIndex = index
      // this.$root.evenHub.$emit('switchTab',item, index)
    },

    isExpert () {
      return this.title === '专家'
    }
  },

  watch: {
    routerKey () {
      return this.$route.params.searchKey
    },

    $route (to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
    }
  }
}
</script>
<style>
.tab-wrap-expert{
  height: 485px;
}
.tab-wrap-key{
  height: 770px;
}
</style>
<style lang="less"  scoped>
@import '~@/style/variables.less';
.search-layout-wrapper{
  position: relative;
  width: 1920px;
  height: 1080px;
  background: url('../home/img/bg.png') center no-repeat fixed;
  background-size: cover;
  display: flex;
  padding: 50px 55px;
  box-sizing: border-box;
  .side-bar{
    border-radius: 5px;
    border:1px solid @borderColor;
    background: @bgColor;
    box-sizing: border-box;
  }
  .side-left{
    flex: 0 0 450px;
    padding: 30px 10px 30px 20px;
    h2{
      font-size: 20px;
      color: @fontColor;
    }
  }
  .side-right-con{
    height: 860px;
    margin-top: 18px;
    color: #fff;
    overflow-y: scroll;
  }
  .side-right{
    flex: 0 0 450px;
    .btn {
      height: 80px;
      display: flex;
      justify-content: space-between;
      flex-flow: row nowrap;
      align-items: center;
      color: #fff;
      font-size: 16px;
      margin-top: 20px;
      span {
        background: #2e4391;
        border-radius: 10px;
        width: 220px;
        height: 50px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
      }
    }
    .side-right-con{
      padding: 15px 30px 35px;
    }
    // org-wrapper
    .org-wrapper li{
      padding-top: 15px;
    }
  }
  .main-wrap{
    max-width: 910px;
    flex: 0 0 910px;
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    header {
      display: flex;
      justify-content: center;
      .title {
        // position: absolute;
        // left: 535px;
      }
    }
  }
}
</style>
<style>
.comm-title{
  padding: 15px 0;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
}
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
width: 5px;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
/* -webkit-box-shadow: inset 0 0 3px rgba(75,111,244,0.3); */
border-radius: 5px;
background-color: rgba(0,0,0,0);
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
border-radius: 5px 5px;
/* -webkit-box-shadow: inset 0 0 4px rgba(75,111,244,.3); */
background-color: #4b6ff4;
height: 20px!important;
}
</style>
