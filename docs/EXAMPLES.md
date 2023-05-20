### EXAMPLES
Now try it. Open your console and go to your script which save it and run.

```js
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'myproject';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
	assert.equal(null, err);
	console.log("Connected successfully to server");
	const db = client.db(dbName);
	
	const insertDocuments = function(db, callback) {
		
		// Get the documents collection
		const collection = db.collection('documents');
		
		// Insert some documents
		collection.insertMany([
			{a : 1}, {a : 2}, {a : 3}
		], function(err, result) {
		assert.equal(err, null);
		assert.equal(3, result.result.n);
		assert.equal(3, result.ops.length);
		console.log("Inserted 3 documents into the collection");
	    callback(result);
	  });
	}
 
	insertDocuments(db, function() {
	  client.close();
	});
});
```

* 

```js
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
```