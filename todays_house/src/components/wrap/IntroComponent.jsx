import React from 'react';
import TopmodalComponent from '../wrap/TopmodalComponent';
import HeaderComponent from '../wrap/HeaderComponent';
import FooterComponent from '../wrap/FooterComponent';
import { Routes, Route}  from 'react-router-dom';
import $ from 'jquery';
import MainComponent from './MainComponent';
import MypageComponent from './MypageComponent'
import SubComponent from './SubComponent';

export default function IntroComponent () {
    const [state,setState] = React.useState({
        top : 0
    })
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
      if(!topModal.isTopModal){
        $('#header').css({top : 0});
        $('#mypagenav').css({height : "200px", "padding-top" : "80px", margin : 0})
      }

    },[topModal.isTopModal])
    
    React.useEffect(()=>{
        let top = 0;
        $(window).scroll(function(){
            top = $(window).scrollTop();
            // console.log($(window).scrollTop());
            setState({
                ...state,
                top : top
            })
            if(top > 50){
                $('#header').css({top : 0});
            }
            else{
                $('#header').css({top : "auto"});
            }
        })
    },[state.top])


    return (
        <>
        {
            topModal.isTopModal&&<TopmodalComponent  topModalClose={topModalClose} />  
        }
             
            <HeaderComponent isMypag={state.isMypage} />
                <Routes>
                      <Route index element={<MainComponent/>} top={state.top} />
                      <Route path='/메인' element={<MainComponent/>} />
                      <Route path='/서브페이지/*' element={<SubComponent />} />
                      <Route path='/마이페이지/*' element={<MypageComponent isMypag={state.isMypage} />} />
                </Routes>
            <FooterComponent/>
        </>
    );
};

 