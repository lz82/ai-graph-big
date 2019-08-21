<template>
  <div class="report-invest-wrapper">
    <div class="left-wrapper">
      <header>
        <page-header
          title="人工智能投资分布"
        />
      </header>
      <div class="left-content">
        <report-trade />
      </div>
    </div>
    <div class="right-wrapper">
      <div class="btn-wrapper">
        <btn-group />
      </div>
      <div class="content">
        <report-card
          title="近10年各领域投资额增长"
          width="100%"
          height="310px"
        >
          <report-muliti-line
            width="100%"
            height="220px"
            :legend="domainList"
            :xaxis="['2014', '2015', '2016', '2017', '2018']"
            :series="rateData"
          />
        </report-card>

        <div class="double-wrapper">
          <report-card
            class="half"
            title="投资阶段分布"
            width="320px"
            height="260px"
          >
            <report-light-pie
              :series="petentRate"
            />
          </report-card>

          <report-card
            class="half"
            title="Top5 投资领域"
            width="320px"
            height="260px"
          >
            <report-img-bar />
          </report-card>
        </div>
        <report-card
          title="投资机构热度排行"
          width="100%"
          height="260px"
        >
          <div class="table">
              <div class="row header">
                <span>机构名称</span>
                <span>主投领域</span>
                <span>基金</span>
                <span>被投明星企业</span>
              </div>
              <template
                v-for="(item, index) in investList"
              >
                <div class="row" :key="index">
                  <span>{{item.name}}</span>
                  <span>{{item.domain}}</span>
                  <span>{{item.fund}}</span>
                  <span>{{item.company}}</span>
                </div>
              </template>
            </div>
        </report-card>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/page-header'
import BtnGroup from '@/components/btn-group'
import ReportCard from '@/components/report-card'
import ReportTrade from '@/components/report-trade'
import ReportMulitiLine from '@/components/report-muliti-line'
import ReportLightPie from '@/components/report-light-pie'
import ReportImgBar from '@/components/report-img-bar'

export default {
  name: 'ReportInvest',

  components: {
    PageHeader,
    BtnGroup,
    ReportCard,
    ReportTrade,
    ReportMulitiLine,
    ReportLightPie,
    ReportImgBar
  },

  data () {
    return {
      domainList: ['机器学习', '人机混合', '知识系统', '神经网络', '人脸识别', '声音识别'],
      rateData: [
        {
          name: '机器学习',
          data: [1000, 1200, 1400, 1600, 1800]
        },
        {
          name: '人机混合',
          data: [2000, 2300, 1400, 1600, 1800]
        },
        {
          name: '知识系统',
          data: [3000, 2400, 1400, 1600, 1800]
        },
        {
          name: '神经网络',
          data: [4000, 2500, 1400, 1600, 1800]
        },
        {
          name: '人脸识别',
          data: [5000, 1600, 1400, 1600, 1800]
        },
        {
          name: '声音识别',
          data: [6000, 1700, 1400, 1600, 1800]
        }
      ],
      petentRate: [
        {
          name: '天使轮',
          value: 100
        },
        {
          name: 'A轮',
          value: 80
        },
        {
          name: 'A+轮',
          value: 70
        },
        {
          name: 'B轮',
          value: 60
        },
        {
          name: 'C轮',
          value: 50
        },
        {
          name: 'IPO',
          value: 10
        }
      ],
      investList: [
        {
          name: '红杉资本',
          domain: '机器学习',
          fund: '上投摩根基金公司',
          company: '上海科技发展有限公司'
        },
        {
          name: '红杉资本',
          domain: '机器学习',
          fund: '上投摩根基金公司',
          company: '上海科技发展有限公司'
        },
        {
          name: '红杉资本',
          domain: '机器学习',
          fund: '上投摩根基金公司',
          company: '上海科技发展有限公司'
        },
        {
          name: '红杉资本',
          domain: '机器学习',
          fund: '上投摩根基金公司',
          company: '上海科技发展有限公司'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .report-invest-wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    width: 1920px;
    height: 1080px;
    background: url('../../home/img/bg.png') center no-repeat fixed;
    background-size: cover;
    color: #fff;
    padding: 40px;
    box-sizing: border-box;

    .left-wrapper {
      flex: 0 0 1130px;
      display: flex;
      flex-flow: column nowrap;

      header {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
      }
    }

    .right-wrapper {
      flex: 0 0 670px;
      display: flex;
      flex-flow: column nowrap;
      .btn-wrapper {
        padding-top: 10px;
        padding-bottom: 30px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
      }

      .content {
        .double-wrapper {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          .half {
            flex: 0 0 48%;
          }
        }
      }

      .table {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        .row {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: center;
          line-height: 30px;
          font-size: 12px;
          span {
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
