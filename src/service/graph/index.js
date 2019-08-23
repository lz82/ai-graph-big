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
