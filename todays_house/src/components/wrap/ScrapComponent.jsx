import React from 'react';
import $ from 'jquery';

export default function ScrapComponent() {

  const [state,setState] = React.useState({
    닉네임 : '',
    imgUrl : ''
  })

  const getUserData = async () => {
    try {
      const user_email = sessionStorage.getItem('user_email');
      const form_data = {
        "user_email": user_email
      };

      const res = await $.ajax({
        url: 'http://localhost:8080/JSP/ohouse/update_getjoin_action.jsp',
        type: 'POST',
        data: form_data,
        dataType: 'json'
      });

      console.log('AJAX 성공!');
      console.log(res.result); // 결과 데이터 출력
      setState((prevState) => ({
        ...prevState,
        닉네임: res.result.닉네임 === "null" ? '' : res.result.닉네임,
        imgUrl: res.result.imgUrl === "null" ? '../images/avatar.avif' : res.result.imgUrl
      }));
    } catch (err) {
      console.log('AJAX 실패!' + err);
    }
  };



  React.useEffect(() => {
    getUserData();
  }, [])

    return (
       
        <div id='scrap'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="row1">
                            <ul>
                                <li><h2>스크랩북</h2></li>
                                <li><a href="">공유하기</a></li>
                            </ul>
                        </div>
                        <div className="row2">
                            <ul>
                                <li><img src={state.imgUrl} alt="" /> </li>
                                <li><span>{state.닉네임}</span></li>
                            </ul>
                        </div>
                        <div className="row3">
                            <ul>
                                <li><a href="">모두(3)</a></li>
                                <li><a href="">사진(3)</a></li>
                            </ul>
                        </div>
                        <div className="row4">
                            <a href="">편집</a>
                        </div>
                        <div className="row5">
                            <ul>
                                <li><a href=""><img src="./images/168280835106447355.jpg" alt="" /></a></li>
                                <li><a href=""><img src="./images/168188742482001221.jpg" alt="" /></a></li>
                                <li><a href=""><img src="./images/168146548189338657.jpg" alt="" /></a></li>
                                <li><a href=""><img src="./images/168043939756289671.jpg" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
