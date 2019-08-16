<template>
    <div class="search-layout-wrapper">
      <div class="side-bar side-left">
        <!-- expert info -->
        <expert-info></expert-info>
        <!-- tab bar  -->
        <transition :name="transitionName">
          <tab-bar></tab-bar>
        </transition>
        <!-- tab con -->
        <div class="tabConWrap">
            <div class="conItem">
              <!-- 论文 -->
              <ul v-if="showPaper">
                <li>
                  <h3>1、互联网时代中职计算机网络课程教学模式探索</h3>
                  <p><span>专利权人：xxx</span> <span>分类号：G06</span></p>
                  <div class="remark">
                    摘要：下一些过去沿用的授课模式受到冲击,在中式受到冲击,在中职的多的问题逐渐暴露看了......
                  </div>
                </li>
                 <li>
                  <h3>互联网时代中职计算机网络课程教学模式探索</h3>
                  <p><span>专利权人：xxx</span> <span>分类号：G06</span></p>
                  <div class="remark">
                    摘要：下一些过去沿用的授课模式受到冲击,在中式受到冲击,在中职的多的问题逐渐暴露看了......
                  </div>
                </li>
              </ul>
             <!-- <paper-list v-if="showPaper"></paper-list> -->
              <!-- 专利 -->
              <ul v-if="showPatent">
                <li>
                  <h3>2、互联网时代中职计算机网络课程教学模式探索</h3>
                  <p><span>专利权人：xxx</span> <span>分类号：G06</span></p>
                  <div class="remark">
                    摘要：下一些过去沿用的授课模式受到冲击,在中式受到冲击,在中职的多的问题逐渐暴露看了......
                  </div>
                </li>
                 <li>
                  <h3>互联网时代中职计算机网络课程教学模式探索</h3>
                  <p><span>专利权人：xxx</span> <span>分类号：G06</span></p>
                  <div class="remark">
                    摘要：下一些过去沿用的授课模式受到冲击,在中式受到冲击,在中职的多的问题逐渐暴露看了......
                  </div>
                </li>
              </ul>
              <!-- 标准 -->
              <ul v-if="showStandard">
                <li>
                  <h3>3、互联网时代中职计算机网络课程教学模式探索</h3>
                  <p><span>专利权人：xxx</span> <span>分类号：G06</span></p>
                  <div class="remark">
                    摘要：下一些过去沿用的授课模式受到冲击,在中式受到冲击,在中职的多的问题逐渐暴露看了......
                  </div>
                </li>
                 <li>
                  <h3>互联网时代中职计算机网络课程教学模式探索</h3>
                  <p><span>专利权人：xxx</span> <span>分类号：G06</span></p>
                  <div class="remark">
                    摘要：下一些过去沿用的授课模式受到冲击,在中式受到冲击,在中职的多的问题逐渐暴露看了......
                  </div>
                </li>
              </ul>
            </div>
          </div>
      </div>
      <div class="main-wrap">
        <header>
            <page-header
              title="知识图谱xx"
              class="title"
            />
          </header>
          <know-graph></know-graph>
      </div>
      <div class="side-right">
        <div class="btn">
          <span>返回</span>
          <span>回到首页</span>
        </div>
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
// import PaperList from './component/list-paper'
export default {
  name: 'SearchResult',
  components: {
    PageHeader,
    ExpertInfo,
    TabBar,
    // PaperList,
    KnowGraph,
    HotPannel,
    ExpertRec,
    ExpertPannel,
    TechPannel,
    OrgPannel
  },
  data () {
    return {
      tabBarData: [
        { name: '论文' },
        { name: '专利' },
        { name: '标准' }
      ],
      nowIndex: 0,
      title: '关键词',
      activeName: 'all',
      keyword: this.$route.params.searchKey,
      transitionName: 'slide-left'
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
      return this.nowIndex === 0
    },
    showPatent () {
      return this.nowIndex === 1
    },
    showStandard () {
      return this.nowIndex === 2
    }
  },
  watch: {
    routerKey () {
      return this.$route.params.searchKey
    },

    $route (to, from) {
      console.log(to)
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
    }
  }
}
</script>

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
  /* tab con */
.tabConWrap{
  height: 770px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 5px 8px 5px 0px;
}
.conItem li{
  width: 410px;
  height: 140px;
  border: 1px solid #4b6ff4;
  border-radius: 5px;
  background: rgba(46,67,145,0.3);
  color: #fff;
  padding:20px 15px;
  margin-bottom: 15px;
  letter-spacing: 1px;
  box-sizing: border-box;
}
.conItem li h3{
    font-size: 16px;
    padding-bottom: 15px;
  }
.conItem li p{
    font-size: 14px;
    line-height: 26px;
  }
.conItem li .remark{
    font-size:14px;
    line-height: 26px;
  }
</style>
