const IS_DEV = process.env.NODE_ENV === 'dev'

module.exports = api => {
  api.cache(true)

  return {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
          development: IS_DEV,
        },
      ],
      '@babel/preset-env',
      [
        '@babel/preset-typescript',
        {
          isTSX: true,
          allExtensions: true,
        },
      ],
    ],

    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: 3,
          regenerator: true,
        },
      ],
    ],

    comments: true,
  }
}
