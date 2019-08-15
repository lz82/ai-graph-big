<template>
  <div class="report-enterprise-wrapper">
    <div class="left-wrapper">
      <Card
        title="上海小巨人企业"
      >
        <div class="side-container">
          <div class="left">
            <Liquidfill
              title="AI企业占比"
              :num="0.28"
            />
          </div>
          <div class="right"></div>
        </div>
      </Card>

      <Card
        title="上海市创新大赛企业"
      >
        <div class="side-container">
          <div class="left">
            <Liquidfill
              title="AI企业占比"
              :num="0.58"
            />
          </div>
          <div class="right"></div>
        </div>
      </Card>

      <Card
        title="高新技术企业"
      >
        <div class="side-container">
          <div class="left">
            <Liquidfill
              title="AI企业占比"
              :num="0.78"
            />
          </div>
          <div class="right"></div>
        </div>
      </Card>

    </div>
    <div class="middle-wrapper">
      <div class="title">
        <page-header
          title="人工智能企业"
        />
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

import Card from './card'

export default {
  name: 'ReportEnterprise',

  components: {
    PageHeader,
    BtnGroup,
    Card,
    Liquidfill
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
          background: rgba(75, 111, 244, 0.2);
          flex: 0 0 140px;
        }

        .right {
          background: rgba(75, 111, 244, 0.2);
          flex: 0 0 255px;
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
