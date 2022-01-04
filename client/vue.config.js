const { mergeSassVariables } = require('@vuetify/cli-plugin-utils')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/demo/materio-vuetify-vuejs-admin-template-free/demo' : '/',
  lintOnSave: false,
  transpileDependencies: ['vuetify'],
  chainWebpack: config => {
    const modules = ['vue-modules', 'vue', 'normal-modules', 'normal']
    modules.forEach(match => {
      config.module
        .rule('sass')
        .oneOf(match)
        .use('sass-loader')
        .tap(opt => mergeSassVariables(opt, "'@/styles/variables.scss'"))
      config.module
        .rule('scss')
        .oneOf(match)
        .use('sass-loader')
        .tap(opt => mergeSassVariables(opt, "'@/styles/variables.scss';"))
    })
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3070',
        changeOrigin: true
      },
    }
  }
}