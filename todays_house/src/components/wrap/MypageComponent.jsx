import React from 'react';
import {Routes, Route}  from 'react-router-dom';
import MypageNavComponent from './mypage/MypageNavComponent';
import UpdateComponent from './mypage/UpdateComponent';
import ChangePwComponent from './mypage/ChangePwComponent';
import MyPageComponentAll from './mypage/MyPageComponentAll';
import MyPageComponentPt from './mypage/MyPageComponentPt';
import MyPageZzimComponent from './mypage/MyPageZzimComponent';
import $ from 'jquery';

export default function MypageComponent ({isMypage}) {
  

  const [state, setState] = React.useState({
    사진: [],
    집들이: [],
    노하우 : []
  });

  const getPhoto = async () => {
    try {
      const user_email = sessionStorage.getItem('user_email');
      const form_data = {
        "user_email": user_email
      };

      const res = await $.ajax({
        url: 'http://localhost:8080/JSP/ohouse/photo_select_action.jsp',
        type: 'POST',
        data: form_data,
        dataType: 'json'
      });

      console.log('AJAX 성공');
      console.log(res.result);

      setState((prevState) => ({
        ...prevState,
        사진: res.result
      }));
    } catch (err) {
      console.log('AJAX 실패' + err);
    }
  };

  const getHouse = async () => {
    try {
        const user_email = sessionStorage.getItem('user_email');
        const form_data = {
            "user_email": user_email
        };

        const res = await $.ajax({
            url: 'http://localhost:8080/JSP/ohouse/house_select_action.jsp',
            type: 'POST',
            data: form_data,
            dataType: 'json'
        });

        console.log('AJAX 성공');
        console.log(res.result);

        setState((prevState) => ({
            ...prevState,
            집들이: res.result
        }));
    } catch (err) {
        console.log('AJAX 실패' + err);
    }
};

  const getKnowHow = async () => {
    try {
        const user_email = sessionStorage.getItem('user_email');
        const form_data = {
            "user_email": user_email
        };

        const res = await $.ajax({
            url: 'http://localhost:8080/JSP/ohouse/knowhow_select_action.jsp',
            type: 'POST',
            data: form_data,
            dataType: 'json'
        });

        console.log('AJAX 성공');
        console.log(res.result);

        setState((prevState) => ({
            ...prevState,
            노하우: res.result
        }));
    } catch (err) {
        console.log('AJAX 실패' + err);
    }
  };

  React.useEffect(()=>{
    getPhoto();
    getHouse();
    getKnowHow();
  },[])

  return (
    <>
      <MypageNavComponent />
      <Routes>
          <Route path='/' element={<MyPageComponentAll/>} />
          <Route path='/모두보기' element={<MyPageComponentAll/>} />
          <Route path='/사진' element={<MyPageComponentPt/>} />
          <Route path='/집들이' element={<MyPageComponentPt />} />
          <Route path='/노하우' element={<MyPageComponentPt />} />
          <Route path='/찜하기' element={<MyPageZzimComponent />} />
          <Route path='/회원정보수정' element={<UpdateComponent />} />
          <Route path='/비밀번호변경' element={<ChangePwComponent />} />
      </Routes>
    </>
  );
};

