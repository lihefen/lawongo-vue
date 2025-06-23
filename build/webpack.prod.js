const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * 生产环境webpack配置
 * @type {import('webpack').Configuration}
 */
module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
      cacheGroups: {
        vendors: {
          test: /[\\]node_modules[\\]/,
          name: 'vendors',
          chunks: 'all'
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          priority: -20
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    })
  ]
});