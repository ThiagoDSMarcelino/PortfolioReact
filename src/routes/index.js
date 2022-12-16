import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Page404 from '../pages/Page404';
import Main from '../pages/Main';

export default function Urls() {
    return (
        <Routes>
            <Route exact path='/' element={<Main />} />
            
            <Route path='*' element={<Page404 />} />
        </Routes>
    );
}