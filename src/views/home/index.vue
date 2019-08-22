<template>
  <div class="home-wrapper">
    <div class="logo">
      <img :src="logo" alt="">
    </div>
    <div class="title">
      <img :src="title" alt="">
    </div>
    <div class="map-wrapper"
      @click="onMapClick"
    >
        <img
          id="map"
          :src="map"
          alt=""
        >

        <Count
          :num="57390"
          type="europe"
          txt="欧洲"
          class="cnt europe"
          v-if="showEupo"
        />

        <Count
          :num="200784"
          type="china"
          txt="中国"
          class="cnt china"
          v-if="showChina"
        />

        <Count
          :num="12050"
          type="canada"
          txt="加拿大"
          class="cnt canada"
          v-if="showCanada"
        />

        <Count
          :num="189106"
          type="usa"
          txt="美国"
          class="cnt usa"
          v-if="showUsa"
        />

        <Count
          :num="10581"
          type="usa"
          txt="英国"
          class="cnt england"
          v-if="showEngland"
        />

        <Count
          :num="4003"
          type="usa"
          txt="法国"
          class="cnt france"
          v-if="showFrance"
        />

        <Count
          :num="17445"
          type="usa"
          txt="德国"
          class="cnt ge"
          v-if="showGe"
        />

        <Count
          :num="13763"
          type="usa"
          txt="台湾地区"
          class="cnt tw"
          v-if="showTW"
        />

        <Count
          :num="116875"
          type="usa"
          txt="日本"
          class="cnt jp"
          v-if="showJP"
        />

        <Count
          :num="48719"
          type="usa"
          txt="韩国"
          class="cnt korea"
          v-if="showKorea"
        />

        <Count
          :num="11130"
          type="usa"
          txt="澳大利亚"
          class="cnt au"
          v-if="showAu"
        />

    </div>
    <div class="light-wrapper">
      <img id="light" :src="light" alt="">
    </div>
    <div class="cloud-left">
      <tag-cloud
        :tags="tags"
        direct="up"
        v-if="showCloud"
        id="left"
      />
    </div>
    <div class="cloud-right">
      <tag-cloud
        :tags="tags"
        id="right"
        direct="down"
        v-if="showCloud"
      />
    </div>
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
      showEngland: false,
      showFrance: false,
      showGe: false,
      showTW: false,
      showJP: false,
      showKorea: false,
      showAu: false,
      showCloud: false,
      tags: [
        {
          // 成果奖项
          img: tagAward,
          url: '/search/吴恩达'
        },
        {
          // 科技企业
          img: tagEnterprise,
          url: '/search/吴恩达'
        },
        {
          // 专家
          img: tagExpert,
          url: '/search/吴恩达'
        },
        {
          // 投资机构
          img: tagInvest,
          url: '/search/吴恩达'
        },
        {
          // 新闻头条
          img: tagNews,
          url: '/search/吴恩达'
        },
        {
          // 论文
          img: tagPaper,
          url: '/report/paper'
        },
        {
          // 专利
          img: tagPatent,
          url: '/search/吴恩达'
        },
        {
          // 政策
          img: tagPolicy,
          url: '/search/吴恩达'
        },
        {
          // 立项项目
          img: tagProject,
          url: '/search/吴恩达'
        },
        {
          // 标准
          img: tagTrade,
          url: '/search/吴恩达'
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
      this.showEngland = true
      this.showFrance = true
      this.showGe = true
    }, 5500)
    setTimeout(() => {
      this.showTW = true
      this.showJP = true
      this.showKorea = true
    }, 6100)
    setTimeout(() => {
      this.showAu = true
    }, 6500)
    setTimeout(() => {
      this.showCloud = true
      this.initCloud()
    }, 2500)
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
        // easing: 'linear',
        easing: 'cubicBezier(.5, .05, .1, .3)',
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
        // easing: 'linear',
        easing: 'cubicBezier(.5, .05, .1, .3)',
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
        // easing: 'linear'
        easing: 'cubicBezier(.5, .05, .1, .3)'
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
          // easing: 'linear',
          easing: 'cubicBezier(.5, .05, .1, .3)',
          translateY: {
            value: [46, 0]
          }
        })
    },

    initCloud () {
      // anime({
      //   targets: ['.cloud-left', '.cloud-right'],
      //   // scale: {
      //   //   value: [0, 1]
      //   // },
      //   opacity: {
      //     value: [0, 1]
      //   },
      //   easing: 'cubicBezier(.5, .05, .1, .3)',
      //   duration: 2000
      // })
      anime.timeline({
        easing: 'cubicBezier(.5, .05, .1, .3)'
      })
        .add({
          targets: '.cloud-left',
          translateX: {
            value: [0, 500]
          }
        })
        .add({
          targets: '.cloud-right',
          translateX: {
            value: [0, -400]
          }
        }, 0)
        .add({
          targets: '.cloud-left',
          opacity: {
            value: [0, 1]
          },
          scale: {
            value: [0, 1]
          },
          translateX: {
            value: [500, 0]
          },
          duration: 700
        })
        .add({
          targets: '.cloud-right',
          opacity: {
            value: [0, 1]
          },
          scale: {
            value: [0, 1]
          },
          translateX: {
            value: [-400, 0]
          },
          duration: 700
        }, '-=700')
    },

    onMapClick () {
      this.$router.push('/category')
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
    align-items: center;
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
      width: 1023px;
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
        top: 460px;
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

      .england {
        left: 950px;
        top: 330px;
      }

      .france {
        left: 920px;
        top: 400px;
      }

      .ge {
        left: 1010px;
        top: 400px;
      }

      .tw {
        left: 1250px;
        top: 500px;

      }

      .jp {
        left: 1360px;
        top: 480px;
      }

      .korea {
        left: 1280px;
        top: 450px;
      }

      .au {
        left: 1250px;
        top: 650px;
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
      opacity: 0;
    }

    .cloud-right {
      position: absolute;
      top: 100px;
      right: 50px;
      z-index: 99;
      opacity: 0;
    }
  }
</style>
