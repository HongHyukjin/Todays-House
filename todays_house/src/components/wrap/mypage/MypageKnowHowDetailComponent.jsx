import React from 'react';
import $ from 'jquery';
import { useParams } from 'react-router-dom';

export default function MypageKnowHowDetailComponent () {

    const {id} = useParams();

    const [state,setState] = React.useState({
        노하우 : [],
        isSub:false
    })

    React.useEffect(() => {
        const data = JSON.parse(localStorage.getItem('knowhow'));
        setState({
            ...state,
            노하우 : data[id]
        })
       
    }, [])

    const onClickSub =(e)=>{
        e.preventDefault();
        let isSub=!state.isSub;
        setState({
            ...state,
            isSub:isSub
        })
    }

    const onClickDelete =(e)=>{
        e.preventDefault();
        console.log( state.노하우);
        const formData={
            "idx":Number(state.노하우.idx)
        }
        $.ajax({
            url:'http://localhost:8080/JSP/ohouse/knowhow_delete_action.jsp',
            type:'post',
            data:formData,
            success(res){
                console.log('AJAX 성공');
                console.log(res);
                alert('삭제되었습니다');
                window.location.href='#/마이페이지/노하우';
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
                            <h1>{state.노하우.knowhow_title}</h1>
                        </div>
                        <div className="delete" onClick={onClickSub}>
                            <button>. . .</button>
                            {
                            state.isSub&&(
                                <div className="sub" onClick={onClickDelete}>
                                    <a href="!#">삭제하기</a>
                                </div>
                            )
                        }
                        </div>

                    </div>
                    <div className="content">
                        <div className="center-box">
                            <img src={state.노하우.file} alt="" />
                        </div>
                        <div className="center-txt">
                            <ul>
                                <li><h3>{state.노하우.knowhow_content}</h3></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

