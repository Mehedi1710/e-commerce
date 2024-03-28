const express = require('express');
const createMerchant = require('../controllers/MerchantController');

const merchantHelper = express.Router();

merchantHelper.post('/becomemerchant/:id', createMerchant);

module.exports = merchantHelper;
