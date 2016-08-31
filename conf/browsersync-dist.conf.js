const conf = require('./gulp.conf');

module.exports = function () {
  return {
    server: {
      baseDir: [
        conf.paths.dist
      ]
    },
    open: false,
    proxy: 'https://qstuff.herokuapp.com:5000'
  };
};
