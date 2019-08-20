<template>
  <div class="report-trade-wrapper">
    <div ref="mychart" style="width: 100%; height: 910px"></div>
  </div>
</template>

<script>
import reportConfig from '@/config/report'
const { colorList } = reportConfig

const rich = {
  num: {
    fontWeight: 700,
    fontSize: 24,
    color: '#fff',
    align: 'center'
  },
  title: {
    fontSize: 20,
    color: '#fff',
    align: 'center'
  }
}
export default {
  name: 'ReportTrade',

  data () {
    return {
      chart: null,
      option: {
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        color: reportConfig.colorList,
        series: [
          {
            type: 'graph',
            layout: 'force',
            force: {
              initLayout: 'circular',
              repulsion: 1000,
              edgeLength: 250,
              focusNodeAdjacency: true
            },
            roam: false,
            label: {
              normal: {
                show: true
              }
            },
            data: [
              {
                name: 'AI投资总额',
                symbolSize: 220,
                draggable: true,
                category: 0,
                itemStyle: {
                  normal: {
                    borderColor: colorList[0],
                    borderWidth: 6,
                    shadowBlur: 20,
                    shadowColor: colorList[0],
                    color: '#001c43'
                  }
                },
                label: {
                  show: true,
                  formatter () {
                    return '{num|1000万}\n{title|AI投资总额}'
                  },
                  rich: rich
                }
              },
              {
                name: '汽车交通',
                symbolSize: 200,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: colorList[1],
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: colorList[1],
                    color: '#001c43'
                  }
                },
                label: {
                  show: true,
                  formatter () {
                    return '{num|200万}\n{title|汽车交通}'
                  },
                  rich: rich
                }
              },
              {
                name: '游戏',
                symbolSize: 200,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: colorList[2],
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: colorList[2],
                    color: '#001c43'
                  }
                },
                label: {
                  show: true,
                  formatter () {
                    return '{num|100万}\n{title|游戏}'
                  },
                  rich: rich
                }
              },
              {
                name: '电子商务',
                symbolSize: 210,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: colorList[3],
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: colorList[3],
                    color: '#001c43'
                  }
                },
                label: {
                  show: true,
                  formatter () {
                    return '{num|140万}\n{title|电子商务}'
                  },
                  rich: rich
                }
              },
              {
                name: '硬件',
                symbolSize: 160,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: colorList[4],
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: colorList[4],
                    color: '#001c43'
                  }
                },
                label: {
                  show: true,
                  formatter () {
                    return '{num|100万}\n{title|硬件}'
                  },
                  rich: rich
                }
              },
              {
                name: '社交网络',
                symbolSize: 200,
                category: 2,
                itemStyle: {
                  normal: {
                    borderColor: colorList[5],
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: colorList[5],
                    color: '#001c43'
                  }
                },
                label: {
                  show: true,
                  formatter () {
                    return '{num|100万}\n{title|社交网络}'
                  },
                  rich: rich
                }
              }
              // {
              //   name: '医疗健康',
              //   symbolSize: 80,
              //   category: 2,
              //   itemStyle: {
              //     normal: {
              //       borderColor: '#b457ff',
              //       borderWidth: 4,
              //       shadowBlur: 10,
              //       shadowColor: '#b457ff',
              //       color: '#001c43'
              //     }
              //   }

              // },
              // {
              //   name: '教育',
              //   symbolSize: 80,
              //   itemStyle: {
              //     normal: {
              //       borderColor: '#82dffe',
              //       borderWidth: 4,
              //       shadowBlur: 10,
              //       shadowColor: '#04f2a7',
              //       color: '#001c43'

              //     }
              //   },
              //   category: 2

              // },
              // {
              //   name: '物流',
              //   symbolSize: 80,
              //   itemStyle: {
              //     normal: {
              //       borderColor: '#82dffe',
              //       borderWidth: 4,
              //       shadowBlur: 10,
              //       shadowColor: '#04f2a7',
              //       color: '#001c43'
              //     }
              //   },
              //   category: 2

              // }
            ],
            links: [
              {
                source: 'AI投资总额',
                target: '汽车交通'

              },
              {
                source: 'AI投资总额',
                target: '游戏'
              },
              {
                source: 'AI投资总额',
                target: '电子商务'
              },
              {
                source: 'AI投资总额',
                target: '硬件'
              },
              {
                source: 'AI投资总额',
                target: '社交网络'
              },
              {
                source: 'AI投资总额',
                target: '医疗健康'
              },
              {
                source: 'AI投资总额',
                target: '教育'
              },
              {
                source: 'AI投资总额',
                target: '物流'
              }
            ],
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: 5,
                curveness: 0
              }
            }
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

</style>
