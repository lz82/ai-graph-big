import { AppPost } from '@/utils/request'
const keyMap = {
  '李飞飞': 'lff',
  '吴恩达': 'wed',
  '周志华': 'zzh',
  '韩家炜': 'hjw',
  '知识库': 'zsk',
  '度量学习': 'dlxx',
  '机器翻译': 'jqfy',
  '目标检测': 'mbjc',
  '人脸识别': 'rlsb',
  '推荐系统': 'tjxt',
  '无人驾驶': 'wrjs',
  '循环神经网络': 'xhsjwl',
  '支持向量机': 'zcxlj',
  '可解释人工智能': 'kjsrgzn',
  'Geoffrey Hinton': 'Geoffrey',
  'Michael I.Jordan': 'Michael',
  'SebastianThrun': 'Sebastian',
  'William T. Freeman': 'William',
  'Yann Lecun': 'Yann',
  'Yoshua Bengio': 'Yoshua'
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
