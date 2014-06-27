'use strict';

/* global document */

var $ = require('jquery-browserify');
var homeTemplate = require('../hbs/home.hbs');

$(document).ready(function() {
    $.get('/api/home', function(data) {
        console.log(data);
        $('#content').html(homeTemplate(data));
    });
});