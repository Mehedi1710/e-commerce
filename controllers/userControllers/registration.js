const createHttpError = require('http-errors');
const otpGenerator = require('otp-generator')
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
    };

    const token = jwt.sign({ email }, 'shhhhh', { expiresIn: '20m' });
    const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false });

    await registerService(email, token, otp);

    const user = {firstname, lastname, email, password, addressOne, telephone, city, division, district, postcode}
    const userList = await User.create(user);
    res.status(200).json({
      message: 'Registration successfully Done',
      payload: {token, userList, otp},
    });
  } catch (error) {
    next(error);
  }
};


const AllUsers = async(req, res, next) => {
  try {
    const data = await User.find({});
    res.send(data);
  } catch (error) {
    next(error);
  }
}

module.exports = {registration, AllUsers};
