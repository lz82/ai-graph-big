<template>
  <div class="report-map-wrapper">
    <div id="chart" ref="mychart" style="width: 850px; height: 800px;"></div>
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
import 'echarts/map/js/china'

const mapData = [
  { name: '北京', value: [116.46, 39.92, 2] },
  { name: '新疆', value: [87.617733, 43.792818, 3] },
  { name: '河南', value: [113.665412, 34.757975, 4] },
  { name: '浙江', value: [120.153576, 30.287459, 5] },
  { name: '广东', value: [113.280637, 23.125178, 6] }
]

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
      geoCoordMap: {},
      option: {
        geo: {
          show: true,
          top: '20px',
          left: 0,
          right: 0,
          map: 'china',
          label: {
            normal: {
              show: false,
              color: '#fff'
            },
            emphasis: {
              show: false,
              color: '#fff'
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              borderColor: '#1180c7',
              borderWidth: 5,
              areaColor: '#10172d',
              fontWeightL: 700
            },
            emphasis: {
              areaColor: '#10172d'
            }
          },
          regions: [
            {
              name: '南海诸岛',
              value: 0,
              itemStyle: {
                normal: {
                  opacity: 0
                }
              }
            }
          ]
        },
        series: [{
          name: '散点',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: mapData,
          symbolSize: 16,
          label: {
            normal: {
              formatter (val) {
                return `${val.name}\n${val.value[2]}`
              },
              fontWeight: 'bolder',
              fontSize: 24,
              show: true,
              align: 'center',
              position: 'top'
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
        },
        {
          type: 'map',
          map: 'china',
          geoIndex: 1,
          left: 0,
          top: '20px',
          right: 0,
          aspectScale: 0.75, // 长宽比
          showLegendSymbol: false, // 存在legend时显示
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false,
              textStyle: {
                color: '#fff'
              }
            }
          },
          roam: false,

          itemStyle: {
            normal: {
              borderColor: '#5ab6e2',
              borderWidth: 1,
              areaColor: '#10172d',
              fontWeightL: 700
            },
            emphasis: {
              areaColor: '#10172d'
            }
          },
          regions: [
            {
              name: '南海诸岛',
              value: 0,
              itemStyle: {
                normal: {
                  opacity: 0
                },
                emphasis: {
                  opacity: 0
                }
              }
            }
          ]
        },
        {
          name: '点',
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 6
        },
        {
          name: 'Top 5',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: mapData,
          symbolSize: 16,
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: '{b}',
              position: 'left',
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: 'yellow',
              shadowBlur: 10,
              shadowColor: 'yellow'
            }
          },
          zlevel: 1
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
  .report-map-wrapper {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    h3 {
      font-size: 24px;
      font-weight: 700;
      color: #fff;

    }
  }
</style>
