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
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.2)'
          },
          areaStyle: {
            color: 'rgba(255, 255, 255, 0.2)'
          }
        }],
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
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
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    h3 {
      font-size: 16px;
      font-weight: 500;
      color: #fff;
      padding: 15px 0 10px 0;
    }
  }
</style>
