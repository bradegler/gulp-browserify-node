'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');

var config = require('../config');

gulp.task('uglify', ['browserify'], function() {
    return gulp.src([config.dist + '/js/app.js'])
        .pipe(gulpif(gutil.env.production, uglify({
            mangle: {
                except: ['require', 'export', '$super']
            }
        })))
        .pipe(gulp.dest('./dist/js'));
});
