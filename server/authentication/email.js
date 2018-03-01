const nodemailer = require("nodemailer");

const newUserEmail = (data, userPassword) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "courtauldvolunteerplatform@gmail.com",
      pass: "FACcourtauld1"
    }
  });

  const mailOptions = {
    from: "courtauldvolunteerplatform@gmail.com",
    to: data.email,
    subject: "Your volunteer platform login",
    html: `<p>Dear ${
      data.first_name
    }</p><p>Thank you for recently joining The Courtauld Institute of Art as a volunteer.</p>
      We have a <a href="https://courtauld.herokuapp.com">volunteer platform</a> that our volunteers and staff use to share updates and discoveries. On the platform, you can also see a directory of all the volunteers we currently have. Your log in details for the platform are below: </p><p>Email: ${
  data.email
}</p><p>Password: ${userPassword}</p>
<p>The app is available at <a href="https://courtauld.herokuapp.com">https://courtauld.herokuapp.com</a>. Once you are logged in, you can reset your password.</p></p><p>Please do not reply to this email. If you need to get in contact with us, contact a member of the team directly. </p><p>Thank you.</p><p>The Courtauld Institute of Art team.`
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
