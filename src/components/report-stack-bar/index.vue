<template>
  <div class="report-stack-bar-wrapper">
    <div id="chart" ref="mychart" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script>
import ReportConfig from '@/config/report'

export default {
  name: 'ReportStackBar',

  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '170px'
    },
    legend: {
      type: Array,
      default() {
        return ['2016', '2017', '2018']
      }
    },
    xaxis: {
      type: Array,
      default() {
        // return ['AI基础', '人机混合', '机器学习', '视觉技术']
        return ['AI基础', '视觉技术', '机器学习', '人机混合']
      }
    },
    series: {
      type: Array,
      required: true
    },
    minheight: {
      type: Number
    }
  },

  data() {
    return {
      chart: null,
      option: {
        grid: {
          left: '10px',
          top: '5px',
          right: '20px',
          bottom: '20px'
        },
        legend: {
          data: this.legend,
          textStyle: {
            color: '#fff'
          }
        },
        xAxis: [
          {
            type: 'category',
            axisLabel: {
              color: '#fff'
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            data: this.xaxis
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            }
          }
        ],
        series: [],
        color: ReportConfig.colorList
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
      this.option.series = this.series.map((item, index) => {
        return {
          name: item.name,
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
            formatter: '{c}',
            position: this.minheight ? (index % 2 ? 'left' : 'right') : 'right',
            fontSize: 8
            // padding: [250, 0, 250, 0]
            // lineHeight: 56
          },
          barWidth: '15px',
          barMinHeight: this.minheight || 0,
          data: item.data
        }
      })
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style lang="less" scoped></style>
