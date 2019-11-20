<template>
  <div class="report-muliti-pie-wrapper">
    <div id="chart" ref="mychart" :style="{width: width, height: height}"></div>
    <h3 :style="{fontSize: numsize, color: '#fff'}">{{num}}</h3>
  </div>
</template>

<script>
export default {
  name: 'ReportMulitiPie',

  props: {
    title: {
      type: String,
      default: 'XXX领域'
    },
    num: {
      type: Number,
      required: true
    },
    other: {
      type: Number,
      required: true
    },
    color: {
      type: String
    },
    width: {
      type: String,
      default: '80px'
    },
    height: {
      type: String,
      default: '80px'
    },
    titlesize: {
      type: Number,
      default: 12
    },
    percentsize: {
      type: Number,
      default: 16
    },
    numsize: {
      type: String,
      default: '16px'
    }
  },

  data () {
    const that = this
    return {
      chart: null,
      option: {
        series: [
          {
            type: 'pie',
            name: '占比',
            hoverAnimation: false,
            animation: true,
            animationDuration: 2000,
            selectedMode: false,
            radius: ['80%', '100%'],
            data: [
              { name: '机器学习', value: this.num },
              { name: '', value: this.other }
            ],
            label: {
              // show: true,
              position: 'center',
              formatter () {
                const a = that.percent
                const b = that.title
                return `{a|${a}}\n{b|${b}}`
              },
              rich: {
                a: {
                  color: '#fff',
                  fontSize: this.percentsize
                },
                b: {
                  color: '#fff',
                  fontSize: this.titlesize
                }
              }
            }
          }
        ],
        color: this.color // [this.color, '#2a3d85']
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
  },

  computed: {
    percent () {
      return (this.num / (this.num + this.other) * 100).toFixed(2) + '%'
    }
  }
}
</script>

<style lang="less" scoped>
  .report-muliti-pie-wrapper {
     box-sizing: border-box;
     display: flex;
     flex-flow: column nowrap;
     justify-content: center;
     align-items: center;
     h3 {
       padding: 10px;
       font-weight: 700;
     }
  }
</style>
