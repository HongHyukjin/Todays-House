import React from 'react';
import axios from 'axios';
import Sub3ComponentChild from './Sub3ComponentChild'

export default function Sub3Component({노하우}){



    // 노하우 페이지
    return (
        <div id='sub3'>
            <div className="container">
                <div className="gap">
                    <div className="head-box">
                        <div className="icon-box">
                            <ul>
                                <li>
                                    <a href="!#"><img src="../images/icon_house.png" alt="" />전셋집꾸미기</a>
                                </li>
                                <li>
                                    <a href="!#"><img src="../images/icon_hand.png" alt="" />셀프인테리어</a>   
                                </li>
                                <li>
                                    <a href="!#"><img src="../images/icon_table.png" alt="" />신혼가구쇼핑</a>
                                </li>
                                <li>
                                    <a href="!#"><img src="../images/icon_roll.png" alt="" />리모델링</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="title-box">
                        <div className="title">
                            <h2>테마별 노하우</h2>
                            <button>최신순<img src="../images/arrow_down.png" alt="" /></button>
                        </div>
                    </div>
                    <div className="nav-box">
                        <div className="nav">
                            <ul>
                                <li><a href="!#">전체</a></li>
                                <li><a href="!#">시공정보</a></li>
                                <li><a href="!#">수납</a></li>
                                <li><a href="!#">꾸미기팁</a></li>
                                <li><a href="!#">청소</a></li>
                                <li><a href="!#">DIY&리폼</a></li>
                                <li><a href="!#">이거어때</a></li>
                                <li><a href="!#">생활정보</a></li>
                                <li><a href="!#">건축&주택</a></li>
                                <li><a href="!#">상업공간</a></li>
                                <li><a href="!#">지식백과</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="nohow-box">
                        <Sub3ComponentChild 노하우={노하우} />
                    </div>
                </div>
            </div>
        </div>
    );
};
