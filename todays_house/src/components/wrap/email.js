// 텍스트버전 

// const nodeMailer = require('nodemailer');

// const email = {
//     service: 'Naver',
//     host: 'smtp.naver.com',
//     port: 465,
//     auth: {
//     user: 'seulki4994@naver.com',
//     pass: 'tmfrl4994'
//     }
// }

// const send = async(data) =>{
//     nodeMailer.createTransport(email).sendMail(data, function(error, info){
//       if(error) {
//         console.log(error);
//       }
//       else {
//         console.log(info);
//         return info.response;
//       }
//     });
// };

// const content = {
//   from: "seulki4994@naver.com",
//   to: "seulki4994@naver.com",
//   subject: "감사합니다^^^^^^^^^^^^^^.",
//   text : "풀스택 - 오늘의집 이메일 인증 버튼 구현 "
// }

// send(content);


// 랜덤번호 버전 
// const nodeMailer = require('nodemailer');

// const email = {
//     service: 'Naver',
//     host: 'smtp.naver.com',
//     port: 587,
//     auth: {
//         user: 'seulki4994@naver.com',
//         pass: 'tmfrl4994'
//     }
// };

// const send = async (data) => {
//     nodeMailer.createTransport(email).sendMail(data, function (error, info) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log(info);
//             return info.response;
//         }
//     });
// };

// const express = require('express');
// const nodemailer = require('nodemailer');


// module.exports ={
//   sendEmail: (email, message) =>{
//     const emailConfig  = {
//       service: 'Naver',
//       host: 'smtp.naver.com',
//       port: 465,
//       auth: {
//         user: 'seulki4994@naver.com',
//         pass: 'tmfrl4994'
//       }
//     };
    
//     const send = async (data) => {
//       try {
//         const transporter = nodemailer.createTransport(emailConfig);
//         const info = await transporter.sendMail(data);
//         console.log(info);
//         return info.response;
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     send({ // 이메일을 전송할 때 필요한 정보를 data 객체에 추가
//       from: email, // 보내는 사람 이메일 주소
//       to: 'seulki4994@naver.com', // 수신자 이메일 주소
//       subject: '이메일 제목',
//       text: message // 이메일 내용
//     });
//   }
// };



// const generateRandomNumber = () => {
//     return Math.floor(Math.random() * 1000000).toString();
// };

// const content = {
//     from: "seulki4994@naver.com",
//     to: "seulki4994@naver.com",
//     subject: "오늘의집 가입을 환영합니다:)♥",
//     text: generateRandomNumber() // 랜덤 번호 생성
// };

// send(content);


// 언제까지 하나 보자 

const nodeMailer = require('nodemailer');

const email = {
    service: 'Naver',
    host: 'smtp.naver.com',
    port: 465,
    auth: {
        user: 'seulki4994@naver.com',
        pass: 'tmfrl4994'
    }
};

const send = async (data) => {
    nodeMailer.createTransport(email).sendMail(data, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log(info);
            return info.response;
        }
    });
};

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 1000000).toString();
};

const content = {
    from: "seulki4994@naver.com",
    to: "seulki4994@naver.com",
    subject: "오늘의집 가입을 환영합니다:)♥",
    text: generateRandomNumber() // 랜덤 번호 생성
};

send(content);


// 9시 24분 

// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');


// const app = express();
// const port = 8080;
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );

// app.use(express.json());
// app.use(cors());

// // API 엔드포인트: 이메일 전송
// app.post('/wrap/email', async (req, res) => {
//   const { from, to, subject, text } = req.body;

//   const emailData = {
//     from,
//     to,
//     subject,
//     text
//   };
  


//   try {
//     const transporter = nodemailer.createTransport({
//       service: 'Naver',
//       host: 'smtp.naver.com',
//       port: 465,
//       auth: {
//         user: 'seulki4994@naver.com',
//         pass: 'tmfrl4994'
//       }
//     });

//     const info = await transporter.sendMail(emailData);
//     console.log('이메일 전송 성공:', info.response);
//     res.status(200).json({ success: true, message: '이메일이 성공적으로 전송되었습니다.' });
//   } catch (error) {
//     console.error('이메일 전송 실패:', error);
//     res.status(500).json({ success: false, message: '이메일 전송에 실패했습니다.' });
//   }
// });

// app.listen(port, () => {
//   console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
// });