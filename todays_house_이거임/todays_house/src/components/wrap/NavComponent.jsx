import React from 'react';
import {Link} from 'react-router-dom'

export default function NavComponent() {
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
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

