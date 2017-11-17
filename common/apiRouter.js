const express = require('express');

const userRouter = require('../users/userRouter.js');
const memoryRouter = require('../memories/memoryRouter.js');

const api = express.Router();

api.use('/users', userRouter);
api.use('/memories', memoryRouter);

module.exports = api;