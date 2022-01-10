// @see https://webpack.js.org/guides/typescript/
// TODO: run with Babel, see electron-react-boilerplate example
// of Babel +  Webpack
/**
 * Examples of Babel +  Webpack + TS-loader
 * https://github.com/microsoft/TypeScriptSamples/blob/master/react-flux-babel-karma/webpack.config.js
 *
 */

const path = require("path");
const nodeExternals = require("webpack-node-externals");
module.exports = {
  devtool: "inline-source-map",
  mode: "production",
  output: {
    libraryTarget: "commonjs2",
    filename: "index.js",
  },
  // This prevent bundling node_modules into the app
  // additionalModuleDirs allow handling root and nested node_modules
  // @see https://stackoverflow.com/questions/46010926/how-to-use-webpack-with-a-monorepo-yarnpkg-workspaces
  externals: [
    nodeExternals({
      additionalModuleDirs: [path.resolve(__dirname, "../node_modules")],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [
                [
                  "transform-define",
                  {
                    "process.env.NODE_ENV": "production",
                    // TODO: this is to avoid failing the build, but we may need to improve this
                    window: "42",
                  },
                ],
              ],
            },
          },
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.build.json",
              // will only include files imported by index.ts/index.server.ts etc.
              onlyCompileBundledFiles: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js"],
  },
};
