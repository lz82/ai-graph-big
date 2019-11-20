<template>
  <div class="pannel-wrapper" :style="{ width: width }">
    <div class="title" v-show="!!this.$slots.title">
      <slot name="title" />
    </div>
    <div class="content">
      <slot name="default" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pannel',

  props: {
    width: {
      type: [Number, String],
      default: '100%'
    }
  }
}
</script>

<style lang="less" scoped>
.pannel-wrapper {
  border: solid 2px #0c64a8;
  background: rgba(60, 113, 213, 0.3);
  border-radius: 10px;
  padding: 15px 15px;
  box-sizing: border-box;

  .title {
    width: 100%;
    padding-bottom:12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #3bcef8;
    font-size: 20px;
    // font-weight: 600;
  }
}
</style>
