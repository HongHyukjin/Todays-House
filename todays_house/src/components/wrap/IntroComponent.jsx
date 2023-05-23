import React from 'react';
import TopmodalComponent from '../wrap/TopmodalComponent';
import HeaderComponent from '../wrap/HeaderComponent';
import FooterComponent from '../wrap/FooterComponent';
import { Routes, Route}  from 'react-router-dom';
import MainComponent from './MainComponent';
import MypageComponent from './MypageComponent'

export default function IntroComponent () {
    const[topModal,setTopModal]=React.useState({
        key :'TODAYS_HOUSE_TOPMODAL',
        isTopModal:true
      });
      const topModalClose=(value,expires)=>{
        setTopModal({
            ...topModal,
            isTopModal:false
        });
        setTopCookieMethod(value,expires);
    }
    const setTopCookieMethod=(value,expires)=>{
      let today =new Date();
      today.setDate(today.getDate()+expires);
      document.cookie= `${topModal.key}=${value}; path=/; expires=${today.toUTCString()};`;
    } 
    const getTopCookieMethod=()=>{
      if(document.cookie==='')return;
      const result = document.cookie.split(';');
    
      let cookie = [];
      result.map((item,idx)=>{
          cookie[idx]={
              key:item.split('=')[0].trim(),
              value:item.split('=')[1].trim()
          }
          
      });
     
      cookie.map((item)=>{
          if(item.key.includes(topModal.key) && item.value.includes('yes')){
            setTopModal({
                  ...topModal,
                  isTopModal:false
              })
              return;
          }
      })
    }
    
    React.useEffect(()=>{
      getTopCookieMethod();
    },[topModal.isTopModal])
    
    return (
        <>
        {
            topModal.isTopModal&&<TopmodalComponent  topModalClose={topModalClose} />  
        }
             
            <HeaderComponent />
                <Routes>
                      <Route index element={<MainComponent/>} />
                      <Route path='/메인' element={<MainComponent/>} />
                      <Route path='/마이페이지/*' element={<MypageComponent />} />
                </Routes>
            <FooterComponent/>
        </>
    );
};

 