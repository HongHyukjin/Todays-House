/* eslint-disable no-unused-expressions */
import React from 'react';
import $ from 'jquery';
import { useParams } from "react-router-dom";

export default function Sub3DetailComponent ({노하우}) {

    let {id} = useParams();

    const [state,setState] = React.useState({
        isFixed:false
    })

    React.useEffect(()=>{
        let isFixed =false;
        $(window).scroll(function(){
            if($(window).scrollTop()>=600){
                isFixed = true;
            }
            else{
                isFixed = false;
            }
            setState({
                ...state,
                isFixed:isFixed
            })
        });
       
    },[state.isFixed]);

    return (
        
        <div id='sub3Detail'>
            <div className="container">
                <div className="sub3-img-up">
                    <img src={`/images/sub3/${노하우[id].이미지1}`}alt="" />
                </div>
                <div className="gap">
                    <div className="title">
                        <h1>{노하우[id].설명란}</h1>
                    </div>
                    <div className="nick-box">
                        <div className="nickname">
                            <img src='/images/sub3/160758822452433365.webp' alt="" />
                            <div className="name">
                                <h3>{노하우[id].출처}</h3>
                                <p>{노하우[id].시간}</p>
                            </div>
                        </div>
                        <div className="button">
                            <button><svg class="icon" width="9" height="10" viewBox="0 0 9 10" fill="none" preserveAspectRatio="xMidYMid meet"><path d="M3.75 4.25V0.5H5.25V4.25L9 4.25V5.75H5.25V9.5H3.75V5.75H0V4.25L3.75 4.25Z" fill="white"></path></svg>팔로우</button>
                        </div>
                    </div>
                    <div className="sub3-img-bottom sub3-img-bottom1">
                        <img src={`/images/sub3/${노하우[id].이미지2}`} alt="" />
                        <button className="svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" class="icon"><defs><path id="scrap-icon-2258-b" d="M12.472 6.93l7.056-3.811A1 1 0 0 1 21 4.002v15.496c0 .83-.672 1.502-1.5 1.502h-15c-.828 0-1.5-.673-1.5-1.502V4.002a1 1 0 0 1 1.472-.883l7.056 3.811a.999.999 0 0 0 .944 0z"></path><filter id="scrap-icon-2258-a" width="150%" height="150%" x="-25%" y="-25%" filterUnits="objectBoundingBox"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1.5"></feGaussianBlur><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"></feColorMatrix></filter><filter id="scrap-icon-2258-c" width="150%" height="150%" x="-25%" y="-25%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="1.5"></feGaussianBlur><feOffset in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix></filter></defs><g fill="none" fillRule="nonzero" transform="matrix(1 0 0 -1 0 24)"><use fill="#000" filter="url(#scrap-icon-2258-a)" href="#scrap-icon-2258-b"></use><use fill="#FFF" fillOpacity=".4" href="#scrap-icon-2258-b"></use><use fill="#000" filter="url(#scrap-icon-2258-c)" href="#scrap-icon-2258-b"></use><path stroke="#FFF" d="M12.71 7.37h-.002a1.5 1.5 0 0 1-1.417 0L4.236 3.56a.499.499 0 0 0-.736.442v15.496c0 .553.448 1.002 1 1.002h15c.552 0 1-.449 1-1.002V4.002a.499.499 0 0 0-.734-.443l-7.057 3.81zm-.475-.88h-.001z"></path></g></svg>                        
                        </button>
                    </div>
                    <div className="content">
                        <p className='text1'>
                            {노하우[id].글1}
                        </p>
                    </div>
                    <div className="sub3-img-bottom sub3-img-bottom2">
                        <img src={`/images/sub3/${노하우[id].이미지3}`} alt="" />
                        <button className="svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" class="icon"><defs><path id="scrap-icon-2258-b" d="M12.472 6.93l7.056-3.811A1 1 0 0 1 21 4.002v15.496c0 .83-.672 1.502-1.5 1.502h-15c-.828 0-1.5-.673-1.5-1.502V4.002a1 1 0 0 1 1.472-.883l7.056 3.811a.999.999 0 0 0 .944 0z"></path><filter id="scrap-icon-2258-a" width="150%" height="150%" x="-25%" y="-25%" filterUnits="objectBoundingBox"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1.5"></feGaussianBlur><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"></feColorMatrix></filter><filter id="scrap-icon-2258-c" width="150%" height="150%" x="-25%" y="-25%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="1.5"></feGaussianBlur><feOffset in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix></filter></defs><g fill="none" fillRule="nonzero" transform="matrix(1 0 0 -1 0 24)"><use fill="#000" filter="url(#scrap-icon-2258-a)" href="#scrap-icon-2258-b"></use><use fill="#FFF" fillOpacity=".4" href="#scrap-icon-2258-b"></use><use fill="#000" filter="url(#scrap-icon-2258-c)" href="#scrap-icon-2258-b"></use><path stroke="#FFF" d="M12.71 7.37h-.002a1.5 1.5 0 0 1-1.417 0L4.236 3.56a.499.499 0 0 0-.736.442v15.496c0 .553.448 1.002 1 1.002h15c.552 0 1-.449 1-1.002V4.002a.499.499 0 0 0-.734-.443l-7.057 3.81zm-.475-.88h-.001z"></path></g></svg>                        
                        </button>
                    </div>
                    <div className="content">
                        <p>
                            {노하우[id].글2}
                        </p>
                    </div>
                    <div className={`like-btn ${state.isFixed?` on`:''}`}>
                        <button className='like'>
                            <svg class="content-detail-sidebar__icon-blue icon" width="24" height="24" fill="#fff" stroke="rgba(130, 140, 148,0.5)" stroke-width="1" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M23.22 7.95c.4 4.94-2.92 9.71-10.92 13.85a.47.47 0 0 1-.42 0C3.88 17.66.56 12.9.96 7.93 1.54 2.48 8.28.3 12.1 4.7c3.8-4.4 10.55-2.22 11.13 3.25z"></path></svg>
                        </button>
                        <button className='like'>
                            <svg class="content-detail-sidebar__icon-inactive icon" width="24" height="24" viewBox="0 0 24 24" fill="rgba(130, 140, 148,0.5)" preserveAspectRatio="xMidYMid meet"><path fillRule="evenodd" transform="matrix(1 0 0 -1 0 23.033)" d="M12.943 6.342a2 2 0 0 1-1.886 0L3 2.032V20.5a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5V2.033l-8.057 4.309zm-.471-.882l8.056-4.31A1 1 0 0 1 22 2.034V20.5a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 20.5V2.033a1 1 0 0 1 1.472-.882l8.056 4.31a1 1 0 0 0 .944 0z"></path></svg>                        
                        </button>
                    </div>
                </div>
            </div>
        </div>
     
     
    );
};

 