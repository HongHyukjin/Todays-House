import React from 'react';
import {Link} from 'react-router-dom'


export default function NavComponent() {

    const [slideIndex, setSlideIndex] = React.useState(0);
    const searchKeywords = ['1 순위', '2 순위', '3 순위', '4 순위', '5 순위', '6 순위', '7 순위', '8 순위', '9 순위', '10 순위'];
  
    React.useEffect(() => {
      const interval = setInterval(() => {
        slideDown();
      }, 3000);
      
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    const slideDown = () => {
       
      setSlideIndex(prevIndex => (prevIndex + 1) % searchKeywords.length);
     
    };
  


    
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
                        
                    </div>
                    <div id="rank-list">
                            <dt>실시간 급상승 검색어</dt>
                                <dd>
                                    <ol className={`slide ${slideIndex > 0 ? 'slide-content' : ''}`}>
                                        {searchKeywords.map((keyword, index) => (
                                        <li key={index} className={index === slideIndex ? 'active' : ''}>{keyword}</li>
                                        ))}
                                    </ol>
                                </dd>
                        </div>
                </div>
            </div>
        </div>
        </>
    );
};

