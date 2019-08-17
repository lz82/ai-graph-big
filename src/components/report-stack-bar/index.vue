<template>
  <div class="report-stack-bar-wrapper">
    <div id="chart" ref="mychart" style="width: 100%; height: 150px;"></div>
  </div>
</template>

<script>
export default {
  name: 'ReportStackBar',

  data () {
    return {
      chart: null,
      option: {
        grid: {
          left: '10px',
          top: '0px',
          right: '10px',
          bottom: '20px'
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
            data: ['机器学习', '语言识别', 'AR技术', '人脸识别']
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
        series: [
          {
            name: '2016',
            type: 'bar',
            stack: 'AI',
            label: {
              show: true,
              formatter: '{a}'
            },
            data: [100, 120, 150, 200]
          },
          {
            name: '2017',
            type: 'bar',
            stack: 'AI',
            label: {
              show: true,
              formatter: '{a}'
            },
            data: [100, 120, 150, 200]
          },
          {
            name: '2018',
            type: 'bar',
            stack: 'AI',
            label: {
              show: true,
              formatter: '{a}'
            },
            barWidth: '35px',
            data: [100, 120, 150, 200]
          }
        ],
        color: ['#4b6ff4', '#efe18b', '#e66f8d']
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
