import React from 'react';
import {Link} from 'react-router-dom'
import $ from 'jquery';


export default function NavComponent() {
    const [slideIndex, setSlideIndex] = React.useState(0);

    const searchKeywords = ['1 신혼', '2 틈새수납', '3 캐노피', '4 슬라이딩 옷장', '5 순위', '6 캔버스액자', '7 그릇정리대', '8 냄비정리대', '9 바이칸', '10 올리브나무'];
    let setId = 0;
    
    React.useEffect(() => {
      const slideUp = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % searchKeywords.length);
      };
    
      setId = setInterval(slideUp, 3000);
    
      return () => {
        clearInterval(setId);
      };
    }, []);


      
    return (
        <>
        <div id='nav'>
            <div className="container">
                <div className="gap">
                    <div className="row2">
                        <div className="headbox2">
                            <ul>
                                <li><Link to="/">홈</Link></li>
                                <li><a href="!#">팔로잉</a></li>
                                <li><Link to="/서브페이지/서브1">사진</Link></li>
                                <li><Link to="/서브페이지/서브2">집들이</Link></li>
                                <li><Link to="/서브페이지/서브3">노하우</Link></li>
                                <li><a href="!#">전문가집들이</a></li>
                                <li><a href="!#">셀프가이드</a></li>
                                <li><a href="!#">3D인테리어</a></li>
                                <li><a href="!#">이벤트</a></li>
                            </ul>
                        </div>
                        <div id="rank-list">
                           
                                <dd>
                                    <ol className="slide">
                                        {searchKeywords.map((keyword, index) => (
                                            <li key={index} className={index === slideIndex ? 'active' : ''}
                                            style={{ display: index === slideIndex ? 'block' : 'none' }} >
                                            {keyword}
                                            </li>
                                        ))}
                                    </ol>
                                </dd>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
        </>
    );
};

