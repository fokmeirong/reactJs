import React from 'react';
import Link from 'next/link';



class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: "df",
            searchBy: "title" ,
            query: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.getSearchString = this.getSearchString.bind(this);
        this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            search: e.target.value
        });

        this.getSearchString();
    }

    getSearchString() {
        const query = "search=" + this.state.search + "&searchBy=" + this.state.searchBy;
        this.setState({
            query: query
        });

    }

    handleSearchByClick(value) {
        this.setState({
            searchBy: value
        });
        this.getSearchString();
    }

    handleSearchButtonClick() {

    }



    render() {
        return (
            <header>
                <div className="logo">netflixroulette</div>
                <div>FIND YOUR MOVIE </div>

                <div className="search-bar">
                    <div className="movie-name">
                        <input className="movie-title"  onChange={this.handleChange} />
                    </div>
                    <div className="lfloat search-filter" >
                        <span>SEARCH BY</span>
                        <span className="search-by">
                            <a onClick={() => this.handleSearchByClick("title")} className={this.state.searchBy === "title" ? "selected" : ""} >TITLE</a>
                            <a onClick={() => this.handleSearchByClick("genres")} className={this.state.searchBy === "genres" ? "selected" : ""} >GENDER</a>
                        </span>
                    </div>
                    <div className="rfloat">
                    <Link href={`/search/${this.state.query}`} >
                        <button >SEARCH</button>
                    </Link>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;