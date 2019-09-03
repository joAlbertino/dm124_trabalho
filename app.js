/**
 * 
 */

const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));
app.use(express.json());

module.exports = app;

//const morgan = require('morgan');
//app.use('/api/tasks', require('./api/routes/tasks'));
//app.use(require('./api/middleware/not-found'));
//const app = express();