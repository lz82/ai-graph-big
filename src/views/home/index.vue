<template>
  <div class="home-wrapper">
    <div class="left">
      <tag-cloud :tags="expertTags" direct="up" v-if="showCloud" id="left" />
    </div>
    <div class="middle">
      <div class="ctl">
        <div
          class="ball"
          :class="{ active: currentBall === 'patent' }"
          @click="onBallClick('patent')"
        >
          <p class="title">
            专利
          </p>
        </div>
        <div class="ball" :class="{ active: currentBall === 'doc' }" @click="onBallClick('doc')">
          <p class="title">
            文献
          </p>
        </div>
        <div
          class="ball"
          :class="{ active: currentBall === 'talent' }"
          @click="onBallClick('talent')"
        >
          <p class="title">
            人才
          </p>
        </div>
      </div>
      <div class="map">
        <home-map :type="currentBall" />
      </div>
    </div>
    <div class="right">
      <tag-cloud :tags="keywordTags" id="right" direct="down" v-if="showCloud" />
    </div>
  </div>
</template>

<script>
import HomeMap from './map'
import TagCloud from './tag-cloud'
import { clearInterval } from 'timers'

export default {
  name: 'Home',

  components: {
    HomeMap,
    TagCloud
  },

  data() {
    return {
      balls: ['patent', 'doc', 'talent'],
      currentBall: 'patent',
      showCloud: true,
      expertTags: [
        {
          text: 'Geoffrey Hinton',
          url: '/search/Geoffrey Hinton'
        },
        {
          // 韩家炜
          text: '韩家炜',
          url: '/search/韩家炜'
        },
        {
          // 李飞飞
          text: '李飞飞',
          url: '/search/李飞飞'
        },
        {
          // Michael I.Jordan
          text: 'Michael I.Jordan',
          url: '/search/Michael I. Jordan'
        },
        {
          // 吴恩达
          text: '吴恩达',
          url: '/search/吴恩达'
        },
        {
          // 周志华
          text: '周志华',
          url: '/search/周志华'
        },
        {
          // William T. Freeman
          text: 'William T. Freeman',
          url: '/search/William T. Freeman'
        },
        {
          // Yoshua Bengio
          text: 'Yoshua Bengio',
          url: '/search/Yoshua Bengio'
        },
        {
          // Yann Lecun
          text: 'Yann Lecun',
          url: '/search/Yann Lecun'
        },
        {
          // SebastianThrun
          text: 'Sebastian Thrun',
          url: '/search/Sebastian Thrun'
        }
      ],
      keywordTags: [
        {
          // 度量学习
          text: '度量学习',
          url: '/search/度量学习'
        },
        {
          // 机器翻译
          text: '机器翻译',
          url: '/search/机器翻译'
        },
        {
          // 可解释性
          text: '可解释性',
          url: '/search/可解释性'
        },
        {
          // 目标检测
          text: '目标检测',
          url: '/search/目标检测'
        },
        {
          // 人脸识别
          text: '人脸识别',
          url: '/search/人脸识别'
        },
        {
          // 推荐系统
          text: '推荐系统',
          url: '/search/推荐系统'
        },
        {
          // 无人驾驶
          text: '无人驾驶',
          url: '/search/无人驾驶'
        },
        {
          // 循环神经网络
          text: '循环神经网络',
          url: '/search/循环神经网络'
        },
        {
          // 支持向量机
          text: '支持向量机',
          url: '/search/支持向量机'
        },
        {
          // 知识库
          text: '知识库',
          url: '/search/知识库'
        }
      ],
      timer: null
    }
  },

  mounted() {
    // 设置1分钟自动切换一次
    this.timer = setInterval(() => {
      const temp = this.balls.findIndex(item => item === this.currentBall)
      this.currentBall = this.balls[temp + 1 > this.balls.length - 1 ? 0 : temp + 1]
    }, 1000 * 60)
  },

  methods: {
    onBallClick(val) {
      this.currentBall = val
    }
  },

  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style lang="less" scoped>
.home-wrapper {
  display: flex;
  flex-flow: row nowrap;
}
.middle {
  width: 1100px;
  display: flex;
  flex-flow: row nowrap;

  .ctl {
    width: 120px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    .ball {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: solid 1px rgb(0, 161, 254);
      background: rgba(60, 113, 213, 0.3);
      color: rgb(102, 204, 255);
      position: relative;
      .title {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 24px;
      }
      &.active {
        background: rgba(0, 204, 204, 0.5);
        color: #fff;
      }
    }
  }
}

.left,
.right {
  width: 490px;
}
</style>
