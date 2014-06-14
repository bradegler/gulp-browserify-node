'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var notify = require('gulp-notify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var config = require('../config');

gulp.task('browserify', function() {
    return browserify({
            insertGlobals: true,
            extensions: ['.hbs'],
            entries: [config.client + '/js/app.js']
        })
        .bundle({
            debug: !gutil.env.production
        })
        .on('error', function() {
            notify.onError({
                title: 'Compile Error',
                message: '<%= error.message %>'
            }).apply(this, arguments);
            this.emit('end');
        })
        .pipe(source('app.js'))
        .pipe(gulp.dest(config.dist + '/js'));
});