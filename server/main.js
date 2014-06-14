'use strict';

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var bytes = require('bytes');

var path = require('path');
var fs = require('fs');

var app = express();
var router = express.Router();

app.set('port', process.env.PORT || 3000);
app.use(logger(
    function(tokens, req, res) {
        var status = res.statusCode,
            len = parseInt(res.getHeader('Content-Length'), 10),
            color = 32;
        var remoteAddress;

        if (req.ip) {
            remoteAddress = req.ip;
        } else if (req._remoteAddress) {
            remoteAddress = req._remoteAddress;
        } else {
            var sock = req.socket;
            if (sock.socket) {
                remoteAddress = sock.socket.remoteAddress;
            } else {
                return sock.remoteAddress;
            }
        }

        if (status >= 500) color = 31;
        else if (status >= 400) color = 33;
        else if (status >= 300) color = 36;

        len = isNaN(len) ? '' : len = ' - ' + bytes(len);


        return '\x1b[90m' + remoteAddress + ' ' + req.method + ' ' + (req.originalUrl || req.url) + ' ' + '\x1b[' + color + 'm' + res.statusCode + ' \x1b[90m' + (new Date() - req._startTime) + 'ms' + len + '\x1b[0m';
    }
));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({
    secret: 'e8df3e258e5249d9b7235365f0bc6a99',
    key: 'sid',
    cookie: {
        secure: true
    }
}));
app.use(express.static(path.join(__dirname, '../dist')));
app.use(router);
app.use(require('errorhandler'));

fs.readdirSync(path.join(__dirname, '/routes')).forEach(function(file) {
    if (file.substr(-3) == '.js') {
        var route = require('./routes/' + file);
        route.load('/api', router);
    }
});

exports.express = function() {
    return app;
};