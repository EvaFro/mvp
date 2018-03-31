var webpack = require('webpack');
var path = require('path');
const Dotenv = require('dotenv-webpack');

var BUILD_DIR = path.resolve(dirname, 'client/public');
var APP_DIR = path.resolve(dirname, 'client/src');

var config = {
  entry: APP_DIR + '/App.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  plugins: [
    new Dotenv()
  ]
};

module.exports = config;
