const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.base.shared.prod");
// @see https://webpack.js.org/guides/typescript/
module.exports = merge(commonConfig, {
  entry: "./client/index.ts",
  // Doesn't work (.d.ts files won't be renamed as expected)
  //entry: "./index.client.ts",
  output: {
    // filename: "client.js",
  },
  resolve: {
    mainFiles: ["index.client.ts", "index.client.js", "index.ts", "index.js"],
  },
});
