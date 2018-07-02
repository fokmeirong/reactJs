import React from 'react';
import Layout from '../next/component/Layout'
import App from '../next/app'
import FilterBar from '../next/component/FilterBar'
import Movies  from '../next/component/Content/Movies/Movies'
import 'babel-polyfill';

class Search extends React.Component {

    render() {
        return (
            <Layout>
                <App/>
                <FilterBar total={this.props.total} />
                <Movies movies={this.props.movies} />
            </Layout>
        );
    }
}

Search.getInitialProps = async function () {
    const res = await fetch('http://react-cdp-api.herokuapp.com/movies')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${JSON.stringify(data)}`)

    return {
        movies: data.data,
        total: data.total
    }
}



export default Search;