const nodeMailer = require('nodemailer')


module.exports = async (name, email, subject, message) => {
  const transporter = await nodeMailer.createTransport({
    service: 'Naver',
    host: 'smtp.naver.com',
    port: 587,
    secure: false,
    auth: {
        user: 'seulki4994@naver.com',
        pass: 'tmfrl4994'
    }
  });

  const mailOption = {
    from: name,
    to: email,
    subject: subject,
    text: 
      `선종 메시지 텍스트 전송,
      이메일 : ${email},
      이름: ${name},
      메일내용: ${message}`,
  };

  try {
    await transporter.sendMail(mailOption);
    return mailOption
  } catch (error) {
    return error
  }
}