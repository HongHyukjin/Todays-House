import React from 'react';
import {Routes, Route}  from 'react-router-dom';
import MypageNavComponent from './mypage/MypageNavComponent';
import UpdateComponent from './mypage/UpdateComponent';
import ChangePwComponent from './mypage/ChangePwComponent'

export default function MypageComponent () {
  return (
    <>
      <MypageNavComponent />
      <Routes>
          <Route path='/' element={<UpdateComponent />}>
              <Route path='/회원정보수정' element={<UpdateComponent />} />
              <Route path='/비밀번호변경' element={<ChangePwComponent />} />
          </Route>
      </Routes>
    </>
  );
};

