var path = require("path");

module.exports = {
  output: {
      path: path.resolve(__dirname,"client/dist" ),
    filename: "login.js"
  },
  entry: "./client/src/login.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ['@babel/preset-env', '@babel/preset-react'] }
      }
    ]
  }
};
