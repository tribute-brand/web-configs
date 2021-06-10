const path = require('path')
const webpack = require('webpack')

module.exports = (entry, options = {}) => {
  const config = {
    devtool: false,
    mode: 'development',
    context: path.resolve(__dirname, '../fixtures'),
    entry: path.resolve(__dirname, '../fixtures', entry),
    output: {
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/dist/',
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: path.resolve(__dirname, '../../lib', 'index.js'),
            },
            {
              loader: 'css-loader',
              options,
            },
          ],
        },
      ],
    },
    plugins: [],
  }
  return webpack(config)
}
