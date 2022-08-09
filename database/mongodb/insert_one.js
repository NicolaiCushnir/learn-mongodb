var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("anime");
  var data = { name: "Shikamaru Nara", clan: "Nara Clan", address: "Highway 37" };
  dbo.collection("character").insertOne(data, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});