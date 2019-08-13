const Layout = () => import(/* webpackChunkName: "reportlayout" */ '@/layout/report')

const ReportAward = () => import(/* webpackChunkName: "report-award" */ '@/views/report/report-award')
const ReportList = () => import(/* webpackChunkName: "report-list" */ '@/views/report/report-list')
const ReportBook = () => import(/* webpackChunkName: "report-book" */ '@/views/report/report-book')
const ReportData = () => import(/* webpackChunkName: "report-data" */ '@/views/report/report-data')
const ReportEnterprise = () => import(/* webpackChunkName: "report-enterprise" */ '@/views/report/report-enterprise')
const ReportExpert = () => import(/* webpackChunkName: "report-expert" */ '@/views/report/report-expert')
const ReportInvest = () => import(/* webpackChunkName: "report-invest" */ '@/views/report/report-invest')
const ReportNews = () => import(/* webpackChunkName: "report-news" */ '@/views/report/report-news')
const ReportPaper = () => import(/* webpackChunkName: "report-paper" */ '@/views/report/report-paper')
const ReportPatent = () => import(/* webpackChunkName: "report-patent" */ '@/views/report/report-patent')
const ReportPolicy = () => import(/* webpackChunkName: "report-policy" */ '@/views/report/report-policy')
const ReportProject = () => import(/* webpackChunkName: "report-project" */ '@/views/report/report-project')
const ReportStandard = () => import(/* webpackChunkName: "report-standard" */ '@/views/report/report-standard')
const ReportTrade = () => import(/* webpackChunkName: "report-trade" */ '@/views/report/report-trade')

const NewsDetail = () => import(/* webpackChunkName: "news-detail" */ '@/views/report/new-detail')
const PolicyDetail = () => import(/* webpackChunkName: "policy-detail" */ '@/views/report/policy-detail')

export default [{
  path: '/report',
  redirect: '/report/award',
  name: 'ReportLayout',
  component: Layout,
  children: [{
    path: '/report/award',
    component: ReportAward,
    name: 'ReportAward'
  },
  {
    path: '/report/book',
    component: ReportBook,
    name: 'ReportBook'
  },
  {
    path: '/report/data',
    component: ReportData,
    name: 'ReportData'
  },
  {
    path: '/report/enterprise',
    component: ReportEnterprise,
    name: 'ReportEnterprise'
  },
  {
    path: '/report/expert',
    component: ReportExpert,
    name: 'ReportExpert'
  },
  {
    path: '/report/invest',
    component: ReportInvest,
    name: 'ReportInvest'
  },
  {
    path: '/report/news',
    component: ReportNews,
    name: 'ReportNews'
  },
  {
    path: '/report/paper',
    component: ReportPaper,
    name: 'ReportPaper'
  },
  {
    path: '/report/patent',
    component: ReportPatent,
    name: 'ReportPatent'
  },
  {
    path: '/report/policy',
    component: ReportPolicy,
    name: 'ReportPolicy'
  },
  {
    path: '/report/project',
    component: ReportProject,
    name: 'ReportProject'
  },
  {
    path: '/report/standard',
    component: ReportStandard,
    name: 'ReportStandard'
  },
  {
    path: '/report/trade',
    component: ReportTrade,
    name: 'Reporttrade'
  },
  {
    path: '/report/news/:id',
    props: true,
    component: NewsDetail,
    name: 'NewsDetail'
  },
  {
    path: '/report/policy/:id',
    props: true,
    component: PolicyDetail,
    name: 'PolicyDetail'
  },
  {
    path: '/report/list',
    component: ReportList,
    name: 'ReportList'
  }]
}
]
