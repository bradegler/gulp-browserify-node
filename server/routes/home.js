'use strict';

var express = require('express');
var winston = require('winston');

var home = {
  get: function(req, res) {
    winston.info('home:get');
    res.json(200, { message: "Hello World" });
  }
};

module.exports.load = function(baseURI, app) {
  var router = express.Router();

  router.get('/', home.get);

  app.use(baseURI + '/home', router);
};
