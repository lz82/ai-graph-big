<template>
  <div class="tag-cloud-wrapper">
    <canvas :width="containerWidth" :height="containerHeight" id="tagcanvas">
        <ul id="taglist">
          <li v-for="item in tags" :key="item.url">
            <router-link
              :to="item.url"
            >
              <img :src="item.img" width="64px" height='64px'>
            </router-link>
          </li>
        </ul>
      </canvas>
  </div>
</template>

<script>
export default {
  name: 'TagCloud',

  props: {
    containerWidth: {
      type: Number,
      default: 350
    },
    containerHeight: {
      type: Number,
      default: 800
    },
    tags: {
      type: Array
    }
  },

  data () {
    return {
      ttags: 'taglist',
      lock: 'y',
      shape: 'vcylinder'
    }
  },

  mounted () {
    this.initTag()
  },

  methods: {
    initTag () {
      window.TagCanvas.initial = [0.01, -0.01]
      window.TagCanvas.outlineColour = 'rgba(255, 255, 255,0.1)'
      window.TagCanvas.maxSpeed = 0.05
      window.TagCanvas.minSpeed = 0.02
      window.TagCanvas.wheelZoom = false
      window.TagCanvas.outlineRadius = 40
      window.TagCanvas.imageMode = 'image'
      window.TagCanvas.imageRadius = '50%'
      window.TagCanvas.imageScale = 1
      window.TagCanvas.radiusY = 1.4
      window.TagCanvas.activeCursor = 'pointer'
      // window.TagCanvas.radiusZ = 0.5
      window.TagCanvas.outlineMethod = 'size'
      window.TagCanvas.outlineIncrease = 16
      window.TagCanvas.dragControl = true
      window.TagCanvas.shape = 'sphere'
      window.TagCanvas.lock = 'x'
      window.TagCanvas.offsetY = -60
      window.TagCanvas.Start('tagcanvas', 'taglist')
    },

    restart () {
      window.TagCanvas.shape = this.shape
      window.TagCanvas.lock = this.lock
      window.TagCanvas.Start('tagcanvas', this.ttags)
    },

    changetags (t) {
      this.ttags = t
      this.restart()
    },

    changeshape (s) {
      var locks = { hcylinder: 'x', vcylinder: 'y', hring: 'x', vring: 'y', sphere: '' }
      this.lock = locks[s] || ''
      this.shape = s
      window.TagCanvas.initial = (this.lock === 'x' && [0, 0.2]) || (this.lock === 'y' && [0.2, 0]) || [0.2, 0.2]
      this.restart()
    },

    mouseOver () {
      window.TagCanvas.Pause('tagcanvas')
      // window.TagCanvas.maxSpeed = 0
      // window.TagCanvas.Start('tagcanvas', this.ttags)
    },

    mouseLeave () {
      window.TagCanvas.Resume('tagcanvas')
      // window.TagCanvas.maxSpeed = 0.05
      // window.TagCanvas.Start('tagcanvas', this.ttags)
    }
  }
}
</script>

<style lang="less" scoped>
  .tag-cloud-wrapper {
  }
</style>
