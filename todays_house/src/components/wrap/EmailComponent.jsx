import React from 'react';
import HeaderComponent from './HeaderComponent';
import TopmodalComponent from './TopmodalComponent';

export default function EmailComponent() {

    // const nodeMailer = require('nodemailer');

    // const mailPoster = nodeMailer.createTransport({
    //     service: 'Naver',
    //     host : 'smtp.naver.com',
    //     port : 465,
    //     auth : {
    //         user : 'gurwlszx@naver.com',
    //         pass : '0603okju!!'
    //     }
    // });

    // const mailOpt = (user_email, title, contents) => {
    //     const mailOptions = {
    //         from : 'gurwlszx@naver.com',
    //         to : user_email,
    //         subject : title,
    //         text : contents
    //     };

    //     return mailOptions;
    // }

    // const sendMail = (mailOption) => {
    //     mailPoster.sendMail(mailOption, function (error, info) {
    //         if (error) {
    //             console.log('에러 ' + error);
    //         }
    //         else {
    //             console.log('전송 완료 ' + info.response);
    //         }
    //     });
    // }

    return (
        <>
            <TopmodalComponent />
            <HeaderComponent />
            <main id="emailSet">
                <section className="pw_set">
                    <div className="container">
                        <div className="gap">
                            <div className="title">
                                <h3>가입한 이메일 주소를 입력해주세요.</h3>
                            </div>
                            <div className="content">
                                <div className="box1">
                                    <input
                                        type="text"
                                        id='emailBox'
                                        name='email-box'
                                        placeholder='이메일'
                                    />
                                    <button type='submit' className='small-btn'>확인</button>
                                </div>
                            </div>
                            <button type="submit" className="email-code-btn">
                                <p>이메일로 인증코드 받기</p>
                            </button>
                            <div className="last-box">
                                <h3>회원가입 시 입력한 정보가 기억나지 않는다면?</h3><br />
                                <h4>고객센터 문의하기(1670-0876)</h4>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
       
    );
};

