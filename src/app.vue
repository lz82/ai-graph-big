<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view
        class="router-view"
      />
    </transition>
    <div
      id="mask"
      class="mask"
    >
      <video
        class="video"
        autoplay="autoplay"
        height="1080"
        width="1920"
        loop="loop"
        muted
        :src="video"
      />
    </div>
  </div>
</template>

<script>
import video from '@/assets/map.mp4'
import anime from 'animejs'

import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'App',

  data () {
    return {
      video: video,
      isShow: true,
      transitionName: ''
    }
  },

  mounted () {
    document.getElementById('mask').addEventListener('click', () => {
      // anime({
      //   targets: '.mask',
      //   borderRadius: ['0%', '50%'],
      //   scale: {
      //     value: [1, 0]
      //   },
      //   duration: 1000
      // })

      anime.timeline({
        targets: '.mask',
        easing: 'linear'
      })
        // .add({
        //   borderRadius: ['0%', '50%'],
        //   duration: 500
        // }, 0)
        // .add({
        //   scaleX: {
        //     value: [1, 0.5625]
        //   },
        //   duration: 300
        // }, 400)
        .add({
          scale: {
            value: [1, 0]
          }
        })
      this.isShow = false
      // 开发期间先注释
      // this.$router.push('/')
    })
    document.addEventListener('click', () => {
      this.setLastTime(new Date() - 0)
    })
    this.timer()
  },

  methods: {
    ...mapMutations({
      setLastTime: 'set_last_time'
    }),
    timer () {
      setInterval(() => {
        if (!this.isShow) {
          if (this.lastTime === null) {
            this.setLastTime(new Date() - 0)
          }
          const now = new Date() - 0

          if (now - this.lastTime > 1000 * 60 * 30) {
            anime.timeline({
              targets: '.mask',
              easing: 'cubicBezier(.5, .05, .1, .3)'
            })
              .add({
                scale: {
                  value: [0, 1]
                }
              })
              // .add({
              //   borderRadius: ['50%', '0%'],
              //   duration: 500
              // }, 0)
              // .add({
              //   scaleX: {
              //     value: [1, 2.78]
              //   },
              //   duration: 300
              // }, 400)

            // this.lasttime = now
            this.setLastTime(new Date() - 0)
            this.isShow = true
          }
        }
      }, 1000)
    }
  },

  computed: {
    ...mapGetters(['lastTime'])
  },

  watch: {
    $route (to, from) {
      if (to.meta.path.includes(from.meta.path)) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
    }
  }
}
</script>

<style lang="less">
 #app {
   width: 1920px;
   height: 1080px;
   overflow: hidden;
   position: relative;

   .mask {
     width: 1920px;
     height: 1080px;
     overflow: hidden;
     position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 999;
      transform: scale(1);
      opacity: 1;
     .video {
       z-index: 998;
    }
   }

   .router-view {
     width: 1920px;
     height: 1080px;
     position: absolute;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
     overflow: hidden;
   }
 }
</style>
