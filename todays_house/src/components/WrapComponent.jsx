import React from 'react';
import SigninComponent from './wrap/SigninComponent'
import EmailComponent from './wrap/EmailComponent'

export default function WrapComponent () {
  return (
    <div id="wrap">
      <SigninComponent/>
      <EmailComponent/>
    </div>
  );
};

