<template>
  <div class="report-img-bar-wrapper">
    <div ref="mychart" style="width: 100%; height: 170px"></div>
  </div>
</template>

<script>
export default {
  name: 'ReportImgBar',

  data () {
    return {
      chart: null,
      option: {
        grid: {
          left: '10px',
          top: '20px',
          right: '50px',
          bottom: '10px',
          containLabel: true
        },
        xAxis: {
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            type: 'category',
            inverse: false,
            data: ['领域A', '领域B', '领域C', '领域D', '领域E'],
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                type: 'dashed',
                color: '#3e86dd'
              }
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                color: '#fff',
                fontSize: 14
              }
            }
          }
        ],
        series: [
          {
            tooltip: {
              show: false
            },
            z: 4,
            type: 'pictorialBar',
            symbolSize: ['20', '20'],
            symbolRepeat: 'fixed',
            data: [
              {
                value: 1,
                symbol: 'image://' + '/img/b.png'
              },
              {
                value: 1,
                symbol: 'image://' + '/img/b.png'
              },
              {
                value: 1,
                symbol: 'image://' + '/img/b.png'
              },
              {
                value: 1,
                symbol: 'image://' + '/img/b.png'
              },
              {
                value: 1,
                symbol: 'image://' + '/img/b.png'
              }
            ]
          },
          {
            z: 6,
            type: 'pictorialBar',
            symbolSize: ['20', '20'],
            animation: true,
            symbolRepeat: 'fixed',
            symbolClip: true,
            symbolPosition: 'start',
            symbolOffset: [0, 0],
            data: [
              {
                value: 60,
                symbol: 'image://' + '/img/a.png'
              },
              {
                value: 85,
                symbol: 'image://' + '/img/a.png'
              },
              {
                value: 120,
                symbol: 'image://' + '/img/a.png'
              },
              {
                value: 140,
                symbol: 'image://' + '/img/a.png'
              },
              {
                value: 160,
                symbol: 'image://' + '/img/a.png'
              }
            ],
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#FFF',
                  fontSize: 14
                },
                position: 'right',
                offset: [15, 0]
              }
            }
          },
          {
            type: 'bar'
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

</style>
