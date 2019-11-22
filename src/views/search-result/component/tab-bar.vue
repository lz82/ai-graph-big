<template>
  <div class="tab-wrapper">
    <ul class="tab-bar">
      <li
        class="item"
        v-for="(item, index) in tabBarData"
        :class="{ active: nowIndex === index }"
        @click="switchTab(item, index)"
        :key="index"
      >
        {{ item.name }}
      </li>
    </ul>
    <!-- tab con -->
    <div class="tab-con-wrapper">
      <div class="conItem">
        <!-- 论文 -->
        <ul v-if="showPaper">
          <li v-for="item in tabContent.paperVO" :key="item.id">
            <pannel class="pannel">
              <template #title>
                <span v-html="item.title"></span>
              </template>
              <p>
                <span class="paper-author">
                  <i>作者：</i>
                  <span v-html="getAuthor(item.author)"></span>
                </span>
                <span>
                  <i>发表时间：</i>{{ item.publishDate }}</span>
              </p>
              <div class="remark"><i>摘要：</i> {{ item.summaryAll }}</div>
            </pannel>
          </li>
        </ul>
        <!-- 专利 -->
        <ul v-if="showPatent">
          <li v-for="item in tabContent.patentVO" :key="item.id">
            <pannel class="pannel">
              <template #title>
                <span v-html="item.title"></span>
              </template>
              <p>
                <span>
                  <i>专利权人：</i>
                  <span v-html="item.inventor"></span>
                </span>
                <span><i> 分类号：</i>{{ item.categoryNo }}</span>
              </p>
              <div class="remark"><i>摘要：</i>{{ item.summaryAll }}</div>
            </pannel>
          </li>
        </ul>
        <!-- 标准 -->
        <ul v-if="showStandard">
          <li v-for="item in tabContent.standardVO" :key="item.id">
            <pannel class="pannel">
              <template #title><span v-html="item.nameCN"></span></template>
              <p>
                <span><i>标准号：</i>{{ item.standardNo }}</span>
                <!-- <span>发布时间：{{item.publishDate}}</span> -->
                <!-- <span>状态：{{item.status}}</span> -->
              </p>
              <div class="remark"><i>摘要：</i>{{ item.summaryAll }}</div>
            </pannel>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Pannel from '@/components/pannel'

export default {
  name: 'TabBar',

  components: {
    Pannel
  },

  props: {
    tabContent: Object,
    keyword: String,
    type: String
  },

  data() {
    return {
      tabBarData: [{ name: '论文' }, { name: '专利' }, { name: '标准' }],
      nowIndex: 0
    }
  },

  methods: {
    switchTab(item, index) {
      this.nowIndex = index
      // this.$root.evenHub.$emit('switchTab',item, index)
    },
    getAuthor(item) {
      return this.type === 'expert' ? this.keyword : item.split(',')[0]
    }
  },

  computed: {
    showPaper() {
      return this.nowIndex === 0 && this.tabContent.paperVO && this.tabContent.paperVO.length > 0
    },
    showPatent() {
      return this.nowIndex === 1 && this.tabContent.patentVO && this.tabContent.patentVO.length > 0
    },
    showStandard() {
      return (
        this.nowIndex === 2 &&
        this.tabContent.standardVO.length &&
        this.tabContent.standardVO.length > 0
      )
    }
  }
}
</script>
<style>
.tab-con-wrapper .highlight {
  background-color: rgba(0, 0, 0, 0) !important;
  color: #3bcef8 !important;
}
.tab-con-wrapper .title .highlight {
  font-size: 20px;
}
</style>
<style lang="less" scoped>
@import '~@/style/variables.less';
.tab-bar {
  width: 640px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #4b6ff4;
  font-size: 18px;
  height: 35px;
  margin-bottom: 20px;
  .item {
    width: 25%;
    padding: 15px 20px;
    text-align: center;
    background: #20498a;
    border-radius: 5px;
    color: #fff;
  }
  .item.active {
    color: #01c5f8;
  }
}

/* tab con */
.tab-con-wrapper {
  width: 645px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 5px 8px 5px 0px;
  .conItem {
    .pannel {
      margin-bottom: 10px;
      color: #fff;
      // padding: 20px 15px;
      margin-bottom: 15px;
      letter-spacing: 1px;

      p {
        font-size: 16px;
        line-height: 26px;
        display: flex;
        justify-content: space-between;
        i{
          color: #01c5f8;
          font-style: normal;
        }
      }

      .remark {
        font-size: 16px;
        line-height: 26px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        i{
          color: #01c5f8;
          font-style: normal;
        }
      }
    }
  }
}
</style>
