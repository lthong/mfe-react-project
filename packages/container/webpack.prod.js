const { resolve } = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { commonConfig, PUBLIC_PATH } = require('./webpack.common');
const packageJson = require('./package.json');
const domain = 'https://lthong.github.io/mfe-react-project';

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: resolve(__dirname, 'build/container'),
    publicPath: PUBLIC_PATH,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        service1: `sevice1@${domain}/service1/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
