const createHttpError = require('http-errors');
const User = require('../../models/userModel');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const registerService = require('../../services/registerSevice');

const registration = async (req, res, next) => {
  try {
    const { firstname, lastname, email, password, addressOne, telephone, city, division, district, postcode } = req.body;
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      throw createHttpError(
        400,
        'user already exists with this email. Please verify your email and login'
      );
    }

    const token = jwt.sign({ email }, 'shhhhh', { expiresIn: '20m' });

    await registerService(email, token);

    const user = {firstname, lastname, email, password, addressOne, telephone, city, division, district, postcode}
    const userList = await User.create(user);
    res.status(200).json({
      message: 'Registration successfully Done',
      payload: {token, userList},
    });
  } catch (error) {
    next(error);
  }
};

module.exports = registration;
