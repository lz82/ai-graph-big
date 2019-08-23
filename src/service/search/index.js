import { AppPost } from '@/utils/request'
const keyMap = {
  '吴恩达': 'wed',
  '知识库': 'zsk'
}
// 根据关键字获取介绍
export function QueryDataByKeyword (keyword, type) {
  const jsonUrl = `/mock-data/${keyMap[keyword]}.json`
  return AppPost(jsonUrl, {
    keyword
  })
}

// 根据关键词获取论文信息
export function QueryPaperByKeyword (keyword, type) {
  return AppPost('/mock-data/paper-list.json', {
    keyword,
    type
  })
}
