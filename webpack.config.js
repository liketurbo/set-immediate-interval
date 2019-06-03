const path = require('path');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = {
  entry: {
    index: path.join(__dirname, 'src', 'index.ts')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [{ test: /\.ts$/, use: 'ts-loader' }]
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
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  },
  plugins: [new CleanWebpackPlugin()]
};

module.exports = (_, { mode }) => {
  if (mode === 'development') {
    return merge(commonConfig, developmentConfig);
  }
  return merge(commonConfig, productionConfig);
};
