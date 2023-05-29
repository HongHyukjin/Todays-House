import React from 'react';
import {Routes, Route}  from 'react-router-dom';
import MypageNavComponent from './mypage/MypageNavComponent';
import UpdateComponent from './mypage/UpdateComponent';
import ChangePwComponent from './mypage/ChangePwComponent';
import MyPageComponentAll from './mypage/MyPageComponentAll';
import MyPageComponentPt from './mypage/MyPageComponentPt';

export default function MypageComponent ({isMypage}) {

  return (
    <>
      <MypageNavComponent />
      <Routes>
          <Route path='/' element={<MyPageComponentAll/>} />
          <Route path='/모두보기' element={<MyPageComponentAll/>} />
          <Route path='/사진' element={<MyPageComponentPt/>} />
          <Route path='/집들이' element={<MyPageComponentPt />} />
          <Route path='/노하우' element={<MyPageComponentPt />} />
          <Route path='/회원정보수정' element={<UpdateComponent />} />
          <Route path='/비밀번호변경' element={<ChangePwComponent />} />
      </Routes>
    </>
  );
};

