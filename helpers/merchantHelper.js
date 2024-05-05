const express = require('express');
const {createMerchant, storeController} = require('../controllers/productController/MerchantController');

const merchantHelper = express.Router();

merchantHelper.post('/becomemerchant', createMerchant);
merchantHelper.get('/findStore', storeController)

module.exports = merchantHelper;
