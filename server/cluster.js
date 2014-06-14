'use strict';

var main = require('./main');
var http = require('http');
var app = main.express();
var Cluster = require('cluster2');
var winston = require('winston');

var server = http.createServer(app);
var cluster = new Cluster({
  cluster: true,
  port: app.get('port'),
  pids: '../pids/'
});
cluster.listen(function(cb) {
  winston.info('Express cluster listening on port ' + app.get('port') + ' pid=' + process.pid);
  cb(server);
});