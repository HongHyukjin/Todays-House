import React from 'react';
import TopmodalComponent from './wrap/TopmodalComponent';
import HeaderComponent from './wrap/HeaderComponent';
import FooterComponent from './wrap/FooterComponent';
import MypageComponent from './wrap/MypageComponent';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import Section1Component from './wrap/Section1Component';
import Section2Component from './wrap/Section2Component';


export default function WrapComponent () {

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

  return (
    <div id="wrap">
         <TopmodalComponent/>
         <BrowserRouter>
            <Routes>
                <Route path='/' element={<HeaderComponent/>} >
                    <Route index element={<Section1Component />} />
                    <Route path='/섹션1' element={<Section1Component />} />
                    <Route path='/섹션2' element={<Section2Component />} />
                    <Route path='/마이페이지/*' element={<MypageComponent />} />
                </Route>
            </Routes>
         </BrowserRouter>

         <FooterComponent/>
    </div>
  );
};

