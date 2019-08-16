<template>
<div class="expert-info-wrapper">
  <h2 class='comm-title'>{{title}}信息</h2>
  <div class="wiki-wraper">
    <div class="wiki-info">
      <img :src='info.headImg'>
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
export default {
  name: 'ExpertInfo',

  data () {
    return {
      title: '专家',
      info: {
        citedSituation: null,
        country: '美国',
        fwciinedx: 13.89,
        hIndex: 57,
        headImg: 'http://192.168.200.199:8095/img/expert_logo/2019-03/2019-03-13-16-40-00__ac93a0d6-a1d0-42fb-874f-4a6b5d6eeb60.jpg',
        id: 2116449,
        institution: 'Stanford University',
        journalSend: null,
        name: '李飞飞',
        number1: 40,
        number10: 94,
        subjectArea: '计算机科学',
        subjectMatch: null,
        top10Citations: 0.673759,
        top1Citations: 0.368794,
        totalCitations: 22347,
        totalIssues: 156
      }
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
