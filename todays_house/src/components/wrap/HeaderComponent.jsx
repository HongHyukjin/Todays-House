import React from 'react';
import {Link} from 'react-router-dom'

export default function HeaderComponent(){

    const [state,setState] = React.useState({
        isLogin : false
    })

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
                                        <Link to="/"><img src="./images/drawio.png" alt="" /></Link>
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
