import React from 'react';
import { Routes, Route}  from 'react-router-dom';
import NavComponent from './NavComponent';
import Section1Component from './shopping/Section1Component';
import Section2Component from './shopping/Section2Component';
import Section3Component from './shopping/Section3Component';

export default function ShoppingComponent () {
    return (
        <>
            <NavComponent />
            <Section1Component />
            <Section2Component />
            <Section3Component />
        </>
    );
};

