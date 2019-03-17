# load .env file with the credentials
require('dotenv').config();

var MongoClient = require('mongodb').MongoClient;
var url = process.env.MDB_CREDENTIALS_AND_URL;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
