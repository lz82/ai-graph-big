<template>
  <div class="head-nav-wrapper">
    <div class="title">
      上海人工智能公共研发资源图谱
    </div>
    <div class="nav">
      <a href="http://rg.sgst.cn/rc/qqrcgl.html" class="nav-item global"></a>
      <a href="http://10.11.0.40:8090/" class="nav-item sh-resource"></a>
      <a href="http://www.csjpt.cn/visualScreen" class="nav-item triangle-resource"></a>
      <a href="http://rg.sgst.cn/city" class="nav-item inter-data"></a>
    </div>
    <div class="tip">
      数据截至：２０１８年１２月
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadNav',

  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.head-nav-wrapper {
  height: 74px;
  background: url(./img/bg.png) center bottom;
  position: relative;

  .title {
    position: absolute;
    font-family: 造字工房朗倩粗体;
    font-size: 28px;
    line-height: 28px;
    letter-spacing: 2px;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(to bottom, #c1f1ff, #fff);
    background-clip: text;
    color: transparent;
  }

  .nav-item {
    position: absolute;
    top: 27px;
    display: inline-block;
    width: 197px;
    height: 38px;
  }

  .global {
    background: url(./img/global.png);
    left: 340px;
  }
  .sh-resource {
    background: url(./img/sh-resource.png);
    left: 535px;
  }
  .triangle-resource{
    background: url(./img/triangle-resource.png);
    right: 535px;
  }
  .inter-data{
    background: url('./img/inter-data.png');
    right: 340px;
  }

  .tip {
    position: absolute;
    color: #999;
    top: 40px;
    left: 50px;
  }
}
</style>
