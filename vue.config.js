module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production', // 非生产环境开启lintOnSave

  devServer: {
    // dev-server中，lint不通过报错
    overlay: {
      warnings: true,
      errors: true
    },
    port: 8899,
    open: true
  }
  // publicPath: '/preview/'
}
