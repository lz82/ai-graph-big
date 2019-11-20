<template>
  <div class="pannel-expert-wrapper">
    <h2 class="comm-title">同领域专家</h2>
    <ul>
      <li v-for="item in list" :key="item.id">
        <img :src="baseURL + item.headImg" alt="">
        <span>{{item.name}}</span>
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
      color: #fff;
      .comm-title{
        font-size: 20px;
        // font-weight: 600;
        color: @fontColor;
      }
      ul{
        display: flex;
        flex-flow: row wrap;
        margin-left: -25px;
        padding-bottom: 25px;
      }
      li{
        display: flex;
        justify-content: flex-start;
        flex-flow: column nowrap;
        align-items: center;
        margin-top: 15px;
        margin-left: 26px;
        img{
          width: 106px;
          height: 106px;
          object-fit: cover;
          border-radius: 5px;
          margin-bottom: 10px;
        }
      }
    }
</style>
