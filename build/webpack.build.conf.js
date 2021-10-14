const path = require("path");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require("webpack");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const resolveApp = relativePath => path.join(__dirname, "..", relativePath);
const baseWebpackConfig = require("./webpack.base.conf.js");
const getNodeEnv = () => {
  if (!process.argv[6]) return "production";
  if (process.argv[6].includes("test")) return "test";
  if (process.argv[6].includes("stable")) return "stable";
  if (process.argv[6].includes("dev")) return "development";
};

module.exports = merge(baseWebpackConfig, {
  mode: "production",
  output: {
    path: resolveApp("./dist"),
    filename: "[name].[hash:8].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.less?$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash:8].css",
      chunkFilename: "[id].[hash:8].css"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: `"${getNodeEnv()}"`
      }
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../static"),
        to: "static"
      }
    ])
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessor: require("cssnano"),
        cssProcessorPluginOptions: {
          preset: ["default", { discardComments: { removeAll: true } }]
        },
        canPrint: true
      }),
      new UglifyJsPlugin({
        // 压缩js
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_debugger: false,
            drop_console: true
          }
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        element: {
          name: "element",
          test: module => {
            return /element-ui/.test(module.context);
          },
          chunks: "initial",
          priority: 10
        },
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  }
});
