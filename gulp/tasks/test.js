'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var config = require('../config');

gulp.task('test', ['lint-test'], function() {
    return gulp.src(config.test + '/**/*.js')
        .pipe(mocha({
            reporter: 'list'
        }));
});