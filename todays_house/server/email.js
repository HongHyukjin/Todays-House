const express = require("express");
const app = express();
const nodeMailer = require('nodemailer');
const port = 9000;
const cors = require("cors");
const bodyParser = require("body-parser");


// 노드 헤더 CORS 크로스오리진 실행
app.use(cors());

// 리액트에서 보내온 데이터 바디파서 JSON 형식사용
app.use(bodyParser.json());


// 네이버 메일서버(SMTP) 
const email = {
  service: 'Naver',
  host: 'smtp.naver.com',
  port: 587,
  auth: {
      user: 'seulki4994@naver.com',
      pass: 'tmfrl4994'
  }
};

// 테스트 겟방식
app.get("/", (req, res) => {
  res.send("노드 서버 실행 화면 출력 테스트!!!!!");
});


// 리액트 폼메일 전송 양방향 통신
app.post("/mail", (req, res) => {
  const mailto = req.body.mailto;
  const subject = req.body.subject;
  const text = req.body.text;  
  res.send({"이메일": mailto, "제목": subject, "인증코드번호": text})

  // 리액트 폼 데이터 받아서
  const content = {
      from: 'seulki4994@naver.com',
      to: mailto,
      subject: subject,
      text: text
  }
  // 아래 메일 송신 메서드에 전달
  send(content);
});


// 메일 송신(SMTP)
const send = (data) => {
  nodeMailer.createTransport(email).sendMail(data, function (error, info) {
      if (error) {
          console.log(error);
      } else {
          console.log(info);
          return info.response;
      }
  });
};


// 포트 및 노드 서버 페이지 확인
app.listen(port, () => {
  console.log(`노드 사이트 클릭 하세용!!!  =>  http://localhost:${port}`);
});