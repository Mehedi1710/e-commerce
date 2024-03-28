const express = require('express');
const createMerchant = require('../controllers/MerchantController');

const merchantHelper = express.Router();

merchantHelper.post('/create-category', createMerchant)

module.exports = merchantHelper;