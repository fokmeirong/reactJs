import React from 'react';
import { connect } from "react-redux";
import Movies from './Movies/Movies';
import FilterBar from '../FilterBar'

class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.movies.length === 0) {
            return (
                <div className="no-films">No films found</div>
            )
        } else {
            return (
                <div>
                    <FilterBar total={this.props.total} />
                    <Movies movies={this.props.movies} />
                </div>
            )
        }
    }
}



export default Content;