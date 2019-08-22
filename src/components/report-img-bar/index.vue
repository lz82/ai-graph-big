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
            data: ['企业服务', '医疗健康', '物流', '汽车交通', '硬件'],
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
                value: 18185454,
                symbol: 'image://' + '/img/a.png'
              },
              {
                value: 14350268,
                symbol: 'image://' + '/img/a.png'
              },
              {
                value: 13035680,
                symbol: 'image://' + '/img/a.png'
              },
              {
                value: 10597534,
                symbol: 'image://' + '/img/a.png'
              },
              {
                value: 5991822,
                symbol: 'image://' + '/img/a.png'
              }
            ],
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#FFF',
                  fontSize: 8
                },
                position: 'right',
                offset: [1, 0]
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
