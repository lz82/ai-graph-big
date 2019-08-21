<template>
  <div class="report-map-wrapper">
    <div id="chart" ref="mychart" style="width: 850px; height: 800px;"></div>
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
import 'echarts/map/js/china'

const mapData = [
  { name: '广东', value: [113.12244, 23.009505, 8705] },
  { name: '江苏', value: [118.8062, 31.9208, 7835] },
  { name: '浙江', value: [119.5313, 29.8773, 4556] },
  { name: '北京', value: [116.4551, 40.2539, 4462] },
  { name: '上海', value: [121.4648, 31.2891, 3998] },
  { name: '安徽', value: [117.29, 32.0581, 2780] },
  { name: '四川', value: [103.9526, 30.7617, 2279] },
  { name: '山东', value: [117.1582, 36.8701, 2185] },
  { name: '天津', value: [117.4219, 39.4189, 1784] },
  { name: '湖北', value: [114.3896, 30.6628, 1573] }
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
                // return `${val.name}-${val.value[2]}`
                // return `${val.name}`
                return `${val.value[2]}`
              },
              fontWeight: 'bolder',
              fontSize: 24,
              show: true,
              align: 'right',
              position: 'left'
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
