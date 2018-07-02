import React from 'react';
import Movie from './Movie';

class Movies extends React.Component {

    render() {
        return (
            <ul className="movies">
                {
                    this.props.movies.map( (movie, key)=> {
                        return <Movie key={key} movie={movie}  />
                    })
                }
            </ul>
        );
    }
}

export default Movies;