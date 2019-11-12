const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.js");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      // Sass and css files
      {
        test: /\.(s*)css$/i,
        use: [
          "style-loader",
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
      },
      // Inline content that is less than 8kb to data base64 strings
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[path][name].[ext]?hash=[hash:20]",
              limit: 8192 // 8kb
            }
          }
        ]
      }
    ]
  }
});
