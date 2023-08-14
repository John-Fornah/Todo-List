const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    project: './src/project.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo-App',
    }),
  ], 
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};