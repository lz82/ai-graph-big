import { AppPost } from '@/utils/request'

// 根据关键字获取介绍
export function QueryIntroByKeyword (keyword) {
  return AppPost('/search/intro', {
    keyword
  })
}

// 根据关键词获取知识图谱信息
export function QueryGraphByKeyword (keyword, type) {
  return AppPost('/search/graph', {
    keyword,
    type
  })
}

// 根据关键词获取论文信息
export function QueryPaperByKeyword (keyword, type) {
  return AppPost('/mock-data/paper-list.json', {
    keyword,
    type
  })
}

// 根据关键词获取图书信息
export function QueryBookByKeyword (keyword, type) {
  return AppPost('/search/book', {
    keyword,
    type
  })
}

// 根据关键词获取专利信息
export function QueryPatentByKeyword (keyword, type) {
  return AppPost('/search/patent', {
    keyword,
    type
  })
}

// 根据关键词获取标准信息
export function QueryStandardByKeyword (keyword, type) {
  return AppPost('/search/standard', {
    keyword,
    type
  })
}
