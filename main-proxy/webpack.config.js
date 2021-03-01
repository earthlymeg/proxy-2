/* eslint-disable no-undef */
const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './dist/index.html',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: 'file-loader',
      }, 
      {
        test: /\.html$/i,
        loader: 'html-loader',
      }
    ]
  }
};

module.exports = config;