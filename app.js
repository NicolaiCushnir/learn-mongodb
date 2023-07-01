var express = require('express');
var app = express();
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/anime";
const port = 1234;

app.get('/', function(req, res) {
	res.send("Hi! MongoDB");
});

app.listen(port, function() {
	console.log('Server running on the port ' + port);
});

