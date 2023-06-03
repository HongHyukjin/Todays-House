/* eslint-disable no-unused-expressions */
import React from 'react';
import $ from 'jquery';
import { useParams } from "react-router-dom";

export default function Sub2DetailComponent ({집들이}) {

    let {id} = useParams();

    const [state,setState] = React.useState({
        집들이 : [],
        isFixed:false,
        zzim_on:[],
        scrap_on:[]
    });

    React.useEffect(()=>{
        let isFixed =false;
        $(window).scroll(function(){
            if($(window).scrollTop()>=600){
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

    React.useEffect(() => {
        const data = JSON.parse(localStorage.getItem('집들이'));
        console.log(data[id]);
        setState((prevState)=>({
            ...prevState,
            집들이 : data[id]
        }))
    }, [])

    const onClickHeart = (e, id, 이미지) => {
        e.preventDefault();
        let value = {
            "user_email": sessionStorage.getItem('user_email'),
            "id": id,
            "imagepath": `http://localhost:3000/images/sub2/${이미지}`,
            "sub": '서브2'
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
                if(res.result[i].sub === '서브2'){
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
            "imagepath": `http://localhost:3000/images/sub2/${이미지}`,
            "sub": '서브2'
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
                if(res.result[i].sub === '서브2'){
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
        
        <div id='sub2Detail'>
            <div className="container">
                <div className="sub2-img-up">
                    <img src={`/images/sub2/${state.집들이.배너이미지}` }alt="" />
                </div>
                <div className="gap">
                    <div className="title">
                        <h1>{state.집들이.설명란}</h1>
                    </div>
                    <div className="nick-box">
                        <div className="nickname">
                            <img src={`/images/sub2/${state.집들이.이미지2}`} alt="" />
                            <div className="name">
                                <h3>{state.집들이.출처}</h3>
                                <p>{state.집들이.시간}</p>
                            </div>
                        </div>
                        <div className="button">
                            <button><svg class="icon" width="9" height="10" viewBox="0 0 9 10" fill="none" preserveAspectRatio="xMidYMid meet"><path d="M3.75 4.25V0.5H5.25V4.25L9 4.25V5.75H5.25V9.5H3.75V5.75H0V4.25L3.75 4.25Z" fill="white"></path></svg>팔로우</button>
                        </div>
                    </div>
                    <div className="info-box">
                        <dl className='up'>
                            <div className="info">
                                <dt><svg className="icon" ariaLabel="공간" width="38" height="38" viewbox="0 0 38 38" preserveAspectRatio="xMidYMid meet"><g fill="none" fillRule="evenodd"><path d="M0 0h38v38H0z"></path><rect width="19.53" height="23.75" x="3.43" y="7.13" fill="#FFF" stroke="#525B61" rx="2.38"></rect><rect width="3.17" height="3.17" x="8.18" y="17.42" stroke="#525B61" rx="1.27"></rect><rect width="3.17" height="3.17" x="8.18" y="11.08" stroke="#525B61" rx="1.27"></rect><rect width="3.17" height="3.17" x="8.18" y="23.75" stroke="#525B61" rx="1.27"></rect><rect width="3.17" height="3.17" x="15.31" y="17.42" stroke="#525B61" rx="1.27"></rect><rect width="3.17" height="3.17" x="15.31" y="11.08" stroke="#525B61" rx="1.27"></rect><rect width="3.17" height="3.17" x="15.31" y="23.75" stroke="#525B61" rx="1.27"></rect><rect width="8.44" height="8.44" x="26.39" y="19" fill="#EAEBEF" stroke="#525B61" rx="4.22"></rect><rect width="1.58" height="4.22" x="29.56" y="27" fill="#525B61" rx=".79"></rect></g></svg></dt>
                                <dd>{state.집들이.주거형태}</dd>
                            </div>
                            <i>|</i>
                            <div className="info">
                                <dt><svg className="icon" ariaLabel="평수" width="38" height="38" viewbox="0 0 38 38" preserveAspectRatio="xMidYMid meet"><g fill="none" fillRule="evenodd"><path d="M0 0h38v38H0z"></path><rect width="26.92" height="23.75" x="5.54" y="7.13" fill="#FFF" stroke="#525B61" rx="2.38"></rect><path fill="#EAEBEF" fillRule="nonzero" d="M8 7.5h8v23H8a2 2 0 01-2-2v-19c0-1.1.9-2 2-2z"></path><rect width="8.44" height="1" x="5.28" y="20" fill="#525B61" rx=".5"></rect><rect width="10.56" height="1" x="22.17" y="13.72" fill="#525B61" rx=".5"></rect><rect width="1" height="5.28" x="9.5" y="15.5" fill="#525B61" rx=".5"></rect><rect width="1" height="5.28" x="25.33" y="14" fill="#525B61" rx=".5"></rect><rect width="1" height="7.39" x="25.33" y="24" fill="#525B61" rx=".5"></rect><rect width="1" height="24" x="15.83" y="7" fill="#525B61" rx=".5"></rect></g></svg></dt>
                                <dd>{state.집들이.평수}</dd>
                            </div>
                            <i>|</i>
                            <div className="info">
                                <dt><svg className="icon" ariaLabel="분야" height="38" width="38" viewbox="0 0 38 38" preserveAspectRatio="xMidYMid meet"><g fillRule="evenodd" fill="none"><path d="M0 0h38v38H0z"></path><g transform="translate(4.75 4.75)"><path d="M15.05 13.2c0 .67-.42 1.3-1.07 1.58l-2.07 1.05a3.2 3.2 0 00-1.85 3.87l.85 3.7c.14.44.16.92.06 1.37v.02a2.93 2.93 0 01-2.88 2.2H7.8a2.93 2.93 0 01-2.88-2.2c-.1-.46-.08-.94.06-1.4l1-3.69a3.2 3.2 0 00-1.84-3.87l-2.23-1.05a1.75 1.75 0 01-1.07-1.59v-.4h14.2v.4zM1.2 0C.55 0 0 .54 0 1.2v12.14c0 1.22.7 2.11 1.8 2.62l2.2 1c.75.36 1.16 1.44.92 2.24l-1.07 3.56a4.13 4.13 0 003.97 5.32h.26a4.17 4.17 0 004.05-3.25v-.02c.15-.68.12-1.4-.08-2.06l-1.07-3.55c-.24-.8.06-1.82.82-2.17l2.2-1.01c1.1-.5 1.9-1.47 1.9-2.68V1.2c0-.66-.54-1.2-1.2-1.2H1.2zm6.75 25.11a.92.92 0 100-1.84.92.92 0 000 1.84z" fillRule="nonzero" fill="#525B61"></path><path d="M15.05 13.2c0 .67-.42 1.3-1.07 1.58l-2.07 1.05a3.2 3.2 0 00-1.85 3.87l.85 3.7c.14.44.16.92.06 1.37v.02a2.93 2.93 0 01-2.88 2.2H7.8a2.93 2.93 0 01-2.88-2.2c-.1-.46-.08-.94.06-1.4l1-3.69a3.2 3.2 0 00-1.84-3.87l-2.23-1.05a1.75 1.75 0 01-1.07-1.59v-.4h14.2v.4z" fill="#FFF"></path><path d="M.95 11.95h14v-11h-14z" fill="#EAEBEF"></path><rect rx=".5" fill="#525B61" y="11.95" height="1" width="15.6"></rect></g><path transform="rotate(-36 23.82 -17.86)" d="M12.6 6.77a.63.63 0 01-.38.38c-.52.17-.95.48-1.27.91l-3.43 4.66-.62-.45-.27-.18 3.44-4.66c.31-.43.48-.93.49-1.46 0-.2.1-.37.25-.49l1.95-1.46.65.47-.8 2.28zm-3.8 8.21l-.68.93-1.2.43c-.83.29-1.46.97-1.7 1.81l-.53 1.98a4.5 4.5 0 01-.71 1.48l-2.03 2.78a2.84 2.84 0 01-3.98.63 2.82 2.82 0 01-.63-3.97l2.02-2.78c.33-.45.73-.83 1.2-1.13L2.26 16a2.66 2.66 0 001.2-2.16l.04-1.28.67-.93 4.61 3.34zm4.15-12a.6.6 0 00-.72.01l-2.18 1.65c-.44.34-.7.86-.7 1.41 0 .25-.09.49-.23.69l-3.4 4.68-1.02-.74a1 1 0 00-1.4.23l-.82 1.12a1 1 0 00-.19.56l-.03 1.3c-.01.46-.25.87-.62 1.12L-.03 16.1c-.57.37-1.07.84-1.47 1.4l-1.96 2.7a3.94 3.94 0 00.88 5.54 3.95 3.95 0 002.96.71 3.96 3.96 0 002.6-1.59l1.97-2.7c.4-.55.7-1.17.87-1.82l.52-1.92c.12-.44.45-.79.87-.94l1.24-.43c.2-.07.36-.2.48-.36l.81-1.12a1 1 0 00-.22-1.4l-1.02-.73 3.4-4.68c.15-.2.35-.35.59-.43.53-.18.94-.58 1.12-1.11l.9-2.58a.6.6 0 00-.21-.69l-1.35-.97z" fillRule="nonzero" fill="#525B61"></path><path transform="rotate(-36 24.06 -25.79)" d="M7.99 5.16a.62.62 0 01-.4.38c-.5.17-.94.48-1.26.91L2.9 11.11l-.62-.45-.27-.18 3.44-4.66c.31-.43.48-.93.49-1.46 0-.2.1-.37.25-.49l1.95-1.46.65.47L8 5.16z" fill="#FFF"></path><path transform="rotate(-36 24.2 -13.34)" d="M11.55 15.59l-.67.93-1.21.42c-.83.3-1.46.97-1.69 1.82l-.54 1.98a4.52 4.52 0 01-.7 1.47L4.7 25a2.84 2.84 0 01-3.98.63 2.83 2.83 0 01-.63-3.97l2.02-2.79c.33-.44.73-.82 1.19-1.13l1.72-1.12a2.66 2.66 0 001.2-2.16l.03-1.28.68-.93 4.61 3.34z" fill="#FFF"></path></g></svg></dt>
                                <dd>{state.집들이.작업분야}</dd>
                            </div>
                            <i>|</i>
                            <div className="info">
                                <dt><svg className="icon" ariaLabel="가족형태" width="39" height="38" viewbox="0 0 39 38" preserveAspectRatio="xMidYMid meet"><g fill="none" fillRule="evenodd"><path d="M1 0h38v38H1z"></path><path fill="#EAEBEF" d="M1.409 30.382l.489-3.553 1.063-2.294 1.154-1.749.898-1.073 1.136-.704.747-.659 1.015.412 1.562.951h2.982l1.422-.951.762-.412 1.12 1.064 1.563 1.372 1.201 1.507.814 1.974.595 2.432.257 2.207v-.524z"></path><path fill="#525B61" fillRule="nonzero" stroke="#525B61" strokeWidth=".1" d="M15.322 20.596a7.108 7.108 0 002.577-5.477c0-3.926-3.194-7.119-7.12-7.119-3.925 0-7.119 3.193-7.119 7.119 0 2.2 1.004 4.17 2.577 5.476C3.034 22.301 1 25.818 1 29.75a.468.468 0 10.937 0c0-3.761 2.032-7.092 5.18-8.537a7.072 7.072 0 003.662 1.026 7.066 7.066 0 003.656-1.022c3.153 1.446 5.187 4.762 5.187 8.533a.468.468 0 10.937 0c0-3.942-2.032-7.448-5.237-9.154zm-4.543.705a6.188 6.188 0 01-6.181-6.182 6.188 6.188 0 016.181-6.182 6.189 6.189 0 016.183 6.182 6.19 6.19 0 01-6.183 6.182z"></path><path fill="#FFF" d="M10.78 21.301a6.188 6.188 0 01-6.182-6.182 6.188 6.188 0 016.181-6.182 6.189 6.189 0 016.183 6.182 6.19 6.19 0 01-6.183 6.182z"></path><path fill="#EAEBEF" d="M19.2 30.382l.489-3.553 1.062-2.294 1.155-1.749.898-1.073 1.136-.704.746-.659 1.016.412 1.562.951h2.982l1.422-.951.762-.412 1.12 1.064 1.563 1.372 1.201 1.507.813 1.974.596 2.432.257 2.207v-.524z"></path><path fill="#525B61" fillRule="nonzero" stroke="#525B61" strokeWidth=".1" d="M33.522 20.596a7.108 7.108 0 002.577-5.477c0-3.926-3.194-7.119-7.12-7.119-3.925 0-7.119 3.193-7.119 7.119 0 2.2 1.004 4.17 2.576 5.476-3.202 1.706-5.236 5.223-5.236 9.155a.468.468 0 10.937 0c0-3.761 2.032-7.092 5.18-8.537a7.069 7.069 0 003.662 1.026 7.071 7.071 0 003.656-1.022c3.153 1.446 5.187 4.762 5.187 8.533a.468.468 0 10.937 0c0-3.942-2.032-7.448-5.237-9.154zm-4.543.705a6.188 6.188 0 01-6.181-6.182 6.188 6.188 0 016.181-6.182 6.188 6.188 0 016.182 6.182 6.19 6.19 0 01-6.182 6.182z"></path><path fill="#FFF" d="M28.98 21.301a6.188 6.188 0 01-6.182-6.182 6.188 6.188 0 016.181-6.182 6.188 6.188 0 016.182 6.182 6.19 6.19 0 01-6.182 6.182z"></path><path fill="#525B61" fillRule="nonzero" d="M10.731 18.495c1.136 0 2.213-.498 2.766-1.329.204-.277.116-.665-.204-.859a.657.657 0 00-.902.194c-.32.471-.961.748-1.66.748-.698 0-1.339-.277-1.659-.748a.713.713 0 00-.902-.194c-.292.194-.379.582-.204.859.553.83 1.6 1.33 2.765 1.33zm18.276 0c1.136 0 2.213-.498 2.766-1.329.204-.277.116-.665-.204-.859a.657.657 0 00-.902.194c-.32.471-.96.748-1.66.748-.698 0-1.339-.277-1.659-.748a.713.713 0 00-.902-.194c-.291.194-.379.582-.204.859.553.83 1.601 1.33 2.765 1.33z"></path></g></svg></dt>
                                <dd>{state.집들이.가족형태}</dd>
                            </div>

                        </dl>
                        <dl className='bottom'>
                            <div><dt>공간</dt><dd>{state.집들이.주거형태}</dd></div>
                            <div><dt>평수</dt><dd>{state.집들이.평수}</dd></div>
                            <div><dt>작업</dt><dd>{state.집들이.작업자}</dd></div>
                            <div><dt>분야</dt><dd>{state.집들이.작업분야}</dd></div>
                            <div><dt>가족형태</dt><dd>{state.집들이.가족형태}</dd></div>
                            <div><dt>지역</dt><dd>{state.집들이.지역}</dd></div>
                            <div><dt>스타일</dt><dd>{state.집들이.스타일}</dd></div>
                        </dl>
                    </div>
                    <div className="sub2-img-bottom">
                        <img src={`/images/sub2/${state.집들이.메인이미지}`} alt="" />
                        <button className="svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" class="icon"><defs><path id="scrap-icon-2258-b" d="M12.472 6.93l7.056-3.811A1 1 0 0 1 21 4.002v15.496c0 .83-.672 1.502-1.5 1.502h-15c-.828 0-1.5-.673-1.5-1.502V4.002a1 1 0 0 1 1.472-.883l7.056 3.811a.999.999 0 0 0 .944 0z"></path><filter id="scrap-icon-2258-a" width="150%" height="150%" x="-25%" y="-25%" filterUnits="objectBoundingBox"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1.5"></feGaussianBlur><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"></feColorMatrix></filter><filter id="scrap-icon-2258-c" width="150%" height="150%" x="-25%" y="-25%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="1.5"></feGaussianBlur><feOffset in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix></filter></defs><g fill="none" fillRule="nonzero" transform="matrix(1 0 0 -1 0 24)"><use fill="#000" filter="url(#scrap-icon-2258-a)" href="#scrap-icon-2258-b"></use><use fill="#FFF" fillOpacity=".4" href="#scrap-icon-2258-b"></use><use fill="#000" filter="url(#scrap-icon-2258-c)" href="#scrap-icon-2258-b"></use><path stroke="#FFF" d="M12.71 7.37h-.002a1.5 1.5 0 0 1-1.417 0L4.236 3.56a.499.499 0 0 0-.736.442v15.496c0 .553.448 1.002 1 1.002h15c.552 0 1-.449 1-1.002V4.002a.499.499 0 0 0-.734-.443l-7.057 3.81zm-.475-.88h-.001z"></path></g></svg>                        
                        </button>
                    </div>
                    <div className="content">
                        <p>
                            {state.집들이.내용}
                        </p>
                    </div>
                    <div className= {`like-btn ${state.isFixed?` on`:''}`}>
                        <button className={`like ${state.zzim_on.includes(Number(id))?'on':''}`}  onClick={(e)=>onClickHeart(e, Number(id), state.집들이.이미지)}>
                            <svg class="content-detail-sidebar__icon-blue icon" width="24" height="24" fill="#fff" stroke="rgba(130, 140, 148,0.5)" strokeWidth="1" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M23.22 7.95c.4 4.94-2.92 9.71-10.92 13.85a.47.47 0 0 1-.42 0C3.88 17.66.56 12.9.96 7.93 1.54 2.48 8.28.3 12.1 4.7c3.8-4.4 10.55-2.22 11.13 3.25z"></path></svg>
                        </button>
                        <button className={`like ${state.scrap_on.includes(Number(id))?'on':''}`}  onClick={(e)=>onClickScrap(e, Number(id), state.집들이.이미지)}>
                            <svg class="content-detail-sidebar__icon-inactive icon" width="24" height="24" viewBox="0 0 24 24" fill="rgba(130, 140, 148,0.5)" preserveAspectRatio="xMidYMid meet"><path fillRule="evenodd" transform="matrix(1 0 0 -1 0 23.033)" d="M12.943 6.342a2 2 0 0 1-1.886 0L3 2.032V20.5a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5V2.033l-8.057 4.309zm-.471-.882l8.056-4.31A1 1 0 0 1 22 2.034V20.5a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 20.5V2.033a1 1 0 0 1 1.472-.882l8.056 4.31a1 1 0 0 0 .944 0z"></path></svg>                        
                        </button>
                    </div>
                </div>
            </div>
        </div>
     
     
    );
};

 