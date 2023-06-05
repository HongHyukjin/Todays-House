import React from 'react';
import { Routes, Route}  from 'react-router-dom';
import NavComponent from './NavComponent';
import ShoppingHomeComponent from './shopping/ShoppingHomeComponent';
import Section3DetailComponent from './shopping/Section3DetailComponent';
import axios from 'axios';

export default function ShoppingComponent ({nav,setNav}) {

    const [state,setState] = React.useState({
        쇼핑홈 : []
    });

    // const getNewshopProduct=()=>{

    // }

    React.useEffect(()=>{

        axios({
            url : '/data/shop.json',
            method : 'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                쇼핑홈 : res.data.쇼핑홈
            })
        })
        .catch((err)=>{
            console.log("AXIOS 오류!" + err)
        })
        // getNewshopProduct();
    },[]);

    return (
        <>
            <NavComponent nav={nav} setNav={setNav}/>
                <Routes>
                    <Route index element={<ShoppingHomeComponent 쇼핑홈={state.쇼핑홈}/>}/>
                    <Route path="/쇼핑홈" element={<ShoppingHomeComponent 쇼핑홈={state.쇼핑홈}/>}/>
                    <Route path="/쇼핑디테일/:id" element={<Section3DetailComponent 쇼핑홈={state.쇼핑홈}/>}/>
                </Routes>
        </>
    );
};

