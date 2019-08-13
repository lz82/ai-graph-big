<template>
  <div class="home-wrapper">
    <canvas ref="main" id="main"></canvas>
    <canvas id="cloud-left" width="300" height="800">
      <ul id="tags">
        <li><a href="http://www.google.com" target="_blank">Google</a></li>
        <li><a href="/fish">Fish</a></li>
        <li><a href="/chips">Chips</a></li>
        <li><a href="/salt">Salt</a></li>
        <li><a href="/vinegar">Vinegar</a></li>
      </ul>
    </canvas>
  </div>
</template>

<script>
import bg from './img/bg.png'
import line from './img/line.png'
import logo from './img/logo.png'
import map from './img/map.png'
import shadow from './img/map-shadow.png'
import title from './img/title.png'

export default {
  name: 'Homepage',

  data () {
    return {
      w: 1920,
      h: 1080,
      logoW: 56,
      logoH: 44,
      logoPT: 80,
      logoPB: 48,
      mapPT: 100,
      titleX: 740,
      titleW: 452,
      titleH: 20,
      titleNY: null,
      titleVY: 5,
      titleG: 1,
      titleAnimation: true,
      mapAnimation: true,
      mapW: 1023,
      mapH: 505,
      shadowW: 1064,
      shadowH: 602,
      mapNY: null,
      ctx: null,
      lasttime: null,
      picBg: new Image(),
      picLine: new Image(),
      picLogo: new Image()
    }
  },

  mounted () {
    this.$nextTick(async () => {
      this.initCanvas()

      await this.drawBg()
      await this.drawLine()
      await this.drawLogo()
      setTimeout(() => {
        this.drawTitle()
        this.drawMap()
      }, 800)

      this.lasttime = new Date() - 1
      this.animation()
      window.TagCanvas.Start('cloud-left', 'tags', {
        textColour: '#fff',
        outlineColour: '#fff',
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05
      })
    })
  },

  methods: {
    initCanvas () {
      const canvas = this.$refs.main
      canvas.width = this.w
      canvas.height = this.h

      this.ctx = canvas.getContext('2d')
    },

    drawStatic () {
      this.drawBg()
      this.drawLine()
      this.drawLogo()
    },

    drawBg () {
      return new Promise((resolve, reject) => {
        this.picBg.src = bg
        this.picBg.onload = () => {
          this.ctx.drawImage(this.picBg, 0, 0, 1920, 1080)
          resolve()
        }
        this.ctx.drawImage(this.picBg, 0, 0, 1920, 1080)
      })
    },

    drawLine () {
      return new Promise((resolve, reject) => {
        this.picLine.src = line
        this.picLine.onload = () => {
          this.ctx.drawImage(this.picLine, 0, 0, 1920, 1080)
          resolve()
        }
        this.ctx.drawImage(this.picLine, 0, 0, 1920, 1080)
      })
    },

    drawLogo () {
      return new Promise((resolve) => {
        this.picLogo.src = logo
        this.picLogo.onload = () => {
          this.ctx.drawImage(this.picLogo, (this.w - this.logoW) / 2, this.logoPT, this.logoW, this.logoH)
          resolve()
        }
        this.ctx.drawImage(this.picLogo, (this.w - this.logoW) / 2, this.logoPT, this.logoW, this.logoH)
      })
    },

    drawTitle () {
      const picTitle = new Image()
      if (!this.titleNY) {
        this.titleNY = this.titleY + 50
      }
      picTitle.src = title
      picTitle.onload = () => {
        this.ctx.drawImage(picTitle, (this.w - this.titleW) / 2, this.titleNY, this.titleW, this.titleH)
      }
      this.ctx.drawImage(picTitle, (this.w - this.titleW) / 2, this.titleNY, this.titleW, this.titleH)
    },

    updateTitle () {
      const picTitle = new Image()
      picTitle.src = title
      this.titleNY = this.titleNY - 5
      if (this.titleNY < this.titleY) {
        this.titleNY = this.titleY
        this.titleAnimation = false
      }
      picTitle.onload = () => {
        this.ctx.drawImage(picTitle, (this.w - this.titleW) / 2, this.titleNY, this.titleW, this.titleH)
      }
      this.ctx.drawImage(picTitle, (this.w - this.titleW) / 2, this.titleNY, this.titleW, this.titleH)
    },

    drawMap () {
      const picMap = new Image()
      picMap.src = map
      if (!this.mapNY) {
        this.mapNY = this.mapY + 30
      }
      picMap.onload = () => {
        this.ctx.drawImage(picMap, (this.w - this.mapW) / 2, this.mapNY, this.mapW, this.mapH)
      }
      this.ctx.drawImage(picMap, (this.w - this.mapW) / 2, this.mapNY, this.mapW, this.mapH)

      const picShadow = new Image()
      picShadow.src = shadow
      picShadow.onload = () => {
        this.ctx.drawImage(picShadow, (this.w - this.shadowW) / 2, this.shadowY, this.shadowW, this.shadowH)
      }
      this.ctx.drawImage(picShadow, (this.w - this.shadowW) / 2, this.shadowY, this.shadowW, this.shadowH)
    },

    updateMap () {
      const picMap = new Image()
      picMap.src = map
      this.mapNY = this.mapNY - 3
      if (this.mapNY < this.mapY) {
        this.mapNY = this.mapY
        this.mapAnimation = false
      }
      picMap.onload = () => {
        this.ctx.drawImage(picMap, (this.w - this.mapW) / 2, this.mapNY, this.mapW, this.mapH)
      }
      this.ctx.drawImage(picMap, (this.w - this.mapW) / 2, this.mapNY, this.mapW, this.mapH)
    },

    animation () {
      const now = new Date() - 0
      if (now - this.lasttime > 50 && (this.titleAnimation || this.mapAnimation)) {
        this.ctx.clearRect(0, 0, this.w, this.h)
        this.drawBg()
        this.drawLine()
        this.drawLogo()
        this.drawTitle()
        this.updateTitle()
        this.drawMap()
        this.updateMap()
        this.lasttime = now
      }
      window.requestAnimationFrame(this.animation)
    }
  },

  computed: {
    titleY () {
      return this.logoH + this.logoPT + this.logoPB
    },

    mapY () {
      return this.logoH + this.logoPT + this.logoPB + this.titleH + this.mapPT
    },

    shadowY () {
      return this.logoH + this.logoPT + this.logoPB + this.titleH + this.mapPT + 30
    }
  }
}
</script>

<style lang="less" scoped>
  .home-wrapper {
    width: 1920px;
    height: 1080px;
    margin: 0;
    padding: 0;
    position: relative;

    #main {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 0;
    }

    #cloud-left {
      position: absolute;
      top: 20;
      right: 50px;
      z-index: 10;
    }
  }
</style>
