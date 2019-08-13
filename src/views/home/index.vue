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

export default {
  name: 'Homepage',

  components: {
    Count
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
      showUsa: false
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
    }, 1700)
    setTimeout(() => {
      this.showChina = true
    }, 2500)
    setTimeout(() => {
      this.showCanada = true
    }, 3300)
    setTimeout(() => {
      this.showUsa = true
    }, 4000)
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
  }
</style>
