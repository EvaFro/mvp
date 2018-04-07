var webpack = require('webpack');
var path = require('path');
const Dotenv = require('dotenv-webpack');

var BUILD_DIR = path.resolve(__dirname, 'client/public');
var SRC_DIR = path.resolve(__dirname, 'client/src');

var config = {
  entry: `${SRC_DIR}/App.jsx`,
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',      
        query: {
          presets: ['react', 'es2015']
       }
      }
    ]
  },
  plugins: [
    new Dotenv()
  ]
};

module.exports = config;
