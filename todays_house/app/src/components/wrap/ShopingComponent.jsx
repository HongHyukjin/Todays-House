import React from 'react';
import NavShopComponent from './NavShopComponent'
import Section1Component from './shoping/Section1Component';
import Section2Component from './shoping/Section2Component';
import Section3Component from './shoping/Section3Component';


export default function ShopingComponent(){
    return (
        <>
            <NavShopComponent/>        
            <Section1Component/>
            <Section2Component/>
            <Section3Component/>
        </>
    );
};  