import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import Section1SlideComponent from './Section1SlideComponent'

export default function Section1Component(){

    const [state,setState] = React.useState({
        슬라이드: [],
    });

    React.useEffect(()=>{
        
        axios({
            url : './data/section1.json',
            method : 'GET'
        })
        .then((res)=>{

            if(res.status===200){
                setState({
                    ...state,
                    슬라이드:res.data.slide
                })
            }
        })
        .catch((err)=>{
            console.log(`AXIOS 오류 + ${err}`);
        });
    },[]);

    React.useEffect(()=>{

        const $slideContainer = $('#section1 .slide-container');
        const $slideWrap      = $('#section1 .slide-wrap');
        const $slide          = $('#section1 .slide');
        const $slidea         = $('#section1 .slide a');

        let cnt = 0;
        let setId = 0;
        let n = $slide.length;

        // 슬라이드
        function mainSlide(){
            $slideWrap.stop().animate({left: `${-100*cnt}%`}, 600, function(){
                if(cnt>n-1){cnt=0}
                if(cnt<0){cnt=n-1}
                console.log(cnt);
                $slideWrap.stop().animate({left: `${-100*cnt}%`}, 0);
            });
            // slidePageEvent();
        }

        // 다음 슬라이드
        function nextCount(){
            cnt++;
            // console.log(cnt);   
            mainSlide();
        }

        // 이전 슬라이드
        function prevCount(){
            cnt--;
            mainSlide();
        }

        function autoTimer(){
            clearInterval(setId);
            setId = setInterval(nextCount, 3000);
        }   
        autoTimer();

    },[]);


    return (
        <div id='shopsection1'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                            <Section1SlideComponent 슬라이드={state.슬라이드} n={state.n}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

