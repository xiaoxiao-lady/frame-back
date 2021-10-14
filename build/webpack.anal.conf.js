const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const merge = require('webpack-merge');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin();
const buildWebpackConfig = require('./webpack.build.conf.js');

module.exports = smp.wrap(merge(buildWebpackConfig, {
  plugins: [new BundleAnalyzerPlugin()],
}));
