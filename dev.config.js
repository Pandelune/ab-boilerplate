const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  entry: {
    test: './src/test.js',
    mint: './src/mint.js',
    'stats-tester': './src/stats-tester.js',
    'stats-fct': './src/stats-fct.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
}
