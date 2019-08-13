<template>
  <div class="home-wrapper">
    <div class="logo">
      <img :src="logo" alt="">
    </div>
    <div class="title">
      <img :src="title" alt="">
    </div>
    <div class="map-wrapper">
        <img id="map" :src="map" alt="">

        <Count
          :num="123999"
          type="europe"
          txt="欧洲专利局"
          class="cnt europe"
          v-if="showEupo"
        />

        <Count
          :num="223344"
          type="china"
          txt="中国"
          class="cnt china"
          v-if="showChina"
        />

        <Count
          :num="556677"
          type="canada"
          txt="加拿大"
          class="cnt canada"
          v-if="showCanada"
        />

        <Count
          :num="77886"
          type="usa"
          txt="美国"
          class="cnt usa"
          v-if="showUsa"
        />

    </div>
    <div class="light-wrapper">
      <img id="light" :src="light" alt="">
    </div>
    <div class="cloud-left">
      <tag-cloud
        :tags="tags"
        v-if="showCloud"
      />
    </div>
    <!-- <div>
      <tag-cloud
        class="cloud-right"
        :tags="tags"
      />
    </div> -->
  </div>
</template>

<script>
import logo from './img/logo.png'
import title from './img/title.png'
import map from './img/map.png'
import shadow from './img/map-shadow.png'
import light from './img/light.png'

import anime from 'animejs'

import Count from './count'
import TagCloud from './tag-cloud'

import tagAward from './img/ball_award.png' // 成果奖项
// import tagBook from './img/ball_book.png' // 软著
// import tagData from './img/ball_data.png' // 运营商数据
import tagEnterprise from './img/ball_enterprise.png' // 科技企业
import tagExpert from './img/ball_expert.png' // 专家
import tagInvest from './img/ball_invest.png' // 投资机构
import tagNews from './img/ball_news.png' // 新闻头条
import tagPaper from './img/ball_paper.png' // 论文
import tagPatent from './img/ball_patent.png' // 专利
import tagPolicy from './img/ball_policy.png' // 政策
import tagProject from './img/ball_pro.png' // 立项项目
import tagTrade from './img/ball_trade.png' // 技术交易

export default {
  name: 'Homepage',

  components: {
    Count,
    TagCloud
  },

  data () {
    return {
      logo: logo,
      title: title,
      map: map,
      shadow: shadow,
      light: light,
      showEupo: false,
      showChina: false,
      showCanada: false,
      showUsa: false,
      showCloud: false,
      tags: [
        {
          // 成果奖项
          img: tagAward,
          url: '/report/award'
        },
        {
          // 科技企业
          img: tagEnterprise,
          url: '/report/enterprise'
        },
        {
          // 专家
          img: tagExpert,
          url: '/report/expert'
        },
        {
          // 投资机构
          img: tagInvest,
          url: '/report/invest'
        },
        {
          // 新闻头条
          img: tagNews,
          url: '/report/news'
        },
        {
          // 论文
          img: tagPaper,
          url: '/report/paper'
        },
        {
          // 专利
          img: tagPatent,
          url: '/report/patent'
        },
        {
          // 政策
          img: tagPolicy,
          url: '/report/policy'
        },
        {
          // 立项项目
          img: tagProject,
          url: '/report/project'
        },
        {
          // 标准
          img: tagTrade,
          url: '/report/trade'
        }
      ]
    }
  },

  mounted () {
    this.initLogo()
    this.initTitle()
    setTimeout(() => {
      this.initMap()
    }, 900)
    setTimeout(() => {
      this.showEupo = true
    }, 3100)
    setTimeout(() => {
      this.showChina = true
    }, 3500)
    setTimeout(() => {
      this.showCanada = true
    }, 4300)
    setTimeout(() => {
      this.showUsa = true
    }, 5000)
    setTimeout(() => {
      this.showCloud = true
    }, 2000)
  },

  methods: {
    initLogo () {
      anime({
        targets: '.logo img',
        duration: 900,
        opacity: {
          value: [0, 1]
        },
        loop: false,
        easing: 'linear',
        // scale: {
        //   value: [0.2, 1]
        // }
        translateY: {
          value: [20, 0]
        }
      })
    },

    initTitle () {
      anime({
        targets: '.title img',
        duration: 900,
        opacity: {
          value: [0, 1]
        },
        loop: false,
        easing: 'linear',
        translateY: {
          value: [-20, 0]
        }
        // scale: {
        //   value: [0.2, 1]
        // }
      })
    },

    initMap () {
      anime.timeline({
        duration: 300,
        loop: false,
        easing: 'linear'
      })
        .add({
          targets: '.map-wrapper',
          opacity: {
            value: [0, 1]
          }
        })
        .add({
          targets: '#light',
          duration: 700,
          opacity: {
            value: [0, 1]
          }
        })
        .add({
          targets: '#map',
          duration: 700,
          opacity: {
            value: [0, 1]
          },
          loop: false,
          easing: 'linear',
          translateY: {
            value: [46, 0]
          }
        })
    }
  }
}
</script>

<style lang="less" scoped>
  .home-wrapper {
    position: relative;
    width: 1920px;
    height: 1080px;
    background: url('./img/bg.png') center no-repeat fixed;
    background-size: cover;

    display: flex;
    flex-flow: column nowrap;
    .logo {
      text-align: center;
      padding-top: 80px;
      // opacity: 0.1;
    }

    .title {
      text-align: center;
      padding-top: 30px;
      padding-bottom: 100px;
    }

    .map-wrapper {
      box-sizing: border-box;
      padding-top: 10px;
      width: 100%;
      height: 602px;
      background: url('./img/map-shadow.png') center 335px no-repeat fixed;
      text-align: center;
      z-index: 10;
      opacity: 0;
      img {
        opacity: 0;
      }

      .cnt {
        position: absolute;
      }

      .europe {
        left: 930px;
        top: 430px;
      }

      .china {
        left: 1170px;
        top: 460px;
      }

      .canada {
        left: 600px;
        top: 350px;
      }

      .usa {
        left: 600px;
        top: 450px;
      }
    }

    .light-wrapper {
      position: absolute;
      bottom: 0;
      // left: 200px;
      z-index: 2;
      text-align: center;
      img {
        width: 1920px;
        object-fit: cover;
        opacity: 0;
      }
    }

    .cloud-left {
      position: absolute;
      top: 100px;
      left: 50px;
      z-index: 99;
    }

    .cloud-right {
      position: absolute;
      top: 100px;
      right: 50px;
      z-index: 99;
    }
  }
</style>
