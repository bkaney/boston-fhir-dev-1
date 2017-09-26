var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: {
    app: "./app.js"
  },
  node: {
  },
  module: {
  },
  resolve: {
    extensions: [".js"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    library: "fhir-example",
    libraryTarget: "umd"
  }
};
