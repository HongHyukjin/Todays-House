import React from 'react';
import {Link} from 'react-router-dom'
import $ from 'jquery';

export default function NavComponent({nav,setNav}) {

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

    React.useEffect(() => {
        let nav2 = localStorage.getItem('nav2');
        console.log(nav2);
        setNav({
            ...nav,
            nav2 : localStorage.getItem('nav2')
        })
    }, [])

    React.useEffect(() => {
        $('#nav .bottom-nav-btn').on({
            click(e){
              let nav2Click = '';
              $('.bottom-nav-btn').removeClass('on');
              $(this).toggleClass('on');
              nav2Click = $(this)[0].innerHTML;
              console.log(nav2Click)
              setNav({
                ...nav,
                nav2 : nav2Click
              })
            }
          })
    })

    return (
        <div id='nav'>
            <div className="container">
                <div className="gap">
                    <div className="row2">
                        <div className="headbox2">
                            {nav.nav1 ==='커뮤니티' && 
                                <ul>
                                    <li className='bottom-nav'><Link to="/" className={`bottom-nav-btn ${nav.nav2==='홈'?'on':''}`} >홈</Link></li>
                                    <li><a href="" className={`bottom-nav-btn ${nav.nav2==='팔로잉'?'on':''}`} >팔로잉</a></li>
                                    <li><Link to="/서브페이지/서브1" className={`bottom-nav-btn ${nav.nav2==='사진'?'on':''}`}>사진</Link></li>
                                    <li><Link to="/서브페이지/서브2" className={`bottom-nav-btn ${nav.nav2==='집들이'?'on':''}`}>집들이</Link></li>
                                    <li><Link to="/서브페이지/서브3" className={`bottom-nav-btn ${nav.nav2==='노하우'?'on':''}`}>노하우</Link></li>
                                    <li><a href="" className={`bottom-nav-btn ${nav.nav2==='전문가집들이'?'on':''}`} >전문가집들이</a></li>
                                    <li><a href="" className={`bottom-nav-btn ${nav.nav2==='셀프가이드'?'on':''}`} >셀프가이드</a></li>
                                    <li><a href="" className={`bottom-nav-btn ${nav.nav2==='3D인테리어'?'on':''}`} >3D인테리어</a></li>
                                    <li><a href="" className={`bottom-nav-btn ${nav.nav2==='이벤트'?'on':''}`} >이벤트</a></li>
                                </ul>
                            }
                            {nav.nav1 === '쇼핑' &&
                                <ul>
                                    <li><Link to="/쇼핑페이지/쇼핑홈" className={`bottom-nav-btn ${nav.nav2==='쇼핑홈'?'on':''}`}>쇼핑홈</Link></li>
                                    <li><a href="" className='bottom-nav-btn' >카테고리</a></li>
                                    <li><a href="" className='bottom-nav-btn'>베스트</a></li>
                                    <li><a href="" className='bottom-nav-btn'>오늘의딜</a></li>
                                    <li><a href="" className='bottom-nav-btn'>리퍼마켓</a></li>
                                    <li><a href="" className='bottom-nav-btn' >오굿즈</a></li>
                                    <li><a href="" className='bottom-nav-btn' >빠른배송</a></li>
                                    <li><a href="" className='bottom-nav-btn' >오!쇼룸</a></li>
                                    <li><a href="" className='bottom-nav-btn' >프리미엄</a></li>
                                    <li><a href="" className='bottom-nav-btn' >기획전</a></li>
                                </ul>
                            }
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
    );
};

