const merge = require("webpack-merge").merge;
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  watch: true,
  devtool: "inline-source-map",
});
