'use strict';

var gutil = require('gulp-util');

require('./gulp');

gutil.log('Environment', gutil.colors.blue(gutil.env.production ? 'Production' : 'Development'));
