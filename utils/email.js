// utils/email.js

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.elasticemail.com',
  port: 2525,
  auth: {
    user: process.env.REACT_APP_ELASTIC_API_KEY,
    pass: '', // Leave this empty
  },
});

async function sendEmail(formData) {
  const mailOptions = {
    from: 'linkrook16@gmail.com',
    to: 'mrook1979@hotmail.com',
    subject: 'Tattoo Enquiry',
    text: 'A new tattoo enquiry: ' + formData.tattooEnquiry,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

module.exports = sendEmail;
