* Contect local MongoDB.

```js
MongoClient.connect(url, function(err, db){
	if(err) throw err;

	console.log("database was created : ");
	db.close();
});
```