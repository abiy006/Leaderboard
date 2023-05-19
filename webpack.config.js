const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  // plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
      test: /\.css$/,
      use: ['style-loader','css-loader']
      },
    ],
     }
};
