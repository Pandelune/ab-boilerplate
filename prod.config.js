const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    test: './src/test.ts',
    mint: './src/mint.ts',
    'stats-tester': './src/stats-tester.ts',
    'stats-fct': './src/stats-fct.ts',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
}
