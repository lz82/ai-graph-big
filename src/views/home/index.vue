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

export default {
  name: 'Home',

  components: {
    HomeMap,
    TagCloud
  },

  data() {
    return {
      currentBall: 'patent',
      showCloud: true,
      expertTags: [
        {
          // Geoffrey Hinton
          text: 'Geoffrey Hinton',
          // img: tagGH,
          url: '/search/Geoffrey Hinton'
        },
        {
          // 韩家炜
          text: '韩家炜',
          // img: tagHjw,
          url: '/search/韩家炜'
        },
        {
          // 李飞飞
          text: '李飞飞',
          // img: tagLiff,
          url: '/search/李飞飞'
        },
        {
          // Michael I.Jordan
          text: 'Michael I.Jordan',
          // img: tagMj,
          url: '/search/Michael I. Jordan'
        },
        {
          // SebastianThrun
          text: 'Sebastian Thrun',
          // img: tagSt,
          url: '/search/Sebastian Thrun'
        },
        {
          // 吴恩达
          text: '吴恩达',
          // img: tagWed,
          url: '/search/吴恩达'
        },
        {
          // William T. Freeman
          text: 'William T. Freeman',
          // img: tagWf,
          url: '/search/William T. Freeman'
        },
        {
          // Yoshua Bengio
          text: 'Yoshua Bengio',
          // img: tagYb,
          url: '/search/Yoshua Bengio'
        },
        {
          // Yann Lecun
          text: 'Yann Lecun',
          // img: tagYl,
          url: '/search/Yann Lecun'
        },
        {
          // 周志华
          text: '周志华',
          // img: tagZzh,
          url: '/search/周志华'
        }
      ],
      keywordTags: [
        {
          // 度量学习
          text: '度量学习',
          // img: tagDlxx,
          url: '/search/度量学习'
        },
        {
          // 机器翻译
          text: '机器翻译',
          // img: tagJqfy,
          url: '/search/机器翻译'
        },
        {
          // 可解释性
          text: '可解释性',
          // img: tagKjsrgzn,
          url: '/search/可解释性'
        },
        {
          // 目标检测
          text: '目标检测',
          // img: tagMbjc,
          url: '/search/目标检测'
        },
        {
          // 人脸识别
          text: '人脸识别',
          // img: tagRlsb,
          url: '/search/人脸识别'
        },
        {
          // 推荐系统
          text: '推荐系统',
          // img: tagTjxt,
          url: '/search/推荐系统'
        },
        {
          // 无人驾驶
          text: '无人驾驶',
          // img: tagWrjs,
          url: '/search/无人驾驶'
        },
        {
          // 循环神经网络
          text: '循环神经网络',
          // img: tagXhsjwl,
          url: '/search/循环神经网络'
        },
        {
          // 支持向量机
          text: '支持向量机',
          // img: tagZcxlj,
          url: '/search/支持向量机'
        },
        {
          // 知识库
          text: '知识库',
          // img: tagZsk,
          url: '/search/知识库'
        }
      ]
    }
  },

  methods: {
    onBallClick(val) {
      this.currentBall = val
    }
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
      background: rgb(38, 84, 133);
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
        background: rgb(11, 129, 153);
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
