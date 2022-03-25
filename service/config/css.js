'use strict'

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProduction = process.env.NODE_ENV === 'production'

const plugins = []
if (isProduction) {
  const filename = 'css/[name].[contenthash:8].css'

  plugins.push(
    new MiniCssExtractPlugin({
      filename,
      chunkFilename: filename,
    })
  )
}

const cssLoader = {
  loader: 'css-loader',
  options: {
    importLoaders: 2,
  },
}

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [require('autoprefixer')],
    },
  },
}

const cssExtractPluginLoader = {
  loader: MiniCssExtractPlugin.loader,
}

const styleLoader = {
  loader: 'style-loader',
}

function createCSSRule(test, loader, loaderOptions) {
  const loaders = [cssLoader, postcssLoader]

  loaders.unshift(isProduction ? cssExtractPluginLoader : styleLoader)

  if (loader) {
    loaders.push({ loader, options: loaderOptions })
  }

  return { test, use: loaders }
}

module.exports = {
  plugins,
  module: {
    rules: [
      createCSSRule(/\.css$/),
      createCSSRule(/\.p(ost)?css$/),
      createCSSRule(/.scss$/, 'sass-loader'),
    ],
  },
}
