const path = require('path')
const { IS_DEV, resolver } = require('./utils')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: resolver('entry'),

  output: {
    path: resolver('dist'),
    publicPath: '/',
    filename: IS_DEV ? 'js/[name].bundle.js' : 'js/[name].[contenthash:8].bundle.js',
    chunkFilename: IS_DEV ? 'js/[name].chunk.js' : 'js/[name].[contenthash:8].chunk.js',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        include: [resolver('src')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              plugins: [IS_DEV && require.resolve('react-refresh/babel')].filter(Boolean),
            },
          },
        ],
        exclude: [/node_modules/, /public/],
      },

      {
        test: /\.(c|le)ss$/,
        use: [
          IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },

      {
        test: /\.(jpe?g|png|gif|webp|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[hash:6][ext][query]',
        },
      },

      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[hash:6][ext][query]',
        },
      },
    ],
  },

  plugins: [
    new Dotenv({
      path: IS_DEV
        ? path.resolve(__dirname, '../.env.development')
        : path.resolve(__dirname, '../.env.production'),
    }),

    new CopyPlugin({
      patterns: [
        {
          from: resolver('static.from'),
          to: resolver('static.to'),
        },
      ],
    }),

    new HtmlWebpackPlugin({
      template: resolver('template'),
      filename: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      },
    }),

    !IS_DEV &&
      new MiniCssExtractPlugin({
        filename: IS_DEV ? 'css/[name].css' : 'css/[name].[contenthash:8].css',
        chunkFilename: IS_DEV ? 'css/[name].chunk.css' : 'css/[name].[contenthash:8].chunk.css',
        ignoreOrder: true,
      }),

    IS_DEV && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@images': path.resolve(__dirname, '../src/assets/images'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
}
