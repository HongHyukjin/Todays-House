import React from 'react';
import {Routes, Route}  from 'react-router-dom';
import MypageNavComponent from './mypage/MypageNavComponent';
import UpdateComponent from './mypage/UpdateComponent';
import ChangePwComponent from './mypage/ChangePwComponent'

export default function MypageComponent () {
  return (
    <>
      <MypageNavComponent />
      {/* <ChangePwComponent /> */}
      <Routes>
          <Route path='/' element={<UpdateComponent />} />
          <Route exact path='/회원정보수정' element={<UpdateComponent />} />
          <Route exact path='/비밀번호변경' element={<ChangePwComponent />} />
      </Routes>
    </>
  );
};

