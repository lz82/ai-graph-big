// 根据当前mode获取Base Url 类型
const env = process.env.VUE_APP_BASE_URL_TYPE

// 根据VUE_APP_BASE_URL_TYPE获取BASE_URL
const getBaseUrl = env => {
  switch (env) {
    // development
    case 'dev':
      return {
        baseUrl: 'http://localhost:8899'
      }
    // production
    case 'prod':
      return {
        baseUrl: 'http://localhost:8899'
      }
    // default: dev
    default:
      return {
        baseUrl: 'http://localhost:8899'
      }
  }
}

const centerWordMap = {
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
  '可解释性': 'kjsx',
  'Geoffrey Hinton': 'Geoffrey',
  'Michael I. Jordan': 'Michael',
  'SebastianThrun': 'Sebastian',
  'William T. Freeman': 'William',
  'Yann Lecun': 'Yann',
  'Yoshua Bengio': 'Yoshua'
}
const centerWordList = [
  '李飞飞',
  '吴恩达',
  '周志华',
  '韩家炜',
  '知识库',
  '度量学习',
  '机器翻译',
  'Feifei Li',
  '目标检测',
  '人脸识别',
  '推荐系统',
  '无人驾驶',
  '循环神经网络',
  '支持向量机',
  '可解释人工智能',
  'Geoffrey Hinton',
  'Michael I. Jordan',
  'SebastianThrun',
  'William T. Freeman',
  'Yann Lecun',
  'Yoshua Bengio']

const typeList = [
  { key: 'expert', name: '专家' },
  { key: 'keyword', name: '关键词' },
  { key: 'org', name: '机构' },
  { key: 'paper', name: '论文' },
  { key: 'patent', name: '专利' },
  { key: 'project', name: '项目' },
  { key: 'honor', name: '荣誉' }
]

const appConfig = {
  baseUrl: getBaseUrl(env).baseUrl,
  centerWordMap: centerWordMap,
  typeList: typeList,
  centerWordList: centerWordList
}

export default appConfig
