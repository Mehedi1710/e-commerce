const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dd58k4val',
  api_key: '745135723847942',
  api_secret: 'cKzywoIKJqCJo74d9ArdIx4m4tU',
});

module.exports = cloudinary;
