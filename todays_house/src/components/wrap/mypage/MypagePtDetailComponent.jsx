import React from 'react';
import { useParams } from 'react-router-dom';

export default function MypagePtDetailComponent ({사진}) {
    const {id} = useParams();

    const [state,setState] = React.useState({
        사진 : []
    })

    React.useEffect(() => {
        const data = JSON.parse(localStorage.getItem('photo'));
        setState({
            ...state,
            사진 : data[id]
        })
    }, [])

    return (
        <>
        <div id='sub1Detail' >
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <a href="!#">{state.사진.type}</a>
                        <a href="!#">{state.사진.pyeong}</a>
                        <a href="!#">{state.사진.style}</a>
                        <a href="!#">{state.사진.place}</a>
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

 