import React from 'react';
import TopmodalComponent from '../wrap/TopmodalComponent';
import HeaderComponent from '../wrap/HeaderComponent';
import FooterComponent from '../wrap/FooterComponent';
import { Routes, Route}  from 'react-router-dom';
import $ from 'jquery';
import MainComponent from './MainComponent';
import MypageComponent from './MypageComponent'
import SubComponent from './SubComponent';
import ShoppingComponent from './ShoppingComponent'
import ScrapComponent from './ScrapComponent';

export default function IntroComponent ({nav, setNav}) {
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
             
            <HeaderComponent isMypag={state.isMypage} nav={nav} setNav={setNav} />
                <Routes>
                      <Route index element={<MainComponent nav={nav} setNav={setNav} />} top={state.top} />
                      <Route path='/메인' element={<MainComponent nav={nav} setNav={setNav} />} />
                      <Route path='/서브페이지/*' element={<SubComponent nav={nav} setNav={setNav} />} />
                      <Route path='/쇼핑페이지/*' element={<ShoppingComponent nav={nav} setNav={setNav} />} />
                      <Route path='/마이페이지/*' element={<MypageComponent isMypag={state.isMypage} />} />
                      <Route path='/스크랩페이지' element={<ScrapComponent />} />
                </Routes>
            <FooterComponent/>
        </>
    );
};

 