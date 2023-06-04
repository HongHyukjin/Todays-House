/* eslint-disable no-unused-expressions */
import React from 'react';
import $ from 'jquery';
import { useParams } from "react-router-dom";

export default function Sub1DetailComponent ({사진}) {

        const {id} = useParams();
  
        const [state,setState] = React.useState({
            사진 : [],
            isFixed:false,
            zzim_on:[],
            scrap_on : []
        })
    
        React.useEffect(() => {
            const data = JSON.parse(localStorage.getItem('사진'));
            setState({
                ...state,
                사진 : data[id]
            })
        }, [])

        React.useEffect(()=>{
            let isFixed =false;
            $(window).scroll(function(){
                console.log($(window).scrollTop());
                if($(window).scrollTop()>=200){
                    isFixed = true;
                }
                else{
                    isFixed = false;
                }
                setState((prevState)=>({
                    ...prevState,
                    isFixed:isFixed
                }))
            });
          
        },[state.isFixed]);

        const onClickHeart = (e, id, 이미지) => {
            e.preventDefault();
            let value = {
                "user_email": sessionStorage.getItem('user_email'),
                "id": id,
                "imagepath": `http://localhost:3000/images/sub1/${이미지}`,
                "sub": '서브1'
            }
    
            if (state.zzim_on.includes(id)) {
                $.ajax({
                    url: 'http://localhost:8080/JSP/ohouse/zzim_delete_action.jsp',
                    type: 'POST',
                    data: value,
                    success(res) {
                        console.log('AJAX 성공!');
                        console.log(res);
                        console.log(JSON.parse(res));
                        setState({
                            ...state,
                            // 현재 누른 데이터 scrap
                            zzim_on: state.zzim_on.filter(item => item !== id)
                        })
                    },
                    error(err) {
                        console.log('AJAX 실패!' + err);
                    }
                });
            }
    
            else {
                $.ajax({
                    url: 'http://localhost:8080/JSP/ohouse/zzim_post_action.jsp',
                    type: 'POST',
                    data: value,
                    success(res) {
                        console.log('AJAX 성공!');
                        console.log(res);
                        console.log(JSON.parse(res));
                        setState({
                            ...state,
                            // 현재 누른 데이터 scrap
                            zzim_on: [...state.zzim_on, id]
                        })
                    },
                    error(err) {
                        console.log('AJAX 실패!' + err);
                    }
                });
            }
        }
    
        const getZzim = async () => {
            try {
                let zzim_on = [];
                const user_email = sessionStorage.getItem('user_email');
                const form_data = {
                    "user_email": user_email
                }
    
                const res = await $.ajax({
                    url: 'http://localhost:8080/JSP/ohouse/zzim_select_action.jsp',
                    type: 'POST',
                    data: form_data,
                    dataType: 'json',
                });
                console.log('AJAX 성공!');
                console.log(res.result);
                for(let i=0; i<res.result.length; i++){
                    if(res.result[i].sub === '서브1'){
                        zzim_on = [...zzim_on, Number(res.result[i].id)];
                    }
                }
                setState((prevState) => ({
                    ...prevState,
                    zzim_on : zzim_on
                }));
            } catch (err) {
                console.log('AJAX 실패!' + err);
            }
        }
        const onClickScrap = (e, id, 이미지) => {
            e.preventDefault();
            let value = {
                "user_email": sessionStorage.getItem('user_email'),
                "id": id,
                "imagepath": `http://localhost:3000/images/sub1/${이미지}`,
                "sub": '서브1'
            }
    
            if (state.scrap_on.includes(id)) {
                $.ajax({
                    url: 'http://localhost:8080/JSP/ohouse/scrap_delete_action.jsp',
                    type: 'POST',
                    data: value,
                    success(res) {
                        console.log('AJAX 성공!');
                        console.log(res);
                        console.log(JSON.parse(res));
                        setState({
                            ...state,
                            // 현재 누른 데이터 scrap
                            scrap_on: state.scrap_on.filter(item => item !== id)
                        })
                    },
                    error(err) {
                        console.log('AJAX 실패!' + err);
                    }
                });
            }
    
            else {
                $.ajax({
                    url: 'http://localhost:8080/JSP/ohouse/scrap_post_action.jsp',
                    type: 'POST',
                    data: value,
                    success(res) {
                        console.log('AJAX 성공!');
                        console.log(res);
                        console.log(JSON.parse(res));
                        setState({
                            ...state,
                            // 현재 누른 데이터 scrap
                            scrap_on: [...state.scrap_on, id]
                        })
                    },
                    error(err) {
                        console.log('AJAX 실패!' + err);
                    }
                });
            }
        }
    
        const getScrap = async () => {
            try {
                let scrap_on = [];
                const user_email = sessionStorage.getItem('user_email');
                const form_data = {
                    "user_email": user_email
                }
    
                const res = await $.ajax({
                    url: 'http://localhost:8080/JSP/ohouse/scrap_select_action.jsp',
                    type: 'POST',
                    data: form_data,
                    dataType: 'json',
                });
                console.log('AJAX 성공!');
                console.log(res.result);
                for(let i=0; i<res.result.length; i++){
                    if(res.result[i].sub === '서브1'){
                        scrap_on = [...scrap_on, Number(res.result[i].id)];
                    }
                }
                setState((prevState) => ({
                    ...prevState,
                    scrap_on : scrap_on
                }));
            } catch (err) {
                console.log('AJAX 실패!' + err);
            }
        }
    
    
        React.useEffect(()=>{
            getZzim();
            getScrap();
        },[])

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
                        <div className= {`like-btn ${state.isFixed?` on`:''}`}>
                            <button className={`like ${state.zzim_on.includes(Number(id))?'on':''}`}  onClick={(e)=>onClickHeart(e, Number(id), state.사진.이미지2)}>
                                <svg class="content-detail-sidebar__icon-blue icon" width="24" height="24" fill="#fff" stroke="rgba(130, 140, 148,0.5)" strokeWidth="1" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M23.22 7.95c.4 4.94-2.92 9.71-10.92 13.85a.47.47 0 0 1-.42 0C3.88 17.66.56 12.9.96 7.93 1.54 2.48 8.28.3 12.1 4.7c3.8-4.4 10.55-2.22 11.13 3.25z"></path></svg>
                            </button>
                            <button className={`like ${state.scrap_on.includes(Number(id))?'on':''}`}  onClick={(e)=>onClickScrap(e, Number(id), state.사진.이미지2)}>
                                <svg class="content-detail-sidebar__icon-inactive icon" width="24" height="24" viewBox="0 0 24 24" fill="rgba(130, 140, 148,0.5)" preserveAspectRatio="xMidYMid meet"><path fillRule="evenodd" transform="matrix(1 0 0 -1 0 23.033)" d="M12.943 6.342a2 2 0 0 1-1.886 0L3 2.032V20.5a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5V2.033l-8.057 4.309zm-.471-.882l8.056-4.31A1 1 0 0 1 22 2.034V20.5a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 20.5V2.033a1 1 0 0 1 1.472-.882l8.056 4.31a1 1 0 0 0 .944 0z"></path></svg>                        
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
     
    );
};

 