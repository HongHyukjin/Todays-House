import React from 'react';

export default function FooterComponent(){
    return (
        <div id='footer'>
            <div className="container">
                <div className="gap">
                    <div className="row1">
                        <div className="left-box">
                            <ul>
                                <li><a href="!#" ><span className="center">고객센터</span></a></li>
                                <li><a href="!#" className="num1">1670-0876</a><span> 09:00~18:00</span></li>
                                <li><span>평일: 전체 문의 상담 가능 <br />주말, 공휴일: 오늘의집 직접배송,<br /> 이사/시공/수리 문의 상담 가능</span></li>
                                <button>카톡 상담(평일 09:00~18:00)</button> <br />
                                <button>이메일 문의</button>
                            </ul>
                        </div>
                        <div className="center-box">
                            <ul>
                                <li><a href="!#">회사소개</a></li>
                                <li><a href="!#">입점신청</a></li>
                                <li><a href="!#">채용정보</a></li>
                                <li><a href="!#">제휴/광고 문의</a></li>
                                <li><a href="!#">이용약관</a></li>
                                <li><a href="!#">사업자 구매 회원</a></li>
                                <li><a href="!#">개인정보 처리방침</a></li>
                                <li><a href="!#">시공파트너 안내</a></li>
                                <li><a href="!#">공지사항</a></li>
                                <li><a href="!#">상품광고 소개</a></li>
                                <li><a href="!#">안전거래센터</a></li>
                                <li><a href="!#">고객의 소리</a></li>
                            </ul>
                        </div>
                        <div className="right-box">
                                <ul>
                                    <li><span>주)버킷플레이스<i> | </i>대표이사 이승재<i> | </i>서울 서초구 서초대로74길 4 삼성생명서초타워 25층, 27층<br />
                                        <a href="!#">contact@bucketplace.net</a><i> | </i>사업자등록번호 119-86-91245<a href="!#">사업자정보확인</a><br />
                                        통신판매업신고번호 제2018-서울서초-0580호
                                        </span>
                                    </li>
                                    <div className="img-box">
                                        <img src="./images/8f5b2c2e98ea1196.png" alt="" /><span className="imgword1">오늘의집 서비스 운영<br />2021.09.08~2024.09.07</span>
                                        <img src="./images/d5fb816a58bb6a06.png" alt="" /><span className="imgword">고객님이 현금결제한 금액에 대해 우리은행과 채무지급보증 계약을 체결하<br />여 안전거래를 보장하고 있습니다. 서비스가입사실확인</span>
                                    </div>
                                    <li><span className="font1">(주)버킷플레이스는 통신판매중개자로 거래 당사자가 아니므로, 판매자가 등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다. 단,(주)버킷플레이스가 판매자로 등록 판매한 상품은 판매자로서 책임을 부담합니다.</span></li>
                                    <li>
                                        <a href="!#"><img className="baner" src="./images/youtube.png" alt="" /></a>
                                        <a href="!#"><img className="baner" src="./images/instargram.png" alt="" /></a>
                                        <a href="!#"><img className="baner" src="./images/facebook.png" alt="" /></a>
                                        <a href="!#"><img className="baner" src="./images/blog.png" alt="" /></a>
                                        <a href="!#"><img className="baner" src="./images/naver.png" alt="" /></a>
                                    </li>
                                    <li><span>Copyright 2014. bucketplace, Co., Ltd. All rights reserved.</span></li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
