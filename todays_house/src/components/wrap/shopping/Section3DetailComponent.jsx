import React from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import $ from 'jquery';

export default function Section3DetailComponent({쇼핑홈}) {

    let {id} = useParams();

    const [state,setState] = React.useState({
        쇼핑홈 : [],
        num : 1,
        price : 0,
        sale : 0,
        totalprice : 0,
        memo : ''
    })

    React.useEffect(()=>{
        window.scrollTo(0, 0);
        const data = JSON.parse(localStorage.getItem('쇼핑홈'));
        console.log(Number(data[id].할인가.replace(',','')))
        setState((prevState) => ({
            ...prevState,
            쇼핑홈 : data[id],
            price : Number(data[id].할인가.replace(',','')),
            sale : data[id].할인율2.replace('%',''),
            totalprice : Number(data[id].할인가.replace(',',''))
        }))
    },[]);

    const onClickPlus = (e) => {
        e.preventDefault();
        setState((prevState) => ({
            ...prevState,
            num : state.num+1
        }))
    }

    const onClickMinus = (e) => {
        e.preventDefault();
        if(state.num-1 > 0){
            setState((prevState) => ({
                ...prevState,
                num : state.num-1
            }))
        }
        else{
            alert('1~9999까지만 입력가능합니다');
        }
    }

    React.useEffect(() => {
        if(state.price !== 0){
            setState((prevState) => ({
                ...prevState,
                totalprice : state.num * state.price
            }))
        }
    }, [state.num])

    const commaPrice=(price)=>{
        let value = price.toString();
        const regExp = /(^\d+)(\d{3})/g;
        while( regExp.test(value) ){
            return  value.replace(regExp, '$1,$2');
        }        
    }

    const onChangeMemo = (e) => {
        const {value} = e.target;
        setState((prevState) => ({
            ...prevState,
            memo : value
        }))
    }

    const onClickBasket = (e) => {
        const formData = {
            "user_email" : sessionStorage.getItem('user_email'),
            "id" : id,
            "num" : state.num,
            "price" : state.price,
            "sale" : state.sale,
            "totalprice" : state.totalprice,
            "memo" : state.memo
        }

        $.ajax({
            url: 'http://localhost:8080/JSP/ohouse/basket_post_action.jsp',
            type: 'POST',
            data : formData,
            success(res) {
                console.log('AJAX 성공!');
                console.log(res);
                alert('장바구니에 저장되었습니다!')
            },
            error(err) {
                console.log('AJAX 실패!' + err);
            }
        });
    }

    return (
        <div id='basketdetail' key={id}>
            <div className="container">
                <div className="gap">
                    <div className="nav">
                        <ul>
                            <li>가전·디지털</li>
                            <img src="./images/basket/arrow_right.png" alt="" />
                            <li>계절가전</li>
                            <img src="./images/basket/arrow_right.png" alt="" />
                            <li>제습기</li>
                        </ul>
                    </div>
                    <div className="content">
                        <div className="left-box">
                            <div className="img-box">
                                <img src={`./images/basket/${state.쇼핑홈.이미지}`} alt="" />
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="product-name">
                                <div className="head">
                                    <p>{state.쇼핑홈.제조회사}</p>
                                    <div className="name-box">
                                        <span>{state.쇼핑홈.상품명}</span>
                                        <button className='scrap'><img src="./images/basket/scrap.png" alt="" /></button>
                                    </div>
                                </div>
                                <div className="body">
                                    <ul>
                                        <li>
                                            <span className='discount'>{state.쇼핑홈.할인율2}</span><span className='prime-cost'>{state.쇼핑홈.원가}</span>
                                        </li>
                                        <li>
                                            <span className='price'>{state.쇼핑홈.할인가}</span><span>{state.쇼핑홈.원단위}</span><img src="./images/basket/ic-departure-today-c4b771c1162afcd9223631b660e19d73.png" alt="" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="bottom">
                                    <ul>
                                        <li>
                                            <span className='span1'>혜택</span><span className='point'>{state.쇼핑홈.포인트적립}</span><span>적립 (WELCOME 0.1% 적립)</span>
                                        </li>
                                        <li>
                                            <span className='span2'>월 75,000원 (7개월) 무이자할부</span>
                                        </li>
                                        <li>
                                            <span className='span1'>배송</span><span className='point'>무료배송</span>
                                        </li>
                                        <li>
                                            <span className='span2'>14:00 까지 결제 시</span><span className='start'>오늘 출발</span><img src="./images/basket/image.png" alt="" />
                                        </li>
                                        <li>
                                            <span className='span2'>일반택배</span>
                                        </li>
                                        <li>
                                            <img className='span2' src="./images/basket/check.png" alt="" /><span className='jeju'>제주도/도서산간 지역 8,000원</span>
                                        </li>
                                        <li>
                                            <div className="delivery">
                                                <img src="./images/basket/box.png" alt="" /><span><strong>6/5(월) </strong>도착 예정 85%</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="company-name">
                                    <ul>
                                        <li><img src="./images/basket/house.png" alt="" /><span>LG전자</span></li>
                                        <li>
                                            <button>브랜드홈</button><img  className='brand' src="./images/basket/arrow_right.png" alt="" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product-price">
                                <div className="row1">
                                        <ul>
                                            <li>
                                                <span>{state.쇼핑홈.제품명}</span>
                                            </li>
                                            <li>
                                                <button>
                                                    <a href="" onClick={onClickMinus}>-</a>
                                                    <h1>{state.num}</h1>
                                                    <a href="" onClick={onClickPlus}>+</a>
                                                </button>
                                                <span className='row1-price'>{commaPrice(state.totalprice)}</span>
                                            </li>
                                            <li>
                                                <span>(선택)</span>
                                            </li>
                                            <li>
                                                <input type="text" onChange={onChangeMemo} placeholder='주문에 필요한 내용을 적어주세요'/>
                                            </li>
                                        </ul>
                                </div>
                                <div className="row2">
                                    <ul>
                                        <li>
                                            <span className='order'>주문금액</span>
                                            <span className='order-price'>{commaPrice(state.totalprice)}</span>
                                        </li>
                                        <li>
                                            <button className='shop-basket' onClick={onClickBasket} >장바구니</button>
                                            <button className='buy'>바로구매</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Section3DetailComponent.defaultProps = {
    장바구니 : {
        모두선택 : [

        ],
        체크박스 : []
    } 
}

