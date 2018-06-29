import React from 'react';
import { Link } from 'react-router-dom'

class Movie extends React.Component {
    render() {
        return (
            <li className="movie">

                    <div>
                        <div className="movie-poster">
                            <Link to={`/film/${this.props.movie.id}`}>
                                <img src={this.props.movie.poster_path} />
                            </Link>
                        </div>
                        <div className="movie-descript">
                            <span>{this.props.movie.title}</span>
                            <span>{this.props.movie.release_date.split("-")[0]}</span>
                        </div>
                        <div className="movie-genres">
                            {this.props.movie.genres.join(" & ")}
                        </div>
                    </div>
            </li>
        );
    }
}

export default Movie;