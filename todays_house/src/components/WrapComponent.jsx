import React from 'react';

import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import IntroComponent from './wrap/IntroComponent';
import SigininComponent from './wrap/SigninComponent'


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

         <BrowserRouter>
            <Routes>
                    <Route path='/*' element={<IntroComponent />} />
                    <Route path="/로그인" element={<SigininComponent />}/>
            </Routes>
         </BrowserRouter>

    </div>
  );
};

