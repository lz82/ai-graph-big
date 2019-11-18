<template>
  <div class="talent-wrapper">
    <header>
      <page-header
        title="人工智能人才技术发展"
      />
      <btn-group
        class="btn"
      />
    </header>

    <div class="content-wrapper">
      <div class="left-wrapper">
        <report-card
          title="论文增长"
          width="100%"
          height="310px"
        >
          <report-muliti-line
            height="220px"
            :legend="domainList"
            :xaxis="['2014', '2015', '2016', '2017', '2018']"
            :series="paperRateData"
            :isstack="true"
          />
        </report-card>

        <report-card
          title="论文分布"
          width="100%"
          height="520px"
        >
          <div class="muliti-pie-wrapper">
            <report-muliti-pie
              v-for="(item, index) in paperLocation"
              :key="index"
              class="pie"
              :title="item.title"
              :num="item.num"
              :other="item.other"
              :color="item.color"
              width="170px"
              height="170px"
              :titlesize="18"
              :percentsize="24"
              numsize="28px"
            />
          </div>
        </report-card>
      </div>
      <div class="mid-wrapper">
        <report-pannel
          title="专家分布"
          width="100%"
          height="265px"
        >
          <!-- <div class="statistic-wrapper"> -->
            <!-- <p class="f4">
              <count-to
                class="num"
                :endVal="7643"
                :duration="2000"
              />
              <span class="label">总数</span>
            </p>
            <p class="f4">
              <count-to
                class="num"
                :endVal="3643"
                :duration="2000"
              />
              <span class="label">国内</span>
            </p>
            <p class="f4">
              <count-to
                class="num"
                :endVal="4000"
                :duration="2000"
              />
              <span class="label">国外</span>
            </p>
            <p class="f4">
              <count-to
                class="num"
                :endVal="2000"
                :duration="2000"
              />
              <span class="label">上海</span>
            </p> -->
          <div class="gauge-wrapper" style="width:100%;">
            <report-gauge
              :left="expertGauge.left"
              :middle="expertGauge.middle"
              :right="expertGauge.right"
            />
          </div>
        </report-pannel>
        <report-card
          title="科研热点"
          width="100%"
          height="235px"
        >
          <word-cloud />
        </report-card>
        <div class="domain-wrapper">
          <report-pannel
            title="专家领域分布"
            width="100%"
          >
            <report-timeline />
          </report-pannel>
        </div>
      </div>
      <div class="right-wrapper">
        <report-pannel
          title="专利分布"
          width="100%"
          height="165px"
        >
           <div class="statistic-wrapper">
            <p class="f5">
              <count-to
                class="num"
                :endVal="206491"
                :duration="2000"
              />
              <span class="label">总数</span>
            </p>
            <p class="f5">
              <count-to
                class="num"
                :endVal="203656"
                :duration="2000"
              />
              <span class="label">国内</span>
            </p>
            <p class="f5">
              <count-to
                class="num"
                :endVal="2835"
                :duration="2000"
              />
              <span class="label">国外</span>
            </p>
            <p class="f5">
              <count-to
                class="num"
                :endVal="188205"
                :duration="2000"
              />
              <span class="label">发明</span>
            </p>
            <p class="f5">
              <count-to
                class="num"
                :endVal="8935"
                :duration="2000"
              />
              <span class="label">实用新型</span>
            </p>
          </div>
        </report-pannel>
        <report-card
          title="专利增长"
          width="100%"
          height="660px"
        >
        <div class="patent-wrappr">
            <report-muliti-line
              height="260px"
              :legend="patentList"
              :xaxis="['2014', '2015', '2016', '2017', '2018']"
              :series="patentRateList"
              :empty="true"
            />
            <report-stack-bar
              :xaxis="domainList"
              :series="patentDomainList"
              height="280px"
            />
          </div>
        </report-card>
      </div>
    </div>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'

import PageHeader from '@/components/page-header'
import BtnGroup from '@/components/btn-group'
import ReportCard from '@/components/report-card'
import ReportGauge from '@/components/report-gauge'
import ReportMulitiLine from '@/components/report-muliti-line'
import ReportMulitiPie from '@/components/report-muliti-pie'
import ReportStackBar from '@/components/report-stack-bar'
import ReportTimeline from '@/components/report-timeline'
import ReportPannel from './pannel'
import WordCloud from '@/components/word-cloud'
import ReportConfig from '@/config/report'

const { colorList } = ReportConfig

export default {
  name: 'ReportTalent',

  components: {
    PageHeader,
    BtnGroup,
    ReportCard,
    ReportPannel,
    ReportGauge,
    CountTo,
    WordCloud,
    ReportMulitiLine,
    ReportMulitiPie,
    ReportStackBar,
    ReportTimeline
  },

  data () {
    return {
      domainList: ['AI基础', '人机混合', '机器学习', '神经网络', '自然语言', '视觉技术'],
      patentList: ['电数字数据处理', '数字信息的传输', '图像通信', '图像数据处理或产生', '特定模型的计算机系统'],
      expertGauge: {
        left: {
          title: '国外',
          max: 4000,
          num: 2177
        },
        middle: {
          title: '专家总数',
          max: 4000,
          num: 3909
        },
        right: {
          title: '上海',
          max: 4000,
          num: 728
        }
      },
      // '机器学习', '人机混合', '知识系统', '神经网络'
      paperRateData: [
        {
          name: 'AI基础',
          data: [610755, 685194, 762288, 844475, 914764]
        },
        {
          name: '人机混合',
          data: [64941, 71576, 77164, 82221, 85285]
        },
        {
          name: '机器学习',
          data: [422833, 471502, 519005, 566482, 595997]
        },
        {
          name: '神经网络',
          data: [75830, 81419, 87478, 93534, 96344]
        },
        {
          name: '自然语言处理',
          data: [104096, 110939, 117607, 123651, 127216]
        },
        {
          name: '视觉技术',
          data: [89898, 100065, 110496, 121023, 128461]
        }
      ],
      paperLocation: [
        {
          title: 'AI基础',
          num: 914764,
          other: 1033303,
          color: colorList[0]
        },
        {
          title: '人机混合',
          num: 85285,
          other: 1862782,
          color: colorList[1]
        },
        {
          title: '机器学习',
          num: 595997,
          other: 1352070,
          color: colorList[2]
        },
        {
          title: '神经网络',
          num: 96344,
          other: 1851723,
          color: colorList[3]
        },
        {
          title: '自然语言',
          num: 127216,
          other: 1820851,
          color: colorList[4]
        },
        {
          title: '视觉技术',
          num: 128461,
          other: 1819606,
          color: colorList[5]
        }
      ],
      patentRateList: [
        {
          name: '电数字数据处理',
          data: [3.164353, 3.261976, 3.456366, 3.639984, 3.725667]
        },
        {
          name: '数字信息的传输',
          data: [2.292256, 2.499687, 2.680336, 2.933993, 3.054230]
        },
        {
          name: '图像通信',
          data: [2.544068, 2.635484, 2.699838, 2.904174, 2.376577]
        },
        {
          name: '图像数据处理或产生',
          data: [2.642465, 2.696356, 2.943495, 3.247728, 3.450711]
        },
        {
          name: '特定模型的计算机系统',
          data: [2.729974, 2.950365, 3.331022, 3.71206, 3.879669]
        }
      ],
      patentDomainList: [
        {
          name: '2016',
          data: [124463, 20616, 43693, 7062, 14767, 39378]
        },
        {
          name: '2017',
          data: [153918, 24076, 50511, 8849, 16530, 46901]
        },
        {
          name: '2018',
          data: [192047, 28105, 58927, 12114, 19064, 54901]
        }
      ]
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
  .talent-wrapper {
    display: flex;
    flex-flow: column nowrap;
    width: 1920px;
    height: 1080px;
    // background: url('../../home/img/bg.png') center no-repeat fixed;
    background-size: cover;
    color: #fff;
    padding: 40px;
    box-sizing: border-box;

    header {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      position: relative;
      .btn {
        position: absolute;
        right: 0;
        top: 15px;
      }
    }

    .content-wrapper {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      height: 100%;
      padding-top: 30px;

      .left-wrapper {
        flex: 0 0 32%;

        .muliti-pie-wrapper {
          display: flex;
          flex-flow: row wrap;

          .pie {
            flex: 0 0 30%;
            margin-bottom: 10px;
            margin-right: 10px;
          }
        }
      }

      .mid-wrapper {
        flex: 0 0 32%;
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
      }

      .right-wrapper {
        flex: 0 0 32%;
        height: 100%;

        .patent-wrappr {
          display: flex;
          height: 100%;
          flex-flow: column nowrap;
          justify-content: space-between;
        }
      }

      .statistic-wrapper {
          display: flex;
          flex-flow: row nowrap;
          height: 100%;
          justify-content: space-between;
          align-items: center;

          p {
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            .num {
              font-size: 22px;
              font-weight: 700;
              padding-bottom: 10px;
            }
            .label {
              font-size: 16px;
              font-weight: 700;
            }
          }

          .f4 {
            flex: 0 0 25%;
          }

          .f5 {
            flex: 0 0 20%;
          }
        }
    }
  }
</style>
