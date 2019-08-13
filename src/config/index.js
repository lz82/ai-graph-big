// 根据当前mode获取Base Url 类型
const env = process.env.VUE_APP_BASE_URL_TYPE

// 根据VUE_APP_BASE_URL_TYPE获取BASE_URL
const getBaseUrl = env => {
  switch (env) {
    // development
    case 'dev':
      return {
        baseUrl: 'http://192.168.200.199:8095'
      }
    // production
    case 'prod':
      return {
        baseUrl: 'http://192.168.200.199:8095'
      }
    // default: dev
    default:
      return {
        baseUrl: 'http://192.168.200.199:8032'
      }
  }
}

const appConfig = {
  baseUrl: getBaseUrl(env).baseUrl
}

export default appConfig
