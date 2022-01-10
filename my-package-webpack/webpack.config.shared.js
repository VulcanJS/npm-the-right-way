const { merge } = require("webpack-merge");
const path = require("path");
const baseConfig = require("./webpack/webpack.config.base.shared.prod");
module.exports = merge(baseConfig, {
  entry: {
    index: path.resolve(__dirname, "./shared/index.ts"),
    // You could also have other entries for shared code, such as "testing"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
});
