
import React from 'react';
import Header from './Header';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.js';
import Main from './Main';


const Index = (props) => (
    <ErrorBoundary>
        <div>
            <Header />
            <Main />
        </div>
    </ErrorBoundary>
)

export default Index;