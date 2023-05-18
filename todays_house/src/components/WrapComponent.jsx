import React from 'react';
import TopmodalComponent from './wrap/TopmodalComponent';
import HeaderComponent from './wrap/HeaderComponent';
import NavComponent from './wrap/NavComponent';
import Section1Component from './wrap/Section1Component';
import Section2Component from './wrap/Section2Component';
import Section3Component from './wrap/Section3Component';
import Section4Component from './wrap/Section4Component';
import Section5Component from './wrap/Section5Component';
import Section6Component from './wrap/Section6Component';
import Section7Component from './wrap/Section7Component';
import Section8Component from './wrap/Section8Component';
import Section9Component from './wrap/Section9Component';
import FooterComponent from './wrap/FooterComponent';



export default function WrapComponent () {
  return (
    <div id="wrap">
         <TopmodalComponent/>
         <HeaderComponent/>
         <NavComponent/>
         <Section1Component/>
         <Section2Component/>
         <Section3Component/>
         <Section4Component/>
         <Section5Component/>
         <Section6Component/>
         <Section7Component/>
         <Section8Component/>
         <Section9Component/>
         <FooterComponent/>
    </div>
  );
};

