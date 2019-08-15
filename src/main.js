import Vue from 'vue'
import App from './app.vue'
import router from './router/index'
import store from './store/index'

// 全局样式、字体
import '@/style/index.less'

// Element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import 'swiper/dist/css/swiper.css'

// import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(ElementUI)
// Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
