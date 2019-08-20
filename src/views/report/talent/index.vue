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
                :endVal="7643"
                :duration="2000"
              />
              <span class="label">总数</span>
            </p>
            <p class="f5">
              <count-to
                class="num"
                :endVal="4001"
                :duration="2000"
              />
              <span class="label">国内</span>
            </p>
            <p class="f5">
              <count-to
                class="num"
                :endVal="3000"
                :duration="2000"
              />
              <span class="label">国外</span>
            </p>
            <p class="f5">
              <count-to
                class="num"
                :endVal="2000"
                :duration="2000"
              />
              <span class="label">发明</span>
            </p>
            <p class="f5">
              <count-to
                class="num"
                :endVal="1800"
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
          <report-muliti-line
            height="260px"
            :legend="patentList"
            :xaxis="['2014', '2015', '2016', '2017', '2018']"
            :series="patentRateList"
            :empty="true"
          />
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
    ReportMulitiPie
  },

  data () {
    return {
      domainList: ['机器学习', '人机混合', '知识系统', '神经网络', '人脸识别', '声音识别'],
      patentList: ['电数字数据处理', '数字信息的传输', '图像通信', '图像数据处理或产生', '特定模型的计算机系统'],
      expertGauge: {
        left: {
          title: '国外',
          max: 10000,
          num: 4000
        },
        middle: {
          title: '专家总数',
          max: 20000,
          num: 10000
        },
        right: {
          title: '上海',
          max: 10000,
          num: 6000
        }
      },
      // '机器学习', '人机混合', '知识系统', '神经网络'
      paperRateData: [
        {
          name: '机器学习',
          data: [1000, 1600, 1800, 2600, 2800]
        },
        {
          name: '人机混合',
          data: [1000, 2200, 2400, 2600, 3000]
        },
        {
          name: '知识系统',
          data: [1200, 3300, 3400, 3600, 4000]
        },
        {
          name: '神经网络',
          data: [1400, 4200, 4400, 4600, 5000]
        },
        {
          name: '人脸识别',
          data: [1300, 3300, 3400, 3600, 4000]
        },
        {
          name: '声音识别',
          data: [4000, 4200, 4400, 4600, 5000]
        }
      ],
      paperLocation: [
        {
          title: '机器学习',
          num: 500,
          other: 600,
          color: colorList[0]
        },
        {
          title: '人机混合',
          num: 500,
          other: 800,
          color: colorList[1]
        },
        {
          title: '知识系统',
          num: 500,
          other: 900,
          color: colorList[2]
        },
        {
          title: '神经网络',
          num: 500,
          other: 1000,
          color: colorList[3]
        },
        {
          title: '自然语言',
          num: 500,
          other: 1100,
          color: colorList[4]
        },
        {
          title: '视觉技术',
          num: 800,
          other: 600,
          color: colorList[5]
        }
      ],
      patentRateList: [
        {
          name: '电数字数据处理',
          data: [1000, 1600, 1800, 2600, 2800]
        },
        {
          name: '数字信息的传输',
          data: [1000, 2200, 2400, 2600, 3000]
        },
        {
          name: '图像通信',
          data: [1200, 3300, 3400, 3600, 4000]
        },
        {
          name: '图像数据处理或产生',
          data: [1400, 4200, 4400, 4600, 5000]
        },
        {
          name: '特定模型的计算机系统',
          data: [1300, 3300, 3400, 3600, 4000]
        }
      ]
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
    background: url('../../home/img/bg.png') center no-repeat fixed;
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
      }

      .statistic-wrapper {
          display: flex;
          flex-flow: row nowrap;
          height: 100%;
          justify-content: space-around;
          align-items: center;

          p {
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            .num {
              font-size: 32px;
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
