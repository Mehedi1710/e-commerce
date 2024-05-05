const express = require('express');
const { createProduct, findProduct, deleteProduct } = require('../controllers/productController/product');
const { uploadUserImage } = require('../controllers/productController/upload');
const { createVariant } = require('../controllers/productController/variantController');

const productHelper = express.Router();



productHelper.post('/createProduct', createProduct);
productHelper.post('/deleteProduct', deleteProduct);
productHelper.post('/createVariant', uploadUserImage.single('image'), createVariant);
productHelper.get('/findProduct', findProduct);

module.exports = productHelper;