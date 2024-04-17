const nodemailer = require('nodemailer');
const appPassword = 'mvog ugwn srmj xuzf';
const username = 'mh1710341714@gmail.com';

const registerService = async (email, token, otp) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: username,
          pass: appPassword,
        },
      });
  
      const info = await transporter.sendMail({
        from: 'Apple.inc',
        to: email, // list of receivers
        subject: 'Hello ✔', // Subject line
        html: `<b>Hello world?</b>. Please click this token:${token}. And this is your OTP CODE:${otp} `, // html body
      });
};

module.exports = registerService;
