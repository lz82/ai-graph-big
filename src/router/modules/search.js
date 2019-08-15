const SearchLayout = () => import(/*  */ '@/layout/search')
const SearchResult = () => import(/* webpackChunkName: "searchresult" */ '@/views/search-result/index')
export default {
  path: '/search',
  component: SearchLayout,
  name: 'SearchLayout',
  children: [
    {
      path: '/result/:searchKey?',
      name: 'SearchResult',
      props: true,
      component: SearchResult
    }
  ]
}
