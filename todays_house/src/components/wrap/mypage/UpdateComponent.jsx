import React, {useRef} from 'react';
import $ from 'jquery';
import HeaderComponent from '../HeaderComponent';

export default function UpdateComponent () {

  const [state,setState] = React.useState({
<<<<<<< HEAD
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
      let isEmailError = false;
      let isEmailMsg = '';

      if(value === ''){
          isEmailError = true;
          isEmailMsg = '필수 입력 항목입니다.';
      }
      else if(value !== ''){
          isEmailError = true;
          isEmailMsg = '이메일 형식이 올바르지 않습니다.';
      }

      setState({
          ...state,
          이메일 : value,
          isEmailError : isEmailError,
          isEmailMsg : isEmailMsg
      })
  }

  // 이메일 도메인 
  const onChangeEmailDomain = (e) => {
      setState({
          ...state,
          이메일도메인 : e.target.value,
          isEmailDomainError : false
      })
  }

  // 닉네임 
  const onChangeNick = (e) => {

    const {value} = e.target;
    let isNickError = false;
    let isNickMsg = '';

    const regExp1 = /^(.){2,16}$/g;

    if(value === ''){
        isNickError = true;
        isNickMsg = '필수 입력 항목입니다.';
    }
    else if(regExp1.test(value) === false){
        console.log("false");
        isNickError = true;
        isNickMsg = '2자 이상 입력해주세요.';
    }

    setState({
        ...state,
        닉네임 : e.target.value,
        isNickError : isNickError,
        isNickMsg : isNickMsg
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

=======
    file : '',
    imgUrl : '../images/avatar.avif'
  })

>>>>>>> 5ec0b85b504f8123f83627716e5100b751ee8dfd
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
    if(state.file !== ''){
      $('.input .img_del').css({"display":"block"})
    }
    else{
      $('.input .img_del').css({"display":"none"})
    }
  }, [state.file])

  React.useEffect(()=>{
    
  },[state.file])

<<<<<<< HEAD
  const onSubmitUpdate = (e) => {
      e.preventDefault();

      const formData = {
        "user_email1" : state.이메일,
        "user_email2" : state.이메일도메인,
        "user_nick" : state.닉네임,
        "user_url" : state.홈페이지,
        "user_gender" : state.성별,
        "user_birth" : state.생년월일,
        "user_oneline" : state.한줄소개
      }

      $.ajax({
        url:'http://localhost:8080/jsp/0522ohouse/ohouse/update_action.jsp',
        type:'POST',
        data:formData,
        success(res){
          console.log('AJAX 성공!');
          console.log(res);
          console.log(JSON.parse(res));
        },
        error(err){
          console.log('AJAX 실패!' + err);
        }
      });
  }

=======
>>>>>>> 5ec0b85b504f8123f83627716e5100b751ee8dfd
  return (
    <div id="update">
      <div className="container">
        <div className="gap">
          <div className="content">
            <h1>회원정보수정</h1>
<<<<<<< HEAD
            <form name="update_form" id="updateForm" action="" onSubmit={onSubmitUpdate}>
=======
            <form name="update_form" id="updateForm" action="">
>>>>>>> 5ec0b85b504f8123f83627716e5100b751ee8dfd
              <div>
                <div className='label'>
                  <label htmlFor="">이메일</label>
                  <p>*필수항목</p>
                </div>
                <div className='input'>
<<<<<<< HEAD
                  <input type="text" name="user_email1" id="email" className='half' onChange={onChangeEmail}/>
                  <span>@</span>
                  <input type="text" name="user_email2" id="domain" className='half' onChange={onChangeEmailDomain}/>
=======
                  <input type="text" name="email" id="email" className='half'/>
                  <span>@</span>
                  <input type="text" name="domain" id="domain" className='half'/>
>>>>>>> 5ec0b85b504f8123f83627716e5100b751ee8dfd
                  <p>이메일을 변경하시려면 운영자에게 메일을 보내주세요.</p>
                </div>
              </div>
              <div>
                <div className='label'>
                  <label htmlFor="">별명</label>
                  <p>*필수항목</p>
                </div>
                <div className='input'>
<<<<<<< HEAD
                  <input type="text" name="user_nick" id="nickname" onChange={onChangeNick}/>
=======
                  <input type="text" name="nickname" id="nickname" />
>>>>>>> 5ec0b85b504f8123f83627716e5100b751ee8dfd
                </div>
              </div>
              <div>
                <div className='label'>
                  <label htmlFor="">홈페이지</label>
                </div>
                <div className='input'>
<<<<<<< HEAD
                  <input type="text" name="user_url" id="homepage" placeholder='https://ohou.se' onChange={onChangeUrl}/>
=======
                  <input type="text" name="homepage" id="homepage" placeholder='https://ohou.se'/>
>>>>>>> 5ec0b85b504f8123f83627716e5100b751ee8dfd
                </div>
              </div>
              <div>
                <div className='label'>
                  <label htmlFor="">성별</label>
                </div>
                <div className='input-radio'>
                  <ul>
<<<<<<< HEAD
                    <li><input type="radio" name="user_gender" id="gender1" value="남성"  onChange={onChangeGender}/>남성</li>
                    <li><input type="radio" name="user_gender" id="gender2" value="여성"  onChange={onChangeGender}/>여성</li>
=======
                    <li><input type="radio" name="gender" id="gender1" value="남성" />남성</li>
                    <li><input type="radio" name="gender" id="gender2" value="여성" />여성</li>
>>>>>>> 5ec0b85b504f8123f83627716e5100b751ee8dfd
                  </ul>
                </div>
              </div>
              <div>
                <div className='label'>
                  <label htmlFor="">생년월일</label>
                </div>
                <div className='input'>
<<<<<<< HEAD
                  <input type="text" name="user_birth" id="birth" placeholder='YYYY-MM-DD' onChange={onChangeBirth}/>
=======
                  <input type="text" name="birth" id="birth" placeholder='YYYY-MM-DD' />
>>>>>>> 5ec0b85b504f8123f83627716e5100b751ee8dfd
                </div>
              </div>
              <div>
                <div className='label'>
                  <label htmlFor="">프로필 이미지</label>
                </div>
                <div className="input">
<<<<<<< HEAD
                  <input type="file" name="user_image" id="file" accept='image/*' ref={imageInput} onChange={onChangeImage} onClick={onClickImage} />
=======
                  <input type="file" name="file" id="file" accept='image/*' ref={imageInput} onChange={onChangeImage} onClick={onClickImage} />
>>>>>>> 5ec0b85b504f8123f83627716e5100b751ee8dfd
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
<<<<<<< HEAD
                  <input type="text" name="user_oneline" id="oneline" onChange={onChangeOneline} />
=======
                  <input type="text" name="oneline" id="oneline" />
>>>>>>> 5ec0b85b504f8123f83627716e5100b751ee8dfd
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

