const express = require('express');
const router = express.Router();
const database = require('./database');
const checkAuth = require('../middleware/check-auth');
//const notFound = require('../middleware/not-found');
//let db = {};
//let sequence = 0;


router.post('/',  checkAuth ,(request, response) => {
    database.connect(err => {
     // const collection = database.db("test").collection("devices").insert(request.body);
        startInsert(database)
        .then(id => insertNewLogi(database,id , request.body))
        .then(object => response.json(object).status(201).end())
       // .then(database.close())
        .catch(err => response.json("SOMETHING WENT WRONG : "+err).status(500).end());
 
    });
   
});

router.get('/',checkAuth , (request, response) => {

    database.connect(err => {
        const collection  = database.db("test").collection("devices").find().toArray();
        collection
        .then(logi => logi.length > 0?  response.json(logi).status(200).end() : response.status(204).end())
        .catch(err => response.json("SOMETHING WENT WRONG : "+err).status(500).end());
    
    });
  
});

router.get('/:logId',checkAuth , (request, response) => {
    const logId = request.params.logId;
    database.connect(err => {
      getById(database,Number(logId))
      .then(logi => logi != null ?  response.json(logi).status(200).end() : response.status(204).end())
      .catch(err => response.status(500).end("SOMETHING WENT WRONG : "+err));
    });
});

router.patch('/:logId',checkAuth ,  (request, response) => {
    const logId = request.params.logId;
    database.connect(err => {
        updateById(database,Number(logId),request.body)
        .then(del => Number(del.result.n) > 0 ? response.json(request.body).status(200).end() : response.json().status(204).end())
        .catch(err => response.status(500).end("SOMETHING WENT WRONG : "+err));
      });
});

router.delete('/:logId',checkAuth , (request, response) => {
    const logId = request.params.logId;
    database.connect(err => {
        removeById(database,Number(logId))
        .then(del => Number(del.result.n) > 0 ? response.json().status(200).end() : response.json().status(204).end())
        .catch(err => response.status(500).end("SOMETHING WENT WRONG : "+err));
      });
});


function startInsert(con){
    var counter  = con.db("test").collection("devices").estimatedDocumentCount();
    return counter; 
}

function insertNewLogi(con , id , newObject){
    newObject.id = id +1;
    con.db("test").collection("devices").insertOne(newObject);
    return getById(con,newObject.id);
}

function getById(con , id){
    console.log(id);
    return con.db("test").collection("devices").findOne({id:id});
}

function removeById(con , id){
    return con.db("test").collection("devices").removeOne({id:id});
}

function updateById(con , id , objectNew){
    return con.db("test").collection("devices").removeOne({id:id} , {objectNew});
}
module.exports = router;