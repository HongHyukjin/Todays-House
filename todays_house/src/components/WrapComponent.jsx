import React from 'react';
import TopmodalComponent from './wrap/TopmodalComponent';
import HeaderComponent from './wrap/HeaderComponent';
import FooterComponent from './wrap/FooterComponent';
import Section1Component from './wrap/Section1Component';
import Section2Component from './wrap/Section2Component';
import Section3Component from './wrap/Section3Component';


export default function WrapComponent () {
  return (
    <div id="wrap">
         <TopmodalComponent/>
         <HeaderComponent/>
         <Section1Component/>
         <Section2Component/>
         <Section3Component/>
         <FooterComponent/>
    </div>
  );
};

