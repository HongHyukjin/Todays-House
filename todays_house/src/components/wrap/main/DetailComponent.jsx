import React from 'react';
import NavComponent from '../NavComponent';

export default function DetailComponent () {
    return (
        <>
        <NavComponent/>
        <div id='detail'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <a href="">30평대</a>
                        <i> | </i>
                        <a href="">북유럽 스타일</a>
                        <i> | </i>
                        <a href="">아파트</a>
                    </div>
                    <div className="content">
                        <div className="center-box">
                            <img src="./images/168519123993936232.jpg" alt="" />
                        </div>
                        <div className="center-txt">
                            <ul>
                                <li><h3>“벌레와의 전쟁 2탄”</h3></li>
                                <li><h3>날씨가 더워지고 비가 자주오게 되면 여기저기에서 벌레들이 출몰하죠.</h3></li> 
                                <li><h3>대체 어디서 들어오는건지 알 수가 없는데, 어디서 나타나는 건지만 알 수 있으면 미리 대비할 수 있어요.</h3></li>
                                <li><a href="">#오라이프</a><a href="">#오라이프추천</a><a href="">#벌레퇴치</a><a href="">#여름철벌레퇴치</a><a href="">#하수구관리</a><a href="">#싱크대관리</a></li>
                            
 
                            </ul>
                        </div>
                        <div className="right">
                            <div class="h_container">
                              <i id="heart" class="far fa-heart"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

 