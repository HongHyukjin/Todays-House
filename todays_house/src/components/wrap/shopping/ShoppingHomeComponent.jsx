import React from 'react';
import Section1Component from './Section1Component';
import Section2Component from './Section2Component';
import Section3Component from './Section3Component';

export default function ShoppingHomeComponent ({쇼핑홈}) {
    
    return (
        <>
            <Section1Component />
            <Section2Component />
            <Section3Component 쇼핑홈={쇼핑홈}/>
        </>
    );
};

