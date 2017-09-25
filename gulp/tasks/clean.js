var gulp = require('gulp');
var config = require('../config');
var shell = require('gulp-shell');

gulp.task('clean', shell.task(['rm -rf ' + config.buildPath]));
