const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      // Inline content that is less than 8kb to data base64 strings
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192 // 8kb
            }
          }
        ]
      },
      // Sass and css files
      {
        test: /\.(s*)css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: "./.configuration/"
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require("cssnano"),
      cssProcessorOptions: {
        map: {
          inline: true
        },
        discardComments: {
          removeAll: true
        },
        discardUnused: true
      },
      canPrint: true
    })
  ]
});
