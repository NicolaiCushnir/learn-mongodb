var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/27017/";

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db('anime');
	var data = [
		{ personage: "Uciha Sasuke", village: "hidden in leaf", rank: "Genin" },
		{ personage: "Naruto Uzumaki", village: "hidden in leaf", rank: "Hokage" },
		{ personage: "Sabaku no Gaara", village: "hidden in sand", rank: "Hokage" },
		{ personage: "Shikamaro Naro", village: "hidden in sand", rank: "Genin" },
		{ personage: "Uciha Itachi", village: "none", rank: "criminal" }
	];

	dbo.collection('character').insertMany(data, function(err, res){
		if(err) throw err;
		console.log("Number of documents inserted: " + res.insertedCount);
		db.close();
	});
});