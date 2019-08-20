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
        </report-card>

        <div class="double-wrapper">
          <report-card
            class="half"
            title="专利增长"
            width="320px"
            height="260px"
          >
          </report-card>

          <report-card
            class="half"
            title="Top5 投资领域"
            width="320px"
            height="260px"
          >
          </report-card>
        </div>
        <report-card
          title="投资机构热度排行"
          width="100%"
          height="260px"
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
import ReportTrade from '@/components/report-trade'

export default {
  name: 'ReportInvest',

  components: {
    PageHeader,
    BtnGroup,
    ReportCard,
    ReportTrade
  },

  data () {
    return {}
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
    }
  }
</style>
