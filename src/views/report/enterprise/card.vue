<template>
  <div class="card-wrapper" :style="{ height: height }">
    <div class="title">
      {{title}}
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',

  props: {
    title: {
      type: String,
      required: true
    },
    height: {
      type: String,
      default: '310px'
    }
  }
}
</script>

<style lang="less" scoped>
  .card-wrapper {
    display: flex;
    flex-flow: column nowrap;
    box-sizing: border-box;
    width: 450px;
    border: solid 2px #4b6ff4;
    margin-bottom: 20px;
    border-radius: 10px;
    background: rgba(75, 111, 244, 0.3);
    padding: 20px;
    color: #fff;
    .title {
      height: 25px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      position: relative;
      font-size: 20px;
      padding-left: 20px;
      font-weight: 700;
      border-left: solid 5px #4b6ff4;
    }
    .content {
      flex: 1 1 auto;
      margin-top: 20px;
    }

  }
</style>
