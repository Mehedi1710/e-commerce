const express = require('express');
const categoryHelper = require('../helpers/categoryHelper');
const merchantHelper = require('../helpers/merchantHelper');

const productRouter = express.Router();

productRouter.use('/product', merchantHelper);


module.exports = productRouter;