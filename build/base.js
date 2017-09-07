const webpack = require('webpack')
const { resolve } = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const lib = require('../terra.config').lib

const base = {
  entry: {
    main: ['./src/main.js'],
  },
  output: {
    path: resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].[hash].js',
  },
}

if (lib && lib.length !== 0) {
  base.entry.lib = lib
}

module.exports = base
