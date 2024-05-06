const express = require('express');
const userHelper = require('../middlewares/userHelper');

const userRouter = express.Router();

userRouter.use('/authentication', userHelper);
userRouter.use('/users', userHelper);

module.exports = userRouter;