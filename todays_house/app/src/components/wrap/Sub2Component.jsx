import React from 'react';
import jQuery from 'jquery';
import axios from 'axios';
import Sub2Componentchild from './Sub2Componentchild';

export default function Sub2Component() {

    const [state, setState] = React.useState({
        집들이: []
    });

    const getNewProduct2 = () => {
        axios({
            url: './data/product.json',
            method: 'GET'
        })
            .then((res) => {
                setState({
                    ...state,
                    집들이: res.data.집들이
                })
            })
            .catch((err) => {
                console.log("AXIOS 오류!" + err)
            })
    }

    React.useEffect(() => {
        getNewProduct2();
    }, []);

    return (
        <div id='sub2'>
            <div className="container">
                <div className="gap">
                    <div className="nav-box">
                        <ul>
                            <li><button>정렬<img src="./images/arrowbottom.png" alt="" /></button></li>
                            <li><button>주거형태<img src="./images/arrowbottom.png" alt="" /></button></li>
                            <li><button>평수<img src="./images/arrowbottom.png" alt="" /></button></li>
                            <li><button>예산<img src="./images/arrowbottom.png" alt="" /></button></li>
                            <li><button>가족형태<img src="./images/arrowbottom.png" alt="" /></button></li>
                            <li><button>스타일<img src="./images/arrowbottom.png" alt="" /></button></li>
                            <li><button>컬러<img src="./images/arrowbottom.png" alt="" /></button></li>
                            <li><button>세부공사<img src="./images/arrowbottom.png" alt="" /></button></li>
                            <li><button>분양<img src="./images/arrowbottom.png" alt="" /></button></li>
                            <li><button>작업자<img src="./images/arrowbottom.png" alt="" /></button></li>
                        </ul>
                    </div>
                    <div className="content-box">
                        <Sub2Componentchild 집들이={state.집들이} />
                    </div>
                </div>
            </div>
        </div>
    );
};
