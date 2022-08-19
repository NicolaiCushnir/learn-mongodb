MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("anime");
  dbo.collection("character").find().limit(5).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});