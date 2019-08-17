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
          height="310px"
        >
        </report-card>

        <report-card
          title="论文分布"
          height="520px"
        >
        </report-card>
      </div>
      <div class="mid-wrapper">
        <report-pannel
          title="专家分布"
          width="100%"
          height="165px"
        >
          <div class="statistic-wrapper">
            <p>
              <span class="num">7643</span>
              <span class="label">总数</span>
            </p>
            <p>
              <span class="num">4000</span>
              <span class="label">国内</span>
            </p>
            <p>
              <span class="num">3000</span>
              <span class="label">国外</span>
            </p>
            <p>
              <span class="num">2000</span>
              <span class="label">上海</span>
            </p>
          </div>
        </report-pannel>
        <report-card
          title="科研热点"
          width="100%"
          height="335px"
        >
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
            <p>
              <span class="num">7643</span>
              <span class="label">总数</span>
            </p>
            <p>
              <span class="num">4000</span>
              <span class="label">国内</span>
            </p>
            <p>
              <span class="num">3000</span>
              <span class="label">国外</span>
            </p>
            <p>
              <span class="num">2000</span>
              <span class="label">发明</span>
            </p>
            <p>
              <span class="num">2000</span>
              <span class="label">实用新型</span>
            </p>
          </div>
        </report-pannel>
        <report-card
          title="专利增长"
          width="100%"
          height="660px"
        >
        </report-card>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/page-header'
import BtnGroup from '@/components/btn-group'
import ReportCard from '@/components/report-card'
import ReportPannel from './pannel'

export default {
  name: 'ReportTalent',

  components: {
    PageHeader,
    BtnGroup,
    ReportCard,
    ReportPannel
  },

  data () {
    return {}
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
        flex: 0 0 450px;
      }

      .mid-wrapper {
        flex: 0 0 660px;
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
      }

      .right-wrapper {
        flex: 0 0 670px;
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
        }
    }
  }
</style>
