<template>
  <div class="report-bar-wrapper">
    <h3>{{ title }}</h3>
    <div ref="mychart" :style="{width: width, height: height}"></div>
  </div>
</template>

<script>
import reportConfig from '@/config/report'

export default {
  name: 'ReportBar',

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
    },
    color: {
      type: Array,
      default () {
        return reportConfig.colorList
      }
    },
    rotate: {
      type: Number,
      default: 0
    },
    position: {
      type: String,
      default: 'right'
    }
  },

  data () {
    return {
      chart: null,
      labelOption: {
        align: 'center',
        distance: 15,
        fontSize: 8,
        formatter: '{c}',
        position: this.position,
        rotate: this.rotate,
        show: true,
        verticalAlign: 'middle'
      },
      option: {
        color: this.color,
        grid: {
          top: '20px',
          bottom: '50px',
          left: '10px',
          right: '10px'
        },
        legend: {
          data: this.legend,
          textStyle: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 8
          },
          itemWidth: 10,
          itemHeight: 6
        },
        xAxis: [
          {
            type: 'category',
            data: this.xaxis,
            axisLine: {
              show: false,
              lineStyle: {
                color: '#4b6ff4'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#fff',
              fontSize: 8
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            color: '#fff',
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#4b6ff4'
              }
            }
          }
        ],
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
          type: 'bar',
          barGap: 0,
          label: this.labelOption,
          data: item.data,
          barWidth: '15px',
          stack: item.stack ? item.stack : ''
        }
      })
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style lang="less" scoped>
  .report-bar-wrapper {
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
