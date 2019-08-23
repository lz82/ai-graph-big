<template>
<div class="expert-info-wrapper">
  <div class="wiki-wraper">
    <div class="wiki-info">
      <img :src="baseURL + info.headImg">
      <div class="expert-intro">
        <h4>{{info.name}}</h4>
        <p>{{info.institution}}</p>
        <p>{{info.subjectArea}}</p>
        <p>{{info.country}}</p>
      </div>
    </div>
    <ul class="wiki-data">
      <li>
        <p>{{info.totalIssues || 0}}</p>
        <span>总发文数</span>
      </li>
      <li>
        <p>{{info.totalCitations|| 0}}</p>
        <span>总被指引数</span>
      </li>
      <li>
        <p>{{info.top1Citations | percentFormat}}</p>
        <span>前1%高被引</span>
      </li>
      <li style="width:70px">
        <p>{{info.hIndex || 0}}</p>
        <span>H指数</span>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import appConfig from '@/config'
export default {
  name: 'ExpertInfo',
  props: {
    info: Object
  },

  data () {
    return {
      baseURL: appConfig.baseUrl
    }
  },

  filters: {
    percentFormat (val) {
      return (val * 100).toFixed(2) + '%'
    }
  }

}
</script>
<style lang='less' scoped>
 @import '~@/style/variables.less';
  .wiki-wraper{
    color: @fontColor;
    .wiki-info{
      display: flex;
      align-items: center;
      .expert-intro{
        padding-left: 20px;
        h4{
          font-size: 24px;
          font-weight: 500;
          padding-bottom: 10px;
        }
        p{
          line-height:30px;
        }
      }
    }
    img{
      width: 130px;
      height: 150px;
      border-radius: 5px;
    }
    // wiki data
    .wiki-data{
      display: flex;
      justify-content: space-between;
      padding: 20px 0 10px;
      li{
        width: 98px;
        height: 108px;
        background: @bgColor;
        border: 1px solid @borderColor;
        border-radius: 5px;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        p{
          font-size: 24px;
          padding-bottom: 18px;
        }
      }
    }

  }

</style>
