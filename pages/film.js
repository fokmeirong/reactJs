import React from 'react';
import Layout from '../next/component/Layout'
import App from '../next/app'
import FilterBar from '../next/component/FilterBar'
import Details  from '../next/component/Deatails'
import 'babel-polyfill';

class Search extends React.Component {

    render(props) {
        return (
            <Layout>
                <App/>
                <Details data={this.props.detail} />
            </Layout>
        );
    }
}

Search.getInitialProps = async function (context) {
    const { id } = context.query
    const res = await fetch('http://react-cdp-api.herokuapp.com/movies/' + id)
    const data = await res.json()

    console.log(`Show data fetched. Count: ${JSON.stringify(data)}`)

    return {
        detail: data
    }
}



export default Search;