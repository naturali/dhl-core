const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'dhl': './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'source-map',
  plugins: [
  ],
  optimization: {
    minimize: true
  },
  module: {
    rules: [{
      test: /\.ts?$/,
      loader: 'awesome-typescript-loader',
      exclude: /node_modules/,
      query: {
        declaration: false,
      }
    }]
  }
};
