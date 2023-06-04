import React from 'react';
import { useParams } from 'react-router-dom';
import $ from 'jquery';

export default function MypagePtDetailComponent ({사진}) {
    const {id} = useParams();

    const [state,setState] = React.useState({
        사진 : [],
        isSub:false
    })

    React.useEffect(() => {
        const data = JSON.parse(localStorage.getItem('photo'));
        setState({
            ...state,
            사진 : data[id]
        })
    }, [])

    const onClickSub = (e) => {
        e.preventDefault();
        let isSub=!state.isSub;
        setState({
            ...state,
            isSub:isSub
        })
    }

    const onClickDelete = (e) =>{
        e.preventDefault();
        const formData={
            "idx":Number(state.사진.idx)
        }
        $.ajax({
            url:'http://localhost:8080/JSP/ohouse/photo_delete_action.jsp',
            type:'post',
            data:formData,
            success(res){
                console.log('AJAX 성공');
                console.log(res);
                alert('삭제되었습니다');
                window.location.href='#/마이페이지/사진';
            },
            error(err){
                console.log('AJAX 실패'+err);
            }
        })
    }

    return (
        <>
        <div id='sub1Detail' >
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <div className="a">
                            <a href="!#">{state.사진.type}</a>
                            <a href="!#">{state.사진.pyeong}</a>
                            <a href="!#">{state.사진.style}</a>
                            <a href="!#">{state.사진.place}</a>
                        </div>
                        <div className="delete" onClick={onClickSub}>
                            <button>. . .</button>
                        </div>
                        {
                            state.isSub&&(
                                <div className="sub" onClick={onClickDelete}>
                                    <a href="!#">삭제하기</a>
                                </div>
                            )
                        }
                    </div>
                    <div className="content">
                        <div className="center-box">
                            <img src={state.사진.file} alt="" />
                        </div>
                        <div className="center-txt">
                            <ul>
                                <li><h3>{state.사진.memo}</h3></li>
                                {/* <li><a href="!#">{state.사진.테그}</a></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

 