import React from 'react';
import axios from 'axios';
import { Routes, Route}  from 'react-router-dom';
import NavComponent from './NavComponent';
import Sub1Component from './subpage/Sub1Component';
import Sub2Component from './subpage/Sub2Component';
import Sub3Component from './subpage/Sub3Component';
import Sub1DetailComponent from './subpage/Sub1DetailComponent';
import Sub2DetailComponent from './subpage/Sub2DetailComponent ';
import Sub3DetailComponent from './subpage/Sub3DetailComponent ';

export default function SubComponent () {
    const [photo, setPhoto] = React.useState({
        사진 : [],
        집들이:[]
    });
    
    React.useEffect(() => {
        axios({
            url : '../data/product.json',
            method : 'GET'
        })
        .then((res)=>{
            setPhoto({
                ...photo,
                사진 : res.data.사진,
                집들이 : res.data.집들이
            })
            console.log('sub',photo.사진);
        })
        .catch((err)=>{
            console.log("AXIOS 오류" + err)
        })
    },[]);

    return (
        <>  
            <NavComponent />
            <Routes>
                <Route path='/서브1' element={<Sub1Component 사진={photo.사진}/>} />
                <Route path='서브1/:id' element={<Sub1DetailComponent 사진={photo.사진} />}/>
                <Route path='/서브2' element={<Sub2Component 집들이={photo.집들이}/>} />
                <Route path='서브2/:id' element={<Sub2DetailComponent 집들이={photo.집들이}/>} />
                <Route path='/서브3' element={<Sub3Component />} />
                <Route path='/서브3/노하우' element={<Sub3DetailComponent />} />
            </Routes>
        </>
    );
};

