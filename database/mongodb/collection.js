
// Collection is analogic at table(s) in Postgres.
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// We only created bellow only one table wth name : rock-bands
MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db('anime');
	dbo.createCollection('character', function(err, res){
		if(err) throw err;
		console.log('Collection created!');
		db.close();
	});	
});

