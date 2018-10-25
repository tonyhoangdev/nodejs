var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'htm.doc01@gmail.com',
    pass: 'Htmdoc01'
  }
});

var mailOptions = {
  from: 'htm.dev304@gmail.com',
  to: 'htm.dev304@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});