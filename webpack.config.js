var path = require("path");

var srcPath = path.resolve(__dirname, "src/js/jsx");
var glob = require("glob");

var config = {
  entry: glob.sync("./src/js/jsx/*.jsx"),
  output: {
    filename: "main.js"
  },
  module: {
    loaders: [{
        include: srcPath,
        loader: "babel",
    }]
  }
};

module.exports = config;