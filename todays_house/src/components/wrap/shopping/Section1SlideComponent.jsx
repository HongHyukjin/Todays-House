import React from 'react';

export default function Section1SlideComponent({ 슬라이드, n }) {
    return (
        <div className="slide-container">
            <div className="slide-view">
                <ul className="slide-wrap">
                    {
                        슬라이드.map((item,idx) => {
                            return (
                                <li className="slide" key={idx}><a href="!#"><img src={item.src} alt="" /></a></li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

