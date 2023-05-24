import React from 'react';

export default function Sub2Componentchild({ 집들이 }) {
    return (
        <>
            {
                집들이.map((item) => {
                    return (
                        <div className="content">
                            <div className="img-box" key={item.제품코드}>
                                <img src={`./images/sub2/${item.이미지}`} alt="" />
                                <span>
                                    <img src="./images/new_baner.png" alt="" />
                                </span>
                                <button><img src="./images/sub2/button_baner.png" alt="" /></button>
                            </div>
                            <div className="title-box">
                                <h2>{item.설명란}</h2>
                                <span><img src={`./images/sub2/${item.이미지2}`} alt="" />{item.출처}</span>
                                <p>{item.조회수}</p>
                            </div>
                        </div>
                    )
                })

            }
        </>
    );
};