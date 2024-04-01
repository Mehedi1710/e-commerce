const express = require('express');
const registration = require('../controllers/userControllers/registration');
const userActive = require('../controllers/userControllers/userActive');

const userHelper = express.Router();

userHelper.post('/register', registration);
userHelper.post('/active', userActive);

module.exports = userHelper;