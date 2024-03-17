const express = require('express');
const userHelper = require('../helpers/userHelper');

const userRouter = express.Router();

userRouter.use('/authentication', userHelper);

module.exports = userRouter;