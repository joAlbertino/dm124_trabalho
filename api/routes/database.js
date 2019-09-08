const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dm124usersystem:teste123@dm124db-w1fwk.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
const database =  client;


module.exports = database;
