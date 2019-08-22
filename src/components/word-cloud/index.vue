<template>
  <div class="word-cloud-wrapper">
    <div ref="mychart" style="width: 100%; height: 160px;"></div>
  </div>
</template>

<script>
import 'echarts-wordcloud'
import reportConfig from '@/config/report'

export default {
  name: 'WordCloud',

  data () {
    return {
      chart: null,
      option: {
        series: [
          {
            type: 'wordCloud',
            shape: 'star',
            left: 'center',
            top: 'center',
            width: '90%',
            height: '90%',
            right: null,
            bottom: null,
            sizeRange: [12, 60],
            rotationRange: [-90, 90],
            rotationStep: 45,
            gridSize: 8,
            drawOutOfBound: false,
            textStyle: {
              normal: {
                fontFamily: '微软雅黑',
                fontWeight: 'bold',
                // Color can be a callback function or a color string
                color: function () {
                  // Random color
                  return reportConfig.colorList[Math.floor(Math.random() * 6)]
                }
              }
            },
            data: [
              {
                name: '无人驾驶',
                value: 366
              },
              {
                name: '推荐系统',
                value: 787
              },
              {
                name: '词嵌入',
                value: 156
              },
              {
                name: '人脸识别',
                value: 345
              },
              {
                name: '知识图谱',
                value: 366
              },
              {
                name: '图神经网络',
                value: 366
              },
              {
                name: '学习系统',
                value: 123
              },
              {
                name: '机器翻译',
                value: 687
              },
              {
                name: '智能音箱',
                value: 156
              },
              {
                name: '无人驾驶',
                value: 123
              },
              {
                name: '迁移学习',
                value: 345
              },
              {
                name: '卷积神经',
                value: 56
              },
              {
                name: '人机混合',
                value: 23
              },
              {
                name: '新引力波',
                value: 234
              },
              {
                name: 'AR技术',
                value: 155
              },
              {
                name: '智轨列车',
                value: 345
              }
            ]
          }
        ]
      }
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.initChart()
    })
  },

  methods: {
    initChart () {
      this.chart = this.$echarts.init(this.$refs.mychart)
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style lang="less" scoped>
  .word-cloud-wrapper {
    box-sizing: border-box;
  }
</style>
