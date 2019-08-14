<template>
  <div id="app">
    <router-view/>
    <div
      id="mask"
      class="mask"
    >
      <video
        class="video"
        autoplay
        height="1080"
        width="1920"
        loop
        :src="video"
      />
    </div>
  </div>
</template>

<script>
import video from '@/assets/map.mp4'
import anime from 'animejs'

export default {
  name: 'App',

  data () {
    return {
      video: video,
      lasttime: null,
      isShow: true
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
        easing: 'cubicBezier(.5, .05, .1, .3)'
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
    })
    document.addEventListener('click', () => {
      this.lasttime = new Date() - 0
    })
    this.timer()
  },

  methods: {
    timer () {
      setInterval(() => {
        if (!this.isShow) {
          if (this.lasttime === null) {
            this.lasttime = new Date() - 0
          }
          const now = new Date() - 0

          if (now - this.lasttime > 1000 * 30) {
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

            this.lasttime = now
            this.isShow = true
          }
        }
      }, 1000)
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
 }
</style>
