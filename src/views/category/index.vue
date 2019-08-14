<template>
  <div class="category-wrapper">
    <header>
      <page-header
        title="可视化报告"
        class="title"
      />
      <div class="btn">
        <span>返回</span>
        <span>回到首页</span>
      </div>
    </header>
    <div class="content">
       <swiper :options="swiperOption">
        <swiper-slide v-for="item in cardList" :key="item.id">
          <img :src="item.pic" alt="" width="450" height="669">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/page-header'

import card1 from './img/card.png'

export default {
  name: 'Category',

  components: {
    PageHeader
  },

  data () {
    return {
      cardList: [
        {
          id: 1,
          pic: card1
        },
        {
          id: 2,
          pic: card1
        },
        {
          id: 3,
          pic: card1
        },
        {
          id: 4,
          pic: card1
        }
      ],
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .category-wrapper {
    position: relative;
    width: 1920px;
    height: 1080px;
    background: url('../home/img/bg.png') center no-repeat fixed;
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

    .content {
      padding: 200px;
    }
  }
</style>

<style>
.swiper-inner {
    width: 100%;
    height: 700px;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 450px;
    height: 770px;
  }
</style>
