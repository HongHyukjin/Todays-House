/* eslint-disable no-unused-expressions */
import React from 'react';
import { useParams } from "react-router-dom";

export default function Sub1DetailComponent ({사진}) {

        const {id} = useParams();
  
        const [state,setState] = React.useState({
            사진 : []
        })
    
        React.useEffect(() => {
            const data = JSON.parse(localStorage.getItem('사진'));
            setState({
                ...state,
                사진 : data[id]
            })
        }, [])



    return (
        
        <div id='sub1Detail' >
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <a href="!#">{state.사진.주거형태}</a>
                        <a href="!#">{state.사진.평수}</a>
                        <a href="!#">{state.사진.스타일}</a>
                        <a href="!#">{state.사진.공간}</a>
                    </div>
                    <div className="content">
                        <div className="center-box">
                            <img src={`/images/sub1/${state.사진.이미지2}`} alt="" />
                        </div>
                        <div className="center-txt">
                            <ul>
                                <li><h3>{state.사진.설명란}</h3></li>
                                <li><a href="!#">{state.사진.테그}</a></li>
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
     
     
    );
};

 