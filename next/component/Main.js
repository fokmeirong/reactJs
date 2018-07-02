import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Content from './Content'
import Details from './Deatails'
import Blank from './Content/Blank'
import Layout from './Layout';

export default () => {
    return (
        <Layout>
            <Content/>
        </Layout>
    )
}