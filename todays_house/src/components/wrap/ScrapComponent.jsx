import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function ScrapComponent() {

  const [state,setState] = React.useState({
    닉네임 : '',
    imgUrl : '',
    사진 : [],
    스크랩 : []
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

  

  const getScrap = async() => {
    try{
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
      setState({
        ...state,
        스크랩: res.result
      })
    } catch (err){
      console.log('AJAX 실패!' + err);
    }
    const user_email = sessionStorage.getItem('user_email');
    const form_data = {
        "user_email": user_email
    }
}

  React.useEffect(() => {
    getUserData();
    getScrap();
  }, []);

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
                              {
                                state.스크랩.map((item) => {
                                  return(
                                    <li><Link to={`/서브페이지/${item.sub}/${item.id}`}><img src={`${item.imagepath}`} alt="" /></Link></li>
                                  )
                                })
                              }
                                {/* <li><a href=""><img src={`./images/sub1/${state.사진.이미지2}`} alt="" /></a></li> */}
                                {/* <li><a href=""><img src="./images/168188742482001221.jpg" alt="" /></a></li>
                                <li><a href=""><img src="./images/168146548189338657.jpg" alt="" /></a></li>
                                <li><a href=""><img src="./images/168043939756289671.jpg" alt="" /></a></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
