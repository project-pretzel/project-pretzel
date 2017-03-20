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
      test: /.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: ['react', 'es2015'] 
      },
      include: path.join(__dirname, 'src'),
      exclude: [path.join(__dirname, 'src/server.js'), path.join(__dirname, 'src/db/'), path.join(__dirname, 'src/model/')]
    },
    { 
      test: /\.json$/, 
      loader: 'json-loader' 
    }
  ]},
   node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};

module.exports = config;