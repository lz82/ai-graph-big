<template>
  <div class="report-muliti-pie-wrapper">
    <div id="chart" ref="mychart" style="width: 100%; height: 260px;"></div>
  </div>
</template>

<script>
export default {
  name: 'ReportMulitiPie',

  data () {
    return {
      chart: null,
      option: {}
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
      // this.chart.setOption(this.option)
    }
  }
}
</script>

<style lang="less" scoped>
  .report-muliti-pie-wrapper {
     box-sizing: border-box;
  }
</style>
