<template>
  <div class="report-line-wrapper">
    <h3>{{ title }}</h3>
    <div id="chart" ref="mychart" style="width: 100%; height: 180px;"></div>
  </div>
</template>

<script>
export default {
  name: 'ReportLine',

  props: {
    title: {
      type: String
    },
    num: {
      type: Array,
      required: false
    }
  },

  data () {
    return {
      chart: null,
      option: {
        series: [{
          type: 'line',
          data: this.num,
          lineStyle: {
            color: '#4b6ff4'
          },
          areaStyle: {
            color: '#3a55bb'
          },
          // showSymbol: false,
          symbolSize: 1,
          itemStyle: {
            normal: {
              color: '#fff'
            }
          },
          label: {
            show: true,
            color: '#fff'
          }
        }],
        xAxis: {
          type: 'category',
          boundaryGap: false,
          splitLine: {
            show: false
          },
          data: ['2015', '2016', '2017', '2018'],
          axisLine: {
            lineStyle: {
              color: '#4b6ff4'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#fff'
          }
        },
        yAxis: {
          type: 'value',
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
        },
        grid: {
          top: '20px',
          right: '20px',
          bottom: '30px',
          left: '20px'
        }
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
  .report-line-wrapper {
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
