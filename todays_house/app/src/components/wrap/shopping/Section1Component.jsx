import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import Section1SlideComponent from './Section1SlideComponent'

export default function Section1Component(){

    const [state,setState] = React.useState({
        슬라이드: [],
        n : 0,
        cnt : 0
    });

    React.useEffect(()=>{
        
        axios({
            url : './data/shopsection1.json',
            method : 'GET'
        })
        .then((res)=>{

            if(res.status===200){
                setState({
                    ...state,
                    슬라이드:res.data.slide,
                    n:res.data.slide.length
                })
            }
        })
        .catch((err)=>{
            console.log(`AXIOS 오류 + ${err}`);
        });
    },[]);

    React.useEffect(()=>{

        const $slideWrap = $('#shopsection1 .slide-wrap');
        let cnt =state.cnt;
        let n=state.n;
        let setId=0;
        $slideWrap.css({width:`${100*(n)}%`});
        function sec1Slide(){
            console.log(cnt);
            $slideWrap.stop().animate({left:`${cnt*-100}%`},600,function(){
                if(cnt>=n-2){
                    cnt=0;
                }
                if(cnt<0){
                    cnt=n-1;
                }
                setState({
                    ...state,
                    cnt:cnt
                })
                $slideWrap.stop().animate({left:`${-100*cnt}%`},0);
            });
        }
        function nextCount(){
            cnt++;
            sec1Slide();
        }
        function PrevCount(){
            cnt--;
            sec1Slide();
        }
        function autoTimer(){
            clearInterval(setId);
            setId = setInterval(nextCount, 3000);
        }
        autoTimer();

        // 인수형이 중요하다고 함
        return()=>{
            clearInterval(setId);
        };

    },[state.n]);


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

