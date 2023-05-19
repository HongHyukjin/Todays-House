import React from 'react';

export default function Sub3ComponentChild ({특가혜택}) {


    return (
        <ul>
           {
                특가혜택.map((item)=>{
                    return(
                        <li key={item.제품코드}>
                            <a href="!#">
                                <div className="img-box">
                                    <img src={`./images/sub4/${item.이미지}`} alt="" />                                   
                                </div>                                
                            </a>
                        </li> 
                    )
                })
           }
        </ul>
    );
};
