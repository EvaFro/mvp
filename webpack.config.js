var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(dirname, 'client/public');
var APP_DIR = path.resolve(dirname, 'client/src');

var config = {
entry: APP_DIR + '/index.jsx',
output: {
path: BUILD_DIR,
filename: 'bundle.js'
}
};

module.exports = config;
