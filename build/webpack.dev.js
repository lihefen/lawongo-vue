const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const path = require('path');

/**
 * 开发环境webpack配置
 * 合并基础配置，添加开发服务器和热更新支持
 */
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'), // 注意路径层级
      watch: true // 启用文件监听
    },
    hot: true,
    open: '/home/index.html', // 指定默认打开页面
    port: 8080,
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/home/index.html' }, // 根路径重定向
        { from: /^\/about/, to: '/about/index.html' }, // 示例：其他页面
        { from: /^\/phone-consult/, to: '/phone-consult/index.html' } // 示例：其他页面
      ]
    },
    compress: true
  },
  plugins: []
});