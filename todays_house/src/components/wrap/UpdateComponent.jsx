import React, {useRef} from 'react';
import $ from 'jquery';

export default function UpdateComponent () {

  const [state, setState] = React.useState({
    nav1 : '프로필',
    nav2 : '모두보기'
  })

  React.useEffect(() => {
    $('#update .top-nav-btn').on({
      click(e){
        e.preventDefault();
        let nav1 = '';
        $('.top-nav-btn').removeClass('on');
        $(this).toggleClass('on');
        nav1 = $(this)[0].innerHTML;
        if(nav1 === '프로필'){
          setState({
            ...state,
            nav1 : nav1,
            nav2 : '모두보기'
          })
        }
        else if(nav1 === '설정'){
          setState({
            ...state,
            nav1 : nav1,
            nav2 : '회원정보수정'
          })
        }
      }
    })

    $('#update .bottom-nav-btn').on({
      click(e){
        e.preventDefault();
        let nav2 = '';
        $('.bottom-nav-btn').removeClass('on');
        $(this).toggleClass('on');
        nav2 = $(this)[0].innerHTML;
        setState({
          ...state,
          nav2 : nav2
        })
      }
    })
  })
  

  const imageInput = useRef();

  const onClickImageUpload = (e) => {
    console.log("img upload btn click");
    e.preventDefault();
    imageInput.current.click();
  }

  const onChangeImage = (e) => {
    console.log("img upload");
    console.log(e.target.files[0]);
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = (event) =>{
      $('.input .img_upload img').attr("src", event.target.result);
    }
    reader.readAsDataURL(file);
    $('.input .img_del').css({"display":"block"})
  }

  const onClickDelImage = (e) => {
    e.preventDefault();
    console.log("img delete");
    $('.input .img_upload img').attr("src", "./images/avatar.avif");
    $('.input .img_del').css({"display":"none"})
  }

  return (
    <div id="update">
      <div className="container">
        <div className="gap">
          <nav className='top-nav'>
            <ul>
              <li><a href="#!" className={`top-nav-btn ${state.nav1==='프로필'?'on':''}`}>프로필</a></li>
              <li><a href="#!" className={`top-nav-btn ${state.nav1==='설정'?'on':''}`}>설정</a></li>
            </ul>
          </nav>
          {
            state.nav1==='프로필' &&
            <nav className='bottom-nav'>
              <ul>
                <li><a href="#!" className={`bottom-nav-btn ${state.nav2==='모두보기'?'on':''}`}>모두보기</a></li>
                <li><a href="#!" className='bottom-nav-btn'>사진</a></li>
                <li><a href="#!" className='bottom-nav-btn'>집들이</a></li>
                <li><a href="#!" className='bottom-nav-btn'>노하우</a></li>
                <li><a href="#!" className='bottom-nav-btn'>질문과답변</a></li>
                <li><a href="#!" className='bottom-nav-btn'>스크랩북</a></li>
                <li><a href="#!" className='bottom-nav-btn'>좋아요</a></li>
              </ul>
            </nav>
          }
          {
            state.nav1==='설정' &&
            <nav className='bottom-nav'>
              <ul>
                <li><a href="#!" className={`bottom-nav-btn ${state.nav2==='회원정보수정'?'on':''}`}>회원정보수정</a></li>
                <li><a href="#!" className='bottom-nav-btn'>비밀번호변경</a></li>
              </ul>
            </nav>
          }
          <div className="content">
            <h1>회원정보수정</h1>
            <form name="update_form" id="updateForm" action="">
              <div>
                <div className='label'>
                  <label htmlFor="">이메일</label>
                  <p>*필수항목</p>
                </div>
                <div className='input'>
                  <input type="text" name="email" id="email" className='half'/>
                  <span>@</span>
                  <input type="text" name="domain" id="domain" className='half'/>
                  <p>이메일을 변경하시려면 운영자에게 메일을 보내주세요.</p>
                </div>
              </div>
              <div>
                <div className='label'>
                  <label htmlFor="">별명</label>
                  <p>*필수항목</p>
                </div>
                <div className='input'>
                  <input type="text" name="nickname" id="nickname" />
                </div>
              </div>
              <div>
                <div className='label'>
                  <label htmlFor="">홈페이지</label>
                </div>
                <div className='input'>
                  <input type="text" name="homepage" id="homepage" placeholder='https://ohou.se'/>
                </div>
              </div>
              <div>
                <div className='label'>
                  <label htmlFor="">성별</label>
                </div>
                <div className='input-radio'>
                  <ul>
                    <li><input type="radio" name="gender" id="gender1" value="남성" />남성</li>
                    <li><input type="radio" name="gender" id="gender2" value="여성" />여성</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className='label'>
                  <label htmlFor="">생년월일</label>
                </div>
                <div className='input'>
                  <input type="text" name="birth" id="birth" placeholder='YYYY-MM-DD' />
                </div>
              </div>
              <div>
                <div className='label'>
                  <label htmlFor="">프로필 이미지</label>
                </div>
                <div className="input">
                  <input type="file" name="file" id="file" accept='image/*' ref={imageInput} onChange={onChangeImage} />
                  <button className='img_upload' onClick={onClickImageUpload}>
                    <img src="./images/avatar.avif" alt="" />
                  </button>
                  <button className='img_del' onClick={onClickDelImage}>
                    <img src="./images/images_del.svg" alt="" />
                    삭제
                  </button>
                </div>
              </div>
              <div>
                <div className='label'>
                  <label htmlFor="">한줄 소개</label>
                </div>
                <div className='input'>
                  <input type="text" name="oneline" id="oneline" />
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

