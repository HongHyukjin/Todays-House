
import React, {useRef} from 'react';
import $ from 'jquery';

export default  function UploadPhotoComponent ()  {
    const [state,setState] = React.useState({
        file : '',
        imgUrl : '',
        pyeong:'',
        type:'',
        style:'',
        place:'',
        memo:''
      })
    
      const imageInput = useRef();
    
      const onClickImageUpload = (e) => {
        e.preventDefault();
        imageInput.current.click();
        console.log("img upload btn click");
   
      }
    
      const onClickImage = (e) => {
        e.target.value = null;
      }
    
      const onChangeImage = (e) => {
        console.log("img upload");
        let file = e.target.files[0];
        console.log(file);
        console.log(e.target);
        let reader = new FileReader();
        
        reader.onload = (event) =>{
            setState({
                ...state,
                file: file,
                imgUrl: event.target.result,
            })
        }
        reader.readAsDataURL(file);


        let photoBox = $('.photo-box');
        photoBox.css({border:0});
        
      }

    
      const onClickDelImage = (e) => {
        e.preventDefault();
        console.log("img delete");
        setState({
          ...state,
          file : '',
          imgUrl:'',
        })
        let photoBox = $('.photo-box');
        photoBox.css({border:'1px dashed #dadce0 '});
      }
    
      React.useEffect(()=>{
        if(state.file !== ''){
          $('.input .img_del').css({"display":"block"})
          $('.ico').css({"display":"none"})
          $('.re').css({"display":"block"})
          $('.input').css({"background":"#f7f8fa"})
          $('.img_upload:hover').css({"background":"#fff"})
        //   $('.img_upload').css({"position":"absolute","bottom":"10","left":"15","width":"24","height":"24"});
        }
        else{
          $('.input .img_del').css({"display":"none"})
          $('.ico').css({"display":"flex"})
          $('.re').css({"display":"none"})
          $('.input').css({"background":"trnsparent"})
        }
      }, [state.file])
    
      React.useEffect(()=>{
        let imgHeight = $('.section3 .input img').height();
        $('.section3 .input >div').css({"height": imgHeight});
      },[state.imgUrl])
    
    React.useEffect(()=>{
        $('.nav-btn').on({
            click(e){
                e.preventDefault();
                $('.nav-btn').removeClass('on');
                $(this).toggleClass('on');
            }
        })
    })

    const onClickSubmit=(e)=>{
        console.log('클릭');
        onSubmitPhotoPost();
        console.log('길이 : ',state.imgUrl.length);
    } 

    const onSubmitPhotoPost=()=>{ 
        
        const formData = {
            "pyeong":state.pyeong,
            "type":state.type,
            "style":state.style,
            "file":state.imgUrl,
            "place":state.place,
            "memo":state.memo
        }
      
    
        $.ajax({
            url:'http://localhost:8080/JSP/ohouse/post_action.jsp',
            type:'post',
            data:formData,
            success(res){
                console.log('AJAX 성공');
                console.log(res);
                window.location.href = '/마이페이지'
            },
            error(err){
                console.log('AJAX 실패'+err);
            }
        })
        
    }

    const onChangePyeong =(e)=>{
        let 평수 =e.target.value;
        setState({
            ...state,
            pyeong:평수
        }) 
    }
    const onChangeType =(e)=>{
        let 주거형태 =e.target.value;
        setState({
            ...state,
            type:주거형태
        }) 
    }
    const onChangeStyle =(e)=>{
        let 스타일 =e.target.value;
        setState({
            ...state,
            style:스타일
        }) 
    }
    const onChangePlace =(e)=>{
        let 공간 =e.target.value;
        setState({
            ...state,
            place:공간
        }) 
    }
    const onChangeMemo =(e)=>{
        let 메모 =e.target.value;
        setState({
            ...state,
            memo:메모
        }) 
    }




    return (
        <div id='uploadPt'>
            <section className='section1'>
                <div className="container">
                    <div className="gap">
                        <a href="!#"><svg class="icon" width="74" height="30" viewBox="0 0 74 30" preserveAspectRatio="xMidYMid meet"><g fill="none" fill-rule="evenodd"><path fill="#000" d="M14.2 25.17H9.28V20.7a1.45 1.45 0 0 0-2.9 0v4.47H1.44a1.45 1.45 0 1 0 0 2.9H14.2a1.45 1.45 0 0 0 0-2.9M4.5 9.15c0-4.6 2.08-5.28 3.33-5.28 1.24 0 3.33.69 3.33 5.28v.36c0 4.6-2.09 5.28-3.33 5.28-1.25 0-3.34-.69-3.34-5.28v-.36zm3.33 8.54c3.84 0 6.23-3.13 6.23-8.18v-.36c0-5.05-2.39-8.18-6.23-8.18-3.85 0-6.24 3.13-6.24 8.18v.36c0 5.05 2.39 8.19 6.24 8.19zm25.54-7.34H17.81a1.45 1.45 0 0 0 0 2.9h15.56a1.45 1.45 0 1 0 0-2.9m-1.55 15.5c-7.08 1.83-9.45.79-10.14.25-.45-.35-.65-.8-.65-1.48v-.87h10.25c.8 0 1.46-.65 1.46-1.45v-5.08c0-.8-.66-1.45-1.46-1.45h-11.7a1.45 1.45 0 1 0 0 2.9h10.25v2.18H19.57c-.8 0-1.45.65-1.45 1.45v2.32a4.6 4.6 0 0 0 1.78 3.78c1.2.93 2.94 1.39 5.21 1.39 2.05 0 4.54-.38 7.44-1.13a1.45 1.45 0 1 0-.73-2.82M20.3 7.83h10.8a1.45 1.45 0 1 0 0-2.9h-9.35V1.45a1.45 1.45 0 1 0-2.9 0v4.93c0 .8.65 1.45 1.45 1.45"></path><rect width="3" height="15" x="70" fill="#000" rx="1.5"></rect><path fill="#000" d="M64.5 13.28a1.45 1.45 0 0 0 2.73-1c-.05-.13-1-2.68-3.38-4.5l3.7-4.1a1.45 1.45 0 0 0-1.09-2.42h-9.05a1.45 1.45 0 1 0 0 2.9h5.8l-6.88 7.64a1.45 1.45 0 1 0 2.16 1.95l3.41-3.8a8 8 0 0 1 2.6 3.33M69.56 26.52h-7.01a.82.82 0 0 1-.82-.82v-1.95h8.65v1.95c0 .45-.37.82-.82.82m2.27-9.37c-.8 0-1.45.65-1.45 1.45v2.25h-8.65V18.6a1.45 1.45 0 1 0-2.9 0v7.1a3.73 3.73 0 0 0 3.72 3.72h7.01a3.73 3.73 0 0 0 3.72-3.72v-7.1c0-.8-.65-1.45-1.45-1.45M42.46 3.87c2.22 0 2.33 4.24 2.33 5.08 0 .85-.11 5.09-2.33 5.09-2.21 0-2.32-4.24-2.32-5.08 0-.86.11-5.09 2.32-5.09m0 13.07c1.76 0 3.23-.93 4.14-2.62.71-1.34 1.1-3.2 1.1-5.36s-.39-4.02-1.1-5.37A4.6 4.6 0 0 0 42.46.97c-1.76 0-3.22.93-4.13 2.62-.72 1.35-1.1 3.2-1.1 5.37s.38 4.01 1.1 5.36a4.59 4.59 0 0 0 4.13 2.62"></path><path fill="#000" d="M51.4.49c-.8 0-1.45.65-1.45 1.45v17.78c-1.93.6-5.75 1.13-10.38 1.13h-2.2a1.45 1.45 0 0 0 0 2.9h2.2c2.64 0 7.21-.23 10.38-1.02v4.84a1.45 1.45 0 0 0 2.9 0V1.94c0-.8-.65-1.45-1.45-1.45"></path></g></svg></a>
                        <button onClick={onClickSubmit}>올리기</button>
                    </div>
                </div>
            </section>
            <section className='section2'>
                <div className="container">
                    <div className="gap">
                        <ul>
                            <li><a href="!#" className='nav-btn' >사진</a></li>
                            <li><a href="!#" className='nav-btn'>동영상</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='section3'>
                <div className="container">
                    <div className="gap">
                        <form action="./post_action.jsp" name='upload_pt' id='uploadPt' onSubmit={onSubmitPhotoPost}>
                            <div className="btn-box">
                                <div className="select">
                                    <select name="pyeong" id="pyeong" onChange={onChangePyeong} value={state.pyeong}>
                                        <option value="평수">평수</option>
                                        <option value="10평 미만">10평 미만</option>
                                        <option value="10평대">10평대</option>
                                        <option value="20평대">20평대</option>
                                        <option value="30평대">30평대</option>
                                        <option value="40평대">40평대</option>
                                        <option value="50평 이상">50평 이상</option>
                                    </select>
                                    <svg class="icon" width="10" height="10" preserveAspectRatio="xMidYMid meet" fill="#dbdbdb"><path fill-rule="evenodd" d="M0 3l5 5 5-5z"></path></svg>
                                </div>
                                <div className="select">
                                    <select name="type" id="type" onChange={onChangeType} value={state.type}>
                                        <option value="주거형태">주거형태</option>
                                        <option value="원룸&오피스텔">원룸&오피스텔</option>
                                        <option value="아파트">아파트</option>
                                        <option value="빌라&연립">빌라&연립</option>
                                        <option value="단독주택">단독주택</option>
                                        <option value="사무공간">사무공간</option>
                                        <option value="상업공간">상업공간</option>
                                        <option value="기타">기타</option>
                                    </select>
                                    <svg class="icon" width="10" height="10" preserveAspectRatio="xMidYMid meet" fill="#dbdbdb"><path fill-rule="evenodd" d="M0 3l5 5 5-5z"></path></svg>

                                </div>
                                <div className="select">
                                    <select name="style" id="style"  onChange={onChangeStyle} value={state.style}>
                                        <option value="스타일">스타일</option>
                                        <option value="모던">모던</option>
                                        <option value="북유럽">북유럽</option>
                                        <option value="빈티지">빈티지</option>
                                        <option value="내추럴">내추럴</option>
                                        <option value="프로방스&로맨틱">프로방스&로맨틱</option>
                                        <option value="클래식&앤틱">클래식&앤틱</option>
                                        <option value="한국&아시아">한국&아시아</option>
                                        <option value="유니크">유니크</option>
                                    </select>
                                    <svg class="icon" width="10" height="10" preserveAspectRatio="xMidYMid meet" fill="#dbdbdb"><path fill-rule="evenodd" d="M0 3l5 5 5-5z"></path></svg>

                                </div>
                            </div>
                            <div className="bottom">
                                <div className="left">
                                    <div className="photo-box">
                                        <div className="input">
                                            <input type="file" name="file" id="file" accept='image/*' ref={imageInput} onChange={onChangeImage} onClick={onClickImage} />
                                            {/* <img src={state.imgUrl} alt="" /> */}
                                            <button className='img_upload' onClick={onClickImageUpload}>        
                                                <div className="ico">
                                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="#828c94" preserveAspectRatio="xMidYMid meet" class="css-hcf77b em8wpqo2"><path d="M11.952 9.778l2.397-5.994A1.778 1.778 0 0 1 16 2.667h16c.727 0 1.38.442 1.65 1.117l2.398 5.994h10.174c.982 0 1.778.796 1.778 1.778v32c0 .981-.796 1.777-1.778 1.777H1.778A1.778 1.778 0 0 1 0 43.556v-32c0-.982.796-1.778 1.778-1.778h10.174zM24 38c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11z"></path></svg>
                                                        <h5>사진 올리기</h5>
                                                        <p>(*최대 10장까지)</p>
                                                </div>                                                                                           
                                            </button>
                                            <div>
                                                <img src={state.imgUrl} alt="" />
                                                <button className="re" onClick={onClickImageUpload}>
                                                    <svg class="icon" width="30" height="30" fill="#fff" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M17.9 10a6.4 6.4 0 0 0-6-4.5c-3.6 0-6.4 2.9-6.4 6.5s2.8 6.5 6.3 6.5c2.2 0 4.1-1 5.3-2.9a.7.7 0 1 1 1.2.8 7.8 7.8 0 0 1-6.5 3.6C7.5 20 4 16.4 4 12s3.5-8 7.8-8c3.4 0 6.3 2.2 7.4 5.3l.7-1.4a.7.7 0 1 1 1.3.7l-1.8 3.1a.7.7 0 0 1-1 .3l-3-1.8a.7.7 0 1 1 .7-1.3l1.8 1z"></path></svg>
                                                </button>
                                                <button className='img_del' onClick={onClickDelImage}>
                                                    <svg class="icon" width="30" height="30" fill="#fff" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M6 19V7h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zM19 4v2H5V4h3.5l1-1h5l1 1H19z"></path></svg>
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="right">
                                    <ul>
                                        <li>
                                            <select name="place" id="place" onChange={onChangePlace}>
                                                <option value="공간 (필수)">공간 (필수)</option>
                                                <option value="원룸">원룸</option>
                                                <option value="거실">거실</option>
                                                <option value="침실">침실</option>
                                                <option value="주방">주방</option>
                                                <option value="욕실">욕실</option>
                                                <option value="아이방">아이방</option>
                                                <option value="드레스룸">드레스룸</option>
                                                <option value="서재&작업실">서재&작업실</option>
                                                <option value="베란다">베란다</option>
                                                <option value="사무공간">사무공간</option>
                                                <option value="상업공간">상업공간</option>
                                                <option value="가구&소품">가구&소품</option>
                                                <option value="현관">현관</option>
                                                <option value="외관&기타">외관&기타</option>
                                            </select>
                                            <svg class="icon" width="10" height="10" preserveAspectRatio="xMidYMid meet" fill="#bdbdbd"><path fill-rule="evenodd" d="M0 3l5 5 5-5z"></path></svg>
                                        </li>
                                        <li>
                                            <textarea type="memo" id='pictureInfo' name='picture-info' placeholder='사진에 대해 설명해주세요.' onChange={onChangeMemo}/>
                                        </li>
                                        <li>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

