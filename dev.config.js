const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    test: './src/test.ts',
    mint: './src/mint.ts',
    'stats-tester': './src/stats-tester.ts',
    'stats-fct': './src/stats-fct.ts',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    publicPath: '/dist/',
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
      {
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },
  devServer: {
    static: {
      directory: __dirname,
    },
  },
}
