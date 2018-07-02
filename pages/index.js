import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import 'babel-polyfill';
import React from 'react'
import App from '../next/app';
import { connect } from "react-redux";


class Index extends React.Component {
    render() {
        return (
            <App/>
        );
    }
}

Index.getInitialProps = async function () {
    const res = await fetch('http://react-cdp-api.herokuapp.com/movies')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${JSON.stringify(data)}`)

    return {
        shows: data
    }
}



export default Index