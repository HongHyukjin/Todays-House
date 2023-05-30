/////////////////////////////////////////////////////////


// const nodeMailer = require('nodemailer');

// const mailPoster = nodeMailer.createTransport({
//   service: 'Naver',
//   host: 'smtp.naver.com',
//   port: 587,
//   auth: {
//     user: 'seulki4994@naver.com',
//     pass: 'tmfrl4994'
//   }
// });
// // [출처] React로 블로그 만들기 30. nodeMailer 네이버 메일 적용하기|작성자 SeJun3278
// // 메일을 받을 유저 설정
// const mailOpt = (user_data, title, contents) => {
//     const mailOptions = {
//       from: 'seulki4994@naver.com',
//       to: user_data.email ,
//       subject: title,
//       text: contents
//     };
  
//     return mailOptions;
//   }
// //   [출처] React로 블로그 만들기 30. nodeMailer 네이버 메일 적용하기|작성자 SeJun3278

// /* server/controller.js */

// // 메일 전송
// const sendMail = (mailOption) => {
//     mailPoster.sendMail(mailOption, function(error, info){
//       if (error) {
//         console.log('에러 ' + error);
//       }
//       else {
//         console.log('전송 완료 ' + info.response);
//       }
//     });
//   }
// //   [출처] React로 블로그 만들기 30. nodeMailer 네이버 메일 적용하기|작성자 SeJun3278



// /* server/controller.js */

// const mailOption = mailOpt('seulki4994@naver.com', "title", '메일전송 내용입니다.');
// sendMail(mailOption)
// // [출처] React로 블로그 만들기 30. nodeMailer 네이버 메일 적용하기|작성자 SeJun3278

/////////////////////////////////////////////////////////


// const nodeMailer = require('nodemailer');

// const email = {
//     service: 'Naver',
//     host: 'smtp.naver.com',
//     port: 465,
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

// send(JSON.stringify(content));


// 랜덤번호 버전 
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


// 언제까지 하나 보자 

// const nodeMailer = require('nodemailer');

// const email = {
//     service: 'Naver',
//     host: 'smtp.naver.com',
//     port: 465,
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


// 9시 24분 

// const express = require('express');
// const nodemailer = require('nodemailer');
// // const cors = require('cors');


// const app = express();
// const port = 3000;

// app.use(express.json());
// // app.use(cors());

// // API 엔드포인트: 이메일 전송
// app.post('/src/email', async (req, res) => {
//   const { from, to, subject, text } = req.body;

//   const emailData = {
//     from,
//     to,
//     subject,
//     text
//   };
  
//   // res.header('Access-Control-Allow-Origin', '*');
//   // res.header(
//   //   'Access-Control-Allow-Headers',
//   //   'Origin, X-Requested-With, Content-Type, Accept'
//   // );

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