import React from 'react';
import {HashRouter, BrowserRouter, Routes, Route}  from 'react-router-dom';
import EmailComponent from './wrap/EmailComponent';
import IntroComponent from './wrap/IntroComponent';
import SigninComponent from './wrap/SigninComponent'
import SignUpComponent from './wrap/SignUpComponent';
import UploadPhotoComponent from './wrap/mypage/UploadPhotoComponent';
import UploadVedioComponent from './wrap/mypage/UploadVideoComponent';
import UploadHouseComponent from './wrap/mypage/UploadHouseComponent';
import UploadKnowHowComponent from './wrap/mypage/UploadKnowHowComponent';


export default function WrapComponent () {

  const [nav, setNav] = React.useState({
    nav1 : '커뮤니티',
    nav2 : '홈'
  })

  React.useEffect(() => {
    console.log(`                                                                        ,,
                                                                           /  ,
                                                                          /   /
                                                                         /   /
                                                                        /   /
         __________________________                                    /   /
        ⎢                         ⎥                                   /   /
        ⎢  누구나 예쁜 집에 살 수 있어  ⎥                                  /   /
        ⎢____    _________________⎥                                 /   /
              \\/    ,      ,,                                      /   /
                   /@\\____/@ \\                                ____/   /
                  /           \\                         _____/        /_
            /" \\ / •    •      \\                     __/             /  @@\\"\\
            \\    @@  ㅅ  @@     /___             ___/                /    _/
           /" \\   \\                 \\__________/                    |__/ "\\
           \\   \\                                                   /      /
            \\    \\  __                                                  _/
             \\                                                       __/
               \\_                                             ______/
                  \\ ___                                    __/
                        \\__                             __/
                            \\_____                _____/
                                  \\______________/
                                  `);
    console.log("");

  }, [])

  React.useEffect(() => {
    console.log(nav.nav1);
    console.log(nav.nav2);
  }, [nav.nav1, nav.nav2])

  return (
    <div id="wrap">

         <HashRouter>
            <Routes>
                    <Route path='/*' element={<IntroComponent nav={nav} setNav={setNav} />} />
                    <Route path="/로그인" element={<SigninComponent />}/>
                    <Route path="/회원가입" element={<SignUpComponent />}/>
                    <Route path="/비밀번호재설정" element={<EmailComponent />}/>
                    <Route path="/사진업로드" element={<UploadPhotoComponent />}/>
                    {/* <Route path="/비디오업로드" element={<UploadVedioComponent />}/> */}
                    <Route path="/집들이업로드" element={<UploadHouseComponent />}/>
                    <Route path="/노하우업로드" element={<UploadKnowHowComponent />}/>
            </Routes>
         </HashRouter>

    </div>
  );
};
