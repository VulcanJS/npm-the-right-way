const merge = require("webpack-merge");
const path = require("path");
const baseConfig = require("../../webpack/webpack.config.base.common.prod");
module.exports = merge(baseConfig, {
  entry: {
    index: path.resolve(__dirname, "./index.ts"),
    // You could also have other entries for shared code, such as "testing"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
});
