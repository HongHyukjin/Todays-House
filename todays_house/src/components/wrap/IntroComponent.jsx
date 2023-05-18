import React from 'react';
import TopmodalComponent from '../wrap/TopmodalComponent';
import HeaderComponent from '../wrap/HeaderComponent';
import FooterComponent from '../wrap/FooterComponent';
import { Routes, Route}  from 'react-router-dom';
import MainComponent from './MainComponent';

export default function IntroComponent () {
    return (
        <>
            <TopmodalComponent />   
            <HeaderComponent />
                <Routes>
                      <Route index element={<MainComponent />} />
                      <Route path='/메인' element={<MainComponent/>} />
                </Routes>
            <FooterComponent/>
        </>
    );
};

 