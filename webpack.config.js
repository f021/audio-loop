
'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {

  entry: './src/main',

  output: {
    path: './src',
    filename: 'bundle.js',
    library: 'main'
  },

  watch: true,

  devtool: 'source-map',


  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        include: [
          path.resolve(__dirname, './src')
        ],
        query: {
          presets: ['es2015']
        }
      }
    ]
  }

};