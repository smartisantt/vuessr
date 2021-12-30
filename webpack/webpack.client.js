const { merge } = require('webpack-merge');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin")

const base = require('./webpack.base.js');

module.exports = merge(base, {
  entry: {
    client: './src/entry/client.entry.js',
  },
  plugins: [
    new VueSSRClientPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('./public/index.html'),
    }),
  ],
});
