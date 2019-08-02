var nodemailer = require('nodemailer');


class Email {
  constructor(){
    this.transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASS
        }
      }),
    this.mailOptions = {from: process.env.EMAIL, subject: 'HVAC thank you reply'}
  }

  to(mailOptions){
    var keys = Object.keys(mailOptions);
    keys.forEach(key =>{
      this.mailOptions[key] = mailOptions[key]
    })
    return this;
  }

  send(){
    this.transporter.sendMail(this.mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
}

module.exports = Email;
