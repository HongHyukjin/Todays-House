import React from 'react';

export default function Sub3Componentchild({노하우}){
    return (
        <>
            {
                
                노하우.map((item)=>{
                    return (
                        <div className="nohow" key={item.제품코드}>
                            <div className="content-image">
                                <div className="image">
                                    <img src={`./images/sub3/${item.이미지}`} alt="" />
                                </div>
                                <span>
                                    <img src="./images/new_baner.png" alt="" />
                                </span>
                                <button><img src="./images/button_baner.png" alt="" /></button>
                            </div>
                            <div className="content-title">
                                <h1 className="top">
                                    {item.설명란}
                                </h1>
                                <h3 className="middle">
                                    {item.출처}
                                </h3>
                                <h4 className="end">
                                    {item.조회수}
                                </h4>
                            </div>
                        </div>
                    )
                })
            }
         </>
    );
};
