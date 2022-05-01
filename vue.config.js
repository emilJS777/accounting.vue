const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    https: false,
    port: 4002,
    public: 'http://0.0.0.0:4002'
  },
})
