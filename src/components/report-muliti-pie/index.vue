<template>
  <div class="report-muliti-pie-wrapper">
    <div id="chart" ref="mychart" style="width: 80px; height: 80px;"></div>
    <h3>{{title}}</h3>
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
            radius: ['70%', '100%'],
            data: [
              { name: '机器学习', value: this.num },
              { name: '', value: this.other }
            ],
            label: {
              show: true,
              position: 'center',
              formatter () {
                return that.percent
              },
              color: '#fff',
              fontWeight: 'bolder',
              fontSize: 14
            }
          }
        ],
        color: [this.color, '#2a3d85']
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
       font-size: 16px;
       font-weight: 700;
     }
  }
</style>
