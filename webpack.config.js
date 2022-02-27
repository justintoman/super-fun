const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
module.exports = {
  entry: ['./index.tsx'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.jpg', '.png']
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        type: 'asset'
      },
      { test: /\.(png|jpg|gif)$/, type: 'asset' }
    ]
  },
  context: path.resolve(__dirname, 'src'),
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html'
    }),
    new ReactRefreshWebpackPlugin()
  ],
  devServer: {
    historyApiFallback: true
  }
};
