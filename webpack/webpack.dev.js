const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  mode: 'development',

  cache: { type: 'memory' },

  devtool: 'eval-cheap-module-source-map',

  stats: 'errors-only',

  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
})
