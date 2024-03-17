const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, 'first name is required'],
    },
    lastname: {
      type: String,
      required: [true, 'last name is required'],
    },
    email: {
      type: String,
      trim: true,
      required: [true, 'email is required'],
    },
    password: {
      type: String,
      trim: true,
      required: [true, 'last name is required'],
    },
    addressOne: {
      type: String,
      required: [true, 'address1 is required'],
    },
    addressTwo: {
      type: String,
    },
    telephone: {
      type: String,
      required: [true, 'telephone is required']
    },
    city: {
      type: String,
      required: [true, 'City is required'],
    },
    division: {
      type: String,
      required: [true, 'Division is required'],
    },
    district: {
      type: String,
      required: [true, 'District is required'],
    },
    postcode: {
      type: String,
      required: [true, 'postcode is required'],
    },
  },
  { timestamps: true }
);

const User = mongoose.model('UserList', userSchema);

module.exports = User;
