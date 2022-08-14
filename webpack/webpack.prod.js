const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  mode: 'production',

  cache: {
    type: 'filesystem',
    buildDependencies: { config: [__filename] },
  },

  optimization: {
    minimize: true,
    moduleIds: 'deterministic',
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '-',
      cacheGroups: {
        vendor: {
          name: 'vendors',
          enforce: true,
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
        },
        default: {
          minSize: 0,
          name: 'common',
          minChunks: 3,
          priority: 10,
          reuseExistingChunk: true,
        },
      },
    },
  },
})
