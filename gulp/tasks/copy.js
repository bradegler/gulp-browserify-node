'use strict';

var gulp = require('gulp');
var config = require('../config');

gulp.task('_copy-normalize', function() {
    return gulp.src('./node_modules/normalize.css/normalize.css')
        .pipe(gulp.dest(config.dist + '/css'));
});

gulp.task('_copy-lib-css', function() {
    return gulp.src(config.client + '/lib/**/*.css')
        .pipe(gulp.dest(config.dist + '/css'));
});

gulp.task('_copy-lib-js', function() {
    return gulp.src(config.client + '/lib/**/*.js')
        .pipe(gulp.dest(config.dist + '/js'));
});

gulp.task('_copy-html', function() {
    return gulp.src(config.client + '/**/*.html')
        .pipe(gulp.dest(config.dist));
});

gulp.task('_copy-imgs', function() {
    return gulp.src(config.client + '/img/**/*')
        .pipe(gulp.dest(config.dist + '/img'));
});


gulp.task('copy', [
    '_copy-normalize',
    '_copy-html',
    '_copy-imgs',
    '_copy-lib-css',
    '_copy-lib-js'
]);
