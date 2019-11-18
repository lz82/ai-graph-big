<template>
  <div class="report-enterprise-wrapper">
    <div class="left-wrapper">
      <Card
        title="上海小巨人企业"
      >
        <div class="side-container">
          <div class="left">
            <Liquidfill
              title="AI企业总数及占比"
              :data="0.17"
              num="17.22%"
              :cnt="31"
            />
          </div>
          <div class="right">
            <!-- <report-line
              title="AI企业增速"
              :num="[200, 500, 700, 1000]"
            /> -->
            <report-muliti-line
              title="AI企业增速"
              height="195px"
              :legend="domainList"
              :legendsize="8"
              :series="bigData"
              :isstack="true"
            />
          </div>
        </div>
      </Card>

      <Card
        title="上海双创企业"
      >
        <div class="side-container">
          <div class="left">
            <Liquidfill
              title="AI企业总数及占比"
              :data="0.1"
              num="9.66%"
              :cnt="169"
            />
          </div>
          <div class="right">
            <!-- <report-line
              title="AI企业增速"
              :num="[200, 500, 700, 1000]"
            /> -->
            <report-bar
              title="AI企业增速"
              height="195px"
              :rotate="90"
              position="inside"
              :xaxis="domainList"
              :legend="['2017', '2018']"
              :series="creativeData"
              :color="['rgba(233,115,131, 0.7)', 'rgb(233,115,131)']"
            />
          </div>
        </div>
      </Card>

      <Card
        title="上海高新技术企业"
      >
        <div class="side-container">
          <div class="left">
            <Liquidfill
              title="AI企业总数及占比"
              :data="0.12"
              num="11.26%"
              :cnt="417"
            />
          </div>
          <div class="right">
            <report-bar
              title="AI企业增速"
              height="195px"
              :xaxis="domainList"
              :legend="['2015', '2016', '2017', '2018']"
              :series="highTech"
            />
          </div>
        </div>
      </Card>

    </div>
    <div class="middle-wrapper">
      <div class="title">
        <page-header
          title="人工智能企业"
        />
        <div class="map">
          <ReportMap
            title="人工智能企业国内分布"
          />
        </div>
      </div>
    </div>
    <div class="right-wrapper">
       <div class="btn">
          <btn-group />

          <Card
            title="AI企业增长"
            height="250px"
            style="margin-top: 10px;"
          >
            <report-stack-bar
              :series="aiAddRate"
            />
          </Card>

          <Card
            title="AI各领域企业占比"
            height="350px"
          >
            <div class="muliti-pie-wrapper">
              <report-muliti-pie
                v-for="(item, index) in mulitiPieList"
                :key="index"
                class="pie"
                :title="item.title"
                :num="item.num"
                :other="item.other"
                :color="item.color"
              />
            </div>
          </Card>

          <Card
            title="技术交易AI企业占比"
            height="250px"
          >
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
          </Card>
        </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/page-header'
import BtnGroup from '@/components/btn-group'
import Liquidfill from '@/components/liquidfill'
// import ReportLine from '@/components/report-line'
import ReportMap from '@/components/report-map'
import ReportStackBar from '@/components/report-stack-bar'
import ReportMulitiPie from '@/components/report-muliti-pie'
import ReportMulitiLine from '@/components/report-muliti-line'
import ReportBar from '@/components/report-bar'

import Card from '@/components/report-card'
import ReportConfig from '@/config/report'

const { colorList } = ReportConfig

export default {
  name: 'ReportEnterprise',

  components: {
    PageHeader,
    BtnGroup,
    Card,
    Liquidfill,
    // ReportLine,
    ReportMap,
    ReportStackBar,
    ReportMulitiPie,
    ReportBar,
    ReportMulitiLine
  },

  data () {
    return {
      mulitiPieList: [
        {
          title: 'AI基础',
          num: 12481,
          other: 24149,
          color: colorList[0]
        },
        {
          title: '人机混合',
          num: 2900,
          other: 33730,
          color: colorList[1]
        },
        {
          title: '机器学习',
          num: 5521,
          other: 31109,
          color: colorList[2]
        },
        {
          title: '神经网络',
          num: 2671,
          other: 33959,
          color: colorList[3]
        },
        {
          title: '自然语言',
          num: 4456,
          other: 32174,
          color: colorList[4]
        },
        {
          title: '视觉技术',
          num: 8601,
          other: 28029,
          color: colorList[5]
        }
      ],
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
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .report-enterprise-wrapper {
    position: relative;
    width: 1920px;
    height: 1080px;
    // background: url('../../home/img/bg.png') center no-repeat fixed;
    background-size: cover;
    display: flex;
    flex-flow: row nowrap;
    padding: 20px 50px 50px;
    box-sizing: border-box;

    .left-wrapper {
      flex: 0 0 450px;
      margin-top: 30px;

      .side-container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        height: 100%;

        .left {
          box-sizing: border-box;
          background: rgba(75, 111, 244, 0.2);
          flex: 0 0 140px;
          height: 100%;
          padding: 15px 5px 0 5px;
        }

        .right {
          box-sizing: border-box;
          background: rgba(75, 111, 244, 0.2);
          flex: 0 0 255px;
          height: 100%;
          padding: 15px 5px 0 5px;
        }
      }
    }

    .middle-wrapper {
      flex: 1 1 auto;
      padding: 0 20px;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
    }

    .right-wrapper {
      flex: 0 0 450px;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      padding: 20px;

      .muliti-pie-wrapper {
        display: flex;
        flex-flow: row wrap;
        // justify-content: space-ar;

        .pie {
          flex: 0 0 23%;
          margin-bottom: 10px;
          margin-right: 8px;
        }
      }

      .table {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        .row {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-around;
          align-items: center;
          line-height: 30px;
          span {
            // display: flex;
            flex: 0 0 25%;
            text-align: center;
          }
        }
        .header {
          border-bottom: solid 3px #495377;
          line-height: 40px;
        }
      }
    }
  }
</style>
