
import React from 'react';
import createClass from 'create-react-class';
import Header from './Header';
import FilterBar from './FilterBar';
import Footer from './Footer';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.js';
import Main from './Main';


export class Index extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      </ErrorBoundary>
    );
  }
}

export default Index;