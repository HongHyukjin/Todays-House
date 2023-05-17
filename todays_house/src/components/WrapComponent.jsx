import React from 'react';
import TopmodalComponent from './wrap/TopmodalComponent';
import HeaderComponent from './wrap/HeaderComponent';
import FooterComponent from './wrap/FooterComponent';
import Section1Component from './wrap/Section1Component';
import UpdateComponent from './wrap/UpdateComponent'
import ChangePwComponent from './wrap/ChangePwComponent';

export default function WrapComponent () {
  return (
    <div id="wrap">
         <TopmodalComponent/>
         <HeaderComponent/>
         <UpdateComponent />
         <ChangePwComponent />
         <FooterComponent/>
    </div>
  );
};

