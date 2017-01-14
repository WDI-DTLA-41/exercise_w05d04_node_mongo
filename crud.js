var mongo = require('mongodb').MongoClient;
var assert = require('assert');
// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/people';

// CREATE
mongo.connect(url, function(err, db) {
  assert.equal(null, err);
  // https://mongodb.github.io/node-mongodb-native/markdown-docs/insert.html
  db.collection('users').insert({name: 'Howard'}, function(err, result){
    assert.equal(null, err);
    db.close();
    console.log(result);
  });
});

// READ
mongo.connect(url, function(err, db) {
  assert.equal(null, err);
  // https://mongodb.github.io/node-mongodb-native/markdown-docs/insert.html#find
  db.collection('users').find({name: 'Howard'}).toArray(function(err, result){
    db.close();
    console.log(result);
  });
});

// UPDATE
mongo.connect(url, function(err, db) {
  assert.equal(null, err);
  // https://mongodb.github.io/node-mongodb-native/markdown-docs/insert.html#update
  db.collection('users').update({name: 'Howard'}, {$set: {age: 01}}, function(err, result) {
    assert.equal(null, err);
    db.close();
    console.log(result);
  });
});

// DELETE
mongo.connect(url, function(err, db) {
  assert.equal(null, err);
  db.collection('users').findAndRemove({name: 'Howard'}, function(err, result) {
    assert.equal(null, err);
    db.close();
    console.log(result);
  })
});
