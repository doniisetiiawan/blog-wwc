const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    path: path.resolve('dist'),
    filename: 'main.js',
  },
  devtool: 'source-map',
  devServer: {
    open: true,
    compress: true,
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
};
