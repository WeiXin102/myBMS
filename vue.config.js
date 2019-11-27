module.exports = {
  // baseUrl: '/',
  outputDir: 'dist', // 打包的目录
  lintOnSave: true, // 在保存时校验格式
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  devServer: {
    open: false, // 启动服务后是否打开浏览器
    host: '0.0.0.0',
    port: 9009, // 服务端口
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://localhost:9011',
        //target:'http://10.81.2.131:8003',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    }, // 设置代理
    before: app => { }
  },
}