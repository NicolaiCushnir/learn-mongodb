var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("anime");
  var myquery = { address: "Valley 345" };
  var new_values = { $set: {name: "Mickey", address: "Canyon 123" } };
  dbo.collection("customers").updateOne(myquery, new_values, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});