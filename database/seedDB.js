const MongoClient = require('mongodb').MongoClient;
const dataArray = require('./data/exapmleData/starterSuperHeroData');


const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('superHero');
  // Insert some documents
  collection.insertMany(dataArray, function(err, result) {
    if(err){
      console.log("seeding error",err)
    }
    console.log("Inserted documents into the collection");
    callback(result);
  });
}


MongoClient.connect('mongodb://localhost/').then((client) => {
  const db = client.db('marvel');
  insertDocuments(db, function() {
    client.close();
  });
});


