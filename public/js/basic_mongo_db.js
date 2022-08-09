var mongo = require('mongodb').MongoClient;// Connection URL
var url = 'mongodb://localhost:27017/cushnir';

function createDB() {
	mongo.connect(url, function(err, db) {
		if (err) throw err;

		console.log("Database created!!!!");
		db.close();
	});
}

function createCollection(name) {
	mongo.connect(url, function(err, db) {
		if (err) throw err;

		db.createCollection(name, function(err, res) {
			if (err) throw err;

			console.log("Table created!!!!");
			db.close();
		});
	});
}


function insertObject(table, obj) {
	mongo.connect(url, function(err, db) {
		if (err) throw err;

		db.collection(table).insertOne(obj, function(err, res) {
			if (err) throw err;

			console.log("Object inserted!!!!");
			db.close();
		});
	});
}


function findFirstObject(table) {
	mongo.connect(url, function(err, db) {
		if (err) throw err;

		db.collection(table).findOne({}, function(err, res) {
			if (err) throw err;

			for (var p in res) {
				console.log(p + " : " + res[p]);
			}

			db.close();
		});
	});
}

findFirstObject('anime');
