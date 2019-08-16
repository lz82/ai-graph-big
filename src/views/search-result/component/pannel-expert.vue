<template>
  <div class="pannel-expert-wrapper">
    <h2 class="comm-title">同领域专家</h2>
    <ul>
      <li v-for="item in expertList" :key="item.id">
        <img :src='item.headImg' alt="">
        <div class="expert-info">
          <h3>{{item.name}}</h3>
          <span>{{ item.institution }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ExpertPannel',
  data () {
    return {
      expertList: [
        {
          headImg: 'http://192.168.200.199:8095/img/expert_logo/2019-03/2019-03-19-10-12-43__c6c48347-d481-4f11-9385-79f495de8785.jpg',
          id: 8526,
          institution: 'National University of Singapore',
          name: '颜水成'
        },
        {
          headImg: 'http://192.168.200.199:8095/img/expert_logo/2019-04/2019-04-02-14-45-03__93ee0293-426b-46c3-95d2-9a641cebe1bb.jpg',
          id: 2037377,
          institution: 'Columbia University in the City of New York',
          name: '张世富'
        },
        {
          headImg: 'http://192.168.200.199:8095/img/expert_logo/2019-03/2019-03-19-09-40-48__79f99f72-9808-4d59-9893-39b5b9270883.jpg',
          id: 1936883,
          institution: 'The University of Sydney',
          name: '陶大程'
        }
      ]
    }
  }

}
</script>
<style lang="less" scoped>
@import '~@/style/variables.less';
  .pannel-expert-wrapper{
      display: flex;
      color: #fff;
      flex-flow: column nowrap;
      ul{
        padding-bottom: 25px;
      }
      li{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 15px;
        img{
          width: 85px;
          height: 100px;
        }
        .expert-info{
          padding-left: 25px;
          font-size: 16px;
          line-height: 30px;
        }
      }
    }
</style>
