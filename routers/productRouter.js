const express = require('express');
const categoryHelper = require('../helpers/categoryHelper');

const categoryRouter = express.Router();

categoryRouter.use('/category', categoryHelper)


module.exports = categoryRouter;