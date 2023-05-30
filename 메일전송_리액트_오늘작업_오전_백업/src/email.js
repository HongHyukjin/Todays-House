// email.js
const express = require('express');
const app = express();


const nodemailer = require("nodemailer");

alert('전송메일');


// transport 생성
let transport = nodemailer.createTransport({
    service: 'Naver',
    host: 'smtp.naver.com',
    port: 465,
    auth: {
        user: 'seulki4994@naver.com',
        pass: 'tmfrl4994'
    }    
});

// 전송할 email 내용 작성
app.sendMailMethod=(data)=>{
    
    console.log('전송데이터 =>  ', data );

    let mailOptions = {
        from: "your_gmail_account@gmail.com",
        to: "seulki4994@naver.com",
        subject: "노드메일러로 종이가 보냅니다.",
        text: "문종 콘텐츠 내용 입니다.",
    };
    
    // email 전송
    transport.sendMail(mailOptions, (error, req) => {

        if (error) {
            console.log('메일전송 실패!  ',error);
            return;
        }

        console.log('전송내용 완료 ', req);
        console.log("메일전송 성공! ");
    });
}
