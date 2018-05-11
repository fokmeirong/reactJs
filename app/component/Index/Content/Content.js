import React from 'react';
import Movies from './Movies/Movies';

class Content extends React.Component {
    render() {
        return (
            <div>
                <Movies movies={this.props.movies}/>
            </div>
        );
    }
}

export default Content;