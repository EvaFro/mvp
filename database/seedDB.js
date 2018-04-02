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
const dataArray = require('./exapmleData/starterSuperHeroData');

function seedDB() {
  MongoClient.connect('mongodb://localhost/').then((client) => {
    const db = client.db('marvel');
    const collection = db.collection('superHero');
    dataArray.forEach((obj) => {
      collection.insert(obj);
    })
  });
}

seedDB();