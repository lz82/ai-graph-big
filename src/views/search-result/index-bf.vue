<template>
    <div class="search-layout-wrapper">
      <div class="side-bar side-left">
        <h2 class='comm-title'>{{title}}信息</h2>
        <div class="wiki-wraper">
          <div class="wiki-info">
            <!-- <img src="./img/expert.jpg"> -->
            <div class="expert-intro">
              <h4>李飞飞</h4>
              <p>Stanford University</p>
              <p>计算机科学</p>
              <p>美国</p>
            </div>
          </div>
          <ul class="wiki-data">
            <li>
              <p>784</p>
              <span>总发文数</span>
            </li>
            <li>
              <p>784</p>
              <span>总发文数</span>
            </li>
            <li>
              <p>784</p>
              <span>总发文数</span>
            </li>
            <li>
              <p>78</p>
              <span>文数</span>
            </li>
          </ul>
        </div>
        <transition :name="transitionName">
          <ul class="tab-bar">
            <li class="item" v-for="(item, index) in tabBarData" :class="{'active': nowIndex===index}" @click='switchTab(item, index)' :key="index">
              {{item.name}}
            </li>
          </ul>
        </transition>
        <div class="tabConWrap">
            <div class="conItem">
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
                 <li>
                  <h3>1、互联网时代中职计算机网络课程教学模式探索</h3>
                  <p><span>专利权人：xxx</span> <span>分类号：G06</span></p>
                  <div class="remark">
                    摘要：下一些过去沿用的授课模式受到冲击,在中式受到冲击,在中职的多的问题逐渐暴露看了......
                  </div>
                </li>
              </ul>
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
          <div class="pannel-expert-wrapper">
            <h2 class="comm-title">同领域专家</h2>
            <ul>
              <li>
                <!-- <img src='./img/expert.jpg'> -->
                <div class="expert-info">
                  <h3>陶大程</h3>
                  <span>National University of Singapore</span>
                </div>
              </li>
              <li>
                <!-- <img src='./img/expert.jpg'> -->
                <div class="expert-info">
                  <h3>陶大程</h3>
                  <span>National University of Singapore</span>
                </div>
              </li>
              <li>
                <!-- <img src='./img/expert.jpg'> -->
                <div class="expert-info">
                  <h3>陶大程</h3>
                  <span>National University of Singapore</span>
                </div>
              </li>
            </ul>
          </div>

          <!-- 相关技术推荐 -->
          <div class="teach-wrapper text-wrapper">
            <h2 class="comm-title">相关技术推荐</h2>
            <ul>
              <li>Object recognition</li>
              <li>Supervised learning</li>
            </ul>
          </div>
          <!-- 合作机构 -->
          <div class="org-wrapper text-wrapper">
            <h2 class="comm-title">合作机构</h2>
            <ul>
              <li>Courant Institute of Mathematical Sciences</li>
              <li>Courant Institute of Mathematical Sciences</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import PageHeader from '@/components/page-header'
import KnowGraph from './graph'
export default {
  name: 'SearchResult',
  components: {
    PageHeader,
    KnowGraph
  },
  data () {
    return {
      title: '关键词',
      tabBarData: [
        { name: '论文' },
        { name: '专利' },
        { name: '标准' }
      ],
      nowIndex: 0,
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
  // background: url('~@/../img/bg.png') center no-repeat fixed;
  background-color: #10172d;
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

    // wiki-wraper
    .wiki-wraper{
      color: @fontColor;
      .wiki-info{
        display: flex;
        align-items: center;
        .expert-intro{
          padding-left: 20px;
          h4{
            font-size: 24px;
            font-weight: 500;
            padding-bottom: 10px;
          }
          p{
            line-height:30px;
          }
        }
      }
      img{
        width: 130px;
        height: 150px;
      }
    }

    // wiki data
    .wiki-data{
      display: flex;
      justify-content: space-between;
      padding: 20px 0 10px;
      li{
        width: 98px;
        height: 108px;
        background: @bgColor;
        border: 1px solid @borderColor;
        border-radius: 5px;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        p{
          font-size: 24px;
          padding-bottom: 18px;
        }
      }
    }

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
    // tab con
    .tabConWrap{
      height: 770px;
      overflow-y: scroll;
      overflow-x: hidden;
      padding: 5px 8px 5px 0px;
    }
    .conItem li{
      width: 410px;
      height: 140px;
      border: 1px solid @borderColor;
      border-radius: 5px;
      background: @bgColor;
      color: @fontColor;
      padding:20px 15px;
      margin-bottom: 15px;
      letter-spacing: 1px;
      box-sizing: border-box;
      h3{
        font-size: 16px;
        padding-bottom: 15px;
      }
      p{
        font-size: 14px;
        line-height: 26px;
      }
      .remark{
        font-size:14px;
        line-height: 26px;
      }
    }
  }
  .side-right-con{
    height: 860px;
    margin-top: 18px;
    color: #fff;
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
    // content
    .pannel-expert-wrapper{
      display: flex;
      color: #fff;
      flex-flow: column nowrap;
      ul{
        padding-bottom: 25px;
      }
      li{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 15px;
        img{
          width: 85px;
          height: 100px;
        }
        .expert-info{
          padding-left: 25px;
          font-size: 16px;
          line-height: 30px;
        }
      }
    }

    // org-wrapper
    .org-wrapper li{
      padding-top: 15px;
    }
    .teach-wrapper{
      ul{
        display: flex;
        flex-flow: row wrap;
        padding-bottom: 35px;
        li{
          text-decoration: underline;
          padding: 15px 25px 0 0;
        }
      }
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
  font-weight: 500px;
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
