var webpack = require("webpack");
var path = require("path");

module.exports = {
  devtool: "cheap-module-eval-source-map",
  target: "web",
  mode: "development",
  entry: [
    "webpack-hot-middleware/client?reload=true",
    path.resolve(__dirname, "src/index.js")
  ],
  output: {
    path: path.resolve(__dirname, "src"),
    filename: "bundle.js"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }, { loader: "eslint-loader" }]
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.svg$/,
        loader: "file-loader"
      }
    ]
  }
};
