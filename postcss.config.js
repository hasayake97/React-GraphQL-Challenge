module.exports = {
  plugins: [
    require('postcss-preset-env')({
      autoprefixer: true,
    }),

    require('cssnano')({
      preset: 'default',
    }),
  ],
}
