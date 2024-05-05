const express = require('express');
const categoryHelper = require('../helpers/categoryHelper');
const merchantHelper = require('../helpers/merchantHelper');
const productHelper = require('../helpers/productHelper');

const productRouter = express.Router();

productRouter.use('/product', productHelper);
productRouter.use('/variant', productHelper);


module.exports = productRouter;