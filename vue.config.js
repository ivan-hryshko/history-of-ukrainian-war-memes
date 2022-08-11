const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/history-of-ukrainian-war-memes/',
  transpileDependencies: true,
  chainWebpack: config => config.resolve.symlinks(false),
})
