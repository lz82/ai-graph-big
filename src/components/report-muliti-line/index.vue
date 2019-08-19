<template>
  <div class="report-muliti-line-wrapper">
    <h3>{{ title }}</h3>
    <div ref="mychart" :style="{width: width, height: height}"></div>
  </div>
</template>

<script>
import reportConfig from '@/config/report'

export default {
  name: 'ReportMulitiLine',

  props: {
    title: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      required: true
    },
    legend: {
      type: Array,
      required: true
    },
    xaxis: {
      type: Array,
      default () {
        return ['2015', '2016', '2017', '2018']
      }
    },
    series: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      chart: null,
      option: {
        color: reportConfig.colorList,
        legend: {
          data: this.legend,
          textStyle: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 8
          },
          itemWidth: 10,
          itemHeight: 6
        },
        grid: {
          left: '20px',
          right: '20px',
          top: '30px',
          bottom: '10px',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.xaxis,
          axisLabel: {
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
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
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
      this.option.series = this.series.map(item => {
        return {
          name: item.name,
          type: 'line',
          stack: 'total',
          data: item.data
        }
      })
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style lang="less" scoped>
  .report-muliti-report-wrapper {
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    h3 {
      font-size: 16px;
      font-weight: 500;
      color: #fff;
      padding: 0 0 10px 0;
    }
  }
</style>
