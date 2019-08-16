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
              :num="[50, 70, 90, 120]"
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
            <report-line
              title="AI企业增速"
              :num="[120, 140, 200, 400]"
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
          <ReportMap />
        </div>
      </div>
    </div>
    <div class="right-wrapper">
       <div class="btn">
          <btn-group />
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

import Card from './card'

export default {
  name: 'ReportEnterprise',

  components: {
    PageHeader,
    BtnGroup,
    Card,
    Liquidfill,
    ReportLine,
    ReportMap
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
    padding: 50px;
    box-sizing: border-box;

    .left-wrapper {
      flex: 0 0 450px;

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
    }
  }
</style>
