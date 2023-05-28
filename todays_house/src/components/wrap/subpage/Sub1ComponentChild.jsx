import React from 'react';
import {Link} from 'react-router-dom';

export default function Sub1ComponentChild({ 사진 }) {

    return (
        <>
            {
                사진.map((item, idx) => {
                    return (
                        <div className="pitbox" key={item.제품코드}>
                            <div className="headbox">
                                <div className="banner">
                                    <div className="banner-head">
                                        <a href="!#"><img src={`../images/sub1/${item.이미지}`} alt="" />{item.헤드제목}</a>
                                        <span>{item.중간버튼}</span>
                                        <button type="button">{item.팔로우}</button>
                                    </div>
                                    <div className="banner-footer">
                                        <span className="bannerf">{item.헤드배너}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bodybox">
                                <div className="body-img">
                                    <Link to={`/서브페이지/서브1/상세보기/${idx}`}><img src={`../images/sub1/${item.이미지2}`} alt="" /></Link>
                                </div>
                                <div className="body-button">
                                    <button className="heart"><img src={`../images/sub1/${item.하트버튼}`} alt="" /></button>
                                    <button className="comment"><svg class="icon icon--stroke" aria-label="스크랩" width="24" height="24" fill="#fff" stroke="currentColor" stroke-width="0.5" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M11.53 18.54l-8.06 4.31A1 1 0 0 1 2 21.97V3.5A1.5 1.5 0 0 1 3.5 2h17A1.5 1.5 0 0 1 22 3.5v18.47a1 1 0 0 1-1.47.88l-8.06-4.31a1 1 0 0 0-.94 0z"></path></svg></button>
                                    <button className="reply"><img src={`../images/sub1/${item.리플버튼}`} alt="" /></button>
                                </div>
                                <div className="body-title">
                                    <span>{item.설명란}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}

