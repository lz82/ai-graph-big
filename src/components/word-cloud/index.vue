<template>
  <div class="word-cloud-wrapper">
    <div ref="mychart" style="width: 100%; height: 240px;"></div>
  </div>
</template>

<script>
import 'echarts-wordcloud'

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
            width: '70%',
            height: '80%',
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
                  return 'rgb(' + [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160)
                  ].join(',') + ')'
                }
              }
            },
            data: [
              {
                name: '机器学习',
                value: 366
              },
              {
                name: '人脸识别',
                value: 66
              },
              {
                name: '声音识别',
                value: 366
              },
              {
                name: '学习系统',
                value: 123
              },
              {
                name: 'AlphaGo',
                value: 787
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
                name: '智轨列车',
                value: 345
              },
              {
                name: '3D打印',
                value: 56
              },
              {
                name: '天使粒子',
                value: 23
              },
              {
                name: '新引力波',
                value: 234
              },
              {
                name: 'AR技术',
                value: 155
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
