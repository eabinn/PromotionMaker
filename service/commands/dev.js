'use strict'

const loadEnv = require('../utils/loadEnv')
loadEnv()
loadEnv('development')

const chalk = require('chalk')
const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')

const { info } = require('../utils/logger')
const getLocalIP = require('../utils/getLocalIP')

const devWebpackConfig = require('../config/dev')

const devServerOptions = devWebpackConfig.devServer
const protocol = devServerOptions.https ? 'https' : 'http'
const host = devServerOptions.host || '0.0.0.0'
const port = devServerOptions.port || 3000

info('Starting development server...')

const webpackCompiler = webpack(devWebpackConfig)
const server = new webpackDevServer(devServerOptions, webpackCompiler)

webpackCompiler.hooks.done.tap('serve', (stats) => {
  if (stats.hasErrors()) {
    return
  }
  console.log()
  console.log('App running at:')
  console.log(`  - Local:   ${chalk.cyan(`${protocol}://${host}:${port}`)}`)
  console.log(`  - Network: ${chalk.cyan(`${protocol}://${getLocalIP()}:${port}`)}`)
  console.log()
})

server.start(port, host, (err) => {
  if (err) {
    process.exit(0)
  }
})
