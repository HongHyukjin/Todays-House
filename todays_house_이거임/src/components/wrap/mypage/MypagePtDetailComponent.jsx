import React from 'react';
import { useParams } from 'react-router-dom';

export default function MypagePtDetailComponent ({사진}) {
    const {id} = useParams();

    return (
        <>
        <div id='detail'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <a href="">{사진[id].pyeong}</a>
                        <i> | </i>
                        <a href="">{`${사진[id].style} 스타일`}</a>
                        <i> | </i>
                        <a href="">{사진[id].type}</a>
                    </div>
                    <div className="content">
                        <div className="center-box">
                            <img src={사진[id].file} alt="" />
                        </div>
                        <div className="center-txt">
                            <ul>
                                <li>{사진[id].memo}</li>
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

 