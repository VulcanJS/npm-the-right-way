const { merge } = require("webpack-merge");
const path = require("path");
const commonConfig = require("./webpack.config.base.shared.prod");
// @see https://webpack.js.org/guides/typescript/
module.exports = merge(commonConfig, {
  entry: "server/index.ts",
  // Having an entry file instead of folder would be nice but doesn't work, because you cannot rename the output declaration files (.d.ts)
  // @see https://stackoverflow.com/questions/69403209/output-filename-with-ts-loader-do-not-rename-the-declaration-files
  //entry: "./index.server.ts",
  output: {
    // @see https://webpack.js.org/configuration/output/#outputlibrarytype
    type: "commonjs",
    // Deprecated equivalent:
    // libraryTarget: "commonjs",
    filename: "index.js",
  },
  target: "node",
  output: {
    // @see https://stackoverflow.com/questions/69403209/output-filename-with-ts-loader-do-not-rename-the-declaration-files
    // filename: "server.js",
  },
  resolve: {
    // If a folder have multiple index file, pick the server-only version first
    mainFiles: ["index.server.ts", "index.server.js", "index.ts", "index.js"],
  },
});
