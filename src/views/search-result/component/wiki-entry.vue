<template>
  <div class="wiki-entry-wrapper">
    <pannel class="pannel">
      <p>{{info.wiki}}</p>
    </pannel>
  </div>
</template>
<script>
import Pannel from '@/components/pannel'
export default {
  name: 'WikiEntry',
  components: {
    Pannel
  },
  props: {
    info: Object
  }
}
</script>
<style lang="less" scoped>
.wiki-entry-wrapper{
  margin-bottom:15px;
  .pannel{
    height: 180px;
    overflow-y: scroll;
    color: #fff;
    line-height: 30px;
    margin-top: 25px;
    font-size: 17px;
    letter-spacing: 1px;
  }
}
</style>
