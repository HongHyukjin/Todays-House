import React, {useRef} from 'react';
import $ from 'jquery';

export default function UpdateComponent () {

  const [state,setState] = React.useState({
    이메일: '',
    이메일도메인:'',
    닉네임:'',
    홈페이지:'',
    생년월일:'',
    성별:'',
    한줄소개:'',
    file : '',
    imgUrl : '../images/avatar.avif',

    isEmailError : false,
    isEmailMsg : '',
    isEmailDomainError : true,
    isNickError : false,
    isNickMsg : ''
  })


  // 이메일 
  const onChangeEmail = (e) => {
      const {value} = e.target;

      setState({
          ...state,
          이메일 : value
      })
  }

  // 이메일 도메인 
  const onChangeEmailDomain = (e) => {
    const {value} = e.target;
    setState({
        ...state,
        이메일도메인 : value
    })
  }

  // 닉네임 
  const onChangeNick = (e) => {

    const {value} = e.target;

    setState({
        ...state,
        닉네임 : value
    })
}

  // 홈페이지 
  const onChangeUrl = (e) => {
    setState({
      ...state,
      홈페이지: e.target.value
    })
  }

  //생년월일 
  const onChangeBirth = (e) => {
    setState({
      ...state,
      생년월일 : e.target.value
    })
  }
  
  // 성별 
  const onChangeGender = (e) => {
    setState({
      ...state,
      성별 : e.target.value
    })
  }

  // 한줄소개 
  const onChangeOneline = (e) => {
    setState({
      ...state,
      한줄소개: e.target.value
    })
  }

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
    let reader = new FileReader();
    reader.onload = (event) =>{
      setState({
        ...state,
        file:file,
        imgUrl:event.target.result,
      })
    }
    reader.readAsDataURL(file);
  }

  const onClickDelImage = (e) => {
    e.preventDefault();
    console.log("img delete");
    setState({
      ...state,
      file : '',
      imgUrl:'../images/avatar.avif',
    })
  }

  React.useEffect(()=>{
    if(state.imgUrl !== ''){
      $('.input .img_del').css({"display":"block"})
    }
    else{
      $('.input .img_del').css({"display":"none"})
    }
  }, [state.imgUrl])

  
  const getUserData = () => {
    const user_email = sessionStorage.getItem('user_email');
    const form_data = {
      "user_email" : user_email
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
          이메일 : res.result.이메일,
          이메일도메인 : res.result.이메일도메인,
          닉네임 : res.result.닉네임,
          홈페이지 : (res.result.홈페이지==="null"?'':res.result.홈페이지),
          성별 : res.result.성별==="null"?'':res.result.성별,
          생년월일 : res.result.생년월일==="null"?'':res.result.생년월일,
          imgUrl : res.result.프로필이미지==="null"?'../images/avatar.avif':res.result.프로필이미지,
          한줄소개 : res.result.한줄소개==="null"?'':res.result.한줄소개
        })
      },
      error(err) {
        console.log('AJAX 실패!' + err);
      },
    });
  }

  
  const getUserData = () => {
  //   const user_email = sessionStorage.getItem('user_email');
  //   $.ajax({
  //     url: 'http://localhost:8080/jsp/0522ohouse/ohouse/update_getjoin_action.jsp',
  //     data : {user_email : user_email},
  //     type: 'GET',
  //     dataType:'json',  
      
  //     success(res) {
  //         console.log('AJAX 성공!');
  //         console.log(res.result); // 결과 데이터 출력
  //         // console.log(JSON.parse(res));
  //     },
  //     error(err) {
  //         console.log('AJAX 실패!' + err);
  //     }
  // });
  $.ajax({
    url: 'http://localhost:8080/jsp/0522ohouse/ohouse/update_getjoin_action.jsp',
    type: 'GET',
    dataType: 'json',
    success(res) {
      console.log('AJAX 성공!');
      console.log(res.result); // 결과 데이터 출력
    },
    error(err) {
      console.log('AJAX 실패!' + err);
    },
    beforeSend(xhr) {
      xhr.setRequestHeader('Accept', 'application/json'); // 응답 헤더에 Accept 추가
    }
  });
  }

  React.useEffect(()=>{
    getUserData();
  },[])


  const onSubmitUpdate = (e) => {
      e.preventDefault();

      const formData = {
        "user_email1": state.이메일,
        "user_email2": state.이메일도메인,
        "user_nick" : state.닉네임,
        "user_url" : state.홈페이지,
        "user_gender" : state.성별,
        "user_birth" : state.생년월일,
        "user_profile" : state.imgUrl,
        "user_oneline" : state.한줄소개
      }

      $.ajax({
        url:'http://localhost:8080/JSP/ohouse/update_action.jsp',
        type:'POST',
        data:formData,
        success(res){
          console.log('AJAX 성공!');
          console.log(res);
          console.log(JSON.parse(res));
          alert('회원 정보가 성공적으로 바뀌었습니다.');
        },
        error(err){
          console.log('AJAX 실패!' + err);
        }
      });
  }

  return (
    <div id="update">
      <div className="container">
        <div className="gap">
          <div className="content">
            <h1>회원정보수정</h1>
            <form name="update_form" id="updateForm" action="" onSubmit={onSubmitUpdate}>
              <div>
                <div className='label'>
                  <label htmlFor="">이메일</label>
                  <p>*필수항목</p>
                </div>
                <div className='input'>
                  <input type="text" name="user_email1" id="email" className='half' onChange={onChangeEmail} value={state.이메일} disabled={true} />
                  <span>@</span>
                  <input type="text" name="user_email2" id="domain" className='half' onChange={onChangeEmailDomain} value={state.이메일도메인} disabled={true} />
                  <p>이메일을 변경하시려면 운영자에게 메일을 보내주세요.</p>
                </div>
              </div>
              <div>
                <div className='label'>
                  <label htmlFor="">별명</label>
                  <p>*필수항목</p>
                </div>
                <div className='input'>
                  <input type="text" name="user_nick" id="nickname" onChange={onChangeNick} value={state.닉네임} />
                </div>
              </div>
              <div>
                <div className='label'>
                  <label htmlFor="">홈페이지</label>
                </div>
                <div className='input'>
                  <input type="text" name="user_url" id="homepage" placeholder='https://ohou.se' onChange={onChangeUrl} value={state.홈페이지} />
                </div>
              </div>
              <div>
                <div className='label'>
                  <label htmlFor="">성별</label>
                </div>
                <div className='input-radio'>
                  <ul>
                    <li><input type="radio" name="user_gender" id="gender1" value="남성"  onChange={onChangeGender} checked={state.성별 === "남성"} />남성</li>
                    <li><input type="radio" name="user_gender" id="gender2" value="여성"  onChange={onChangeGender} checked={state.성별 === "여성"} />여성</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className='label'>
                  <label htmlFor="">생년월일</label>
                </div>
                <div className='input'>
                  <input type="text" name="user_birth" id="birth" placeholder='YYYY-MM-DD' onChange={onChangeBirth} value={state.생년월일} />
                </div>
              </div>
              <div>
                <div className='label'>
                  <label htmlFor="">프로필 이미지</label>
                </div>
                <div className="input">
                  <input type="file" name="user_image" id="file" accept='image/*' ref={imageInput} onChange={onChangeImage} onClick={onClickImage} />
                  <button className='img_upload' onClick={onClickImageUpload}>
                    <img src={state.imgUrl} alt="" />
                  </button>
                  <button className='img_del' onClick={onClickDelImage}>
                    삭제
                  </button>
                </div>
              </div>
              <div>
                <div className='label'>
                  <label htmlFor="">한줄 소개</label>
                </div>
                <div className='input'>
                  <input type="text" name="user_oneline" id="oneline" onChange={onChangeOneline} value={state.한줄소개} />
                </div>
              </div>
              <button type='submit'>회원 정보 수정</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

