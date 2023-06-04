import React from 'react';

export default function BasketComponent(props) {

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div id='basket'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="left-box">
                            <div className="row1">
                                <input type="checkbox" value={'모두선택'} /* checked={state.체크박스} *//>
                                <span>모두선택</span>
                                <p>선택삭제</p>
                            </div>
                            <div className="row2">
                                <ul>
                                    <li>
                                        <div className='ro1'>
                                            <span className='span1'>주식회사 삼정 배송</span>
                                        </div>
                                    </li>
                                    <li>
                                        <input type="checkbox" className='check' value={'제품선택'} /* checked={state.체크박스.includes('모두선택')} *//>
                                        <img className='baesong' src="./images/basket/ic-departure-today-c4b771c1162afcd9223631b660e19d73.png" alt="" />
                                        <span className='span2'>평일 14:00까지 결제시</span>
                                        <img className='img2' src="./images/basket/x.png" alt="" />
                                    </li>
                                    <li>
                                        <img className='product' src="./images/basket/168507672889954267.avif" alt="" />
                                        <span className='span3'>[LG 전자] LG 휘센 듀얼인버터 제습기 20L 블루 빠른배송 DQ202PBBC</span>
                                    </li>
                                    <div className="choose-box">
                                        <li>
                                            <span className='span4'>DQ202PBBC(블루)</span><img src="./images/basket/x.png" alt="" />
                                        </li>
                                        <li>
                                            <div className="button-box">
                                                <span className='min'>-</span><button>1</button><span className='plu'>+</span>
                                            </div>
                                            <span className='span5'>525,000원</span>
                                        </li>
                                        <li>
                                            <span className='span6'>(선택)</span>
                                        </li>
                                        <li>
                                            <input type="text" className='choose' placeholder='주문에 필요한 내용을 적어주세요' />
                                        </li>
                                    </div>
                                    <li>
                                        <span className='span7'>옵션변경 | 바로구매</span>
                                        <p>525,000원</p>
                                    </li>
                                    <li>
                                        <span className='span8'>배송비 무료</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="content-box">
                                <ul>
                                    <li>
                                        <span>총 상품금액</span><p>690,000원</p>
                                    </li>
                                    <li>
                                        <span>총 배송비</span><p>+ 0원</p>
                                    </li>
                                    <li>
                                        <span>총 할인금액</span><p>-165,000원</p>
                                    </li>
                                    <li>
                                        <span className='last'>결제금액</span><p className='last-price'>525,000원</p>
                                    </li>
                                </ul>
                            </div>
                            <button>1개 상품 구매하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

BasketComponent.defaultProps = {
    장바구니 : {
        모두선택 : [

        ],
        체크박스 : []
    } 
}

