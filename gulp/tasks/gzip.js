'use strict';

var gulp = require('gulp');
var gzip = require('gulp-gzip');
var config = require('../config');

gulp.task('_gzip-css', ['sassify'], function() {
    return gulp.src([config.dist + '/css/**/*.css'])
        .pipe(gzip())
        .pipe(gulp.dest(config.dist + '/css'));
});

gulp.task('_gzip-js', ['uglify'], function() {
    return gulp.src([config.dist + '/js/**/*.js'])
        .pipe(gzip())
        .pipe(gulp.dest(config.dist + '/js'));
});

gulp.task('_gzip-imgs', ['copy'], function() {
    return gulp.src([config.dist + '/img/**/*'])
        .pipe(gzip())
        .pipe(gulp.dest(config.dist + '/img'));
});

gulp.task('gzip', ['copy', '_gzip-css', '_gzip-js', '_gzip-imgs']);