require('dotenv').config();

var MongoClient = require('mongodb').MongoClient;
var url = process.env.MDB_CREDENTIALS_AND_URL;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(process.env.MDB_COLLECTION);
  dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
