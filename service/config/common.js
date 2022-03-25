'use strict'

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const CaseSensitivePathsWebpackPlugin = require('case-sensitive-paths-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { DefinePlugin } = require('webpack')

// utils
const paths = require('../utils/paths')
const resolveClientEnv = require('../utils/resolveClientEnv')

// project config
const config = require('../project.config')

const isProduction = process.env.NODE_ENV === 'production'
const outputFileName = `js/[name]${isProduction ? '.[contenthash:8]' : ''}.js`

module.exports = {
  context: process.cwd(),

  entry: {
    app: './src/main.ts',
  },

  output: {
    path: paths.resolve(config.outputDir),
    publicPath: config.dev.publicPath,
    filename: outputFileName,
    chunkFilename: outputFileName,
  },

  resolve: {
    alias: {
      '@': paths.resolve('src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.json'],
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist'],
    }),
    new ESLintWebpackPlugin({
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue'],
    }),
    new VueLoaderPlugin(),
    new CaseSensitivePathsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: paths.resolve('public/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.resolve('public'),
          toType: 'dir',
          globOptions: {
            ignore: ['**/index.html'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new ForkTsCheckerWebpackPlugin(),
    new DefinePlugin({
      // https://github.com/vuejs/core/tree/main/packages/vue#bundler-build-feature-flags
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',

      ...resolveClientEnv({ publicPath: config.dev.publicPath }),
    }),
  ],

  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,

    rules: [
      // vue
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },

      // babel
      {
        test: /\.m?jsx?$/,
        exclude: (file) => {
          // always transpile js in vue files
          if (/\.vue\.jsx?$/.test(file)) {
            return false
          }
          return /node_modules/.test(file) // Don't transpile node_modules
        },
        use: ['thread-loader', 'babel-loader'],
      },

      // ts
      {
        test: /\.tsx?$/,
        use: [
          'thread-loader',
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ['\\.vue$'],
              happyPackMode: true,
            },
          },
        ],
      },

      // images
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'img/[name].[contenthash:8][ext][query]',
        },
      },

      // svg
      // do not base64-inline SVGs.
      // https://github.com/facebookincubator/create-react-app/pull/1180
      {
        test: /\.(svg)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[contenthash:8][ext][query]',
        },
      },

      // media
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
        generator: { filename: 'media/[name][contenthash:8][ext][query]' },
      },

      // fonts
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset',
        generator: { filename: 'fonts/[name][contenthash:8][ext][query]' },
      },
    ],
  },
}
