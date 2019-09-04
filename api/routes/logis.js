const express = require('express');
const router = express.Router();

//const checkAuth = require('../middleware/check-auth');
//const notFound = require('../middleware/not-found');
//let db = {};
//let sequence = 0;

router.post('/',  (request, response) => {
    
    response.json(request.body).status(201).end();
});

router.get('/', (request, response) => {
  response.status(200).end();
});

router.get('/:logId', (request, response) => {
  
});

router.patch('/:logId',  (request, response) => {
    response.status(200).end();
});

router.delete('/:logId', (request, response) => {
    response.status(200).end();
});

module.exports = router;