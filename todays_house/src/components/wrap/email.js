const nodeMailer = require('nodemailer');

const email = {
    service: 'Naver',
    host: 'smtp.naver.com',
    port: 465,
    auth: {
    user: 'seulki4994@naver.com',
    pass: 'tmfrl4994'
    }
}

const send = async(data) =>{
    nodeMailer.createTransport(email).sendMail(data, function(error, info){
      if(error) {
        console.log(error);
      }
      else {
        console.log(info);
        return info.response;
      }
    });
};

const content = {
  from: "seulki4994@naver.com",
  to: "seulki4994@naver.com",
  subject: "감사합니다^^^^^^^^^^^^^^.",
  text : "풀스택 - 오늘의집 이메일 인증 버튼 구현 "
}

send(content);