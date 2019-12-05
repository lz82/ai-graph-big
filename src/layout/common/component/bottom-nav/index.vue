<template>
  <div class="bottom-nav-wrapper">
    <ul class="nav-wrapper">
      <li>
        <router-link to="/home">
          <img :src="currentRouter === 'Homepage' ? IconHomeA : IconHome" alt="">
        </router-link>
      </li>
      <li to="/report/enterprise">
        <router-link to="/report/enterprise">
          <img :src="currentRouter === 'ReportEnterprise' ? IconEnterpriseA : IconEnterprise" alt="">
        </router-link>
      </li>
      <li to="/report/talent">
        <router-link to="/report/talent">
          <img :src="currentRouter === 'ReportTalent' ? IconTalentA : IconTalent" alt="">
        </router-link>
      </li>
      <li to="/report/invest">
        <router-link to="/report/invest">
          <img :src="currentRouter === 'ReportInvest' ? IconInvestA : IconInvest" alt="">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import IconHome from './img/home.png'
import IconHomeA from './img/home-a.png'
import IconEnterprise from './img/enterprise.png'
import IconEnterpriseA from './img/enterprise-a.png'
import IconTalent from './img/talent.png'
import IconTalentA from './img/talent-a.png'
import IconInvest from './img/invest.png'
import IconInvestA from './img/invest-a.png'

export default {
  name: 'BottomNav',

  data() {
    return {
      IconHome,
      IconHomeA,
      IconEnterprise,
      IconEnterpriseA,
      IconTalent,
      IconTalentA,
      IconInvest,
      IconInvestA
    }
  },

  computed: {
    currentRouter() {
      return this.$route.name
    }
  }
}
</script>

<style lang="less" scoped>
.bottom-nav-wrapper {
  background: url(./img/bg.png) center top no-repeat;
  height: 29px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  line-height: 30px;
  .nav-wrapper {
    width: 605px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
}
</style>
