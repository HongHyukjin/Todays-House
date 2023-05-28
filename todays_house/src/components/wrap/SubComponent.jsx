import React from 'react';
import { Routes, Route}  from 'react-router-dom';
import NavComponent from './NavComponent';
import Sub1Component from './subpage/Sub1Component';
import Sub2Component from './subpage/Sub2Component';
import Sub3Component from './subpage/Sub3Component';

export default function SubComponent () {
    return (
        <>  
            <NavComponent />
            <Routes>
                <Route path='/서브1' element={<Sub1Component />} />
                <Route path='/서브2' element={<Sub2Component />} />
                <Route path='/서브3' element={<Sub3Component />} />
            </Routes>
        </>
    );
};

