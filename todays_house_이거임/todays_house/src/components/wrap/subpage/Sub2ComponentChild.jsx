import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

export default function Sub2ComponentChild({ 집들이 }) {

    const [state,setState] = React.useState({
        scrap_on : []
      })

    const onClickScrap = (e, id, 이미지) => {
        e.preventDefault();
        let value = {
            "user_email" : sessionStorage.getItem('user_email'),
            "id" : id,
            "imagepath" : `http://localhost:3000/images/sub2/${이미지}`,
            "sub" : '서브2'
        }
        let arr = [];
        if(localStorage.getItem('scrap') !== null){
            arr = JSON.parse(localStorage.getItem('scrap'));
            arr = [value, ...arr];
            localStorage.setItem('scrap', JSON.stringify(arr));
        }
        else{
            arr = [value];
            localStorage.setItem('scrap', JSON.stringify(arr));
        }
        // 스크랩 해제
        if(state.scrap_on.includes(id)  ){
            $.ajax({
                url: 'http://localhost:8080/JSP/ohouse/scrap_delete_action.jsp',
                type: 'POST',
                data : value,
                success(res) {
                    console.log('AJAX 성공!');
                    console.log(res);
                    console.log(JSON.parse(res));
                    setState({
                        ...state,
                        // 현재 누른 데이터 scrap
                        scrap_on : state.scrap_on.filter(item => item !== id)
                    })
                },
                error(err) {
                    console.log('AJAX 실패!' + err);
                }
            });
        }
        // 스크랩
        else{
            $.ajax({
                url: 'http://localhost:8080/JSP/ohouse/scrap_post_action.jsp',
                type: 'POST',
                data : value,
                success(res) {
                    console.log('AJAX 성공!');
                    console.log(res);
                    console.log(JSON.parse(res));
                    setState({
                        ...state,
                        // 현재 누른 데이터 scrap
                        scrap_on : [...state.scrap_on, id]
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



    React.useEffect(() => {
        getScrap();
    }, [])

    return (
        <>
            {
                집들이.map((item,id) => {
                    return (
                        <div className="content">
                            <Link to={`/서브페이지/서브2/${id}`}>
                                <div className="img-box" key={item.제품코드}>
                                    <img src={`../images/sub2/${item.이미지}`} alt="" />
                                    <span>
                                        <img src="../images/new_baner.png" alt="" />
                                    </span>
                                    <button className={`comment ${state.scrap_on.includes(id)?'on':''}`} onClick={(e)=>onClickScrap(e, id, item.이미지)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="icon"><defs><path id="scrap-icon-17-b" d="M12.472 6.93l7.056-3.811A1 1 0 0 1 21 4.002v15.496c0 .83-.672 1.502-1.5 1.502h-15c-.828 0-1.5-.673-1.5-1.502V4.002a1 1 0 0 1 1.472-.883l7.056 3.811a.999.999 0 0 0 .944 0z"></path><filter id="scrap-icon-17-a" width="150%" height="150%" x="-25%" y="-25%" filterUnits="objectBoundingBox"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1.5"></feGaussianBlur><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"></feColorMatrix></filter><filter id="scrap-icon-17-c" width="150%" height="150%" x="-25%" y="-25%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="1.5"></feGaussianBlur><feOffset in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix></filter></defs><g fill="none" fill-rule="nonzero" transform="matrix(1 0 0 -1 0 24)"><use fill="#000" filter="url(#scrap-icon-17-a)" href="#scrap-icon-17-b"></use><use fill="#FFF" fill-opacity=".4" href="#scrap-icon-17-b"></use><use fill="#000" filter="url(#scrap-icon-17-c)" href="#scrap-icon-17-b"></use><path stroke="#FFF" d="M12.71 7.37h-.002a1.5 1.5 0 0 1-1.417 0L4.236 3.56a.499.499 0 0 0-.736.442v15.496c0 .553.448 1.002 1 1.002h15c.552 0 1-.449 1-1.002V4.002a.499.499 0 0 0-.734-.443l-7.057 3.81zm-.475-.88h-.001z"></path></g></svg>
                                    </button>
                                </div>
                                <div className="title-box">
                                    <h2>{item.설명란}</h2>
                                    <span><img src={`../images/sub2/${item.이미지2}`} alt="" />{item.출처}</span>
                                    <p>{item.조회수}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })

            }
        </>
    );
};