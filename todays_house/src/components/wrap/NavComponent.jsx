import React from 'react';
import {Link} from 'react-router-dom'
import $ from 'jquery';


export default function NavComponent() {
    React.useEffect(()=>{
        $(function(){
            const count = $('#ranklist ul li').length;
            const height = $('#ranklist ul li').height();

            function step(index){
                $('#ranklist ul').delay(2000).animate({
                    top: -height * index,
                },
                500,
                function() {
                    step((index + 1) % count);
                }
            );
        }
        step(0);
        });
    },[]);


    return (
        <div id='nav'>
            <div className="container">
                <div className="gap">
                    <div className="row2">
                        <div className="headbox2">
                            <ul>
                                <li><Link to="/">홈</Link></li>
                                <li><a href="!#">팔로잉</a></li>
                                <li><Link to="/서브페이지/서브1">사진</Link></li>
                                <li><Link to="/서브페이지/서브2">집들이</Link></li>
                                <li><Link to="/서브페이지/서브3">노하우</Link></li>
                                <li><a href="!#">전문가집들이</a></li>
                                <li><a href="!#">셀프가이드</a></li>
                                <li><a href="!#">3D인테리어</a></li>
                                <li><a href="!#">이벤트</a></li>
                                <li>
                                    <div id="ranklist">
                                        <dt>실시간 급상승 검색어</dt>
                                        <ul>
                                            <li><a href="">미니 화장대</a> </li>
                                            <li><a href="">반원 테이블</a></li>
                                            <li><a href="">전등</a></li>
                                            <li><a href="">공기정화 식물</a></li>
                                            <li><a href="">화장대 정리</a></li>
                                            <li><a href="">화장대 정리</a></li>
                                        </ul>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

