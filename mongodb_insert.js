require('dotenv').config();

var MongoClient = require('mongodb').MongoClient;
var url = process.env.MDB_CREDENTIALS_AND_URL;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(process.env.MDB_COLL);
  var myobj = { name: "A3 Company Inc", address: "Sofia 1000" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
