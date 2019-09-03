/**
 * 
 */
const http = require('http');
const app = require('./app');
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

http.createServer(app)
  .listen(port, () => {
    console.log(`Server start up on http://${host}:${port}`);
});