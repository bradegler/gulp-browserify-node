'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var bourbon = require('node-bourbon').includePaths;
var neat = require('node-neat').includePaths;
var config = require('../config');

gulp.task('sassify', function() {
    return gulp.src(config.client + '/scss/*.scss')
        .pipe(concat('main.scss'))
        .pipe(sass({
            outputStyle: gutil.env.production ? 'compressed' : 'expanded',
            includePaths: [config.client + '/scss'].concat(bourbon).concat(neat),
            errLogToConsole: gutil.env.watch
        }))
        .pipe(gulp.dest(config.dist + '/css'));
});