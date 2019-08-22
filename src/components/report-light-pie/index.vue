<template>
  <div class="report-light-pie-wrapper">
    <div ref="mychart" style="width:100%; height: 170px;"></div>
  </div>
</template>

<script>
import reportConfig from '@/config/report'
const { colorList } = reportConfig
export default {
  name: 'ReportLightPie',

  props: {
    series: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      chart: null,
      option: {
        title: {
          text: 'AI投资总额\n   8500万',
          left: 100,
          top: 70,
          textStyle: {
            color: '#fff',
            fontSize: 14
          }
        },
        legend: {
          show: false
        },
        color: colorList,
        series: [{
          type: 'pie',
          clockWise: false,
          radius: [50, 60],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'outside',
                color: '#ddd'
              },
              labelLine: {
                length: 10,
                length2: 20,
                show: true,
                color: '#00ffff'
              }
            }
          },
          data: []
        }]
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
      let data = []
      this.series.forEach((item, index) => {
        data.push({
          value: item.value,
          name: item.name,
          itemStyle: {
            normal: {
              borderWidth: 5,
              shadowBlur: 20,
              borderColor: colorList[index],
              shadowColor: colorList[index]
            }
          }
        })
        data.push({
          value: 300,
          name: '',
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              color: 'rgba(0, 0, 0, 0)',
              borderWidth: 0,
              borderColor: 'rgba(0, 0, 0, 0)'
            }
          }
        })
      })
      this.option.series[0].data = data
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
