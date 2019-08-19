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
              :data="0.28"
              num="28%"
              :cnt="23"
            />
          </div>
          <div class="right">
            <report-line
              title="AI企业增速"
              :num="[200, 500, 700, 1000]"
            />
          </div>
        </div>
      </Card>

      <Card
        title="上海市创新大赛企业"
      >
        <div class="side-container">
          <div class="left">
            <Liquidfill
              title="AI企业总数及占比"
              :data="0.58"
              num="58%"
              :cnt="6"
            />
          </div>
          <div class="right">
            <!-- <report-line
              title="AI企业增速"
              :num="[200, 500, 700, 1000]"
            /> -->
            <report-bar
              title="AI企业增速"
              height="220px"
              :xaxis="[2017, 2018]"
              :legend="domainList"
              :series="creativeData"
            />
          </div>
        </div>
      </Card>

      <Card
        title="高新技术企业"
      >
        <div class="side-container">
          <div class="left">
            <Liquidfill
              title="AI企业总数及占比"
              :data="0.78"
              num="78%"
              :cnt="247"
            />
          </div>
          <div class="right">
            <report-line
              title="AI企业增速"
              :num="[200, 500, 700, 1000]"
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
            title="人工智能企业TOP 10"
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
            <report-stack-bar />
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
                <span>技术资讯</span>
                <span>15%</span>
                <span>25%</span>
                <span>35%</span>
              </div>
              <div class="row">
                <span>技术开发</span>
                <span>18%</span>
                <span>28%</span>
                <span>38%</span>
              </div>
              <div class="row">
                <span>技术服务</span>
                <span>35%</span>
                <span>45%</span>
                <span>55%</span>
              </div>
              <div class="row">
                <span>技术转让</span>
                <span>48%</span>
                <span>55%</span>
                <span>67%</span>
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
import ReportLine from '@/components/report-line'
import ReportMap from '@/components/report-map'
import ReportStackBar from '@/components/report-stack-bar'
import ReportMulitiPie from '@/components/report-muliti-pie'
import ReportBar from '@/components/report-bar'

import Card from '@/components/report-card'

export default {
  name: 'ReportEnterprise',

  components: {
    PageHeader,
    BtnGroup,
    Card,
    Liquidfill,
    ReportLine,
    ReportMap,
    ReportStackBar,
    ReportMulitiPie,
    ReportBar
  },

  data () {
    return {
      mulitiPieList: [
        {
          title: '机器学习',
          num: 500,
          other: 600,
          color: '#f4e28f'
        },
        {
          title: '人机混合',
          num: 500,
          other: 800,
          color: '#8cecb9'
        },
        {
          title: '知识系统',
          num: 500,
          other: 900,
          color: '#49c5fe'
        },
        {
          title: '神经网络',
          num: 500,
          other: 1000,
          color: '#e97383'
        },
        {
          title: '自然语言',
          num: 500,
          other: 1100,
          color: '#f4e28f'
        },
        {
          title: '视觉技术',
          num: 800,
          other: 600,
          color: '#8cecb9'
        }
      ],
      domainList: ['机器学习', '人机混合', '知识系统', '神经网络'],
      bigData: [
        {
          name: '机器学习',
          data: [1000, 1200, 1400, 1600]
        },
        {
          name: '人机混合',
          data: [1000, 1200, 1400, 1600]
        },
        {
          name: '知识系统',
          data: [1000, 1200, 1400, 1600]
        },
        {
          name: '神经网络',
          data: [1000, 1200, 1400, 1600]
        },
        {
          name: '自然语言',
          data: [1000, 1200, 1400, 1600]
        },
        {
          name: '视觉技术',
          data: [1000, 1200, 1400, 1600]
        }
      ],
      creativeData: [
        {
          name: '机器学习',
          data: [1000, 2000]
        },
        {
          name: '人机混合',
          data: [1200, 2200]
        },
        {
          name: '知识系统',
          data: [800, 2400]
        },
        {
          name: '神经网络',
          data: [1600, 2600]
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
    background: url('../../home/img/bg.png') center no-repeat fixed;
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
        }
        .header {
          border-bottom: solid 3px #495377;
          line-height: 40px;
        }
      }
    }
  }
</style>
