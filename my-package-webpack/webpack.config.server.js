const { merge } = require("webpack-merge");
const path = require("path");
const baseConfig = require("./webpack/webpack.config.base.server.prod");
//const merge = require('webpack-merge')
module.exports = merge(baseConfig, {
  entry: {
    index: path.resolve(__dirname, "./server/index.ts"),
    // You could also have other entries for client, like "cli"
  },
  output: {
    path: path.resolve(__dirname, "dist/server"),
    filename: "[name].js",
  },
});
