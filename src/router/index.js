import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  showSpinner: false
})

const Homepage = () => import(/* webpackChunkName: "home" */ '@/views/home/index')
const Category = () => import(/* webpackChunkName: "category" */ '@/views/category')
const GraphDetail = () => import(/* webpackChunkName: "graph" */ '@/views/graph')
const Search = () => import(/* webpackChunkName: "search" */ '@/views/search-result')

const ReportEnterprise = () => import(/* webpackChunkName: "reportenterprise" */ '@/views/report/enterprise')

Vue.use(Router)

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
      meta: {
        path: 'home'
      }
    },
    {
      path: '/category',
      name: 'Category',
      component: Category,
      meta: {
        path: 'home-catetory'
      }
    },
    {
      path: '/graph/:searchKey',
      name: 'Graph',
      component: GraphDetail
    },
    {
      path: '/search/:searchKey?',
      name: 'Search',
      component: Search,
      meta: {
        path: 'home-serch-graph'
      }
    },
    {
      path: '/report/enterprise',
      name: 'ReportEnterprise',
      component: ReportEnterprise,
      meta: {
        path: 'home-category-report'
      }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  // 0.0 启动进度条
  NProgress.start()
  next()
})

router.afterEach((to) => {
  // 设置document title
  document.title = to.meta.title || '上海人工智能公共研发资源图谱'
  // 结束进度条
  NProgress.done()
})

export default router
