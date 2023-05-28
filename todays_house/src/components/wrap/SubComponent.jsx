import React from 'react';
import { Routes, Route}  from 'react-router-dom';
import NavComponent from './NavComponent';
import Sub1Component from './subpage/Sub1Component';
import Sub2Component from './subpage/Sub2Component';
import Sub3Component from './subpage/Sub3Component';
import DetailComponent from './subpage/DetailComponent'
import axios from 'axios';

export default function SubComponent () {

    const [state, setState] = React.useState({
        사진 : []
    });

    const getNewProduct3 = () =>{
        axios({
            url : '../data/product.json',
            method : 'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                사진 : res.data.사진
            })
        })
        .catch((err)=>{
            console.log("AXIOS 오류" + err)
        })
    }

    React.useEffect(()=>{
        getNewProduct3();
    },[]);

    return (
        <>  
            <NavComponent />
            <Routes>
                <Route path='/서브1' element={<Sub1Component 사진={state.사진}/>} />
                <Route path='/서브2' element={<Sub2Component />} />
                <Route path='/서브3' element={<Sub3Component />} />
                <Route path='/서브1/상세보기/:id' element={<DetailComponent 사진={state.사진}/>} />
                    
            </Routes>
        </>
    );
};

