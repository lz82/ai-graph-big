<template>
  <div class="report-map-wrapper">
    <h3>{{ title }}</h3>
    <div id="chart" ref="mychart" style="width: 800px; height: 500px;"></div>
  </div>
</template>

<script>
import 'echarts/map/js/china'

export default {
  name: 'ReportMap',

  props: {
    title: {
      type: String
    }
  },

  data () {
    return {
      chart: null,
      rawData: [
        { name: '北京', value: 199 },
        { name: '新疆', value: 180 },
        { name: '河南', value: 137 },
        { name: '浙江', value: 114 },
        { name: '广东', value: 123 }
      ],
      mapData: [
        { name: '北京', value: [116.46, 39.92, 2] },
        { name: '新疆', value: [87.617733, 43.792818, 3] },
        { name: '河南', value: [113.665412, 34.757975, 4] },
        { name: '浙江', value: [120.153576, 30.287459, 5] },
        { name: '广东', value: [113.280637, 23.125178, 6] }
      ],
      geoCoordMap: {},
      option: {
        geo: {
          show: true,
          map: 'china',
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: '#023677',
              borderColor: '#1180c7'
            },
            emphasis: {
              areaColor: '#4499d0'
            }
          }
        },
        series: [{
          name: '散点',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: this.mapData,
          symbolSize: 24,
          geoIndex: 0,
          // symbolSize: function (val) {
          //   return val[2] / 10
          // },
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: true
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#fff'
            }
          }
        }
        // {
        //   type: 'map',
        //   map: 'china',
        //   geoIndex: 0,
        //   aspectScale: 0.75, // 长宽比
        //   showLegendSymbol: false, // 存在legend时显示
        //   label: {
        //     normal: {
        //       show: true
        //     },
        //     emphasis: {
        //       show: false,
        //       textStyle: {
        //         color: '#fff'
        //       }
        //     }
        //   },
        //   roam: true,
        //   itemStyle: {
        //     normal: {
        //       areaColor: '#031525',
        //       borderColor: '#3B5077'
        //     },
        //     emphasis: {
        //       areaColor: '#2B91B7'
        //     }
        //   },
        //   animation: false,
        //   data: this.rawData
        // },
        // {
        //   name: '点',
        //   type: 'scatter',
        //   coordinateSystem: 'geo',
        //   zlevel: 6
        // },
        // {
        //   name: 'Top 5',
        //   type: 'effectScatter',
        //   coordinateSystem: 'geo',
        //   data: this.mapData,
        //   showEffectOn: 'render',
        //   rippleEffect: {
        //     brushType: 'stroke'
        //   },
        //   hoverAnimation: true,
        //   label: {
        //     normal: {
        //       formatter: '{b}',
        //       position: 'left',
        //       show: false
        //     }
        //   },
        //   itemStyle: {
        //     normal: {
        //       color: 'yellow',
        //       shadowBlur: 10,
        //       shadowColor: 'yellow'
        //     }
        //   },
        //   zlevel: 1
        // }

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
  .report-map-wrapper {
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
