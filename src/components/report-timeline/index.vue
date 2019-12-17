<template>
  <div class="report-timeline-wrapper">
    <div ref="mychart" style="width: 100%; height: 190px"></div>
  </div>
</template>

<script>
// import reportConfig from '@/config/report'
export default {
  name: 'ReportTimeline',

  props: {},

  data() {
    return {
      chart: null,
      option: {
        baseOption: {
          timeline: {
            axisType: 'category',
            autoPlay: true,
            playInterval: 3000,
            lineStyle: {
              color: '#fff'
            },
            checkpointStyle: {
              symbolSize: 5,
              color: '#20cec8', // reportConfig.colorList[2],
              borderColor: '#20cec8' // reportConfig.colorList[2]
            },
            controlStyle: {
              showPlayBtn: false,
              showPrevBtn: false,
              showNextBtn: false
            },
            data: ['2014', '2015', '2016', '2017', '2018'],
            label: {
              color: '#fff',
              formatter(s) {
                return `${s}年`
              }
            }
          },
          grid: {
            top: '20px',
            left: '25px',
            right: '20px',
            bottom: '80px'
          },
          xAxis: {
            name: '',
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              color: '#fff',
              fontSize: 10
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            // data: ['机器学习', 'AI基础', 'NLP', '人机混合', '神经网络', '视觉技术']
            data: ['AI基础', '机器学习', 'NLP', '视觉技术', '神经网络', '人机混合']
          },
          yAxis: {
            name: '',
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
            max: 800
          },
          legend: {
            data: ['AI基础', '人机混合', '机器学习', '神经网络', '自然语言', '视觉技术']
          },
          series: [
            {
              name: 'total',
              type: 'bar',
              barWidth: 20,
              label: {
                show: true,
                position: 'top' // 'inside'
              }
            }
          ],
          color: '#20cec8' // reportConfig.colorList
        },
        options: [
          {
            series: [
              {
                data: [694, 749, 341, 295, 247, 86]
              }
            ]
          },
          {
            series: [
              {
                data: [744, 757, 347, 275, 226, 118]
              }
            ]
          },
          {
            series: [
              {
                data: [673, 731, 331, 236, 257, 86]
              }
            ]
          },
          {
            series: [
              {
                data: [633, 627, 314, 238, 257, 90]
              }
            ]
          },
          {
            series: [
              {
                data: [274, 261, 110, 77, 117, 28]
              }
            ]
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

<style lang="less" scoped>
.report-timeline-wrapper {
  box-sizing: border-box;
}
</style>
