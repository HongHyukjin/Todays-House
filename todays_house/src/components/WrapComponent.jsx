import React from 'react';
import TopmodalComponent from './wrap/TopmodalComponent';
import HeaderComponent from './wrap/HeaderComponent';
import FooterComponent from './wrap/FooterComponent';
import Section1Component from './wrap/Section1Component';


export default function WrapComponent () {
  return (
    <div id="wrap">
         <TopmodalComponent/>
         <HeaderComponent/>
         <Section1Component/>
         <FooterComponent/>
    </div>
  );
};

