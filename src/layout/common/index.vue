<template>
  <div class="common-layout">
    <head-nav class="header" />
    <!-- <transition :name="transitionName"> -->
    <router-view class="router-view" />
    <!-- </transition> -->
    <bottom-nav class="footer" />
  </div>
</template>

<script>
import HeadNav from './component/head-nav'
import BottomNav from './component/bottom-nav'

export default {
  name: 'CommonLayout',

  components: {
    HeadNav,
    BottomNav
  },

  data() {
    return {
      transitionName: ''
    }
  },

  watch: {
    $route(to, from) {
      if (to.meta.path.includes(from.meta.path)) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.common-layout {
  display: flex;
  flex-flow: column nowrap;
  height: 640px;
  box-sizing: border-box;
  .header {
    flex: 0 0 74px;
  }

  .footer {
    flex: 0 0 32px;
  }

  .router-view {
    flex: 0 0 534px;
    overflow: hidden;
    padding: 10px 40px;
    box-sizing: border-box;
  }
}
</style>
