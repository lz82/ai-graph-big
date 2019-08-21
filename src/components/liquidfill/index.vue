<template>
  <div class="liquidfill-wrapper">
    <h3>{{ title }}</h3>
    <div id="chart" ref="mychart" style="width: 100%; height: 80%;"></div>
  </div>
</template>

<script>
import 'echarts-liquidfill'

export default {
  name: 'Liquidfill',

  props: {
    title: {
      type: String
    },
    data: {
      type: Number,
      required: true
    },
    num: {
      type: String,
      required: true
    },
    cnt: {
      type: Number,
      required: true
    }
  },

  data () {
    return {
      chart: null,
      option: {
        series: [{
          type: 'liquidFill',
          data: [this.data],
          radius: '100%',
          label: {
            fontSize: 24,
            color: this.num > 0.3 ? '#4b6ff4' : '#fff',
            formatter: () => {
              return `{c|${this.cnt}}{a|家}\n{b|${this.num}}`
            },
            rich: {
              a: {
                color: '#fff',
                fontSize: 16,
                padding: [-10, 0, 0, 3]
              },
              b: {
                color: '#fff',
                fontSize: 16,
                marginTop: '10px'
              },
              c: {
                color: '#fff',
                fontSize: 24,
                fontWeight: 700
              }
            }
          },
          outline: false,
          backgroundStyle: {
            color: '#4b6ff4'
          },
          color: ['#d9e1ff']
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
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style lang="less" scoped>
  .liquidfill-wrapper {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    h3 {
      font-size: 16px;
      font-weight: 500;
      color: #fff;
      padding: 0 0 45px 0;
    }
  }
</style>
