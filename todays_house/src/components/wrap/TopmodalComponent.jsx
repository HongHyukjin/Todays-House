import React from 'react';

export default function TopmodalComponent({topModalClose}){
    const onClickModalClose=(e)=>{
        e.preventDefault();
        topModalClose('yes',7);
    
    }
    return (
        <div id='topModal'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="topbox">
                            <img src="./images/164718394900874613.png" alt="" />
                            <span onClick={onClickModalClose}></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

