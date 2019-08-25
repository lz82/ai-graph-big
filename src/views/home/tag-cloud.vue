<template>
  <div class="tag-cloud-wrapper">
    <canvas
      :width="containerWidth"
      :height="containerHeight"
      :id="guid"
      @touchmove="onTouch"
    >
        <ul id="taglist">
          <li v-for="(item, index) in tags" :key="index" :class="randomClass()">
            <router-link
              :to="item.url"
            >
              <!-- <img :src="item.img" width="80px" height='80px'> -->
              {{item.text}}
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
      default: 1000
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
      shape: 'hcylinder'
      // shape: 'hring'
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
      // window.TagCanvas.imageMode = 'image'
      window.TagCanvas.imageRadius = '50%'
      window.TagCanvas.imageScale = 1
      window.TagCanvas.radiusY = 3
      window.TagCanvas.radiusX = 0.6
      window.TagCanvas.activeCursor = 'pointer'
      // window.TagCanvas.radiusZ = 0.5
      window.TagCanvas.outlineMethod = 'size'
      window.TagCanvas.outlineIncrease = 16
      window.TagCanvas.dragControl = true
      // window.TagCanvas.shape = 'hring'
      window.TagCanvas.lock = 'x'
      window.TagCanvas.offsetY = -60

      window.TagCanvas.textColour = null
      window.TagCanvas.textHeight = 24

      window.TagCanvas.Start(this.guid, this.taglist)
    },

    onTouch () {
      this.setLastTime(new Date() - 0)
    },

    randomClass () {
      // const arr = ['a', 'b', 'c', 'd', 'e', 'f']
      // const temp = [Math.floor(Math.random() * 6)]
      // return `class-${arr[temp]}`
      return 'class-d'
    },

    ...mapMutations({
      setLastTime: 'set_last_time'
    })
  }
}
</script>

<style lang="less" scoped>
  .tag-cloud-wrapper {
    .class-a {
      a {
        color: #49C5FE;
      }
    }

    .class-b {
      a {
        color: #F4E28F;
      }
    }

    .class-c {
      a {
        color: #E97383;
      }
    }

    .class-d {
      a {
        color: #FFF;
      }
    }

    .class-e {
      a {
        color: #8CECB9;
      }
    }

    .class-f {
      a {
        color: #1E90FF;
      }
    }
  }
</style>
