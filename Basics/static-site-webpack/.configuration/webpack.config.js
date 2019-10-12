var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    home: "./src/home/home.js",
    about: "./src/about/about.js"
  },
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "../dist")
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      favicon: "./src/shared/images/icon.png",
      template: "./src/home/home.html",
      inject: true,
      chunks: ["home"],
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/shared/images/icon.png",
      template: "./src/about/about.html",
      inject: true,
      chunks: ["about"],
      filename: "about.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            interpolate: true,
            attrs: ["img:src", "link:href"]
          }
        }
      }
    ]
  }
};
