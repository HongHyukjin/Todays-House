import React from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'

export default function HeaderComponent(){

    const [state,setState] = React.useState({
        isLogin : false,
        isSub1 : false,
        mapText:'',
    })

    // 글쓰기 서브메뉴(툴팁메뉴) 마우스 엔터 이벤트 
    const onClickSub1=(e)=>{
        e.preventDefault();
        if(state.isSub1===true){
            setState({
                ...state,
                isSub1: false
            })
        }
        else{
            setState({
                ...state,
                isSub1: true
            })
        }
    }



    

    React.useEffect(()=>{
        const stored_email = sessionStorage.getItem('user_email');
        let isLogin = false;
        // 로그인이 된상태
        if(stored_email !== null){
            isLogin = true;
        }
        // 로그인 안된 상태
        else{
            isLogin = false;
        }
        setState({
            ...state,
            isLogin : isLogin
        })
    },[])

    const onClickLogout = (e) =>{
        e.preventDefault();
        sessionStorage.removeItem('user_email');
        setState({
            ...state,
            isLogin : false
        })
    }

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
                                    <li><a href='!#'>커뮤니티</a></li>
                                    <li><a href="!#">쇼핑</a></li>
                                    <li><a href="!#">이사/시공/수리</a></li>
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
                                    <li>
                                        {
                                            !state.isLogin && (
                                                <Link to="/로그인">로그인</Link>
                                            )
                                        }
                                        {
                                            state.isLogin && (
                                                <a href="#!" onClick={onClickLogout}>로그아웃</a>
                                            )
                                        }
                                    </li>
                                    <li>
                                        {
                                            !state.isLogin && (
                                                <Link to="/회원가입">회원가입</Link>
                                            )
                                        }
                                        {
                                            state.isLogin && (
                                                <Link to="/마이페이지">마이페이지</Link>
                                            )
                                        }
                                    </li>
                                    <li><a href="#!">고객센터</a></li>
                                    <li>
                                        <button onClick={onClickSub1}>글쓰기</button>
                                        {
                                            state.isSub1 && (
                                                <div className="sub">
                                                    <ul>
                                                        <li>
                                                            <a href="!#">
                                                                <div><img src="./images/picture.svg" alt="" /></div>
                                                                <h2>사진/동영상 올리기</h2>
                                                                <h3>우리 집의 공간과 나의 일상을 기록해 보세요.</h3>
                                                            </a>
                                                        </li>
                                                      
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <a href="!#">
                                                                <div><img src="./images/home.svg" alt="" /></div>
                                                                <h2>집들이 글쓰기</h2>
                                                                <h3>집에 관한 이야기를 글로 작성해 보세요.</h3>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <a href="!#">
                                                                <div><img src="./images/nohow.svg" alt="" /></div>
                                                                <h2>노하우 글쓰기</h2>
                                                                <h3>다양한 인테리어 노하우를 공유해 주세요.</h3>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <a href="!#">
                                                                <div><img src="./images/sangpum.svg" alt="" /></div>
                                                                <h2>상품 리뷰 쓰기</h2>
                                                                <h3>상품 리뷰를 작성하고 포인트도 받아 보세요.</h3>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <a href="!#">
                                                                <div><img src="./images/sigong.svg" alt="" /></div>
                                                                <h2>시공 전문가 리뷰쓰기</h2>
                                                                <h3>시공 전문가 리뷰를 작성하고 포인트도 받아 보세요.</h3>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
