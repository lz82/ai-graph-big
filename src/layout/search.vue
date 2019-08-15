<template>
    <div class="search-layout-wrapper">
      this is search layout
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="12">
          <!-- <header>
            <page-header
              title="可视化报告"
              class="title"
            />
            <div class="btn">
              <span>返回</span>
              <span>回到首页</span>
            </div>
          </header> -->
          <div class="grid-content bg-purple"></div>
          </el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <!-- <transition :name='transitionName'></transition> -->
    </div>
</template>

<script>
import PageHeader from '@/components/page-header'
export default {
  name: 'SearchLayout',

  data () {
    return {
      keyword: this.$route.params.searchKey,
      transitionName: 'slide-left'
    }
  },

  computed: {
    // routerKey () {
    //   return this.$route.params.searchKey
    // },

    // $route (to, from) {
    //   if (to.meta.index > from.meta.index) {
    //     this.transitionName = 'slide-left'
    //   } else {
    //     this.transitionName = 'slide-right'
    //   }
    // }
  }
}
</script>

<style lang="less"  scoped>
.search-layout-wrapper{
  position: relative;
  width: 1920px;
  height: 1080px;
  background: url('./img/bg.png') center no-repeat fixed;
  background-size: cover;
  display: flex;
  flex-flow: column nowrap;
  justify-items: center;
  padding: 80px 0;
  header {
      position: relative;

      .title {
        position: absolute;
        left: 535px;
      }

      .btn {
        height: 80px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        position: absolute;
        left: 1425px;
        top: 15px;
        color: #fff;
        font-size: 16px;
        span {
          margin-right: 15px;
          background: #2e4391;
          border-radius: 10px;
          width: 220px;
          height: 50px;
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;
          align-items: center;
        }
      }
    }
}
</style>
<style>
 .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
