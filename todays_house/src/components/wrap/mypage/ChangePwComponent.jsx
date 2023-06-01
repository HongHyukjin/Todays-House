import React from 'react';
import $ from 'jquery';

export default function ChangePwComponent () {

  const [state,setState] = React.useState({
    새비밀번호 : '',
    새비밀번호확인 : '',
    isPwError : false,
    isPwMsg : '',
    isPw2Error : false,
    isPw2Msg : ''
  })

  const onChangePw1 = (e) => {
    const {value} = e.target;
    let isPwError = false;
    let isPwMsg = '';
    const regExp1 = /^(.){8,16}$/g;
    const regExp2 = /([A-Za-z]+[0-9]+)+|([0-9]+[A-Za-z]+)+/g;
    const regExp3 = /\s/g;

    if (value === '') {
      isPwError = true;
      isPwMsg = '필수 입력 항목입니다.'
    }
    else if (regExp1.test(value) === false || regExp2.test(value) === false) {
      isPwError = true;
      isPwMsg = '비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 합니다.'
    }
    else if (regExp3.test(value) === true) {
      isPwError = true;
      isPwMsg = '공백은 사용할 수 없습니다.'
    }
    setState({
      ...state,
      새비밀번호 : value,
      isPwError : isPwError,
      isPwMsg : isPwMsg
    })
  }

  const onChangePw2 = (e) => {
    const { value } = e.target;
    let isPw2Error = false;
    let isPw2Msg = '';

    if (value !== state.새비밀번호) {
      isPw2Error = true;
      isPw2Msg = '비밀번호가 일치하지 않습니다.';
    }
    else {
      isPw2Error = false;
      isPw2Msg = '';
    }
    setState({
      ...state,
      새비밀번호확인 : value,
      isPw2Error : isPw2Error,
      isPw2Msg : isPw2Msg
    })
  }

  const onSubmitUpdate = (e) => {
    e.preventDefault();
    const user_email = sessionStorage.getItem("user_email");

    const formData = {
      "user_email" : user_email,
      "user_pw" : state.새비밀번호
    }

    $.ajax({
      url:'http://localhost:8080/JSP/ohouse/update_pw_action.jsp',
      type:'POST',
      data:formData,
      dataType:'json',
      success(res){
        console.log('AJAX 성공!');
        console.log(res);
        // console.log(JSON.parse(res));
        alert('비밀번호가 수정되었습니다.');
      },
      error(err){
        console.log('AJAX 실패!' + err);
      }
    });
}

  return (
    <div id="changePw">
      <div className="container">
        <div className="gap">
          <div className="title">
            <h1>비밀번호 변경</h1>
          </div>
          <div className="content">
            <form name="pw_form" id="pwForm" action="POST" onSubmit={onSubmitUpdate}>
              <div>
                <label htmlFor="">새 비밀번호</label>
                <p className='ex'>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
                <input type="password" name="pw1" id="pw1" onChange={onChangePw1} />
                <div className={`error-msg ${state.isPwError?'on':''}`}>
                  <svg width="20" height="20" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><circle cx="10" cy="10" r="10" fill="#F77"></circle><path fill="#FFF" d="M9.42 11.98l-.25-4.43-.06-1.67h1.78l-.06 1.67-.25 4.43H9.42zm.58 3.19c-.62 0-1.1-.5-1.1-1.15 0-.65.48-1.16 1.1-1.16.62 0 1.1.5 1.1 1.16 0 .64-.48 1.15-1.1 1.15z"></path></svg>
                  <p>{state.isPwMsg}</p>
                </div>
              </div>
              <div>
                <label htmlFor="">새 비밀번호</label>
                <input type="password" name="pw2" id="pw2" onChange={onChangePw2} />
                <div className={`error-msg ${state.isPw2Error?'on':''}`}>
                  <svg width="20" height="20" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><circle cx="10" cy="10" r="10" fill="#F77"></circle><path fill="#FFF" d="M9.42 11.98l-.25-4.43-.06-1.67h1.78l-.06 1.67-.25 4.43H9.42zm.58 3.19c-.62 0-1.1-.5-1.1-1.15 0-.65.48-1.16 1.1-1.16.62 0 1.1.5 1.1 1.16 0 .64-.48 1.15-1.1 1.15z"></path></svg>
                  <p>{state.isPw2Msg}</p>
                </div>
              </div>
              <button type='submit'>비밀번호 변경</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

