const express = require('express');

const Memory = require('./memoryModel.js');
const statusCodes = require('../common/statusCodes.js');

const memoryRouter = express.Router();

module.exports = memoryRouter;