require('dotenv').config();

var MongoClient = require('mongodb').MongoClient;
var url = process.env.MDB_CREDENTIALS_AND_URL;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(process.env.MDB_COLLECTION);
  var myquery = { address: "Valley 345" };
  var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
