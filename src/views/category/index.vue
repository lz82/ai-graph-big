<template>
  <div class="category-wrapper">
    <header>
      <page-header
        title="可视化报告"
        class="title"
      />
      <div class="btn">
        <btn-group />
      </div>
    </header>
    <div class="content">
       <swiper
        ref="swiper"
        :options="swiperOption"
      >
        <swiper-slide
          v-for="item in cardList"
          :key="item.id"
        >
          <img
            :src="item.pic"
            alt=""
            width="450"
            height="669"
            @click="onPicClick(item.url)"
          />
        </swiper-slide>
        <div class="pagination swiper-pagination swiper-pagination-bullets" slot="pagination">
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/page-header'
import BtnGroup from '@/components/btn-group'

import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

import { mapMutations } from 'vuex'

import card1 from './img/card.png'

export default {
  name: 'Category',

  components: {
    PageHeader,
    BtnGroup,
    swiper,
    swiperSlide
  },

  data () {
    return {
      cardList: [
        {
          id: 1,
          pic: card1,
          url: '/report/enterprise'
        },
        {
          id: 2,
          pic: card1,
          url: '/report/2'
        },
        {
          id: 3,
          pic: card1,
          url: '/report/3'
        }
      ],
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        speed: 500,
        slideToClickedSlide: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        loop: true,
        initialSlide: 1,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet (index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom"></span>`
          }
        },
        on: {
          touchStart: () => {
            this.setLastTime(new Date() - 0)
          }
        }
      }
    }
  },

  methods: {
    ...mapMutations({
      setLastTime: 'set_last_time'
    }),

    onPicClick (url) {
      console.log(url)
      this.$router.push(url)
    },

    onBackClick () {
      this.$router.go(-1)
    },

    onHomeClick () {
      this.$router.push('/')
    }
  },

  computed: {
    swiper () {
      return this.$refs.swiper.swiper
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
        position: absolute;
        left: 1425px;
        top: 15px;
      }
    }

    .content {
      padding: 150px;
    }
  }
</style>

<style>
/* .swiper-inner {
    width: 100%;
    height: 700px;
    padding-top: 60px;
    padding-bottom: 60px;
  } */
  .swiper-wrapper {
    padding: 40px 0;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 450px;
    height: 720px;
  }
  .swiper-pagination-bullet-custom {
    width: 60px;
    height: 10px;
    background: #fff;
    border-radius: 10px;
    margin-right: 20px !important;
  }
  .swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
    background: #4b6ff4;
  }
</style>
