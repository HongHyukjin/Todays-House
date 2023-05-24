import React from 'react';

export default function Sub1Component({ 사진 }) {
    return (
        <>
            {
                사진.map((item) => {
                    return (
                        <div className="pitbox" key={item.제품코드}>
                            <div className="headbox">
                                <div className="banner">
                                    <div className="banner-head">
                                        <a href="!#"><img src={`./images/sub1/${item.이미지}`} alt="" />{item.헤드제목}</a>
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
                                    <img src={`./images/sub1/${item.이미지2}`} alt="" />
                                </div>
                                <div className="body-button">
                                    <button className="heart"><img src={`./images/sub1/${item.하트버튼}`} alt="" /></button>
                                    <button className="comment"><img src={`./images/sub1/${item.코멘트버튼}`} alt="" /></button>
                                    <button className="reply"><img src={`./images/sub1/${item.리플버튼}`} alt="" /></button>
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

