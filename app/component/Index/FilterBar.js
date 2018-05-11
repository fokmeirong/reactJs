import React from 'react';

class FilterBar extends React.Component {
    render() {
        return (
            <div className="filter-bar">
                <div className="lfloat">{this.props.total} movies found</div>
                <div  className="rfloat">
                    <span>Sort by</span>
                    <span><a>release date</a></span>
                    <span><a>rating</a></span>
                </div>
            </div>
        );
    }
}

export default FilterBar;