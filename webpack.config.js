/*Module webpack*/
var webpack = require('webpack');

/*Module exports*/
module.exports = {
  entry: "./modules/index.js",
  output: {
    path: 'public/src/js',
    filename: 'bundle.min.js',
    publicPath: '/'
  },

  plugins: process.env.NODE_ENV === 'production'
    ? [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ]
    : [],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      }
    ]
  }
};
