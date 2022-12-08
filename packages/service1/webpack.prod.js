const { resolve } = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { commonConfig } = require('./webpack.common');
const packageJson = require('./package.json');
const PUBLIC_PATH = '/mfe-react-project/service1/';

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: resolve(__dirname, 'build/service1'),
    publicPath: PUBLIC_PATH,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'service1',
      filename: 'remoteEntry.js',
      exposes: {
        './Service1App': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
    new webpack.DefinePlugin({
      'process.env.PUBLIC_PATH': JSON.stringify(PUBLIC_PATH),
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
