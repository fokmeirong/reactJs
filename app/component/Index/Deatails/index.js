import React from 'react';
import { connect } from "react-redux";
import { fetchMoviesDetailsById } from "../../../action/movieDetailsAction"

class Details extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchMoviesDetailsById(this.props.match.params.id));
    }

    render() {
        const { data } = this.props;
        return (
            <div className="film-details">
                <div className="detail-left">
                    <img src={ data.poster_path }/>
                </div>
                <div className="detail-right">
                    <p>
                        <span className="movie-name" >{ data.title }</span>
                        <span className="movie-rate" >{ data.vote_average }</span>
                    </p>
                    <p>
                        <span className="movie-overview" >{data.genres.join(" & ")}</span>
                    </p>
                    <p>
                        <span className="movie-release-date" >{ data.release_date }</span>
                    </p>
                    <p>
                        <span className="movie-description" >{ data.overview }</span>
                    </p>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        data: state.detailsReducers.details
    };
};

export default connect(mapStateToProps)(Details);