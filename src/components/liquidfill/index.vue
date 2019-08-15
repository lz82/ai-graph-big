<template>
  <div class="liquidfill-wrapper">
    <h3>{{ title }}</h3>
    <div id="chart" ref="mychart" style="width: 100%; height: 100%;"></div>
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
    num: {
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
          data: [this.num],
          radius: '100%',
          label: {
            fontSize: 24,
            color: this.num > 0.3 ? '#4b6ff4' : '#fff'
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
      padding: 15px 0 45px 0;
    }
  }
</style>
