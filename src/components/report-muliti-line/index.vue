<template>
  <div class="report-muliti-line-wrapper">
    <div ref="mychart" :style="{width: width, height: height}"></div>
    <h3 v-if="title">{{ title }}</h3>
  </div>
</template>

<script>
import reportConfig from '@/config/report'

export default {
  name: 'ReportMulitiLine',

  props: {
    title: {
      type: String,
      required: false
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      required: true
    },
    xaxis: {
      type: Array,
      default () {
        return ['2015', '2016', '2017', '2018']
      }
    },
    showXLabel: {
      type: Boolean,
      default: false
    },
    series: {
      type: Array,
      required: true
    },
    isstack: {
      type: Boolean,
      default: false
    },
    left: {
      type: String,
      default: '20px'
    },
    empty: {
      type: Boolean,
      default: false
    },
    symbol: {
      type: String,
      default: 'none'
    },
    legendsize: {
      type: Number,
      default: 10
    },
    top: {
      type: String,
      default: '20px'
    }
    // legendsize: {
    //   type: Number,
    //   default: 10
    // }
  },

  data () {
    return {
      chart: null,
      option: {
        legend: {
          show: true,
          type: 'scroll',
          // orient: 'vertical',
          textStyle: {
            color: '#3BCEF8'
          }
          // padding: [0, 10, 0, 0]
          // width: '80%'
        },
        color: reportConfig.colorList,
        grid: {
          left: this.left,
          right: '20px',
          top: this.top,
          bottom: '10px',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          // show: true,
          data: this.xaxis,
          axisLabel: {
            show: this.showXLabel,
            color: '#fff'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false,
            color: '#fff'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          min: 0
        },
        series: []
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
      this.option.series = this.series.map((item, index) => {
        return {
          name: item.name,
          type: 'line',
          stack: this.isstack ? 'total' : null,
          smooth: true,
          symbol: this.symbol, // this.empty ? 'emptyCircle' : 'circle'
          symbolSize: 2,
          itemStyle: {
            borderWidth: 1,
            borderColor: reportConfig.colorList[index]
            // color: this.empty ? '#0F162D' : reportConfig.colorList[index]
            // opacity: 0.5
          },
          lineStyle: {
            color: reportConfig.colorList[index],
            width: 1
          },
          data: item.data
        }
      })
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style lang="less" scoped>
  .report-muliti-line-wrapper {
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    h3 {
      font-size: 16px;
      color: #fff;
      padding: 0 0 0 0;
    }
  }
</style>
