const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { commonConfig } = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('./package.json');
const PUBLIC_PATH = '/';

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: true,
    },
  },
  plugins: [
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

module.exports = merge(commonConfig, devConfig);
