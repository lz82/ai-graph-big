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
          title="近5年各领域投资额增长"
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
                <span>基金规模(万元)</span>
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
      domainList: ['企业服务', '医疗健康', '物流', '汽车交通', '硬件', '游戏'],
      rateData: [
        {
          name: '企业服务',
          data: [4051413, 9554573, 3173906, 4726037, 18185454]
        },
        {
          name: '医疗健康',
          data: [463295, 981635, 1446306, 2303757, 14350269]
        },
        {
          name: '物流',
          data: [7289, 176275, 562201, 8412038, 13035680]
        },
        {
          name: '汽车交通',
          data: [1426877, 388712, 2923063, 16487486, 10597534]
        },
        {
          name: '电子商务',
          data: [475664, 574718, 889006, 6086419, 3946528]
        },
        {
          name: '游戏',
          data: [1850856, 65346, 5974256, 558474, 1074092]
        }
      ],
      petentRate: [
        {
          name: '天使轮',
          value: 3047
        },
        {
          name: 'A轮',
          value: 3935
        },
        {
          name: 'B轮',
          value: 1550
        },
        {
          name: 'C轮',
          value: 634
        },
        {
          name: 'D轮',
          value: 297
        },
        {
          name: '并购投资',
          value: 706
        }
      ],
      investList: [
        {
          name: '高通',
          domain: '硬件',
          fund: 36488396,
          company: 'RealWear | OneWeb'
        },
        {
          name: '微软',
          domain: '社交网络',
          fund: 18029104,
          company: 'OpenAI | Markforged'
        },
        {
          name: '高瓴资本',
          domain: '物流',
          fund: 11438700,
          company: '贝壳找房 | 呆萝卜'
        },
        {
          name: '英特尔投资',
          domain: '汽车交通',
          fund: 10610196,
          company: 'Exo Imaging | TriEye'
        },
        {
          name: '软银愿景基金',
          domain: '房产服务',
          fund: 7909010,
          company: 'Grab | 车好多集团'
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
