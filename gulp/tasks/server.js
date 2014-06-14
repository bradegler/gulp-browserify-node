'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var nodemon = require('gulp-nodemon');
var config = require('../config');

gulp.task('server', function() {
    return nodemon({
        script: config.server + (gutil.env.production ? '/cluster.js' : '/server.js'),
        ext: 'js',
        ignore: ['client', 'dist'],
        env: {
            PORT: gutil.env.port ? gutil.env.port : gutil.env.production ? 3005 : 3000
        }
    })
    .on('change', ['lint']);
});