import React from 'react';
import SignUpComponent from './wrap/SignUpComponent';
import MyPageComponent from './wrap/MyPageComponent';

export default function WrapComponent () {
  return (
    <div id="wrap">
      <MyPageComponent/>
      <SignUpComponent/>
    </div>
  );
};

