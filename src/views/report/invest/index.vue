<template>
  <div class="report-invest-wrapper">
    <div class="left-wrapper">
      <pannel class="pannel">
        <template #title>
          <span>近五年各领域投资额增长</span>
          <div class="report-line-wrapper">
          <report-muliti-line
            width="100%"
            height="156px"
            :xaxis="['2014', '2015', '2016', '2017', '2018']"
            :series="rateData"
          />
        </div>
        </template>
      </pannel>
      <pannel>
        <template #title>
          <span>TOP5投资领域</span>
          <report-img-bar />
        </template>
      </pannel>
    </div>

    <div class="main-wrapper">
      <report-trade />
    </div>

    <div class="right-wrapper">
      <pannel class="pannel">
        <template #title>
          <span>投资阶段分布</span>
          <report-light-pie
              :series="petentRate"
            />
        </template>
      </pannel>
      <pannel class="hot-sort-wrapper">
        <template #title>
          <span>投资机构热度排行</span>
        </template>
        <div class="table">
              <div class="row header">
                <span>机构名称</span>
                <span>主投领域</span>
                <span>基金规模</span>
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
      </pannel>
    </div>
  </div>
</template>

<script>
import Pannel from '@/components/pannel'
import ReportTrade from '@/components/report-trade'
import ReportMulitiLine from '@/components/report-muliti-line'
import ReportImgBar from '@/components/report-img-bar'
import ReportLightPie from '@/components/report-light-pie'

export default {
  name: 'ReportInvest',
  components: {
    ReportTrade,
    Pannel,
    ReportMulitiLine,
    ReportImgBar,
    ReportLightPie
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
          name: '高通Qualcomm Ventures',
          domain: '硬件',
          fund: '60.2亿',
          company: 'RealWear | OneWeb'
        },
        {
          name: '微软Microsoft',
          domain: '社交网络',
          fund: '124.1亿',
          company: 'OpenAI | Markforged'
        },
        {
          name: '高瓴资本',
          domain: '物流',
          fund: '122.3亿',
          company: '贝壳找房 | 呆萝卜'
        },
        {
          name: '英特尔投资Intel Capital ',
          domain: '汽车交通',
          fund: '16亿',
          company: 'Exo Imaging | TriEye'
        },
        {
          name: '软银愿景基金',
          domain: '房产服务',
          fund: '567.1亿',
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
    .pannel{
      margin-bottom:30px;
    }
    .left-wrapper{
      width: 640px;
      padding-top: 20px;
    }
    .main-wrapper{
      width: 800px;
    }
    .right-wrapper{
      width: 640px;
      .hot-sort-wrapper{
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
          color: #fff;
          border-bottom: 1px dashed #3164a0;
          span {
            flex: 0 0 25%;
            text-align: center;
          }
        }
        .header {
          color: #3bcef8;
          background: #3c64aa;
          line-height: 30px;
          border-radius: 5px;
          border-bottom: none;
        }
      }
      }
    }
  }
</style>
