import React from 'react';
import Header from './Header';
import Main from './Main';
import ErrorBoundary2 from '../../app/component/ErrorBoundary/ErrorBoundary';

const Layout = (props) => (
    <ErrorBoundary2>
        <div>
            <Header />
            <Main />
        </div>
    </ErrorBoundary2>
)


export default Layout;