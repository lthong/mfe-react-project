const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const PUBLIC_PATH = '/mfe-react-project/container/';

module.exports = {
  commonConfig: {
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new webpack.DefinePlugin({
        'process.env.PUBLIC_PATH': JSON.stringify(PUBLIC_PATH),
      }),
    ],
  },
  PUBLIC_PATH,
};
