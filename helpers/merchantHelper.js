const express = require('express');
const createMerchant = require('../controllers/productController/MerchantController');
const createProduct = require('../controllers/productController/product');
const { uploadUserImage } = require('../controllers/productController/upload');


const merchantHelper = express.Router();

merchantHelper.post('/becomemerchant/:id', createMerchant);
merchantHelper.post('/createProduct', uploadUserImage.single('image'), createProduct);

module.exports = merchantHelper;
