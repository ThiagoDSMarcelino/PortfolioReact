import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Page404 from '../pages/Page404';
import Home from '../pages/Home';

export default function Urls() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}