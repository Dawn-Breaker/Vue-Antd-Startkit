module.exports = {
  system: 'Risk-CS', // application name
  vendor: ['vue', 'vue-router', 'element-ui'], // dll
  lib: [], // common chunks
  /**
   * mock
   * 路由代理
   * 响应对应mock文件夹下
   */
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:8080',
      pathRewrite: {
        '^/api/': '/',
      },
    },
  },
  port: 8080, // dev server port
  mock: true, // is mock?
  framework: 'vue',
}
