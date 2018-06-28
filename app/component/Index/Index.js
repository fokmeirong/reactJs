
import React from 'react';
import Header from './Header';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.js';
import Main from './Main';

export class Index extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <div>
          <Header />
          <Main />
        </div>
      </ErrorBoundary>
    );
  }
}

export default Index;