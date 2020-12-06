const mocks = require('./mocks');

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  plugins: [
    ['@tarojs/plugin-mock', {
      host: '127.0.0.1',
      port: 9527,
      mocks: mocks
    }]
  ],
  defineConstants: {},
  mini: {},
  h5: {}
}
