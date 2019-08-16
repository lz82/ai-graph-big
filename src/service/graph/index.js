import { AppPost } from '@/utils/request'

// 根据关键词搜索图谱信息
export function QueryGraphDetailByKeyword (id) {
  return AppPost('/mock-data/graph-detail.json', {
    id
  })
}

// 小知识图谱
export function QueryGraphInfoByKeyword (id) {
  return AppPost('/mock-data/graph.json', {
    id
  })
}
