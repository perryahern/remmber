const express = require('express');

const User = require('./userModel.js');
const statusCodes = require('../common/statusCodes.js');

const userRouter = express.Router();

module.exports = userRouter;