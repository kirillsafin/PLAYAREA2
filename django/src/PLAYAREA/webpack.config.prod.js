const { VueLoaderPlugin } = require('vue-loader');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

const path = require('path');

const entries = require('./entries.js');

module.exports = {
  mode: 'production',
  entry: entries,
  context: path.resolve(__dirname, '.'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new VueLoaderPlugin(), // disable prettier
    new VuetifyLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\\.(js|jsx)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.s[a|c]ss$/i,
        use: [
          'style-loader', // no-prettier
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
        type: 'asset',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
    alias: {
      '@app': path.resolve(__dirname),
      '@webpack-stuff': path.resolve(__dirname, 'webpack-stuff'),
    },
  },
};
