const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: 5 });
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");
const resolveApp = relativePath => path.join(__dirname, '..', relativePath);
const hasDll = fs.existsSync(resolveApp('./build/dll/manifest.json'));

module.exports = {
  entry: {
    'index': resolveApp('./src/index.js'),
  },
  resolve: {
    symlinks: true,
    extensions: ['.js', '.vue', '.css', '.scss', '.less'],
    alias: {
      '@': resolveApp('./src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'happypack/loader?id=js', // 将loader换成happypack
          },
        },
      },
      {
        test: /\.js$/,
        loader: 'happypack/loader?id=js',
        include: [resolveApp('./src')],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 20480, // 小于8k的图片自动转成base64格式，并且不会存在实体图片
              outputPath: 'assets/img/', // 图片打包后存放的目录
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 20480, // 小于8k的图片自动转成base64格式，并且不会存在实体图片
          outputPath: 'assets/img/', // 图片打包后存放的目录
        },
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ options: {} }),
    new VueLoaderPlugin(),
    new HappyPack({
      id: 'js',
      threadPool: happyThreadPool,
      loaders: ['babel-loader?cacheDirectory=true'],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: resolveApp('./index.html'),
      minify: {
        minimize: true,
        removeConments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      },
    }),
  ].concat(hasDll ? [
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname), //这个需要跟DllPlugin里面的context配置的一样，或者都不配置
      manifest: require(resolveApp('./build/dll/manifest.json')),
    }),
    new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, "./dll/*.dll.js") //当前目录下面
    })
  ] : []),
  performance: {
    hints: 'warning',
    maxEntrypointSize: 5000000,
    maxAssetSize: 3000000,
  },
};
