const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = {
  entry: {
    index: path.join(__dirname, 'src', 'index.ts')
  },
  output: {
    filename: '[name].min.js',
    path: path.join(__dirname, 'dist'),
    library: 'setImmediateInterval',
    libraryTarget: 'umd',
    globalObject: 'this',
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};

const developmentConfig = {
  devtool: 'source-map',
  plugins: [new HtmlWebpackPlugin()]
};

const productionConfig = {
  plugins: [new CleanWebpackPlugin()]
};

module.exports = (_, { mode }) => {
  if (mode === 'development') {
    return merge(commonConfig, developmentConfig);
  }
  return merge(commonConfig, productionConfig);
};
