
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/anime";
MongoClient.connect(url, function(err, db){
	if(err) throw err;
	console.log("database was created : ");
	db.close();
});