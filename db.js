const MongoClient = require('mongoose');

const mongo_uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/yotpo-metadata' ;

MongoClient.connect(mongo_uri, { useNewUrlParser: true }, function(err){
  if (err){
    console.log("Cannot connect to database", err);

  }else{
    console.log('Database connected.');
  }
  const db = MongoClient.connection ;
});

module.exports = MongoClient;