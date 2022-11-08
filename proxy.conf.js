// 4202 is the port where the mfe should be started on
module.exports = {
  '/test-mfe/*': {
    target: 'http://localhost:4202',
    secure: false,
    logLevel: 'debug',
    pathRewrite: {
      '^/test-mfe': ''
    }
  }
};
