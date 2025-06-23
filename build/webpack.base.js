const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const fs = require('fs');

/**
 * 获取多页面入口配置
 * @returns {Object} 包含入口配置和HTML插件的对象
 */
function getMultiPageConfig() {
  const pagesDir = path.resolve(__dirname, '../src/pages');
  const pages = fs.readdirSync(pagesDir);
  
  const entry = {};
  const htmlPlugins = [];
  
  pages.forEach(page => {
    const entryPath = path.resolve(pagesDir, page, 'index.js');
    const configPath = path.resolve(pagesDir, page, 'config.js');
    const config = fs.existsSync(configPath) ? require(configPath) : {};

    if (fs.existsSync(entryPath)) {
      entry[page] = entryPath;
      
      htmlPlugins.push(
        new HtmlWebpackPlugin({
          template: path.resolve(pagesDir, page, 'index.html'),
          filename: `${page}/index.html`,
          chunks: [page],
          inject: true,
          title: config.title || '默认标题',
          meta: config.meta || [],
          minify: {
            removeComments: true,
            collapseWhitespace: true
          }
        })
      );
    }
  });
  
  return { entry, htmlPlugins };
}

const { entry, htmlPlugins } = getMultiPageConfig();

module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]/js/[name].[contenthash:8].js', // 按页面名分组
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'autoprefixer',
                  [
                    'postcss-px-to-viewport',
                    {
                      viewportWidth: 375, // 设计稿宽度
                      viewportHeight: 667, // 设计稿高度
                      unitPrecision: 5, // 单位转换后保留的精度
                      viewportUnit: 'vw', // 希望使用的视口单位
                      selectorBlackList: ['.ignore', '.hairlines'], // 不转换的类
                      minPixelValue: 1, // 小于或等于1px不转换为视口单位
                      mediaQuery: false // 允许在媒体查询中转换px
                    }
                  ]
                ]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: false
              }
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 10kb
          }
        },
        generator: {
          filename: 'images/[name].[hash:8][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash:8][ext]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    ...htmlPlugins
  ]
};