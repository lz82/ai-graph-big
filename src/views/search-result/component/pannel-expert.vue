<template>
  <div class="pannel-expert-wrapper">
    <h2 class="comm-title">同领域专家</h2>
    <ul>
      <li v-for="item in list" :key="item.id">
        <img :src="baseURL + item.headImg" alt="">
        <div class="expert-info">
          <h3>{{item.name}}</h3>
          <span>{{ item.institution }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import appConfig from '@/config'
export default {
  name: 'ExpertPannel',

  props: {
    list: Array
  },
  data () {
    return {
      baseURL: appConfig.baseUrl
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
          // height: 100px;
          object-fit: cover;
        }
        .expert-info{
          padding-left: 25px;
          font-size: 16px;
          line-height: 30px;
        }
      }
    }
</style>
