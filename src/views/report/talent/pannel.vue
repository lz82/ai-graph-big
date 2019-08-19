<template>
  <div class="pannel-wrapper" :style="{ width: width, height: height }">
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
  name: 'ReportPannel',

  props: {
    title: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '450px'
    },
    height: {
      type: String,
      default: '310px'
    }
  }
}
</script>

<style lang="less" scoped>
  .pannel-wrapper {
    display: flex;
    flex-flow: column nowrap;
    box-sizing: border-box;
    border: solid 2px #4b6ff4;
    margin-bottom: 20px;
    border-radius: 10px;
    background: rgba(75, 111, 244, 0.3);
    padding: 20px;
    color: #fff;
    .title {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;;
      align-items: center;
      font-size: 20px;
      font-weight: 700;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        width: 35px;
        height: 2px;
        background: #fff;
        top: 50%;
        left: 50%;
        transform: translateX(-120px)
      }
      &:after {
        content: '';
        position: absolute;
        width: 35px;
        height: 2px;
        background: #fff;
        top: 50%;
        left: 50%;
        transform: translateX(90px)
      }
    }
    .content {
      flex: 1 1 auto;
      margin-top: 10px;
    }

  }
</style>
