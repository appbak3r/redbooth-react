'use strict';
const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '3001';

module.exports = {
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    `webpack/hot/only-dev-server`,
    `./app/index.js`
  ],
  devtool: process.env.WEBPACK_DEVTOOL || 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: '/bundle.js'
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  devServer: {
    contentBase: './public',
    hot: true,
    noInfo: true,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST
  },
  module: { loaders },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './app/app.html'
    })
  ],
  externals: {
    config: JSON.stringify(require('./config/config.json').development)
  }
};