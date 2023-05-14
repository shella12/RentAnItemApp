const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
    alias: {
      'react-icons/ai': 'react-icons/ai',
      'react-icons/ri': 'react-icons/ri',
      'react-icons/bi': 'react-icons/bi',
      'react-redux': 'react-redux'
    }
  },
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
