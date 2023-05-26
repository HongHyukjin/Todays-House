import axios from 'axios';
import React from 'react';
import $ from 'jquery';


export default  function Section1Component(){
    const [state,setState] = React.useState({
        슬라이드:[],
        n:0,
        cnt:0
    });

    React.useEffect(()=>{
        axios({
            url:'./data/section1.json',
            method:'get'
        })
        .then((res)=>{
            if(res.status===200){
                console.log(res);
                setState({
                    ...state,
                    슬라이드:res.data.slide1,
                    n:res.data.slide1.length-2
                })
            }
        })
        .catch((err)=>{
            console.log("AXIOS 실패"+err);
        })
    },[]);

    React.useEffect(()=>{
        const $slideWrap = $('#section1 .slide-wrap');
        const $right=$('#section1 .right');
        const $rightBtn = $('#section1 .right-btn');
        const $leftBtn = $('#section1 .left-btn');
        let cnt=state.cnt;
        let n=state.n;
        let setId=0;
        $slideWrap.css({width:`${100*(n+2)}%`});
        function sec1Slide(){
            $slideWrap.stop().animate({left:`${cnt*-100}%`},600,function(){
                if(cnt>=n){
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
            setId = setInterval(nextCount,3000);
        }
        autoTimer();

        $rightBtn.on({
            click(e){
                e.preventDefault();
                nextCount();
            }
        });
        $leftBtn.on({
            click(e){
                e.preventDefault();
                PrevCount();
            }
        });

        $right.on({
            mouseenter(){
                clearInterval(setId);
                $leftBtn.stop().fadeIn(800);
                $rightBtn.stop().fadeIn(800);
            },
            mouseleave(){
                $leftBtn.stop().fadeOut(800);
                $rightBtn.stop().fadeOut(800);
                autoTimer();
            }
        });


    },[state.n])

    


    return (
        <div id='section1'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="left">
                            <a href="!#"><img src="./images/168146548189338657.jpg" alt="" /></a>
                            <div className="txt">
                                <p>주간베스트🔍 컬러 포인트로 다양한 스타일링 완성!</p>
                                <h5><img src="./images/1480316471_L9jT.webp" alt="" />byulice</h5>
                            </div>
                        </div>
                        <div className="right">
                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">

                                        {
                                            state.슬라이드.map((item,idx)=>{
                                                return (
                                                    <li className='slide' key={idx}><a href="!#"><img src={item.src} alt="" /></a></li>
                                                )
                                            })
                                        }
                                    
                                    </ul>
                                </div>
                                <a href="!#" className='right-btn'><img src="./images/arrow_lf.svg" alt="" /></a>
                                <a href="!#" className='left-btn'><img src="./images/arrow_lf.svg" alt="" /></a>
                            </div>
                            <span className='count-box'>
                                <em className='current-number'>{state.cnt+1}</em>
                                <i>/</i>
                                <em className='total-number'>{state.n}</em>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

