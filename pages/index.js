import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import 'babel-polyfill';
import React from 'react'
import App from '../next/app';
import Layout from '../next/component/Layout'
import { connect } from "react-redux";


class Index extends React.Component {
    render() {
        return (
            <Layout>
                <App/>
            </Layout>
        );
    }
}


export default Index