import React from 'react';
import {Link} from 'react-router-dom'
import $ from 'jquery';
import NavComponent from './NavComponent';

export default function HeaderComponent({isMypage}){

    const [state,setState] = React.useState({
        isLogin : false,
        isNav:false,
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
            isLogin : isLogin,
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

    const onMouseEnterNav=()=>{
        setState({
            ...state,
            isNav:true
        })
    }

    const onMouseLeaveNav = () => {
        setState({
            ...state,
            isNav:false
        })
    }

    React.useEffect(()=>{
        $('#mypagenav').css({height:'200px',"padding-top":"80px"});
        // $('#nav').css({position:"fixed" ,background:"#fff",padding:0,height:"50px"})
        if(state.isNav){
            $('#header').css({height:"130px"})
            $('#mypagenav').css({height:'250px',"padding-top":"130px"});
            $('#header #nav').css({"padding-top" : "0", "height":"51px"})
        }
        else{
            $('#header').css({height:"80px"})
            $('#mypagenav').css({height:'200px',"padding-top":"80px"});
        }
    },[state.isNav])
    

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
                                            <Link to="/"><img src="./images/drawio.png" alt="" /></Link>
                                        </li>
                                        <li>

                                            <a href='!#' onMouseEnter={onMouseEnterNav}>커뮤니티</a>

                                        </li>
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
                                                    <Link to="/" onClick={onClickLogout}>로그아웃</Link>
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
                {
                state.isNav && <span onMouseLeave={onMouseLeaveNav}><NavComponent  /></span>
                }
            </div>
            
        </>
    );
};
