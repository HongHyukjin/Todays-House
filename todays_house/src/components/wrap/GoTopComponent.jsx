import React from 'react';
import $ from 'jquery';

export default function GoTopComponent () {

    React.useEffect(()=>{
        let goTop = $('#goTop');
        let gotopBtn = $('.gotop-btn');

        // 스크롤 이벤트
        $(window).scroll(function(){
            if($(window).scrollTop()>=500){
                goTop.stop().fadeIn(300);
            }
            else{
                goTop.stop().fadeOut(300);
                
            }
        });
      
        // Smooth Scrolling
        gotopBtn.on({
            click(e){
                e.preventDefault();
                $('html,body').stop().animate({scrollTop:0},600);
            }
        })


    },[]);
    return (
        <div id='goTop'>
            <a href="/" className='gotop-btn'>
                <img src="./images/다운로드1.png" alt="" />
            </a>
        </div>
    );
};
