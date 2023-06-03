import React from 'react';
import { useParams } from 'react-router-dom';

export default function MypageKnowHowDetailComponent () {

    const {id} = useParams();

    const [state,setState] = React.useState({
        노하우 : []
    })

    React.useEffect(() => {
        const data = JSON.parse(localStorage.getItem('knowhow'));
        setState({
            ...state,
            노하우 : data[id]
        })
    }, [])

    return (
        <>
            <div id='sub1Detail' >
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <a href="!#">{state.노하우.knowhow_title}</a>
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
                        <div className="right">
                            <div class="h_container">
                                <i id="heart" class="far fa-heart"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

