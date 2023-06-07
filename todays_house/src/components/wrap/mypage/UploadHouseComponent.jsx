
import $ from 'jquery';
import React, {useRef} from 'react';
import {Link} from 'react-router-dom';

export default function UploadHouseComponent ()  {

    const [state,setState] = React.useState({
        file : '',
        imgUrl : '',
        house_title:'',
        house_content:'',
        num:0,
        isTitleError:false,
        place:'',
        pyeong:'',
        category:'',
        worker:'',
        family:'',
        area:'',
        area2:'',
        style:''
      })
    
      const imageInput = useRef();
    
      const onClickImageUpload = (e) => {
        e.preventDefault();
        imageInput.current.click();
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
      }

      const onChangeTitle=(e)=>{
        let {value}=e.target;
        let isTitleError=false;
        if (value===''){
          isTitleError=true;
          $('.first-row').css({"border-bottom":"1px solid #ff7777"});
        }
        else{
          isTitleError=false;
          $('.first-row').css({"border-bottom":"1px solid #ddd"});
        }
        setState({
          ...state,
          house_title:value,
          isTitleError:isTitleError
        })

      }

      const onChangeContent=(e)=>{
        let 내용=e.target.value;
        setState({
          ...state,
          house_content:내용
        })
      }

      const onClickDelImage = (e) => {
        e.preventDefault();
        console.log("img delete");
        setState({
          ...state,
          file : '',
          imgUrl:'',
        })
      }
    
      React.useEffect(()=>{
        if(state.file !== ''){ // 사진이 들어가 있으면
          $('.input .img_del').css({"display":"block"})
          $('.ico').css({"display":"none"})
          $('.re').css({"display":"block"})
          $('#UploadHouse .img-upload').css({"display":"none"})
        }
        else{ // 사진이 없으면
          $('.input .img_del').css({"display":"none"})
          $('.ico').css({"display":"flex"})
          $('.re').css({"display":"none"})   
          $('#UploadHouse .img-upload').css({"display":"block"})
        }

        $('#UploadHouse .img-upload').on({
          click(e){
            e.preventDefault();
            $('#UploadHouse .img-upload').css({"outline":"2px solid #ff7777"})
          }
        })

      }, [state.file]);

      React.useEffect(()=>{
        let num=state.house_title.length;
        setState({
          ...state,
          num:num
        })

      },[state.house_title]);

      React.useEffect(()=>{
        $('.guide-btn' ).on({
          click(e){
            e.preventDefault();
            let guideContent = $('.guide-content');
            guideContent.removeClass("hide");
            guideContent.toggleClass("hide");
            if( guideContent.is(":visible") ){
                guideContent.slideUp();
                $('.u9pb').css({"transform":"rotate(0)"});
            }
            else{
                guideContent.slideDown();
                $('.u9pb').css({"transform":"rotate(180deg)"});
            }
            
          }
        });
      },[]);

      React.useEffect(()=>{
        $('.pajb-btn' ).on({
          click(e){
            e.preventDefault();
            let guideContent = $('.psjb-content');
            guideContent.removeClass("hide");
            guideContent.toggleClass("hide");
            if( guideContent.is(":visible") ){
                guideContent.slideUp();
                $('.u9pb1').css({"transform":"rotate(0)"});
            }
            else{
                guideContent.slideDown();
                $('.u9pb1').css({"transform":"rotate(180deg)"});
            }
            
          }
        });
      },[]);


      const onClickSubmit=(e)=>{
        e.preventDefault();
        onSubmitHousePost();
    
    } 

      const onSubmitHousePost=()=>{
        const formData = {
          "user_email":sessionStorage.getItem("user_email"),
          "file":state.imgUrl,
          "house_title":state.house_title,
          "house_content":state.house_content,
          "place":state.place,
          "pyeong":state.pyeong,
          "category":state.category,
          "worker":state.worker,
          "family":state.family,
          "area":state.area,
          "area2":state.area2,
          "style":state.style
        }
        $.ajax({
          url:'http://localhost:8080/JSP/ohouse/house_post_action.jsp',
          type:'post',
          data:formData,
          success(res){
              console.log('AJAX 성공');
              console.log(res);
              if(!state.house_title || !state.house_content || !state.place || !state.pyeong || !state.category || !state.worker|| !state.family|| !state.imgUrl|| !state.area|| !state.style){
                alert("모든 항목을 입력해주세요!");
            }
            else{
                window.location.href = '#/마이페이지';
            }
          },
          error(err){
              console.log('AJAX 실패'+err);
          }
      })

      }

      const onChangePlace=(e)=>{
        setState({
          ...state,
          place:e.target.value
        })
      }

      const onChangePyeong=(e)=>{
        
        setState({
          ...state,
          pyeong:e.target.value
        })
      }
      const onChangeCategory=(e)=>{
        setState({
          ...state,
          category:e.target.value
        })
      }
      const onChangeWorker=(e)=>{
        setState({
          ...state,
          worker:e.target.value
        })
      }
      const onChangeArea=(e)=>{
        setState({
          ...state,
          area:e.target.value
        })
      }
      const onChangeArea2=(e)=>{
        setState({
          ...state,
          area2:e.target.value
        })
      }
      const onChangeFamily=(e)=>{
        setState({
          ...state,
          family:e.target.value
        })
      }
      const onChangeStyle=(e)=>{
        setState({
          ...state,
          style:e.target.value
        })
      }
    
    return (
        <div id='UploadHouse'>
            <div className='row1'>
                <div className="container">
                    <div className="gap">
                        <Link to="/"><svg className="icon" width="74" height="30" viewBox="0 0 74 30" preserveAspectRatio="xMidYMid meet"><g fill="none" fillRule="evenodd"><path fill="#000" d="M14.2 25.17H9.28V20.7a1.45 1.45 0 0 0-2.9 0v4.47H1.44a1.45 1.45 0 1 0 0 2.9H14.2a1.45 1.45 0 0 0 0-2.9M4.5 9.15c0-4.6 2.08-5.28 3.33-5.28 1.24 0 3.33.69 3.33 5.28v.36c0 4.6-2.09 5.28-3.33 5.28-1.25 0-3.34-.69-3.34-5.28v-.36zm3.33 8.54c3.84 0 6.23-3.13 6.23-8.18v-.36c0-5.05-2.39-8.18-6.23-8.18-3.85 0-6.24 3.13-6.24 8.18v.36c0 5.05 2.39 8.19 6.24 8.19zm25.54-7.34H17.81a1.45 1.45 0 0 0 0 2.9h15.56a1.45 1.45 0 1 0 0-2.9m-1.55 15.5c-7.08 1.83-9.45.79-10.14.25-.45-.35-.65-.8-.65-1.48v-.87h10.25c.8 0 1.46-.65 1.46-1.45v-5.08c0-.8-.66-1.45-1.46-1.45h-11.7a1.45 1.45 0 1 0 0 2.9h10.25v2.18H19.57c-.8 0-1.45.65-1.45 1.45v2.32a4.6 4.6 0 0 0 1.78 3.78c1.2.93 2.94 1.39 5.21 1.39 2.05 0 4.54-.38 7.44-1.13a1.45 1.45 0 1 0-.73-2.82M20.3 7.83h10.8a1.45 1.45 0 1 0 0-2.9h-9.35V1.45a1.45 1.45 0 1 0-2.9 0v4.93c0 .8.65 1.45 1.45 1.45"></path><rect width="3" height="15" x="70" fill="#000" rx="1.5"></rect><path fill="#000" d="M64.5 13.28a1.45 1.45 0 0 0 2.73-1c-.05-.13-1-2.68-3.38-4.5l3.7-4.1a1.45 1.45 0 0 0-1.09-2.42h-9.05a1.45 1.45 0 1 0 0 2.9h5.8l-6.88 7.64a1.45 1.45 0 1 0 2.16 1.95l3.41-3.8a8 8 0 0 1 2.6 3.33M69.56 26.52h-7.01a.82.82 0 0 1-.82-.82v-1.95h8.65v1.95c0 .45-.37.82-.82.82m2.27-9.37c-.8 0-1.45.65-1.45 1.45v2.25h-8.65V18.6a1.45 1.45 0 1 0-2.9 0v7.1a3.73 3.73 0 0 0 3.72 3.72h7.01a3.73 3.73 0 0 0 3.72-3.72v-7.1c0-.8-.65-1.45-1.45-1.45M42.46 3.87c2.22 0 2.33 4.24 2.33 5.08 0 .85-.11 5.09-2.33 5.09-2.21 0-2.32-4.24-2.32-5.08 0-.86.11-5.09 2.32-5.09m0 13.07c1.76 0 3.23-.93 4.14-2.62.71-1.34 1.1-3.2 1.1-5.36s-.39-4.02-1.1-5.37A4.6 4.6 0 0 0 42.46.97c-1.76 0-3.22.93-4.13 2.62-.72 1.35-1.1 3.2-1.1 5.37s.38 4.01 1.1 5.36a4.59 4.59 0 0 0 4.13 2.62"></path><path fill="#000" d="M51.4.49c-.8 0-1.45.65-1.45 1.45v17.78c-1.93.6-5.75 1.13-10.38 1.13h-2.2a1.45 1.45 0 0 0 0 2.9h2.2c2.64 0 7.21-.23 10.38-1.02v4.84a1.45 1.45 0 0 0 2.9 0V1.94c0-.8-.65-1.45-1.45-1.45"></path></g></svg></Link>
                        <button onClick={onClickSubmit}>올리기</button>
                    </div>
                </div>
            </div>
            <div className="guide">
              <button className='guide-btn'>
                <svg className="icon" width="25" height="25" viewBox="0 0 25 25" preserveAspectRatio="xMidYMid meet"><rect width="25" height="25" fill="#6ADFC4" rx="10"></rect><g fill="#FFF" transform="translate(7 8)"><rect width="7" height="1.5" rx=".8"></rect><rect width="11" height="1.5" y="4" rx=".8"></rect><rect width="11" height="1.5" y="8" rx=".8"></rect></g></svg>
                <b>집들이 작성 가이드</b>
                <p>원활한 집들이 발행을 위해 꼭 읽어주세요.</p>
                <div className="arrow">
                  <svg className="u9pb" width="18" height="18" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet"><path fill="#828c94" fillRule="evenodd" d="M2.87 4L1.33 5.5 8 12l6.67-6.5L13.13 4 8 9z"></path></svg>
                </div>
              </button>
              <div className="guide-content hide">
                <ul className='one'>
                  <li className='one-one'>에디터의 섭외 없이 작성해주시는 경우엔 확인 후 <b>게시글 오픈이 반려될 수도 있습니다.</b> 오픈 및 반려 여부는 <b>댓글로</b> 안내 드립니다. </li>
                  <li className='one-one'>오픈 및 반려 여부 확인은 작성해주신 시점을 기준으로 일주일-10일 가량 소요되며, <b>댓글로</b> 결과를 안내 드립니다.</li>
                  <li className='one-one'>간단한 자기 소개 후 집에 관한 이야기를 들려주세요. (집 공간 사진 최소 15장 이상)</li>
                  <li className='one-one'>집 사진/소개글 관련해서 고민이 될 땐 이 링크를 참고해주세요.
                    <ul className='two'>
                      <li className='two-two'>원룸·오피스텔·방을 소개하는 경우 (<a href="https://ohouse.notion.site/6569e378ef97497a9e17d884c1665da1">바로가기</a>)</li>
                      <li className='two-two'>아파트·빌라·주택 전체를 소개하는 경우 (<a href="https://ohouse.notion.site/7f783b644f9746eea77ff8b6c959389e">바로가기</a>)</li>
                    </ul>
                  </li> 
                  <li className='one-one'>도면이 있으면 좋아요. (손그림도 OK)</li>
                  <li className='one-one'>사진 속 제품 정보를 본문에 최대한 적어주세요. (제품분류/브랜드/제품명 순서)</li>
                  <li className='one-one'>사진 첨부 시 용량은 장당 최대 20MB까지 업로드할 수 있고, jpg, png, webp, heif, heic, gif 포맷을 지원합니다.</li>
                  <li className='one-one'>정보를 많이 입력할수록 검색 결과에 많이 노출되어 조회수가 올라갑니다.</li>
                  <li className='one-one'>커버사진과 제목은 에디터에 의해 변경될 수 있습니다.</li>
                  <li className='one-one'>글 작성과 이미지 업로드 시, 타인의 지식재산권을 침해하지 않도록 유의해주세요.</li>
                </ul>
              </div>
            </div>
            <form action="" name='upload_ho' id='uploadHo' onSubmit={onSubmitHousePost}>
                <div className="guide-psjb">
                  <button className='pajb-btn'>
                  <svg class="icon" width="26" height="26" viewBox="0 0 26 26" preserveAspectRatio="xMidYMid meet"><rect width="26" height="26" fill="#F8C332" rx="10"></rect><g fill="none" stroke="#FFF"><path stroke-linejoin="round" stroke-width="1.2" d="M15.06 8.65l-6.9 6.88L7 18.98l3.45-1.15 6.9-6.9-2.3-2.28z"></path><path stroke-width="1.2" d="M15.04 8.64l1.45-1.45a.65.65 0 01.93 0l1.37 1.38a.65.65 0 010 .92l-1.45 1.45"></path><path d="M8.27 15.2l2.48 2.47"></path></g></svg>
                    <b>필수 정보 입력</b>
                    <p>공간을 이해하는데 필요한 정보이니 최대한 꼼꼼하게 입력해주세요.</p>
                    <div className="arrow">
                      <svg className="u9pb1" width="18" height="18" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet"><path fill="#828c94" fillRule="evenodd" d="M2.87 4L1.33 5.5 8 12l6.67-6.5L13.13 4 8 9z"></path></svg>
                    </div>
                  </button>
                  <div className="psjb-content hide">
                    <ul className='one'>
                        <li>
                          <div className='psjb-box'>
                            <label className='label'>주거형태<i> *</i></label>
                              <select name="place" className='place' id="place" onChange={onChangePlace}>
                                <option value="">선택해주세요.</option>
                                <option value="본인방">본인방</option>
                                <option value="오피스텔">오피스텔</option>
                                <option value="빌라&연립">빌라&연립</option>
                                <option value="아파트">아파트</option>
                                <option value="단독주택">단독주택</option>
                                <option value="협소주택">협소주택</option>
                                <option value="상업공간">상업공간</option>
                                <option value="사무공간">사무공간</option>
                              </select>
                              <span className='select-icon'>
                                <svg class="icon" width="10" height="10" preserveAspectRatio="xMidYMid meet" fill="#dadada"><path fill-rule="evenodd" d="M0 3l5 5 5-5z"></path></svg>
                              </span>
                            </div>
                        </li>
                        <li>
                          <ul className='one'>
                            <li>
                              <div className='psjb-box'>
                                <label className='label'>평수<i> *</i></label>
                                <label className='radio1'><input type="radio" name="pyeong" id="pyeong1" value="단층" onChange={onChangePyeong} /><h3>단층</h3></label>
                                <label className='radio1'><input type="radio" name="pyeong" id="pyeong2" value="2층 단독/협소주택" onChange={onChangePyeong}/><h3>2층 단독/협소주택</h3></label>
                                <label className='radio1'> <input type="radio" name="pyeong" id="pyeong3" value="3층 이상 단독/협소주택" onChange={onChangePyeong}/><h3>3층 이상 단독/협소주택</h3></label>
                                {/* <input type="text" placeholder='평'/> */}
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div className='psjb-box'>
                            <label className='label'>작업분야<i> *</i></label>
                              <select type="text" name="category" id="category" onChange={onChangeCategory} >
                                <option value="선택해주세요.">선택해주세요.</option>
                                <option value="홈스타일링">홈스타일링</option>
                                <option value="리모델링">리모델링</option>
                                <option value="부분시공">부분시공</option>
                                <option value="건축">건축</option>
                              </select>
                            </div>
                        </li>
                        <ul className='one'>
                            <li>
                              <div className='psjb-box'>
                                <label className='label'>작업자<i> *</i></label>
                                <label className='radio1'><input type="radio" name="worker" id="self" value="셀프 • DIY" onChange={onChangeWorker}/><h3>셀프 • DIY</h3></label>
                                <label className='radio1'><input type="radio" name="worker" id="semiSelf" value="반셀프"onChange={onChangeWorker}/><h3>반셀프</h3></label>
                                <label className='radio1'> <input type="radio" name="worker" id="pro" value="전문가"onChange={onChangeWorker}/><h3>전문가</h3></label>
                                {/* <input type="text" placeholder='평'/> */}
                              </div>
                            </li>
                          </ul>
                        <li>
                          <div className='psjb-box'>
                            <label className='label'>지역<i> *</i></label>
                              <select type="text" name="area" id="area" onChange={onChangeArea}>
                                <option value="선택해주세요." placeholder='선택해주세요.'>선택안함</option>
                                <option value="서울특별시">서울특별시</option>
                                <option value="부산광역시">부산광역시</option>
                                <option value="대구광역시">대구광역시</option>
                                <option value="인천광역시">인천광역시</option>
                                <option value="광주광역시">광주광역시</option>
                                <option value="대전광역시">대전광역시</option>
                                <option value="울산광역시">울산광역시</option>
                                <option value="강원도">강원도</option>
                                <option value="경기도">경기도</option>
                                <option value="경상남도">경상남도</option>
                                <option value="경상북도">경상북도</option>
                                <option value="전라남도">전라남도</option>
                                <option value="전라북도">전라북도</option>
                                <option value="충청남도">충청남도</option>
                                <option value="충청북도">충청북도</option>
                                <option value="세종특별자치시">세종특별자치시</option>
                                <option value="제주특별자치도">제주특별자치도</option>
                              </select>
                              <input type="text" name='area2' id='area2' placeholder='(선택) 아파트/건물명' onChange={onChangeArea2}/>
                              <span className='select-icon'>
                                <svg class="icon" width="10" height="10" preserveAspectRatio="xMidYMid meet" fill="#dadada"><path fill-rule="evenodd" d="M0 3l5 5 5-5z"></path></svg>
                              </span>
                            </div>
                        </li>
                        <li>
                          <div className='psjb-box'>
                            <label className='label'>가족형태<i> *</i></label>
                              <select name="family" id="family" onChange={onChangeFamily}>
                                <option value="">선택해주세요.</option>
                                <option value="싱글라이프">싱글라이프</option>
                                <option value="신혼/부부가 사는집">신혼/부부가 사는집</option>
                                <option value="자녀가 있는 집">자녀가 있는 집</option>
                                <option value="부모님과 함께 사는 집">부모님과 함께 사는 집</option>
                                <option value="룸메이트와 함께 사는 집">룸메이트와 함께 사는 집</option>
                                <option value="기타">기타</option>
                              </select>
                              <span className='select-icon'>
                                <svg class="icon" width="10" height="10" preserveAspectRatio="xMidYMid meet" fill="#dadada"><path fill-rule="evenodd" d="M0 3l5 5 5-5z"></path></svg>
                              </span>
                            </div>
                        </li>
                        <li>
                          <div className='psjb-box'>
                            <label className='label'>스타일<i> *</i></label>
                              <select type="text" name="style" id="Style" onChange={onChangeStyle}>
                                <option value="선택해주세요.">선택해주세요.</option>
                                <option value="모던">모던</option>
                                <option value="시크">시크</option>
                                <option value="빈티지">빈티지</option>
                              </select>
                              <span className='select-icon'>
                                <svg class="icon" width="10" height="10" preserveAspectRatio="xMidYMid meet" fill="#dadada"><path fill-rule="evenodd" d="M0 3l5 5 5-5z"></path></svg>
                              </span>
                            </div>
                        </li>
                    </ul>
                  </div>
                </div>
                <div className="photo-box">
                    <div className="input">
                        <input type="file" name="file" id="file" accept='image/*' ref={imageInput} onChange={onChangeImage} onClick={onClickImage} className='hide'/>
                        {/* <img src={state.imgUrl} alt="" /> */}
                        <button className='img-upload' onClick={onClickImageUpload}>        
                            <div className="upload-box">
                                    <h5>추가하기 버튼으로 <br />커버 사진을 업로드해주세요.</h5>
                                    <p>*권장 사이즈 <br />모바일: 1920 x 1920, 최소 1400 x 1400(1:1 비율) <br />PC: 1920 x 1080, 최소 1400 x 787(16:9 비율)</p>
                                    <button className='chooga-btn'>커버 사진 추가하기</button>
                            </div>                                                                                           
                        </button>
                        <div className='house-box'>
                            <img src={state.imgUrl} alt="" />
                            <button className="re" onClick={onClickImageUpload}>
                               <svg width="30" height="30" viewBox="0 0 24 24" fill="#000" preserveAspectRatio="xMidYMid meet"><path fillRule="evenodd" clipRule="evenodd" d="M18.25 3.05H5.75C4.25883 3.05 3.05 4.25883 3.05 5.75V17.5197L7.22591 13.2998C7.89564 12.623 8.99763 12.652 9.63089 13.363L10.599 14.4501C10.7321 14.5995 10.963 14.6072 11.1057 14.467L14.3958 11.2346C15.0442 10.5976 16.0856 10.6049 16.725 11.251L20.95 15.5205V5.75C20.95 4.25883 19.7412 3.05 18.25 3.05ZM5.75 20.95C4.59159 20.95 3.60356 20.2205 3.22029 19.1958L8.14995 14.2142C8.29201 14.0707 8.52577 14.0768 8.66009 14.2276L9.62825 15.3147C10.2554 16.0189 11.3441 16.0552 12.0168 15.3943L15.3069 12.1619C15.4444 12.0268 15.6653 12.0284 15.8009 12.1654L20.95 17.3687V18.25C20.95 19.7412 19.7412 20.95 18.25 20.95H5.75ZM5.75 1.75C3.54086 1.75 1.75 3.54086 1.75 5.75V18.25C1.75 20.4591 3.54086 22.25 5.75 22.25H18.25C20.4591 22.25 22.25 20.4591 22.25 18.25V5.75C22.25 3.54086 20.4591 1.75 18.25 1.75H5.75ZM9.2 8C9.2 8.66274 8.66274 9.2 8 9.2C7.33726 9.2 6.8 8.66274 6.8 8C6.8 7.33726 7.33726 6.8 8 6.8C8.66274 6.8 9.2 7.33726 9.2 8ZM10.5 8C10.5 9.38071 9.38071 10.5 8 10.5C6.61929 10.5 5.5 9.38071 5.5 8C5.5 6.61929 6.61929 5.5 8 5.5C9.38071 5.5 10.5 6.61929 10.5 8Z" fill="#2F3438"></path></svg>
                            </button>
                            <button className='img_del' onClick={onClickDelImage}>
                                <svg className="icon" width="30" height="30" fill="#000" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M6 19V7h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zM19 4v2H5V4h3.5l1-1h5l1 1H19z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="write-box">
                    <ul>
                      <li className='first-row'>
                        <input type="text" name="house_title" id="houseTitle" placeholder='제목을 입력해주세요.' maxLength={80} onChange={onChangeTitle} value={state.house_title}/>
                        <span>{state.num} <i>/</i>80</span>
                      </li>
                      <li>
                        {
                          state.isTitleError&&(
                            <div className="err">
                              <p>필수 입력 항목입니다.</p>
                            </div>
                          )
                        }
                      </li>
                      <li>
                        <textarea type="text" name="house_content" id="houseContent"  placeholder='내용을 입력해주세요.'onChange={onChangeContent}/>
                      </li>
                    </ul>
                </div>
            </form>

        </div>
    );
};

