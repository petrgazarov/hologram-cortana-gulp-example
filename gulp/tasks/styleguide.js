var gulp = require('gulp');
var connect = require('gulp-connect');
var hologram = require('gulp-hologram');
var shell = require('gulp-shell');
var config = require('../config');

gulp.task('styleguide', function() {
  gulp.src('hologram_config.yml')
      .pipe(hologram());
});
