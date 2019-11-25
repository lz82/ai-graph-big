<template>
  <div class="report-map-wrapper">
    <h3>{{ title }}</h3>
    <div id="chart" ref="mychart" style="width: 600px; height: 485px;"></div>
    <transition-group name="fade" mode="out-in" tag="div">
      <div class="table" key="10">
        <div class="row header">
          <span>地区</span>
          <span>数量</span>
        </div>
        <div class="row">
          <span>广东</span>
          <span>8705</span>
        </div>
        <div class="row">
          <span>江苏</span>
          <span>7835</span>
        </div>
        <div class="row">
          <span>浙江</span>
          <span>4556</span>
        </div>
        <div class="row">
          <span>北京</span>
          <span>4462</span>
        </div>
        <div class="row">
          <span>上海</span>
          <span>3998</span>
        </div>
        <div class="row">
          <span>安徽</span>
          <span>2780</span>
        </div>
        <div class="row">
          <span>四川</span>
          <span>2279</span>
        </div>
        <div class="row">
          <span>山东</span>
          <span>2185</span>
        </div>
        <div class="row">
          <span>天津</span>
          <span>1784</span>
        </div>
      </div>
      <div class="table right" key="20">
        <div class="row header">
          <span>地区</span>
          <span>数量</span>
        </div>
        <div class="row">
          <span>湖北</span>
          <span>1573</span>
        </div>
        <div class="row">
          <span>福建</span>
          <span>1344</span>
        </div>
        <div class="row">
          <span>湖南</span>
          <span>1016</span>
        </div>
        <div class="row">
          <span>河南</span>
          <span>954</span>
        </div>
        <div class="row">
          <span>重庆</span>
          <span>917</span>
        </div>
        <div class="row">
          <span>辽宁</span>
          <span>802</span>
        </div>
        <div class="row">
          <span>陕西</span>
          <span>798</span>
        </div>
        <div class="row">
          <span>河北</span>
          <span>618</span>
        </div>
        <div class="row">
          <span>广西</span>
          <span>475</span>
        </div>
        <!-- <div class="row">
          <span>江西</span>
          <span>378</span>
        </div>
        <div class="row">
          <span>黑龙江</span>
          <span>314</span>
        </div> -->
      </div>
    </transition-group>
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
  { name: '湖北', value: [114.3896, 30.6628, 1573] },
  { name: '福建', value: [119.4543, 25.9222, 1344] },
  { name: '湖南', value: [113.0823, 28.2568, 1016] },
  { name: '河南', value: [113.4668, 34.6234, 954] },
  { name: '重庆', value: [108.384366, 30.439702, 917] },
  { name: '辽宁', value: [123.1238, 42.1216, 802] },
  { name: '陕西', value: [109.1162, 34.2004, 798] },
  { name: '河北', value: [114.4995, 38.1006, 618] },
  { name: '广西', value: [108.479, 23.1152, 475] },
  { name: '江西', value: [116.0046, 28.6633, 378] },
  { name: '黑龙江', value: [127.9688, 45.368, 314] }
]

export default {
  name: 'ReportMap',

  props: {
    title: {
      type: String
    }
  },

  data() {
    return {
      chart: null,
      showTop10: true,
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
        series: [
          {
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: mapData,
            // data: [
            //   { name: '北京', value: [116.46, 39.92, 2] },
            //   { name: '新疆', value: [87.617733, 43.792818, 3] },
            //   { name: '河南', value: [113.665412, 34.757975, 4] },
            //   { name: '浙江', value: [120.153576, 30.287459, 5] },
            //   { name: '广东', value: [113.280637, 23.125178, 6] }
            // ],
            // symbolSize: 24,
            geoIndex: 0,
            // symbolSize: function (val) {
            //   return val[2] / 10
            // },
            symbolSize: 8,
            label: {
              normal: {
                formatter(val) {
                  // return `${val.name}-${val.value[2]}`
                  return `${val.name}`
                  // return `${val.value[2]}`
                },
                fontWeight: 'bolder',
                fontSize: 12,
                show: true,
                align: 'center',
                position: 'bottom',
                distance: 0,
                offset: [0, 10]
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
                borderColor: '#1b3362',
                borderWidth: 1,
                areaColor: '#68c2ee',
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
            name: 'Top 10',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: mapData,
            symbolSize: 12,
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

  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
    setInterval(() => {
      this.showTop10 = !this.showTop10
    }, 5000)
  },

  methods: {
    initChart() {
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
  position: relative;
  h3 {
    font-size: 24px;
    // font-weight: 700;
    color: #3BCEF8;
  }
  .table {
    position: absolute;
    width: 70px;
    // height: 155px;
    border: solid 1px #3BCEF8;
    left: 15px;
    bottom: 0px;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    color: #3BCEF8;
    font-size: 12px;

    .row {
      display: flex;
      flex-flow: row nowrap;
      width: 100%;
      span {
        flex: 0 0 50%;
        text-align: center;
        line-height: 14px;
      }
    }
    .header {
      border-bottom: solid 1px #3BCEF8;
    }
    &.right {
      left: 86px;
      border-left-width: 0;
    }
  }
}
</style>
