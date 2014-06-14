'use strict';

var main = require('./main');
var http = require('http');
var app = main.express();
var winston = require('winston');

http.createServer(app).listen(app.get('port'), function() {
    winston.info('Single express server listening on port ' + app.get('port'));
});