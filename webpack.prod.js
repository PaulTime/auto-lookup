const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const { PUBLIC_PATH = '/', API_HOST = 'http://localhost:8080' } = process.env;

module.exports = {
  target: 'web',

  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: PUBLIC_PATH,
    filename: 'static/js/bundle.[hash].js',
    chunkFilename: 'static/js/[name].[hash].chunk.js'
  },

  optimization: {
    splitChunks: { chunks: 'all' },
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },
  mode: 'production',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
    modules: ['src', 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: PUBLIC_PATH }
          },
          {
            loader: 'css-loader',
            options: {
              modules: { localIdentName: '[hash:base64]' }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[hash].css',
      chunkFilename: 'static/css/[id].[hash].css'
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        NODE_ENV: 'production',
        API_HOST,
        PUBLIC_PATH
      })
    })
  ]
};
