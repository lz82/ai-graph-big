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
          text: ' 8500亿',
          subtext: '\n     AI投资总额',
          subtextStyle: {
            color: '#fff',
            fontSize: 16
          },
          left: 90,
          top: 60,
          textStyle: {
            color: '#3bcef8',
            fontSize: 36
          }
        },
        legend: {
          show: false
        },
        color: colorList,
        series: [{
          type: 'pie',
          clockWise: false,
          radius: [50, 70],
          center: ['70%', '50%'],
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
          name: item.name
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
