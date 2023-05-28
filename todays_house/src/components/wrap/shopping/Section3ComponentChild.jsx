import React from 'react';

export default function Section3ComponentChild({ 쇼핑홈 }) {
    return (
        <>
            {
                쇼핑홈.map((item) => {
                    return (
                        <div className="todaydeal-box">
                            <div className="img-box" key={item.제품코드}>
                                <img src={`./images/shop/${item.상품이미지}`} alt="" />
                            </div>
                            <div className="title-box">
                                <ul>
                                    <li>
                                        <span className="sangho">{item.상호명}</span>
                                    </li>
                                    <li>
                                        <span className="product">{item.상품설명}</span>
                                    </li>
                                    <li>
                                        <span className="rate-percent">{item.할인율}</span>
                                        <span className="price">{item.가격}</span>
                                    </li>
                                    <li>
                                        <img className="star" src={`./images/shop/${item.별이미지}`} alt="" />
                                        <span className="starscore">{item.별점}</span>
                                        <span className="review">{item.리뷰}</span>
                                    </li>
                                    <li>
                                        <span className="badge-list">
                                            <img src={`./images/shop/${item.무료배송}`} alt="" />
                                            <img src={`./images/shop/${item.특가}`} alt="" />
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}

