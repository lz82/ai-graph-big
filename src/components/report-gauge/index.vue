<template>
  <div class="report-gauge-wrapper">
    <div ref="mychart" :style="{width: width, height: height}"></div>
  </div>
</template>

<script>
// const color = [
//   [0.2, 'rgba(233, 115, 131, 0.2)'],
//   [0.4, 'rgba(233, 115, 131, 0.4)'],
//   [0.6, 'rgba(233, 115, 131, 0.6)'],
//   [0.8, 'rgba(233, 115, 131, 0.8)'],
//   [1, 'rgba(233, 115, 131, 1)']
// ]

const color = [
  [0.2, 'rgba(140, 236, 185, 0.2)'],
  [0.4, 'rgba(140, 236, 185, 0.4)'],
  [0.6, 'rgba(140, 236, 185, 0.6)'],
  [0.8, 'rgba(140, 236, 185, 0.8)'],
  [1, 'rgba(140, 236, 185, 1)']
]

export default {
  name: 'ReportGauge',

  props: {
    left: {
      type: Object
    },
    middle: {
      type: Object
    },
    right: {
      type: Object
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '200px'
    }
  },

  data () {
    const self = this
    return {
      chart: null,
      option: {
        title: [{
          x: '12%',
          bottom: '10px',
          text: this.left.title,
          textStyle: {
            // fontWeight: 'border',
            fontSize: 18,
            color: '#fff'
          },
          left: '15%'
        },
        {
          x: '42%',
          bottom: '10px',
          text: this.middle.title,
          textStyle: {
            // fontWeight: 'border',
            fontSize: 18,
            color: '#fff'
          },
          left: '43%'
        },
        {
          x: '75%',
          bottom: '10px',
          text: this.right.title,
          textStyle: {
            // fontWeight: 'border',
            fontSize: 18,
            color: '#fff'
          },
          left: '75%'
        }
        ],
        tooltip: {
          show: false
        },
        series: [
          {
            // 中间外部刻度
            type: 'gauge',
            center: ['50%', '55%'], // 默认全局居中
            radius: '90%',
            splitNumber: 10, // 刻度数量
            min: 0,
            max: this.middle.max || 10000,
            startAngle: 200,
            endAngle: -20,
            clockwise: true,
            axisLine: {
              show: false,
              lineStyle: {
                width: 2,
                shadowBlur: 0,
                color: [
                  [1, '#4b6ff4']
                ]
              }
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: '#4b6ff4',
                width: 1
              },
              length: -15,
              splitNumber: 10
            },
            splitLine: {
              show: true,
              length: 5,
              lineStyle: {
                color: '#4b6ff4'
              }
            },
            axisLabel: {
              show: true,
              distance: -30,
              textStyle: {
                color: '#4b6ff4',
                fontSize: 12,
                fontWeight: 'bold'
              },
              formatter (val) {
                if (val === 0 || val === (self.middle.max || 20000)) {
                  return val
                } else {
                  return ''
                }
              }
            },
            pointer: { // 仪表盘指针
              show: 0
            },
            detail: {
              show: false
            },
            data: [{
              name: '',
              value: this.middle.num
            }]
          },
          {
            // 中间白线
            startAngle: 200,
            endAngle: -20,
            type: 'gauge',
            center: ['50%', '55%'], // 默认全局居中
            radius: '80%',
            min: 0,
            max: this.middle.max || 10000,
            splitNumber: 0,
            axisLine: { // 坐标轴线
              lineStyle: {
                color: [
                  [0.66, '#dddddd'],
                  [1, '#dddddd']
                ], // 属性lineStyle控制线条样式
                width: 4
              }
            },
            axisLabel: { // 坐标轴小标记
              textStyle: { // 属性lineStyle控制线条样式
                fontWeight: 'bolder',
                fontSize: 16,
                color: 'rgba(30,144,255,0)'
              }
            },
            splitLine: { // 分隔线
              length: 10, // 属性length控制线长
              lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                width: 0,
                color: '#444'
              }
            },
            pointer: { // 分隔线 指针
              color: '#666666',
              width: 0,
              length: 230
            },
            detail: {
              show: false
            }
          },
          {
            name: '专家总数',
            type: 'gauge',
            startAngle: 200,
            endAngle: -20,
            radius: '70%',
            center: ['50%', '55%'], // 默认全局居中
            min: 0,
            max: this.middle.max || 10000,
            axisLine: {
              show: false,
              lineStyle: {
                width: 10,
                shadowBlur: 0,
                color: color
              }
            },
            axisTick: {
              show: false

            },
            splitLine: {
              show: false,
              length: 20

            },
            axisLabel: {
              show: false
            },
            pointer: {
              show: true,
              width: 6
            },
            detail: {
              show: true,
              offsetCenter: [0, '60%'],
              color: '#fff',
              textStyle: {
                fontSize: 30,
                fontWeight: 700
              }
            },
            itemStyle: {
              normal: {
                color: '#fff'
              }
            },
            animationDuration: 3000,
            data: [{
              value: this.middle.num
            }]
          },

          {
            // left外圈
            type: 'gauge',
            center: ['20%', '55%'], // 默认全局居中
            radius: '80%',
            splitNumber: 10, // 刻度数量
            min: 0,
            max: this.left.max || 10000,
            endAngle: 45,
            clockwise: true,
            axisLine: {
              show: true,
              lineStyle: {
                width: 2,
                shadowBlur: 0,
                color: [
                  [1, '#4b6ff4']
                ]
              }
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: '#4b6ff4',
                width: 1
              },
              length: -15,
              splitNumber: 10
            },
            splitLine: {
              show: true,
              length: 5,
              lineStyle: {
                color: '#4b6ff4'
              }
            },
            axisLabel: {
              show: true,
              distance: -40,
              textStyle: {
                color: '#4b6ff4',
                fontSize: 12,
                fontWeight: 'bold'
              },
              formatter (val) {
                if (val === 0 || val === (self.left.max || 10000)) {
                  return val
                } else {
                  return ''
                }
              }
            },
            pointer: { // 仪表盘指针
              show: 0
            },
            detail: {
              show: false
            },
            data: [{
              name: '',
              value: this.left.num
            }]
          },
          {
            // left白线
            type: 'gauge',
            center: ['20%', '55%'], // 默认全局居中
            radius: '70%',
            min: 0,
            max: this.left.max || 10000,
            endAngle: 45,
            splitNumber: 0,
            axisLine: { // 坐标轴线
              lineStyle: {
                color: [
                  [0.66, '#dddddd'],
                  [1, '#dddddd']
                ], // 属性lineStyle控制线条样式
                width: 4
              }
            },
            axisLabel: { // 坐标轴小标记
              textStyle: { // 属性lineStyle控制线条样式
                fontWeight: 'bolder',
                fontSize: 16,
                color: 'rgba(30,144,255,0)'
              }
            },
            splitLine: { // 分隔线
              length: 10, // 属性length控制线长
              lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                width: 0,
                color: '#444'
              }
            },
            pointer: { // 分隔线 指针
              color: '#666666',
              width: 0,
              length: 230
            },
            detail: {
              show: false
            }
          },
          {
            name: 'left',
            type: 'gauge',
            endAngle: 45,
            radius: '60%',
            center: ['20%', '55%'], // 默认全局居中
            min: 0,
            max: this.left.max || 10000,
            axisLine: {
              show: false,
              lineStyle: {
                width: 10,
                shadowBlur: 0,
                color: color
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              length: 20
            },
            axisLabel: {
              show: false
            },
            pointer: {
              show: true,
              width: 6
            },
            detail: {
              show: true,
              offsetCenter: ['10%', '60%'],
              color: '#fff',
              textStyle: {
                fontSize: 30,
                fontWeight: 700
              }
            },
            itemStyle: {
              normal: {
                color: '#fff'
              }
            },
            animationDuration: 3000,
            data: [{
              value: this.left.num
            }]
          },
          {
            // right外圈
            type: 'gauge',
            center: ['80%', '55%'], // 默认全局居中
            radius: '80%',
            splitNumber: 10, // 刻度数量
            min: 0,
            max: this.right.max || 10000,
            startAngle: 140,
            endAngle: -45,
            clockwise: true,
            axisLine: {
              show: false,
              lineStyle: {
                width: 2,
                shadowBlur: 0,
                color: [
                  [1, '#4b6ff4']
                ]
              }
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: '#4b6ff4',
                width: 1
              },
              length: -15,
              splitNumber: 10
            },
            splitLine: {
              show: true,
              length: 5,
              lineStyle: {
                color: '#4b6ff4'
              }
            },
            axisLabel: {
              distance: -30,
              textStyle: {
                color: '#4b6ff4',
                fontSize: 12,
                fontWeight: 'bold'
              },
              formatter (val) {
                if (val === 0 || val === (self.right.max || 10000)) {
                  return val
                } else {
                  return ''
                }
              }
            },
            pointer: { // 仪表盘指针
              show: 0
            },
            detail: {
              show: false
            },
            data: [{
              name: '',
              value: this.right.num
            }]
          }, {
            // right白线
            type: 'gauge',
            center: ['80%', '55%'], // 默认全局居中
            radius: '70%',
            min: 0,
            max: this.right.max || 10000,
            startAngle: 140,
            endAngle: -45,
            splitNumber: 0,
            axisLine: { // 坐标轴线
              lineStyle: {
                color: [
                  [0.66, '#dddddd'],
                  [1, '#dddddd']
                ], // 属性lineStyle控制线条样式
                width: 4
              }
            },
            axisLabel: { // 坐标轴小标记
              textStyle: { // 属性lineStyle控制线条样式
                fontWeight: 'bolder',
                fontSize: 16,
                color: 'rgba(30,144,255,0)'
              }
            },
            splitLine: { // 分隔线
              length: 10, // 属性length控制线长
              lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                width: 0,
                color: '#444'
              }
            },
            pointer: { // 分隔线 指针
              color: '#666666',
              width: 0,
              length: 230
            },
            detail: {
              show: false
            }
          },
          {
            name: 'right',
            type: 'gauge',
            startAngle: 140,
            endAngle: -45,
            radius: '60%',
            center: ['80%', '55%'], // 默认全局居中
            min: 0,
            max: this.right.max || 10000,
            axisLine: {
              show: false,
              lineStyle: {
                width: 10,
                shadowBlur: 0,
                color: color
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              length: 20
            },
            axisLabel: {
              show: false
            },
            pointer: {
              show: true,
              width: 6
            },
            detail: {
              show: true,
              offsetCenter: ['-20%', '60%'],
              textStyle: {
                fontSize: 30,
                fontWeight: 700
              },
              color: '#fff'
            },
            itemStyle: {
              normal: {
                color: '#fff'
              }
            },
            animationDuration: 3000,
            data: [{
              value: this.right.num
            }]
          }
        ]
      }
    }
  },

  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        this.initChart()
      }, 300)
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
