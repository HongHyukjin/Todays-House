import React from 'react';
import { Link,Outlet } from 'react-router-dom';


export default function HeaderComponent(){
    return (
        <>
            <div id='header'>
            <div className="container">
                <div className="gap">
                    <div className="row1">
                        <div className="headbox">
                            <div className="left">
                                <ul>
                                    <li>
                                        <a href="!#"><img src="./images/제목 없는 다이어그램.drawio.png" alt="" /></a>
                                    </li>
                                    <li><Link to="/섹션1">커뮤니티</Link></li>
                                    <li><Link to="/섹션2">쇼핑</Link></li>
                                    <li><Link to="/마이페이지">이사/시공/수리</Link></li>
                                </ul>
                            </div>
                            <div className="right">
                                <ul>
                                    <li>
                                        <img src="./images/icon_search.png" alt="" className='search'/>
                                        <input type="text" name='home' id='home' placeholder='통합검색'/>
                                    </li>
                                    <li>
                                        <a href="!#"><img src="./images/icon_cart.svg" alt="" className='cart'/></a>
                                    </li>
                                    <li><a href="!#">로그인</a></li>
                                    <li><a href="!#">회원가입</a></li>
                                    <li><a href="!#">고객센터</a></li>
                                    <li><button>글쓰기</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
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
            <Outlet />
        </>
    );
};
