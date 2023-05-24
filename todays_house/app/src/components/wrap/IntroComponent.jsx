import React from 'react';
import TopmodalComponent from '../wrap/TopmodalComponent';
import HeaderComponent from '../wrap/HeaderComponent';
import FooterComponent from '../wrap/FooterComponent';
import { Routes, Route}  from 'react-router-dom';
import MainComponent from './MainComponent';
import MypageComponent from './MypageComponent'
import ShopingComponent from './ShopingComponent';

export default function IntroComponent () {
    return (
        <>
            <TopmodalComponent />   
            <HeaderComponent />
                <Routes>
                      <Route index element={<MainComponent />} />
                      <Route path='/메인' element={<MainComponent/>} />
                      <Route path='/마이페이지/*' element={<MypageComponent />} />
                </Routes>
            <FooterComponent/>
        </>
    );
};

 