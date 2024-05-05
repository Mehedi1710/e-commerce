const express = require('express');
const merchantHelper = require('../helpers/merchantHelper');

const merchantRouter = express.Router();

merchantRouter.use('/merchant', merchantHelper);
merchantRouter.use('/store', merchantHelper);


module.exports = merchantRouter;