<template>
  <div class="report-talent-wrapper">
    <div class="left">
      <pannel width="640px" style="margin-bottom: 20px;">
        <template #title>
          <h4>论文增长增长</h4>
        </template>
        <report-muliti-line
          height="120px"
          :legend="domainList"
          :xaxis="['2014', '2015', '2016', '2017', '2018']"
          :series="paperRateData"
          :isstack="false"
          symbol="emptyCircle"
        />
      </pannel>
      <pannel width="640px">
        <template #title>
          <h4>论文分布</h4>
        </template>
        <div class="pie-wrapper">
          <report-muliti-pie
            v-for="(item, index) in paperLocation"
            :key="index"
            class="pie"
            :class="'pie' + index"
            :title="item.title"
            :num="item.num"
            :other="item.other"
            :color="item.color"
            width="90px"
            height="90px"
          />
        </div>
      </pannel>
    </div>
    <div class="middle">
      <div class="top">
        <report-gauge
          :left="expertGauge.left"
          :middle="expertGauge.middle"
          :right="expertGauge.right"
        />
      </div>
      <div class="bottom">
        <pannel class="part">
          <template #title>
            <h4>科研热点</h4>
          </template>
          <word-cloud />
        </pannel>
        <pannel class="part">
          <template #title>
            <h4>专家领域分布</h4>
          </template>
          <report-timeline />
        </pannel>
      </div>
    </div>
    <div class="right">
      <pannel>
        <template #title>
          <h4>专利分布</h4>
        </template>
        <div class="statistic-wrapper">
          <p class="f5">
            <count-to class="num color" :endVal="206491" :duration="2000" />
            <span class="label">总数</span>
          </p>
          <p class="f5">
            <count-to class="num" :endVal="203656" :duration="2000" />
            <span class="label">国内</span>
          </p>
          <p class="f5">
            <count-to class="num" :endVal="2835" :duration="2000" />
            <span class="label">国外</span>
          </p>
          <p class="f5">
            <count-to class="num" :endVal="188205" :duration="2000" />
            <span class="label">发明</span>
          </p>
          <p class="f5">
            <count-to class="num" :endVal="8935" :duration="2000" />
            <span class="label">实用新型</span>
          </p>
        </div>
      </pannel>

      <pannel style="margin-top: 20px;">
        <template #title>
          <h4>专利增长</h4>
        </template>
        <report-muliti-line
          height="120px"
          :legend="patentList"
          :xaxis="['2014', '2015', '2016', '2017', '2018']"
          :series="patentRateList"
          :empty="true"
          top="40px"
          symbol="emptyCircle"
        />
        <report-stack-bar :xaxis="domainList" :series="patentDomainList" height="160px" />
      </pannel>
    </div>
  </div>
</template>

<script>
import Pannel from '@/components/pannel'
import ReportMulitiLine from '@/components/report-muliti-line'
import ReportMulitiPie from '@/components/report-muliti-pie'
import CountTo from 'vue-count-to'
import ReportStackBar from '@/components/report-stack-bar'
import ReportGauge from '@/components/report-gauge'
import WordCloud from '@/components/word-cloud'
import ReportTimeline from '@/components/report-timeline'

export default {
  name: 'ReportTalent',

  components: {
    Pannel,
    ReportMulitiLine,
    ReportMulitiPie,
    CountTo,
    ReportStackBar,
    ReportGauge,
    WordCloud,
    ReportTimeline
  },

  data() {
    return {
      domainList: ['AI基础', '人机混合', '机器学习', '神经网络', 'NLP', '视觉技术'],
      patentList: [
        '电数字数据处理',
        '数字信息的传输',
        '图像通信',
        '图像数据处理或产生',
        '特定模型的计算机系统'
      ],
      paperRateData: [
        {
          name: 'AI基础',
          data: [610755, 685194, 762288, 844475, 914764]
        },
        {
          name: '机器学习',
          data: [422833, 471502, 519005, 566482, 595997]
        },
        {
          name: 'NLP',
          data: [104096, 110939, 117607, 123651, 127216]
        },
        {
          name: '人机混合',
          data: [64941, 71576, 77164, 82221, 85285]
        },
        {
          name: '神经网络',
          data: [75830, 81419, 87478, 93534, 96344]
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
          color: ['#fb8585', '#f8cdcd']
        },
        {
          title: '人机混合',
          num: 85285,
          other: 1862782,
          color: ['#e7affe', '#f9eaff']
        },
        {
          title: '机器学习',
          num: 595997,
          other: 1352070,
          color: ['#20cec8', '#d1f8f7']
        },
        {
          title: '神经网络',
          num: 96344,
          other: 1851723,
          color: ['#3dd5ff', '#d5f0f8']
        },
        {
          title: 'NLP',
          num: 127216,
          other: 1820851,
          color: ['#8cc152', '#c1cbb6']
        },
        {
          title: '视觉技术',
          num: 128461,
          other: 1819606,
          color: ['#f6bb42', '#fdf0d6']
        }
      ],
      patentRateList: [
        {
          name: '电数字数据处理',
          data: [3.164353, 3.261976, 3.456366, 3.639984, 3.725667]
        },
        {
          name: '数字信息的传输',
          data: [2.292256, 2.499687, 2.680336, 2.933993, 3.05423]
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
      ],
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
      }
    }
  }
}
</script>

<style lang="less" scoped>
.report-talent-wrapper {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  .left,
  .right {
    flex: 0 0 640px;
  }

  .pie-wrapper {
    // padding-top: 20px;
    height: 230px;
    // display: flex;
    // flex-flow: row wrap;
    // // justify-content: space-arround;
    // // align-items: space-around;
    position: relative;
    box-sizing: border-box;

    .pie {
      position: absolute;
    }

    .pie0 {
      left: 10px;
      top: 10px;
    }

    .pie1 {
      left: 100px;
      top: 110px;
    }

    .pie2 {
      left: 200px;
      top: 10px;
    }

    .pie3 {
      left: 300px;
      top: 110px;
    }

    .pie4 {
      left: 400px;
      top: 10px;
    }

    .pie5 {
      left: 500px;
      top: 110px;
    }
  }

  .statistic-wrapper {
    padding-top: 20px;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    p {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      .num {
        font-size: 22px;
        font-weight: 700;
        padding-bottom: 10px;
      }
      .color {
        color: #3bcef8;
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

  .middle {
    flex: 0 0 700px;

    display: flex;
    flex-flow: column nowrap;

    .top {
      height: 240px;
    }

    .bottom {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      .part {
        flex: 0 0 340px;
      }
    }
  }
}
</style>
