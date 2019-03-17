require('dotenv').config();

var MongoClient = require('mongodb').MongoClient;
var url = process.env.MDB_CREDENTIALS_AND_URL;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(process.env.MDB_COLLECTION);
  // Update all documents where the name starts with the letter "S"
  var myquery = { address: /^S/ };
  var newvalues = {$set: {name: "Minnie"} };
  dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });
});
