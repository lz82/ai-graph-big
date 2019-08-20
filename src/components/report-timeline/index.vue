<template>
  <div class="report-timeline-wrapper">
    <div ref="mychart" style="width: 100%; height: 230px"></div>
  </div>
</template>

<script>
import reportConfig from '@/config/report'
export default {
  name: 'ReportTimeline',

  props: {},

  data () {
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
              color: reportConfig.colorList[2],
              borderColor: reportConfig.colorList[2]
            },
            controlStyle: {
              showPlayBtn: false,
              showPrevBtn: false,
              showNextBtn: false
            },
            data: ['2014', '2015', '2016', '2017', '2018'],
            label: {
              color: '#fff',
              formatter (s) {
                return `${s}年`
              }
            }
          },
          grid: {
            top: '20px',
            bottom: '80px'
          },
          xAxis: {
            name: '',
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              color: '#fff'
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            data: ['机器学习', '人机混合', '知识系统', '神经网络', '人脸识别', '声音识别']
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
            max: 10000
          },
          legend: {
            data: ['机器学习', '人机混合', '知识系统', '神经网络', '人脸识别', '声音识别']
          },
          series: [
            {
              name: 'total',
              type: 'bar',
              barWidth: 30,
              label: {
                show: true,
                position: 'inside'
              }
            }
          ],
          color: reportConfig.colorList
        },
        options: [
          {
            series: [
              {
                data: [1000, 2000, 3000, 4000, 5000, 6000]
              }
            ]
          },
          {
            series: [
              {
                data: [1000, 2000, 3000, 4000, 5000, 6000]
              }
            ]
          },
          {
            series: [
              {
                data: [2000, 3000, 4000, 5000, 6000, 7000]
              }
            ]
          },
          {
            series: [
              {
                data: [1100, 2200, 3200, 4200, 5200, 6200]
              }
            ]
          },
          {
            series: [
              {
                data: [1200, 2300, 3300, 4300, 5300, 6300]
              }
            ]
          },
          {
            series: [
              {
                data: [1300, 2500, 3500, 4500, 550, 6500]
              }
            ]
          }
        ]
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
  .report-timeline-wrapper {
    box-sizing: border-box;
  }
</style>
