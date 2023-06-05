import React from 'react';
import $ from 'jquery';

export default function BasketComponent(props) {

    const [state,setState] = React.useState({
        쇼핑홈 : [],
        장바구니 : [],
        realTotalPrice : 0,
        isBasketNum : 0,
        checkedProduct : [],
        isClick : 0
    })

    React.useEffect(() => {
        window.scrollTo(0, 0);
        getBasket();
    }, [])

    const getBasket = async () => {
        try {
            const user_email = sessionStorage.getItem('user_email');
            const form_data = {
                "user_email": user_email
            };

            const res = await $.ajax({
                url: 'http://localhost:8080/JSP/ohouse/basket_select_action.jsp',
                type: 'POST',
                data: form_data,
                dataType: 'json'
            });

            console.log('AJAX 성공');
            console.log(res.result);

            let realTotalPrice = 0;
            let isBasketNum = 0;
            let checkedProduct = [];
            
            for(let i=0; i<res.result.length; i++){
                realTotalPrice += res.result[i].totalprice;
                isBasketNum++;
                checkedProduct = [...checkedProduct, res.result[i].id];
            }

            if(state.isClick === 0){
                setState((prevState) => ({
                    ...prevState,
                    장바구니: res.result,
                    realTotalPrice : realTotalPrice,
                    isBasketNum : isBasketNum,
                    checkedProduct : checkedProduct
                }));
            }
            else{
                setState((prevState) => ({
                    ...prevState,
                    장바구니: res.result,
                    // realTotalPrice : realTotalPrice,
                    isBasketNum : isBasketNum
                }));
            }
        } catch (err) {
            console.log('AJAX 실패' + err);
        }
    };

    React.useEffect(() => {
        const data = JSON.parse(localStorage.getItem('쇼핑홈'));
        setState({
            ...state,
            쇼핑홈 : data
        })
        getBasket();
    }, [state.isClick])

    const commaPrice=(price)=>{
        if(price < 1000){
            return price;
        }
        let value = price.toString();
        const regExp = /(^\d+)(\d{3})/g;
        while( regExp.test(value) ){
            return  value.replace(regExp, '$1,$2');
        }        
    }

    const onChangeAll = (e) => {
        const {checked} = e.target;
        let checkedProduct = [];
        let realTotalPrice = 0;
        for(let i=0; i<state.장바구니.length; i++){
            checkedProduct = [...checkedProduct, state.장바구니[i].id];
            realTotalPrice += state.장바구니[i].totalprice
        }
        if(checked === true){
            setState({
                ...state,
                checkedProduct : checkedProduct,
                realTotalPrice : realTotalPrice
            })
        }
        else{
            setState({
                ...state,
                checkedProduct : [],
                realTotalPrice : 0
            })
        }
    }

    const onChangeProduct = (e, idx) => {
        const {checked} = e.target;
        let realTotalPrice = 0;
        if(checked === true){
            realTotalPrice = state.realTotalPrice + state.장바구니[idx].totalprice
            console.log(realTotalPrice);
            setState({
                ...state,
                checkedProduct : [...state.checkedProduct, idx],
                realTotalPrice : realTotalPrice
            })
        }
        else{
            realTotalPrice = state.realTotalPrice - state.장바구니[idx].totalprice
            setState({
                ...state,
                checkedProduct : state.checkedProduct.filter((item) => item !== idx),
                realTotalPrice : realTotalPrice
            })
        }
    }

    const onClickUpdateProduct = (e, id, num, price, totalprice) => {
        e.preventDefault();
        console.log(id);
        if(e.target.innerHTML === '-'){
            if(num-1 < 1){
                alert('1개 이하는 불가능합니다!');
                return;
            }
            const formData = {
                'user_email' : sessionStorage.getItem('user_email'),
                'id' : id,
                'num' : num - 1,
                'totalprice' : totalprice - price
            }
            $.ajax({
                url: 'http://localhost:8080/JSP/ohouse/basket_update_action.jsp',
                type: 'POST',
                data : formData,
                success(res) {
                    console.log('AJAX 성공!');
                    console.log(res);
                    if(state.checkedProduct.includes(id)){
                        let realTotalPrice = 0;
                        realTotalPrice = state.realTotalPrice - price
                        setState({
                            ...state,
                            isClick : state.isClick + 1,
                            realTotalPrice : realTotalPrice
                        })
                    }
                    else{
                        setState({
                            ...state,
                            isClick : state.isClick + 1
                        })
                    }
                },
                error(err) {
                    console.log('AJAX 실패!' + err);
                }
            });
        }
        else if(e.target.innerHTML === '+'){
            const formData = {
                'user_email' : sessionStorage.getItem('user_email'),
                'id' : id,
                'num' : num + 1,
                'totalprice' : totalprice + price
            }
            $.ajax({
                url: 'http://localhost:8080/JSP/ohouse/basket_update_action.jsp',
                type: 'POST',
                data : formData,
                success(res) {
                    console.log('AJAX 성공!');
                    console.log(res);
                    if(state.checkedProduct.includes(id)){
                        let realTotalPrice = 0;
                        realTotalPrice = state.realTotalPrice + price
                        setState({
                            ...state,
                            isClick : state.isClick + 1,
                            realTotalPrice : realTotalPrice
                        })
                    }
                    else{
                        setState({
                            ...state,
                            isClick : state.isClick + 1
                        })
                    }
                },
                error(err) {
                    console.log('AJAX 실패!' + err);
                }
            });
        }

    }

    const onClickDelete = (e, id) => {
        e.preventDefault();
        const formData = {
            'user_email' : sessionStorage.getItem('user_email'),
            'id' : id
        }
        $.ajax({
            url: 'http://localhost:8080/JSP/ohouse/basket_delete_action.jsp',
            type: 'POST',
            data : formData,
            success(res) {
                console.log('AJAX 성공!');
                console.log(res);
                setState({
                    ...state,
                    isClick : state.isClick + 1
                })
            },
            error(err) {
                console.log('AJAX 실패!' + err);
            }
        });
    }

    return (
        <div id='basket'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="left-box">
                            <div className="row1">
                                <input type="checkbox" value={'모두선택'} onChange={onChangeAll} checked={state.checkedProduct.length === state.장바구니.length} />
                                <span>모두선택</span>
                                <p>선택삭제</p>
                            </div>
                            {
                                state.장바구니.map((item,idx) => {
                                    return (
                                        <div className="row2">
                                            <ul>
                                                <li>
                                                    <div className='ro1'>
                                                        <span className='span1'>주식회사 삼정 배송</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className='check' value={`제품선택 ${idx}`} onChange={(e) => onChangeProduct(e,idx)} checked={state.checkedProduct.includes(item.id)} />
                                                    <img className='baesong' src="./images/basket/ic-departure-today-c4b771c1162afcd9223631b660e19d73.png" alt="" />
                                                    <span className='span2'>평일 14:00까지 결제시</span>
                                                    <a href="" onClick={(e) => onClickDelete(e,item.id)}><img className='img2' src="./images/basket/x.png" alt="" /></a>
                                                </li>
                                                <li>
                                                    {/* <img className='product' src="./images/basket/168507672889954267.avif" alt="" /> */}
                                                    <img className='product' src={`images/basket/${state.쇼핑홈[item.id].상품이미지}`} alt="" />
                                                    <span className='span3'>{state.쇼핑홈[item.id].상품명}</span>
                                                </li>
                                                <div className="choose-box">
                                                    <li>
                                                        <span className='span4'>{state.쇼핑홈[item.id].제품명}</span><img src="./images/basket/x.png" alt="" />
                                                    </li>
                                                    <li>
                                                        <div className="button-box">
                                                            <button>
                                                                <a href="" onClick={(e) => onClickUpdateProduct(e, item.id, item.num, item.price, item.totalprice)} >-</a>
                                                                {item.num}
                                                                <a href="" onClick={(e) => onClickUpdateProduct(e, item.id, item.num, item.price, item.totalprice)} >+</a>
                                                            </button>
                                                        </div>
                                                        <span className='span5'>{`${commaPrice(item.totalprice)}원`}</span>
                                                    </li>
                                                    <li>
                                                        <span className='span6'>(선택)</span>
                                                    </li>
                                                    <li>
                                                        {/* <input type="text" className='choose' placeholder='주문에 필요한 내용을 적어주세요' /> */}
                                                        <input type="text" className='choose' placeholder='아무것도 적지마세요' />
                                                    </li>
                                                </div>
                                                <li>
                                                    <span className='span7'>옵션변경 | 바로구매</span>
                                                    <p>{`${commaPrice(item.totalprice)}원`}</p>
                                                </li>
                                                <li>
                                                    <span className='span8'>배송비 무료</span>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="right-box">
                            <div className="content-box">
                                <ul>
                                    <li>
                                        <span>총 상품금액</span><p>{`${commaPrice(state.realTotalPrice)}원`}</p>
                                    </li>
                                    <li>
                                        <span>총 배송비</span><p>0원</p>
                                    </li>
                                    <li>
                                        <span>총 할인금액</span><p>0원</p>
                                    </li>
                                    <li>
                                        <span className='last'>결제금액</span><p className='last-price'>{`${commaPrice(state.realTotalPrice)}원`}</p>
                                    </li>
                                </ul>
                            </div>
                            <button>{`${state.isBasketNum}개 상품 구매하기`}</button>
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

