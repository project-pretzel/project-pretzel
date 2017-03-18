// webpack.config.js
const webpack = require('webpack');
const path = require('path');
const config = {
  entry: path.join(__dirname, 'src', 'app-client.js'),
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: path.join(__dirname, 'src'),
      loader: 'babel-loader',
      options: {
        presets: ['react', 'es2015'] 
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    //new webpack.optimize.DedupePlugin(),
    //new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: true,
      beautify: false,
      dead_code: true
    })
  ]
};

module.exports = config;