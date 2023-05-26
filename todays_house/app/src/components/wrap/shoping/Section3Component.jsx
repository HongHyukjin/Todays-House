import React from 'react';
import axios from 'axios';
import Section3Componentchild from './Section3Componentchild'

export default function Section3Component(){

    const [state,setState] = React.useState({
        쇼핑홈 : []
    });

    const getNewshopProduct=()=>{
        axios({
            url : './data/shop.json',
            method : 'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                쇼핑홈 : res.data.쇼핑홈
            })
        })
        .catch((err)=>{
            console.log("AXIOS 오류!" + err)
        })
    }

    React.useEffect(()=>{
        getNewshopProduct();
    },[]);

    // 쇼핑 세션페이지
    return (
        <div id='shopsection3'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>오늘의딜</h1>
                        <a href="!#">더보기</a>
                    </div>
                    <div className="content">
                        <Section3Componentchild 쇼핑홈={state.쇼핑홈}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

