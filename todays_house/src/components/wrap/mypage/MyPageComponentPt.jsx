import React from 'react';
import $ from 'jquery';

export default function MyPageComponentPt ()  {

    const [state,setState] = React.useState({
        닉네임 : '닉네임',
        imgUrl : '../images/avatar.avif',
        사진:'',
        isPost:false,
        noRes:true
    })


    const getUserData = () => {
        const user_email = sessionStorage.getItem('user_email');
        const form_data = {
            "user_email": user_email
        }

        $.ajax({
            url: 'http://localhost:8080/JSP/ohouse/update_getjoin_action.jsp',
            type: 'POST',
            data: form_data,
            dataType: 'json',
            success(res) {
                console.log('AJAX 성공!');
                console.log(res.result); // 결과 데이터 출력
                setState({
                    ...state,
                    닉네임 : res.result.닉네임 === "null" ? '' : res.result.닉네임,
                    imgUrl: res.result.imgUrl === "null" ? '../images/avatar.avif' : res.result.imgUrl
                })
            },
            error(err) {
                console.log('AJAX 실패!' + err);
            },
        });
    }

    // React.useEffect(()=>{
    //     getUserData();
    // }, [])

    const getPhoto=()=>{
        const user_email = sessionStorage.getItem('user_email');
        const form_data = {
            "user_email": user_email
        }

        $.ajax({
            url:'http://localhost:8080/JSP/ohouse/photo_select_action.jsp',
            type: 'POST',
            data: form_data,
            dataType: 'json',
            success(res){
                console.log('AJAX 성공');
                // console.log(res);
                console.log(res.result);
                let 사진 = '';
                let isPost = false;
                let noRes = true;   
                
                if(사진 === ''){
                    isPost = true;
                    noRes = false;
                }
                else{
                    isPost = false;
                    noRes = true;
                }

                setState({
                    ...state,
                    사진 : res.result,
                    isPost : isPost,
                    noRes : noRes
                })
            },
            error(err){
                console.log('AJAX 실패'+err);
            }
        })
    }


    React.useEffect(()=>{
        getPhoto();
        getUserData();
    },[]);

 
    return (
        <div id='myPagePt' >
            <div className="container">
                <div className="gap">
                    <div className="left">
                        <div className="profile">
                            <div className="up-box">
                                <div className="img-box">
                                    <img src={state.imgUrl} alt="" />
                                </div>
                                <h2>{state.닉네임}</h2>
                                <ul>
                                    <li>팔로워 <span>0</span> </li>
                                    <i>|</i>
                                    <li>팔로잉 <span>0</span></li>
                                </ul>
                                <div className="btn">
                                    <button>설정</button>
                                </div>
                            </div>
                            <ul className="down-box">
                                <li>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" preserveAspectRatio="xMidYMid meet"><path fillRule="evenodd" transform="matrix(1 0 0 -1 0 23.033)" d="M12.943 6.342a2 2 0 0 1-1.886 0L3 2.032V20.5a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5V2.033l-8.057 4.309zm-.471-.882l8.056-4.31A1 1 0 0 1 22 2.034V20.5a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 20.5V2.033a1 1 0 0 1 1.472-.882l8.056 4.31a1 1 0 0 0 .944 0z"></path></svg>
                                    <h3>스크랩북</h3>
                                    <h4>0</h4>
                                </li>
                                <li>
                                    <svg width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path fill="currentColor" d="M22.971 7.638c-.548-5.17-7.119-7.135-10.57-2.488a.5.5 0 0 1-.802 0C8.148.503 1.577 2.469 1.029 7.625.642 12.451 3.897 17.183 12 21.436c8.104-4.252 11.36-8.984 10.972-13.798zm.996-.093c.428 5.319-3.137 10.446-11.738 14.899a.5.5 0 0 1-.46 0C3.169 17.99-.395 12.864.034 7.532.656 1.67 7.904-.683 12 4.052 16.096-.683 23.344 1.67 23.967 7.545z"></path></svg>
                                    <h3>좋아요</h3>
                                    <h4>0</h4>
                                </li>
                                <li>
                                    <svg width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path fill="#424242" fillRule="nonzero" d="M22.588 3H1.413C.633 3 0 3.638 0 4.426L0 9.53l.605-.088c.12-.017.243-.026.367-.026 1.413 0 2.558 1.157 2.558 2.584S2.385 14.584.972 14.584c-.124 0-.247-.009-.367-.026L0 14.47l.001 5.104C.001 20.362.633 21 1.413 21h21.175c.78 0 1.412-.638 1.412-1.426V4.426C24 3.638 23.368 3 22.588 3zM1.413 4.07h21.175c.195 0 .353.159.353.356v15.148c0 .197-.158.357-.353.357H1.413l-.071-.008c-.161-.033-.282-.176-.282-.349l-.002-3.923-.086.002c1.997 0 3.617-1.635 3.617-3.653l-.004-.182C4.493 9.945 3.006 8.443 1.152 8.35l-.094-.003.002-3.922c0-.197.158-.357.353-.357zm14.646 2.138c.293 0 .53.237.53.53v1.614c0 .292-.237.53-.53.53-.292 0-.53-.238-.53-.53V6.737c0-.292.238-.53.53-.53zm0 4.455c.293 0 .53.237.53.53v1.614c0 .293-.237.53-.53.53-.292 0-.53-.237-.53-.53v-1.614c0-.293.238-.53.53-.53zm0 4.456c.293 0 .53.237.53.53v1.614c0 .292-.237.53-.53.53-.292 0-.53-.238-.53-.53v-1.615c0-.292.238-.53.53-.53z"></path></svg>
                                    <h3>내 쿠폰</h3>
                                    <h4>0</h4>
                                </li>
                            </ul>
                        </div>
                        <button>취향 공유하고 <span>리워드 받기</span><svg width="1em" height="1em" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" class="css-1pjipdo e1s6kf710"><path fill="currentColor" fillRule="nonzero" d="M6 19.692L8.25 22 18 12 8.25 2 6 4.308 13.5 12z"></path></svg></button>
                    </div>
                    <div className="right">
                        <div className="txt-box">
                            {
                                state.noRes && <p className="no-res" >결과가 존재하지 않습니다.</p>
                             }
                            {
                               
                                state.isPost && 
                                <>

                                    <ul className="is-post">
                                        {
                                            state.사진.map((item, idx) => {
                                                return (
                                                    <li key={idx}>
                                                        <div className="writer-box"><img src="../images/avatar.png" alt="" /> <span>닉네임</span></div>
                                                        <div className="pt-box"><a href="!#"><img src={item.imgUrl} alt="" /></a> </div>
                                                        <div className="ico-box">
                                                            <ul className="ico">
                                                                <li><svg class="icon stroke" aria-label="좋아요" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path fill="fff" fill-rule="nonzero" d="M23.22 7.95c.4 4.94-2.92 9.71-10.92 13.85a.47.47 0 0 1-.42 0C3.88 17.66.56 12.9.96 7.93 1.54 2.48 8.28.3 12.1 4.7c3.8-4.4 10.55-2.22 11.13 3.25z"></path></svg></li>
                                                                <li><svg class="icon stroke" aria-label="스크랩" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path fill="fff" fill-rule="nonzero" d="M11.53 18.54l-8.06 4.31A1 1 0 0 1 2 21.97V3.5A1.5 1.5 0 0 1 3.5 2h17A1.5 1.5 0 0 1 22 3.5v18.47a1 1 0 0 1-1.47.88l-8.06-4.31a1 1 0 0 0-.94 0z"></path></svg></li>
                                                                <li><svg class="icon no-stroke" aria-label="댓글 달기" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path fill="currentColor" fill-rule="nonzero" d="M13.665 18.434l.53-.066C19.69 17.679 23 14.348 23 10c0-4.942-4.235-8.5-11-8.5S1 5.058 1 10c0 4.348 3.31 7.68 8.804 8.368l.531.066L12 21.764l1.665-3.33zm-3.985.926C3.493 18.585 0 14.69 0 10 0 4.753 4.373.5 12 .5S24 4.753 24 10c0 4.69-3.493 8.585-9.68 9.36l-1.647 3.293c-.374.75-.974.744-1.346 0L9.68 19.36z"></path></svg></li>
                                                            </ul>
                                                        </div>
                                                        <div className="memo-box">메모랑 연결 시켜야하는데...</div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </>
                            
                            } 
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

