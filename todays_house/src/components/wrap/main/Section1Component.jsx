import axios from 'axios';
import React from 'react';

export default  function Section1Component(){
    const [state,setState] = React.useState({
        슬라이드:[],
        n:0
    });

    React.useEffect(()=>{
        axios({
            url:'./data/section1.json',
            method:'get'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    슬라이드:res.data.slide1,
                    n:res.data.slide1.length-2
                })
            }
        })
        .catch((err)=>{
            console.log("AXIOS 실패"+err);
        })
    },[]);

    


    return (
        <div id='section1'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="left">
                            <a href="!#"><img src="./images/168146548189338657.jpg" alt="" /></a>
                            <div className="txt">
                                <p>주간베스트🔍 컬러 포인트로 다양한 스타일링 완성!</p>
                                <h5><img src="./images/1480316471_L9jT.webp" alt="" />byulice</h5>
                            </div>
                        </div>
                        <div className="right">
                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">

                                        {
                                            state.슬라이드.map((item,idx)=>{
                                                return (
                                                    <li className='slide' key={idx}><a href="!#"><img src={item.src} alt="" /></a></li>
                                                )
                                            })
                                        }
                                    
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

