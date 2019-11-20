<template>
  <div class="report-layout">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="middle">
      <slot />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReportLayout'
}
</script>

<style lang="less" scoped>
.report-layout {
  display: flex;
  flex-flow: row nowrap;

  .left {
    width: 650px;
    height: 514px;
  }

  .right {
    width: 670px;
    height: 514px
  }

  .middle {
    width: 760px;
    height: 514px;
  }
}
</style>
