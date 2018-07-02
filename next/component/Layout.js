import React from 'react';
import Header from './Header';
import Main from './Main';

const Layout = (props) => (
    <div id="app">
        <Header />
        {props.children}
    </div>
)

export default Layout;