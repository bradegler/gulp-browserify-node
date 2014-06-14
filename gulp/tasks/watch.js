'use strict';

var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['build'], function() {
    gulp.watch([config.client + '/**/*.js', config.client + '/**/*.hbs'], ['browserify']);
    gulp.watch([config.client + '/**/*.scss'], ['sassify']);
    gulp.watch([config.client + '/**/*.html', config.client + '/**/*.css', config.client + '/img/**/*'], ['copy']);
});
