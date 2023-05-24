import React from 'react';
import $ from 'jquery';

export default function NavComponent() {

    const [state,setState] = React.useState({
        newScroll:0,
        oldScroll:0
    })

    
    React.useEffect(()=>{
        let newScroll = $(window).scrollTop();
        let oldScroll = newScroll;
       
        $(window).scroll(function(e){
            newScroll = $(window).scrollTop();
            if(newScroll-oldScroll>0){
                // console.log('아래로');
                $('#nav').addClass('on');
                $('#nav').removeClass('off');
            }
            if(newScroll-oldScroll<0){
                // console.log('위로');
                $('#nav').removeClass('on');
                $('#nav').addClass('off');
            }
            if(newScroll===0){
                $('#nav').removeClass('off');
            }
            oldScroll = newScroll;

           
        });

        setState({
            ...state,
            newScroll:newScroll,
            oldScroll:oldScroll
        })
        if($(window).scrollTop()===0){
            $('#nav').css({"top":'auto'});
        }

    },[state.newScroll]);




    return (
        <div id='nav'>
            <div className="container">
                <div className="gap">
                    <div className="row2">
                        <div className="headbox2">
                            <ul>
                                <li><a href="!#">홈</a></li>
                                <li><a href="!#">팔로잉</a></li>
                                <li><a href="!#">사진</a></li>
                                <li><a href="!#">집들이</a></li>
                                <li><a href="!#">노하우</a></li>
                                <li><a href="!#">전문가집들이</a></li>
                                <li><a href="!#">셀프가이드</a></li>
                                <li><a href="!#">3D인테리어</a></li>
                                <li><a href="!#">이벤트</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

