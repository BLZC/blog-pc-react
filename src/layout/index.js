import React from 'react';

// 组件
import Header from './header';

import Routes from '../router'
// 样式
import './css/index.css';

function Admin () {
    return (
        <div className="main">
            <Header></Header>
        <div className="index">
            <Routes></Routes>
        </div>
        </div>
    )
}

export default Admin