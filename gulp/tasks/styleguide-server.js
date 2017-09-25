var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('styleguide-server', ['build'], function() {
  gulp.start('styleguide');

  connect.server({
    root: './styleguide',
    port: 8888
  });
});
