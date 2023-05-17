import React from 'react';

export default function ChangePwComponent () {
  return (
    <div id="changePw">
      <div className="container">
        <div className="gap">
          <div className="title">
            <h1>비밀번호 변경</h1>
          </div>
          <div className="content">
            <form name="pw_form" id="pwForm" action="POST">
              <div>
                <label htmlFor="">새 비밀번호</label>
                <p>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
                <input type="text" name="pw1" id="pw1" />
              </div>
              <div>
                <label htmlFor="">새 비밀번호</label>
                <input type="text" name="pw2" id="pw2" />
              </div>
              <button type='submit'>비밀번호 변경</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

