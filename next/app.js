import React from 'react';
import Layout from './component/Layout';
import { Provider } from 'react-redux';
import { store } from './storeConfig';

const App = (props) => (
    <Provider store={store}>
        <div >
            <Layout />
            <style jsx="true">{`

            `}
            </style>
        </div>

    </Provider>
)


export default App
