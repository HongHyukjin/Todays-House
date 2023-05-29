import React from 'react';
import {Link} from 'react-router-dom';

export default function Sub1ComponentChild({ 사진 }) {
    
    return (
        <>
            {
                사진.map((item,id) => {
                    return (
                        <div className="pitbox" key={id}>
                            <div className="headbox">
                                <div className="banner">
                                    <div className="banner-head">
                                        <Link to={`/서브페이지/서브1/${id}`}><img src={`../images/sub1/${item.이미지}`} alt="" />{item.헤드제목}</Link>
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
                                    <Link to={`/서브페이지/서브1/${id}`}><img src={`../images/sub1/${item.이미지2}`} alt="" /></Link>
                                </div>
                                <div className="body-button">
                                    <button className="heart"><img src={`../images/sub1/${item.하트버튼}`} alt="" /></button>
                                    <button className="comment"><img src={`../images/sub1/${item.코멘트버튼}`} alt="" /></button>
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

