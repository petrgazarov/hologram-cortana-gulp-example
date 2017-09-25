var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', function() {
  gulp.start('build')
  gulp.start('styleguide-server')

  gulp.watch(config.sourcePath + '/**/*', ['preprocess', 'styleguide']);
});
