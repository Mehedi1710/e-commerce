const express = require('express');
const {registration, AllUsers} = require('../controllers/userControllers/registration');
const userActive = require('../controllers/userControllers/userActive');

const userHelper = express.Router();

userHelper.post('/register', registration);
userHelper.post('/active', userActive);
userHelper.get('/allUsers', AllUsers)

module.exports = userHelper;