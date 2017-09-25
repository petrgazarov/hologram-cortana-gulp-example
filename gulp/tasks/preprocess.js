var gulp         = require('gulp');
var ext          = require('gulp-ext');
var plumber      = require('gulp-plumber');
var stylus       = require('gulp-stylus');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var fingerprint  = require('gulp-fingerprint');
var handleErrors = require('../util/handleErrors');
var config       = require('../config');
var bootstrap = require('bootstrap-styl');

gulp.task('preprocess', function () {
  return gulp.src([config.stylus.srcFile])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(stylus({outputStyle: 'compressed', use: bootstrap()}))
    .on('error', handleErrors)
    .pipe(autoprefixer({ browsers: ['last 2 versions', 'Safari >= 8'] }))
    .pipe(gulp.dest(config.stylus.dest))
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest(config.stylus.dest));
});
