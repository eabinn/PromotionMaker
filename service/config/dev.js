'use strict'

const { merge } = require('webpack-merge')

const commonWebpackConfig = require('./common')
const cssWebpackConfig = require('./css')
const config = require('../project.config')

module.exports = merge(commonWebpackConfig, cssWebpackConfig, {
  mode: 'development',

  devtool: 'eval-cheap-module-source-map',

  devServer: {
    devMiddleware: {
      publicPath: config.dev.publicPath,
    },
    hot: true,
    liveReload: false,
    open: false,
    host: '0.0.0.0',
    port: config.dev.port,
  },

  infrastructureLogging: {
    level: 'warn',
  },

  stats: {
    assets: false,
    modules: false,
  },
})
