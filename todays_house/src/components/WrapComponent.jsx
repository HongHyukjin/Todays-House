import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SigninComponent from './wrap/SigninComponent'
import EmailComponent from './wrap/EmailComponent'

export default function WrapComponent () {
  return (
    <div id="wrap">
      <Routes>
        <SigninComponent/>
        <EmailComponent/>
      </Routes>
    </div>
  );
};

