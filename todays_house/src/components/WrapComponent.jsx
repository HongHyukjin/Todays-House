import React from 'react';
import SignUpComponent from './wrap/SignUpComponent';
import MyPageComponentAll from './wrap/MyPageComponentAll';
import MyPageComponentPt from './wrap/MyPageComponentPt';
import UploadPhotoComponent from './wrap/UploadPhotoComponent';

export default function WrapComponent () {
  return (
    <div id="wrap">
      <UploadPhotoComponent/>
      <MyPageComponentPt/>
      <MyPageComponentAll/>
      <SignUpComponent/>
    </div>
  );
};

