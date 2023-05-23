import React from 'react';

export default function Sub1Component(props) {
    return (
        <div id='sub1'>
            <div className="container">
                <div className="gap">
                    <div className="row1">
                        <div className="headbox">
                            <div className="left">
                                <ul>
                                    <li>
                                        <a href="!#"><img src="./images/제목 없는 다이어그램.drawio.png" alt="" /></a>
                                    </li>
                                    <li><a href="!#">커뮤니티</a></li>
                                    <li><a href="!#">쇼핑</a></li>
                                    <li><a href="!#">이사/시공/수리</a></li>
                                </ul>
                            </div>
                            <div className="right">
                                <ul>
                                    <li>
                                        <img src="./images/icon_search.png" alt="" className='search' />
                                        <input type="text" name='home' id='home' placeholder='통합검색' />
                                    </li>
                                    <li>
                                        <a href="!#"><img src="./images/icon_cart.svg" alt="" className='cart' /></a>
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
                    <div className="row3">
                        <div className="headerbox3">
                            <ul>
                                <li><button>정렬<img src="./images/arrowbottom.png" alt="" /></button></li>
                                <li><button>동영상<img src="./images/arrowbottom.png" alt="" /></button></li>
                                <li><button>주거형태<img src="./images/arrowbottom.png" alt="" /></button></li>
                                <li><button>공간<img src="./images/arrowbottom.png" alt="" /></button></li>
                                <li><button>평수<img src="./images/arrowbottom.png" alt="" /></button></li>
                                <li><button>스타일<img src="./images/arrowbottom.png" alt="" /></button></li>
                                <li><button>컬러<img src="./images/arrowbottom.png" alt="" /></button></li>
                                <li><button>셀프/전문<img src="./images/arrowbottom.png" alt="" /></button></li>
                                <li><button>제품정보<img src="./images/arrowbottom.png" alt="" /></button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row4">
                        <div className="title-box">
                            <ul>
                                <li>
                                    <img src="" alt="" />
                                </li>
                                <li>
                                    <span><strong>bodere</strong><button>팔로우</button><br />홈스타일러 #각잡는보드레언니 #오라이프</span>
                                </li>
                            </ul>
                        </div>
                        <div className="img-box">
                                <ul>
                                    <li>
                                        <img src="" alt="" />          
                                    </li>
                                    <li>
                                        <button></button><button></button><button></button>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}