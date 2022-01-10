const merge = require("webpack-merge");
const path = require("path");
const baseConfig = require("../../webpack/webpack.config.base.common.prod");
module.exports = merge(baseConfig, {
  entry: {
    index: path.resolve(__dirname, "./client/index.ts"),
    // You could also have other entries for client, like "my-big-export"
  },
  output: {
    path: path.resolve(__dirname, "dist/client"),
    filename: "[name].js",
  },
});
