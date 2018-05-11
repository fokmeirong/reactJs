import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="logo">netflixroulette</div>
                <div>FIND YOUR MOVIE</div>

                <div className="search-bar">
                    <div className="movie-name">
                        <input name="movie-title" placeholder="duck duck go"/>
                    </div>
                    <div className="lfloat search-filter" >
                        <span>SEARCH BY</span>
                        <span className="search-by">
                            <a>TITLE</a>
                            <a>GENDER</a>
                        </span>
                    </div>
                    <div className="rfloat">
                        <button>SEARCH</button>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;