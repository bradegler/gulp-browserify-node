'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var config = require('../config');

gulp.task('lint-client', function(){
    return gulp.src([config.client + '/**/*.js', '!' + config.client + '/lib/**/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
    });

gulp.task('lint-server', function(){
    return gulp.src([config.server + '/**/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
    });

gulp.task('lint-test', function(){
    return gulp.src([config.test + '/**/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
    });

gulp.task('lint-gulp', function(){
    return gulp.src(['gulpfile.js', 'gulp/**/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
    });


gulp.task('lint', ['lint-client', 'lint-server', 'lint-test', 'lint-gulp']);