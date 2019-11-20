<template>
  <div class="liquidfill-wrapper">
    <div id="chart" ref="mychart" style="width: 100%; height: 80%;"></div>
    <h3>{{ title }}</h3>
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
          radius: '80px',
          label: {
            fontSize: 24,
            color: this.num > 0.3 ? '#4b6ff4' : '#fff',
            formatter: () => {
              return `{b|${this.num}}{d|%}`
            },
            rich: {
              a: {
                color: '#fff',
                fontSize: 16,
                padding: [-10, 0, 0, 3]
              },
              b: {
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bolder'
                // marginTop: '10px'
              },
              c: {
                color: '#fff',
                fontSize: 24,
                fontWeight: 900
              },
              d: {
                fontSize: 12,
                color: '#fff',
                padding: [-5, 0, 0, 0]
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
    height: 100%;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    h3 {
      font-size: 16px;
      // font-weight: 500;
      color: #fff;
      padding: 15px 0 0  0;
    }
  }
</style>
