const { merge } = require('webpack-merge');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = require('./webpack.base.js');

module.exports = merge(base, {
  entry: {
    client: './src/entry/client.entry.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('./public/index.html'),
    }),
  ],
});
