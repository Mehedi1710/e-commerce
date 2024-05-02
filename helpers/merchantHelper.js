const express = require('express');
const createMerchant = require('../controllers/productController/MerchantController');
const {createProduct, findProduct} = require('../controllers/productController/product');
const { uploadUserImage } = require('../controllers/productController/upload');
const {createVariant} = require('../controllers/productController/variantController');

const merchantHelper = express.Router();

merchantHelper.post('/becomemerchant', createMerchant);
merchantHelper.post('/createProduct', createProduct);
merchantHelper.post('/createVariant', uploadUserImage.single('image'), createVariant);
merchantHelper.get('/findProduct', findProduct)

module.exports = merchantHelper;
