const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");
const baseWebpackConfig = require("./webpack.base.conf.js");

const resolveApp = relativePath => path.join(__dirname, "..", relativePath);

module.exports = merge(baseWebpackConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    // host: "localhost",
    host: "172.28.64.236",
    port: 6010,
    historyApiFallback: true,
    open: true,
    clientLogLevel: "warning",
    watchOptions: {
      ignored: /node_modules/
    },
    overlay: {
      errors: true
    },
    proxy: {
      "/proxy": {
        target: "http://ai-prescription-web-qa1.guahao-test.com",
        changeOrigin: true
      }
    }
  },
  output: {
    path: resolveApp("./dist"),
    filename: "[name].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["vue-style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"development"'
      }
    })
  ]
});
