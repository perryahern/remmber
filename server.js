const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const apiRouter = require('./common/apiRouter.js');

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.use('/api', apiRouter);

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost:27017/users', { useMongoClient: true})
  .then(function(db) {
    console.log('All your databases are belong to us!');
    server.listen(3223, function() {
      console.log('Server up and running on port 3223!');
    });
  })
  .catch(function(err) {
    console.log('Database connection failed.', err.message);
  });