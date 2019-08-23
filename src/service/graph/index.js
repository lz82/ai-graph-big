import { AppPost } from '@/utils/request'

const keyMap = {
  '吴恩达': 'wed',
  '知识库': 'zsk'
}

// 根据关键词搜索图谱信息
export function QueryGraphDetailByKeyword (id) {
  const jsonUrl = `/mock-data/${keyMap[id]}.json`
  return AppPost(jsonUrl, {
    id
  })
}

// 小知识图谱
export function QueryGraphInfoByKeyword (id) {
  return AppPost('/mock-data/graph.json', {
    id
  })
}
