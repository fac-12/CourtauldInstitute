const nodemailer = require("nodemailer");

const newUserEmail = (data, userPassword) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tutortuteeconnect@gmail.com",
      pass: "asdfg123456789"
    }
  });

  const mailOptions = {
    from: "tutortuteeconnect@gmail.com",
    to: data.email,
    subject: "Your volunteer platform login",
    html: `<p>Dear ${
      data.first_name
    }</p><p>Your log in details are below.</p><p>Email: ${
      data.email
    }</p><p>Password: ${userPassword}</p><p>Thanks</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};
module.exports = newUserEmail;
