const express = require('express');
const {
  category,
  getCategory,
} = require('../controllers/categoryController/category');
const {
  subCategory,
  getSubCategory,
} = require('../controllers/categoryController/subCategory');
const {
  categoryStatus,
  subCategoryStatus,
} = require('../controllers/categoryController/categoryStatus');

const categoryHelper = express.Router();

categoryHelper.post('/create-category', category);
categoryHelper.post('/create-subcategory', subCategory);
categoryHelper.post('/categoryStatus', categoryStatus);
categoryHelper.post('/subCategoryStatus', subCategoryStatus);
categoryHelper.get('/getCategory', getCategory);
categoryHelper.get('/getSubCategory', getSubCategory);

module.exports = categoryHelper;
