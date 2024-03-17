const express = require('express');
const category = require('../controllers/categoryController/category');
const subCategory = require('../controllers/categoryController/subCategory');
const categoryStatus = require('../controllers/categoryController/categoryStatus');

const categoryHelper = express.Router();

categoryHelper.post('/create-category', category);
categoryHelper.post('/create-subcategory/:id', subCategory);
categoryHelper.post('/categoryStatus/', categoryStatus);

module.exports = categoryHelper;
