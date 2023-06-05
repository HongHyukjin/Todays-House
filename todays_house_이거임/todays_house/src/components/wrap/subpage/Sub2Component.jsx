import React from 'react';
import axios from 'axios';
import Sub2ComponentChild from './Sub2ComponentChild';

export default function Sub2Component({집들이}) {


    // 집들이 페이지
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
                        <Sub2ComponentChild 집들이={집들이} />
                    </div>
                </div>
            </div>
        </div>
    );
};
