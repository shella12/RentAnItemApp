module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '\\.(png|jpg|jpeg|gif|svg)$': 'jest-file-loader',
    },
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy'
    }
  };
  