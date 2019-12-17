<template>
  <div class="report-img-bar-wrapper">
    <div ref="mychart" style="width: 100%; height: 170px"></div>
  </div>
</template>

<script>
export default {
  name: 'ReportImgBar',

  data() {
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
            // data: ['企业服务', '医疗健康', '物流', '汽车交通', '硬件'],
            data: ['硬件', '汽车交通', '物流', '医疗健康', '企业服务'],
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
          },
          {
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
              margin: 10,
              textStyle: {
                color: '#ffffff',
                fontSize: '14'
              },
              formatter(value) {
                const temp = (value / 10000).toFixed(2)
                return `${temp}亿`
              }
            },
            // data: [18185454, 14350268, 13035680, 10597534, 5991822],
            data: [5991822, 10597534, 13035680, 14350268, 18185454]
          }
        ],
        series: [
          {
            tooltip: {
              show: false
            },
            z: 4,
            yAxisIndex: 0,
            type: 'bar',
            barGap: '-100%',
            data: [20000000, 20000000, 20000000, 20000000, 20000000],
            itemStyle: {
              normal: {
                color: '#6791de'
              }
            }
          },
          {
            z: 6,
            type: 'bar',
            yAxisIndex: 0,
            // barWidth: 20,
            animation: true,
            // data: [18185454, 14350268, 13035680, 10597534, 5991822],
            data: [5991822, 10597534, 13035680, 14350268, 18185454],
            itemStyle: {
              normal: {
                color: '#66ccff'
              }
            },
            label: {
              normal: {
                // show: true,
                textStyle: {
                  color: '#FFF',
                  fontSize: 12
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

  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },

  methods: {
    initChart() {
      this.chart = this.$echarts.init(this.$refs.mychart)
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style lang="less" scoped></style>
