<template>
    <div class="search-layout-wrapper">
      <div class="side-bar side-left">
        <h2 class='comm-title' v-html="getTitle"></h2>
        <!-- expert info -->
        <expert-info v-if="result && result.expertVO" :info='result.expertVO'></expert-info>
        <!-- tab bar  -->
        <tab-bar v-if="result"
          :tabContent='result'
          :keyword='keyword'
          :type='type'
          :class="{'tab-wrap-expert':isExpert(),'tab-wrap-key':!isExpert()}">
        </tab-bar>
      </div>
      <div class="main-wrap">
        <header>
            <page-header
              title="知识图谱"
              class="title"
            />
          </header>
          <know-graph
            v-if="result"
            :nodes='result.mapVO.nodes'
            :links='result.mapVO.relations'>
          </know-graph>
      </div>
      <div class="side-right">
        <btn-group></btn-group>
        <div class="side-bar side-right-con">
          <!-- 同领域专家 -->
          <expert-pannel v-if="showRelatedExpert" :list='result.mapVO.expertReco'></expert-pannel>

          <!-- 相关技术推荐 -->
          <tech-pannel v-if="showRelatedTech" :list='result.mapVO.subjectReco'></tech-pannel>

          <!-- 合作机构 -->
          <org-pannel v-if="showRelatedOrg" :list='result.mapVO.institutionsReco'></org-pannel>

          <!-- 热词推荐 -->
          <hot-pannel v-if="showHot"></hot-pannel>

          <!-- 专家推荐 -->
          <!-- <expert-rec></expert-rec> -->
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
// import ExpertRec from './component/pannel-expert-rec'
import ExpertPannel from './component/pannel-expert'
import TechPannel from './component/pannel-tech'
import OrgPannel from './component/pannel-org'
import BtnGroup from '@/components/btn-group'
import { searchApi } from '@/service'
import appConfig from '@/config'
export default {
  name: 'SearchResult',
  components: {
    PageHeader,
    ExpertInfo,
    TabBar,
    KnowGraph,
    HotPannel,
    // ExpertRec,
    ExpertPannel,
    TechPannel,
    OrgPannel,
    BtnGroup
  },
  data () {
    return {
      routerAlive: true,
      baseURL: appConfig.baseUrl,
      tabBarData: [
        { name: '论文' },
        { name: '专利' },
        { name: '标准' }
      ],
      type: '',
      nowIndex: 0,
      activeName: 'all',
      keyword: this.$route.params.searchKey,
      transitionName: 'slide-left',
      result: null
    }
  },

  provide () { // 在父组件中创建属性
    return {
      routerRefresh: this.routerRefresh
    }
  },
  async mounted () {
    await this.getData()
  },

  methods: {
    async getData () {
      try {
        const data = await searchApi.QueryDataByKeyword(this.keyword, this.type)
        if (data) {
          // console.log(data)
          this.result = data
          this.type = data.mapVO.nodes[0].type
          console.log(this.type)
        }
      } catch (error) {
        this.$message.error(error.toString())
      }
    },

    switchTab (item, index) {
      this.nowIndex = index
      // this.$root.evenHub.$emit('switchTab',item, index)
    },

    isExpert () {
      return this.result && this.result.expertVO
    },

    routerRefresh () {
      this.routerAlive = false
      this.$nextTick(() => { this.routerAlive = true })
    },

    getSubTitle (param) {
      switch (param) {
        case '知识库':
          return param + '<span class="subTitle"> Knowledge Base</span>'
        case '循环神经网络':
          return param + '<span class="subTitle"> Recurrent Neural Networks</span>'
        case '支持向量机':
          return param + '<span class="subTitle"> Support Vector Machine（SVM）</span>'
        case '度量学习':
          return param + '<span class="subTitle"> Metric Learning</span>'
        case '机器翻译':
          return param + '<span class="subTitle"> Machine Translation</span>'
        case '可解释性':
          return param + '<span class="subTitle"> Interpretability</span>'
        case '目标检测':
          return param + '<span class="subTitle"> Object Detection</span>'
        case '人脸识别':
          return param + '<span class="subTitle"> Face Recognition</span>'
        case '推荐系统':
          return param + '<span class="subTitle"> Recommender System</span>'
        case '无人驾驶':
          return param + '<span class="subTitle"> Autonomous Vehicle</span>'
        default:
          return param
      }
    }
  },

  computed: {
    getTitle () {
      return this.result && this.result.expertVO ? '专家信息' : this.getSubTitle(this.keyword)
    },
    showRelatedExpert () {
      return this.type !== 'other' &&
        this.result &&
        this.result.mapVO &&
        this.result.mapVO.expertReco &&
        this.result.mapVO.expertReco.length > 0
    },

    showRelatedTech () {
      return this.type !== 'other' &&
        this.result &&
        this.result.mapVO &&
        this.result.mapVO.subjectReco &&
        this.result.mapVO.subjectReco.length > 0
    },

    showRelatedOrg () {
      return this.result &&
        this.result.mapVO &&
        this.result.mapVO.institutionsReco &&
        this.result.mapVO.institutionsReco.length > 0
    },

    showHot () {
      // return true
      return !this.showRelatedExpert &&
        !this.showRelatedTech &&
        !this.showRelatedOrg
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
  // background: url('../home/img/bg.png') center no-repeat fixed;
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
      font-size: 28px;
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
.side-left .subTitle{
  font-size: 16px!important;
  font-weight: normal;
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
