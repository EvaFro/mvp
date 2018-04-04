// var seeder = require('mongoose-seed');
 
// // Connect to MongoDB via Mongoose
// seeder.connect('mongodb://localhost/marvel', function() {
 
//   // Load Mongoose models
//   seeder.loadModels([
//     'data/eventModel.js',
//     'data/superHeroModel.js'
//   ]);
 
//   // Clear specified collections
//   seeder.clearModels(['Event', 'SuperHero'], function() {
 
//     // Callback to populate DB once collections have been cleared
//     seeder.populateModels(data, function() {
//       seeder.disconnect();
//     });
 
//   });
// });

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
    // assert.equal(err, null);
    // assert.equal(3, result.result.n);
    // assert.equal(3, result.ops.length);
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


