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
      <li>
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
    .wiki-info{
      display: flex;
      align-items: center;
      .expert-intro{
        padding-left: 20px;
        h4{
          padding-bottom: 10px;
          font-size: 24px;
          font-weight: 500;
          color: @fontColor;
        }
        p{
          line-height:30px;
          color: #fff;
        }
      }
    }
    img{
      width: 160px;
      height: 160px;
      border-radius: 5px;
      object-fit: cover;
    }
    // wiki data
    .wiki-data{
      display: flex;
      justify-content: space-between;
      padding: 20px 5px 10px 0;
      color: #fff;
      li{
        width: 140px;
        height: 90px;
        background: @bgColor;
        border-radius: 5px;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        &:first-child{
          background: #967adc;
        }
        &:nth-child(2){
          background: #f6bb42;
        }
        &:nth-child(3){
          background: #3bafda;
        }
        &:nth-child(4){
          background: #8cc152;
        }
        p{
          font-size: 20px;
          padding-bottom: 8px;
        }
      }
    }

  }

</style>
