const path = require('path')

const paths = {
  src: '../src',
  dist: '../dist',
  entry: '../src/main.tsx',
  template: '../public/index.html',
  'static.to': '../dist/static',
  'static.from': '../public/static',
}

const NODE_ENV = process.env.NODE_ENV

module.exports = {
  IS_DEV: NODE_ENV === 'development',

  resolver(p) {
    return path.resolve(__dirname, paths[p])
  },
}
