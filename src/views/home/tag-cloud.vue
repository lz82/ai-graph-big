<template>
  <div class="tag-cloud-wrapper">
    <canvas
      :width="containerWidth"
      :height="containerHeight"
      :id="guid"
      @touchmove="onTouch"
    >
        <ul id="taglist">
          <li v-for="(item, index) in tags" :key="index">
            <router-link
              :to="item.url"
            >
              <img :src="item.img" width="72px" height='72px'>
            </router-link>
          </li>
        </ul>
      </canvas>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'TagCloud',

  props: {
    containerWidth: {
      type: Number,
      default: 400
    },
    containerHeight: {
      type: Number,
      default: 800
    },
    tags: {
      type: Array
    },
    id: {
      type: String,
      required: true
    },
    direct: {
      type: String,
      default: 'up'
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

  computed: {
    guid () {
      return `${this.id}-tagcanvas`
    },

    tagGuid () {
      return `${this.id}-taglist`
    }
  },

  methods: {
    initTag () {
      window.TagCanvas.initial = [0, 0.03]
      window.TagCanvas.outlineColour = 'rgba(255, 255, 255,0.1)'
      window.TagCanvas.maxSpeed = 0.03
      window.TagCanvas.minSpeed = 0.01
      window.TagCanvas.wheelZoom = false
      window.TagCanvas.outlineRadius = 40
      window.TagCanvas.imageMode = 'image'
      window.TagCanvas.imageRadius = '50%'
      window.TagCanvas.imageScale = 1
      window.TagCanvas.radiusY = 2
      window.TagCanvas.radiusX = 0.6
      window.TagCanvas.activeCursor = 'pointer'
      // window.TagCanvas.radiusZ = 0.5
      window.TagCanvas.outlineMethod = 'size'
      window.TagCanvas.outlineIncrease = 16
      window.TagCanvas.dragControl = true
      // window.TagCanvas.shape = 'hring'
      window.TagCanvas.lock = 'x'
      // window.TagCanvas.offsetY = -60
      window.TagCanvas.Start(this.guid, this.taglist)
    },

    onTouch () {
      this.setLastTime(new Date() - 0)
    },

    ...mapMutations({
      setLastTime: 'set_last_time'
    })
  }
}
</script>

<style lang="less" scoped>
  .tag-cloud-wrapper {
  }
</style>
