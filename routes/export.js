var format = require('util').format;
var path = require('path'); 
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var anime = require('./public/js/anime.js');
var routes = require('./routes/links.js');
const express_handlebars = require('express-handlebars');
var http = require('http');
var fs = require('fs');