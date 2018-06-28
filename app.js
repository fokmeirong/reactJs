import React from 'react';
import ReactDOM from 'react-dom';
import "./client/css/main.scss";
import Index from './app/component/index/Index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, history, persistor } from './app/storeConfig';
import { Router  } from 'react-router-dom'


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router history={history}>
                <Index />
            </Router >
        </PersistGate>
    </Provider>
    , document.getElementById('app'));
