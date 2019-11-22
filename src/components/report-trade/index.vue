<template>
  <div class="report-trade-wrapper">
    <div ref="mychart" style="width: 100%; height: 524px"></div>
  </div>
</template>

<script>
import reportConfig from '@/config/report'
const { colorList } = reportConfig

// const bg = 'rgba(26, 21, 45, 1)'
const borderWidth = 2

const newColor = ['#fb8585', '#e7affe', '#967adc', '#8dd1e1', '#3dd5ff', '#9cacf1', '#f6bb42', '#8cc152', '#20cec8']

const rich = {
  num: {
    fontSize: 20,
    color: '#fff',
    align: 'center'
  },
  title: {
    fontSize: 18,
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
        color: colorList,
        symbol: 'roundRect',
        symbolSize: 1,
        series: [
          {
            type: 'graph',
            layout: 'force',
            force: {
              // initLayout: 'circular',
              repulsion: 200,
              gravity: 0.02,
              layoutAnimation: 1000,
              edgeLength: [130, 205],
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
                x: 400,
                y: 250,
                fixed: true,
                value: '8500亿',
                symbolSize: 130,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: '#fff',
                    borderWidth: 3,
                    color: newColor[0]
                  }
                },
                label: {
                  show: true,
                  formatter () {
                    return '{num|8500亿}\n{title|AI投资总额}'
                  },
                  rich: rich
                }
              },
              {
                name: '汽车交通',
                symbolSize: 95,
                // draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: '#fff',
                    borderWidth: 3,
                    color: newColor[1]
                  }
                },
                label: {
                  show: true,
                  formatter () {
                    return '{num|12.46%}\n{title|汽车交通}'
                  },
                  rich: rich
                }
              },
              {
                name: '游戏',
                symbolSize: 80,
                itemStyle: {
                  normal: {
                    borderColor: '#fff',
                    borderWidth: 3,
                    color: newColor[2]
                  }
                },
                label: {
                  show: true,
                  formatter () {
                    return '{num|1.26%}\n{title|游戏}'
                  },
                  rich: rich
                }
              },
              {
                name: '电子商务',
                symbolSize: 90,
                itemStyle: {
                  normal: {
                    borderColor: '#fff',
                    borderWidth: 3,
                    color: newColor[3]
                  }
                },
                label: {
                  show: true,
                  formatter () {
                    return '{num|4.64%}\n{title|电子商务}'
                  },
                  rich: rich
                }
              },
              {
                name: '硬件',
                symbolSize: 80,
                itemStyle: {
                  normal: {
                    borderColor: '#fff',
                    borderWidth: 3,
                    color: newColor[4]
                  }
                },
                label: {
                  show: true,
                  formatter () {
                    return '{num|7.04%}\n{title|硬件}'
                  },
                  rich: rich
                }
              },
              {
                name: '文娱传媒',
                symbolSize: 95,
                itemStyle: {
                  normal: {
                    borderColor: '#fff',
                    borderWidth: 3,
                    color: newColor[5]
                  }
                },
                label: {
                  show: true,
                  formatter () {
                    return '{num|4.40%}\n{title|文娱传媒}'
                  },
                  rich: rich
                }
              },
              {
                name: '医疗健康',
                symbolSize: 105,
                itemStyle: {
                  normal: {
                    borderColor: '#fff',
                    borderWidth: 3,
                    color: newColor[6]
                  }
                },
                label: {
                  show: true,
                  formatter () {
                    return '{num|16.87%}\n{title|医疗健康}'
                  },
                  rich: rich
                }
              },
              {
                name: '教育',
                symbolSize: 90,
                itemStyle: {
                  normal: {
                    borderColor: '#fff',
                    borderWidth: 3,
                    color: newColor[7]

                  }
                },
                label: {
                  show: true,
                  formatter () {
                    return '{num|16.87%}\n{title|教育}'
                  },
                  rich: rich
                }
              },
              {
                name: '物流',
                symbolSize: 90,
                itemStyle: {
                  normal: {
                    borderColor: '#fff',
                    borderWidth: 3,
                    color: newColor[8]
                  }
                },
                label: {
                  show: true,
                  formatter () {
                    return '{num|15.32%}\n{title|物流}'
                  },
                  rich: rich
                }
              },
              {
                name: '企业服务',
                symbolSize: 100,
                itemStyle: {
                  normal: {
                    borderColor: '#fff',
                    borderWidth: 3,
                    color: newColor[9]
                  }
                },
                label: {
                  show: true,
                  formatter () {
                    return '{num|21.38%}\n{title|企业服务}'
                  },
                  rich: rich
                }
              },
              {
                name: '金融',
                symbolSize: 80,
                itemStyle: {
                  normal: {
                    borderColor: '#fff',
                    borderWidth: 3,
                    color: newColor[0]
                  }
                },
                label: {
                  show: true,
                  formatter () {
                    return '{num|6.46%}\n{title|金融}'
                  },
                  rich: rich
                }
              },
              {
                name: '本地生活',
                symbolSize: 80,
                itemStyle: {
                  normal: {
                    borderColor: '#fff',
                    borderWidth: 3,
                    color: newColor[1]
                  }
                },
                label: {
                  show: true,
                  formatter () {
                    return '{num|3.95%}\n{title|本地生活}'
                  },
                  rich: rich
                }
              }
            ],
            links: [
              {
                source: 'AI投资总额',
                target: '汽车交通',
                value: 300
              },
              {
                source: 'AI投资总额',
                target: '游戏',
                value: 350
              },
              {
                source: 'AI投资总额',
                target: '电子商务',
                value: 100
              },
              {
                source: 'AI投资总额',
                target: '硬件',
                value: 100
              },
              {
                source: 'AI投资总额',
                target: '文娱传媒',
                value: 100
              },
              {
                source: 'AI投资总额',
                target: '医疗健康',
                value: 100
              },
              {
                source: 'AI投资总额',
                target: '教育',
                value: 100
              },
              {
                source: 'AI投资总额',
                target: '物流',
                value: 100
              },
              {
                source: 'AI投资总额',
                target: '企业服务',
                value: 100
              },
              {
                source: 'AI投资总额',
                target: '金融',
                value: 100
              },
              {
                source: 'AI投资总额',
                target: '本地生活',
                value: 80
              }
            ],
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: borderWidth,
                curveness: 0,
                color: '#fff'
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
