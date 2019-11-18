<template>
  <div class="count-wrapper">
    <div :class="contentCls" class="content">
      <CountTo
        :endVal="num"
        class="cnt"
        :duration="2000"
      />
      <span>{{txt}}</span>
    </div>
    <div :class="inCls" class="inner-circle"></div>
    <div :class="outCls" class="outter-circle"></div>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
import anime from 'animejs'

export default {
  name: 'Count',

  components: {
    CountTo
  },

  props: {
    num: {
      type: Number,
      required: true
    },
    txt: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },

  computed: {
    contentCls () {
      return `${this.type}-content`
    },

    outCls () {
      return `${this.type}-outter-circle`
    },

    inCls () {
      return `${this.type}-inner-circle`
    }
  },

  methods: {
    init () {
      anime.timeline({
        duration: 300,
        loop: false,
        easing: 'linear'
      })
        .add({
          targets: '.' + this.outCls,
          keyframes: [
            {
              scale: 0,
              opacity: 0
            },
            {
              scale: 0.5,
              opacity: 0.5
            },
            {
              scale: 1,
              opacity: 1
            },
            {
              opacity: 0
            }
          ],
          // loop: false,
          duration: 2000
        })
        .add({
          targets: '.' + this.inCls,
          keyframes: [
            {
              scale: 0,
              opacity: 0
            },
            {
              scale: 0.5,
              opacity: 0.5
            },
            {
              scale: 1,
              opacity: 1
            },
            {
              opacity: 0
            }
          ],
          // loop: false,
          duration: 2000
        }, 300)
      // .add({
      //   targets: '.' + this.contentCls,
      //   scale: {
      //     value: [0, 1]
      //   },
      //   opacity: {
      //     value: [0, 1]
      //   },
      //   duration: 2000
      // }, '-=1500')
    }
  }
}
</script>

<style lang="less" scoped>
  .count-wrapper {
    position:relative;
    display:inline-block;
    .content {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      color: #fff;
      // opacity: 0;
      width: 100px;

      .cnt {
        font-size: 18px;
      }
      span {
        padding-top: 5px;
      }
    }
    .inner-circle {
      border: solid 1px rgba(255, 255, 255, 0.5);
      width: 200px;
      height: 200px;
      border-radius: 50%;
      position: absolute;
      left: -50%;
      top: -70px;
      opacity: 0;
    }
    .outter-circle {
      border: solid 1px rgba(255, 255, 255, 0.5);
      width: 200px;
      height: 200px;
      border-radius: 50%;
      position: absolute;
      left: -50%;
      top: -70px;
      opacity: 0;
    }
  }
</style>
