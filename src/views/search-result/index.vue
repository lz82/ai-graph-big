<template>
    <div class="search-layout-wrapper">
      <div class="side-bar side-left">
        <div class="subject-title-wrapper">
          <pannel class="pannel" v-if="getTitle">
            <span class='comm-title' v-html="getTitle"></span>
          </pannel>
        </div>
        <!-- expert info -->
        <expert-info v-if="result && result.expertVO" :info='result.expertVO'></expert-info>

        <!-- <div class="side-subject-wrapper"> -->
          <div class="side-bar side-subject-con" v-if="result && !result.expertVO">
            <!-- 维基词条 -->
            <wiki-entry v-if="result && !result.expertVO" :info='result.subjectVO'></wiki-entry>
            <!-- 同领域专家 -->
            <expert-pannel v-if="showRelatedExpert" :list='result.mapVO.expertReco'></expert-pannel>

            <!-- 相关技术推荐 -->
            <tech-pannel v-if="showRelatedTech" :list='result.mapVO.subjectReco'></tech-pannel>

            <!-- 合作机构 -->
            <org-pannel v-if="showRelatedOrg" :list='result.mapVO.institutionsReco'></org-pannel>

            <!-- 热词推荐 -->
            <!-- <hot-pannel v-if="showHot"></hot-pannel> -->

            <!-- 专家推荐 -->
            <!-- <expert-rec></expert-rec> -->
          </div>
        <!-- </div> -->

      </div>
      <div class="main-wrap">
          <graph-detail
            v-if="result"
            :nodes='result.mapInfo.nodes'
            :links='result.mapInfo.relations'
            v-on:changeKey="changeKey"
          ></graph-detail>
      </div>
      <div class="side-tab-wrapper">
        <!-- tab bar  -->
        <tab-bar v-if="result"
          :tabContent='result'
          :keyword='keyword'
          :type='type'
          :class="{'tab-wrap-expert':isExpert(),'tab-wrap-key':!isExpert()}">
        </tab-bar>

      </div>
    </div>
</template>

<script>
import ExpertInfo from './component/expert-info'
import TabBar from './component/tab-bar'
import WikiEntry from './component/wiki-entry'
import GraphDetail from '../graph'
import ExpertPannel from './component/pannel-expert'
import TechPannel from './component/pannel-tech'
import OrgPannel from './component/pannel-org'
import { searchApi } from '@/service'
import appConfig from '@/config'
import Pannel from '@/components/pannel'

export default {
  name: 'SearchResult',
  components: {
    ExpertInfo,
    TabBar,
    WikiEntry,
    GraphDetail,
    ExpertPannel,
    TechPannel,
    OrgPannel,
    Pannel
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
        const data = await searchApi.QueryDataByKeyword(this.keyword)
        if (data) {
          // console.log(data)
          this.result = data
          this.type = data.mapVO.nodes[0].type
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
          return `<b class='title'>${param}</b><br><span class="sub-title"> Knowledge Base</span>`
        case '循环神经网络':
          return `<b class='title'>${param}</b><br><span class="sub-title"> Recurrent Neural Networks</span>`
        case '支持向量机':
          return `<b class='title'>${param}</b><br><span class="sub-title"> Support Vector Machine（SVM）</span>`
        case '度量学习':
          return `<b class='title'>${param}</b><br><span class="sub-title"> Metric Learning</span>`
        case '机器翻译':
          return `<b class='title'>${param}</b><br><span class="sub-title"> Machine Translation</span>`
        case '可解释性':
          return `<b class='title'>${param}</b><br><span class="sub-title"> Interpretability</span>`
        case '目标检测':
          return `<b class='title'>${param}</b><br><span class="sub-title"> Object Detection</span>`
        case '人脸识别':
          return `<b class='title'>${param}</b><br><span class="sub-title"> Face Recognition</span>`
        case '推荐系统':
          return `<b class='title'>${param}</b><br><span class="sub-title"> Recommender System</span>`
        case '无人驾驶':
          return `<b class='title'>${param}</b><br><span class="sub-title"> Autonomous Vehicle</span>`
        default:
          return `<b class='title'>${param}</b>`
      }
    },
    changeKey (newKey) {
      this.keyword = newKey
      this.getData()
    }
  },

  computed: {
    getTitle () {
      return this.result && this.result.expertVO ? '' : this.getSubTitle(this.keyword)
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
    },
    keyword1 (val, oldval) {
      if (oldval !== val) {
        this.getData()
      }
    }
  }
}
</script>

<style lang="less"  scoped>
@import '~@/style/variables.less';
.search-layout-wrapper{
  display: flex;
  box-sizing: border-box;
  .side-bar{
    box-sizing: border-box;
  }

  .side-left{
    width: 630px;
    height: 524px;
    flex: 0 0 640px;
    padding-top: 20px;
    overflow-y: scroll;
    .subject-title-wrapper{
      padding-right: 5px;
      .pannel{
        height: 70px;
      }
      .comm-title{
        position: relative;
        top: -5px;
        /deep/ .title{
          font-size: 26px;
          color: @fontColor;
          box-sizing: border-box;
          font-weight: 600;
        }
        /deep/ .sub-title{
          color: #fff;
          font-weight: normal!important;
          font-size: 16px;
          position: relative;
          top: 3px;
        }
      }
    }
  }
  .side-subject-con{
    // margin-top: 18px;
    color: #fff;
    overflow-y: scroll;
    // padding: 15px 30px 35px;
  }

  .side-tab-wrapper{
    flex: 0 0 640px;
    .org-wrapper li{
      padding-top: 15px;
    }
  }
  .main-wrap{
    width: 800px;
    flex: 0 0 800px;
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }
}
</style>
<style>
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
width: 5px;
height: 5px;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
/* -webkit-box-shadow: inset 0 0 3px rgba(75,111,244,0.3); */
border-radius: 4px;
background-color: rgba(0,0,0,0);
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
border-radius: 5px 5px;
/* -webkit-box-shadow: inset 0 0 4px rgba(75,111,244,.3); */
background-color: #3bcef8;
height: 5px!important;
}
</style>
