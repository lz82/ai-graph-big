<template>
  <div class="report-enterprise-wrapper">
    <report-layout>
      <template #left>
        <div class="column-wrapper">
          <pannel>
            <div class="row">
              <div class="title">上海小巨人企业</div>
              <div class="ball">
                <Liquidfill title="AI企业总数及占比" :data="0.17" num="17.22" :cnt="31" />
              </div>
              <div class="chart">
                <report-muliti-line
                  title="AI企业增速"
                  height="100px"
                  symbol="none"
                  :legend="domainList"
                  :legendsize="8"
                  :series="bigData"
                  :isstack="true"
                />
              </div>
            </div>
          </pannel>
          <pannel>
            <div class="row">
              <div class="title">上海双创企业</div>
              <div class="ball">
                <Liquidfill title="AI企业总数及占比" :data="0.1" num="9.66" :cnt="169" />
              </div>
              <div class="chart">
                <report-bar
                  title="AI企业增速"
                  height="100px"
                  :rotate="0"
                  position="top"
                  :xaxis="domainList"
                  :legend="['2017', '2018']"
                  :series="creativeData"
                  :color="['#66ccff', '#6791de']"
                />
              </div>
            </div>
          </pannel>
          <pannel>
            <div class="row">
              <div class="title">上海高新技术企业</div>
              <div class="ball">
                <Liquidfill title="AI企业总数及占比" :data="0.12" num="11.26" :cnt="417" />
              </div>
              <div class="chart">
                <report-bar
                  title="AI企业增速"
                  height="100px"
                  :xaxis="domainList"
                  :legend="['2015', '2016', '2017', '2018']"
                  :series="highTech"
                  bar-width="15px"
                />
              </div>
            </div>
          </pannel>
        </div>
      </template>
      <div class="map">
        map
      </div>
      <template #right>
        <div class="right-wrapper">
          <div class="w345">
            <pannel style="height: 220px">
              <template #title>
                <h4>AI企业增长</h4>
                <report-stack-bar :series="aiAddRate" />
              </template>
            </pannel>
            <pannel style="height: 235px;">
              <template #title>
                <h4>技术交易AI企业占比</h4>
                <div class="table">
                  <div class="row header">
                    <span>交易类型</span>
                    <span>2016</span>
                    <span>2017</span>
                    <span>2018</span>
                  </div>
                  <div class="row">
                    <span>技术咨询</span>
                    <span>6.99%</span>
                    <span>5.75%</span>
                    <span>5.83%</span>
                  </div>
                  <div class="row">
                    <span>技术开发</span>
                    <span>8.32%</span>
                    <span>8.06%</span>
                    <span>7.62%</span>
                  </div>
                  <div class="row">
                    <span>技术服务</span>
                    <span>7.62%</span>
                    <span>7.01%</span>
                    <span>5.81%</span>
                  </div>
                  <div class="row">
                    <span>技术转让</span>
                    <span>10.28%</span>
                    <span>8.48%</span>
                    <span>8.7%</span>
                  </div>
                </div>
              </template>
            </pannel>
          </div>
          <div class="w300">
            <pannel style="height: 480px;">
              <template #title>
                <h4>AI各领域企业占比</h4>
                <div class="pie-wrapper">
                  <report-muliti-pie
                    v-for="(item, index) in mulitiPieList"
                    :key="index"
                    class="pie"
                    :title="item.title"
                    :num="item.num"
                    :other="item.other"
                    :color="item.color"
                    width="90px"
                    height="90px"
                  />
                </div>
              </template>
            </pannel>
          </div>
        </div>
      </template>
    </report-layout>
  </div>
</template>

<script>
import ReportLayout from '@/components/report-layout'
import Pannel from '@/components/pannel'
import Liquidfill from '@/components/liquidfill'
import ReportMulitiLine from '@/components/report-muliti-line'
import ReportBar from '@/components/report-bar'
import ReportStackBar from '@/components/report-stack-bar'
import ReportMulitiPie from '@/components/report-muliti-pie'

export default {
  name: 'ReportEnterprise',

  components: {
    ReportLayout,
    Pannel,
    Liquidfill,
    ReportMulitiLine,
    ReportBar,
    ReportStackBar,
    ReportMulitiPie
  },

  data() {
    return {
      domainList: ['AI基础', '人机混合', '机器学习', '视觉技术'],
      bigData: [
        {
          name: 'AI基础',
          data: [15, 23, 12, 20]
        },
        {
          name: '人机混合',
          data: [6, 7, 1, 7]
        },
        {
          name: '机器学习',
          data: [8, 13, 5, 9]
        },
        {
          name: '视觉技术',
          data: [13, 19, 8, 12]
        }
      ],
      creativeData: [
        {
          name: '2017',
          data: [98, 16, 32, 52]
        },
        {
          name: '2018',
          data: [103, 19, 27, 58]
        }
      ],
      highTech: [
        {
          name: '2015',
          data: [101, 25, 55, 85],
          stack: 'cnt'
        },
        {
          name: '2016',
          data: [219, 69, 92, 143],
          stack: 'cnt'
        },
        {
          name: '2017',
          data: [291, 87, 164, 196],
          stack: 'cnt'
        },
        {
          name: '2018',
          data: [237, 55, 97, 140],
          stack: 'cnt'
        }
      ],
      aiAddRate: [
        {
          name: '2016',
          data: [7898, 5668, 4552, 3554]
        },
        {
          name: '2017',
          data: [9889, 4059, 5559, 7078]
        },
        {
          name: '2018',
          data: [12481, 2900, 5521, 8061]
        }
      ],
      mulitiPieList: [
        {
          title: 'AI基础',
          num: 12481,
          other: 24149,
          color: ['#fb8585', '#f8cdcd']
        },
        {
          title: '人机混合',
          num: 2900,
          other: 33730,
          color: ['#20cec8', '#d1f8f7']
        },
        {
          title: '机器学习',
          num: 5521,
          other: 31109,
          color: ['#3dd5ff', '#d5f0f8']
        },
        {
          title: '神经网络',
          num: 2671,
          other: 33959,
          color: ['#8cc152', '#c1cbb6']
        },
        {
          title: '自然语言',
          num: 4456,
          other: 32174,
          color: ['#e7affe', '#f9eaff']
        },
        {
          title: '视觉技术',
          num: 8601,
          other: 28029,
          color: ['#f6bb42', '#fdf0d6']
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.report-enterprise-wrapper {
  .column-wrapper {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  }
  .row {
    display: flex;
    flex-flow: row nowrap;

    .title {
      flex: 0 0 170px;
    }

    .ball {
      flex: 0 0 130px;
    }

    .chart {
      flex: 1 0 auto;
      padding: 0 0 0 25px;
    }
  }
  .right-wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    height: 100%;
    .w345 {
      width: 345px;
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;

      .table {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        padding-top: 15px;
        .row {
          color: #fff;
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-around;
          align-items: center;
          line-height: 30px;
          font-size: 16px;
          border-bottom: dashed 1px #00a2ff;
          span {
            // display: flex;
            flex: 0 0 25%;
            text-align: center;
          }
        }
        .header {
          color: #3bcef8;
          border-bottom: solid 2px #00a2ff;
          line-height: 30px;
          font-size: 16px;
        }
      }
    }

    .w300 {
      width: 300px;
      height: 100%;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      .pie-wrapper {
        padding-top: 10px;
        height: 440px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: space-around;

        .pie {
        }
      }
    }
  }
  .map {
  }
}
</style>
