import React from 'react';
import {Link} from 'react-router-dom'
import $ from 'jquery';


export default function NavComponent() {
    const [slideIndex, setSlideIndex] = React.useState(0);

    const searchKeywords = ['🧡🆕신혼🆕🧡', '🧡🆕틈새수납🆕🧡', '🧡캐노피🧡', '🧡슬라이딩 옷장🧡', '🧡캔버스액자🧡', '🧡그릇정리대🧡', '🧡냄비정리대🧡', '🧡바이칸🧡', '🧡올리브나무🧡'];
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
                                <div className="slide">
                                    {searchKeywords.map((keyword, index) => (
                                        <li
                                        key={index}
                                        className={`slide-item ${index === slideIndex ? 'active' : ''}`}
                                        style={{
                                            transition: 'opacity 0.5s ease',
                                            transform: `translateY(${index === slideIndex ? '1' : '-10%'})`,
                                            opacity: index === slideIndex ? 1 : 0,
                                        }}>
                                        {keyword}
                                        </li>
                                    ))}
                                </div>
                            </dd>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

