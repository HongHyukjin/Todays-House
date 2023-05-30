const nodeMailer = require('nodemailer')


module.exports = async (name, email, subject, message) => {
  const transporter = await nodeMailer.createTransport({
    service: 'Naver',
    host: 'smtp.naver.com',
    port: 465,
    secure: false,
    auth: {
        user: 'seulki4994@naver.com',
        pass: 'tmfrl4994'
    }
  });

  const mailOption = {
    from: name,
    to: process.env.REACT_APP_GMAIL_ADDRESS,
    subject: subject,
    html: 
      `You got a message from <br /> 
      Email : ${email} <br />
      Name: ${name} <br />
      Message: ${message}`,
  };

  try {
    await transporter.sendMail(mailOption);
    return "success"
  } catch (error) {
    return error
  }
}