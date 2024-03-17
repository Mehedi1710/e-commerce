const jwt = require('jsonwebtoken');
const User = require('../../models/userModel');

const userActive = async (req, res, next) => {
  try {
    const { token } = req.body;
    const decoded = jwt.verify(token, 'shhhhh');
    const emailExists = await User.findOneAndUpdate({ email: decoded.email });
    console.log(emailExists);

    res.status(200).json({
      message: 'User verify successfully done',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = userActive;
