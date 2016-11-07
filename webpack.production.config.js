'use strict';
const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    `./app/index.js`
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '/bundle.js'
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  module: { loaders },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('[contenthash].css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: './app/app.html',
      title: 'RedBooth - React'
    }),
    new webpack.optimize.DedupePlugin(),
    new WebpackCleanupPlugin({ exclude: [ "bundle.js" ] }),
    new CopyWebpackPlugin([ { from: 'public' } ])
  ]
};
