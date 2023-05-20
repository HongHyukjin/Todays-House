import React from 'react';
import {Link} from 'react-router-dom'

export default function HeaderComponent(){
    return (
        <div id='header'>
            <div className="container">
                <div className="gap">
                    <div className="row1">
                        <div className="headbox">
                            <div className="left">
                                <ul>
                                    <li>
                                        <Link to="/"><img src="./images/제목 없는 다이어그램.drawio.png" alt="" /></Link>
                                    </li>
                                    <li><a href="#!">커뮤니티</a></li>
                                    <li><a href="#!">쇼핑</a></li>
                                    <li><a href="#!">이사/시공/수리</a></li>
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
                                    <li><Link to="/로그인">로그인</Link></li>
                                    <li><Link to="/회원가입">회원가입</Link></li>
                                    <li><Link to="/마이페이지">마이페이지</Link></li>
                                    <li><button>글쓰기</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
