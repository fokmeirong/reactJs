import React from 'react';
import { connect } from "react-redux";
import QueryStringManager from "../../../client/js/QueryStringManager";
import { fetchMovies } from "../../action/moviesActions";
import { history } from '../../storeConfig';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: QueryStringManager.get("search"),
            searchBy: QueryStringManager.get("searchBy") || "title"
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSearchByClick = this.handleSearchByClick.bind(this);
        this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e) {
        this.setState({
            search: e.target.value
        });
    }

    handleSearchByClick(value) {
        this.setState({
            searchBy: value
        });
        QueryStringManager.set("searchBy", value);
    }

    handleSearchButtonClick() {
        QueryStringManager.set("search", this.state.search);
        QueryStringManager.set("searchBy", this.state.searchBy);
        // history.push("/Search/" + QueryStringManager.stringify());
        history.push("/Search/123");
        this.props.dispatchMovies(this.props.match.params.criteria);
    }

    handleKeyPress(target) {
        if (target.charCode == 13) {
            this.handleSearchButtonClick();
        }
    }

    render() {
        return (
            <header>
                <div className="logo">netflixroulette</div>
                <div>FIND YOUR MOVIE </div>

                <div className="search-bar">
                    <div className="movie-name">
                        <input className="movie-title" value={this.state.search} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
                    </div>
                    <div className="lfloat search-filter" >
                        <span>SEARCH BY</span>
                        <span className="search-by">
                            <a onClick={() => this.handleSearchByClick("title")} className={this.state.searchBy === "title" ? "selected" : ""} >TITLE</a>
                            <a onClick={() => this.handleSearchByClick("genres")} className={this.state.searchBy === "genres" ? "selected" : ""} >GENDER</a>
                        </span>
                    </div>
                    <div className="rfloat">
                        <button onClick={() => this.handleSearchButtonClick()}  >SEARCH</button>
                    </div>
                </div>
            </header>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    dispatchMovies: () => dispatch(fetchMovies())
});

export default connect(null, mapDispatchToProps)(Header);