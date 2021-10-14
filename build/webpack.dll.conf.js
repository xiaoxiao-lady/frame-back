const path = require('path');
const webpack = require('webpack');

const resolveApp = relativePath => path.join(__dirname, '..', relativePath);


module.exports = {
  mode: 'production',
  entry: [ "vue",
  "vuex",
  "vue-router",
  "axios",
  "xlsx",
  "wangeditor",
  "umy-ui",
  "echarts",
],
  output: {
    path: resolveApp('./build/dll'),
    filename: '[name].dll.js',
    library: '[name]_[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dll', 'manifest.json'),
      name: '[name]_[hash]',
      context: path.resolve(__dirname),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
  ],
};
