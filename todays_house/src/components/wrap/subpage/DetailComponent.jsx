/* eslint-disable no-unused-expressions */
import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function DetailComponent ({사진}) {

        let {id} = useParams();
  
        
        React.useEffect(()=>{
   
            console.log(사진);
            console.log(id);
        },[]) 

  
      

  
   
    return (
        
        <div id='detail'  key={id}>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <a href="!#">{사진[id].주거형태}</a>
                        <a href="!#">{사진[id].평수}</a>
                        <a href="!#">{사진[id].스타일}</a>
                        <a href="!#">{사진[id].공간}</a>
                    </div>
                    <div className="content">
                        <div className="center-box">
                            <img src={`/images/sub1/${사진[id].이미지2}`} alt="" />
                        </div>
                        <div className="center-txt">
                            <ul>
                                <li><h3>{사진[id].설명란}</h3></li>
                                <li><a href="!#">{사진[id].테그}</a></li>
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

 