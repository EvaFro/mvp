
const MongoClient = require('mongodb').MongoClient;
const _ = require('ramda');
const dataArray = require('./exapmleData/starterSuperHeroData');



function seedDB(baseID) {
  MongoClient.connect('mongodb://localhost/').then((client) => {
    const db = client.db('marvel');
    const collection = db.collection('superHero');

        dataArray.forEach((obj) => {
          collection.insert(obj);
        })
    }
  });
}