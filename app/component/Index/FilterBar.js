import React from 'react';
import QueryStringManager from "../../../client/js/QueryStringManager"

class FilterBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            sortOrder: "desc",
            sortBy:  QueryStringManager.get("sortBy") || "release_date",
        }
        this.handleSortbyClick = this.handleSortbyClick.bind(this);
    }

    handleSortbyClick(value) {
        this.setState({
            sortBy: value
        });
        QueryStringManager.set("sortBy", value);
        QueryStringManager.set("sortOrder", this.state.sortOrder);
        QueryStringManager.save();
    }

    render() {
        this.state.total = this.props.total;
        return (
            <div className="filter-bar">
                <div className="lfloat">{this.state.total} movies found</div>
                <div className="rfloat">
                    <span>Sort by</span>
                    <span className={"condition " + (this.state.sortBy === "release_date" ? "selected" : "") }>
                        <a onClick={() => this.handleSortbyClick("release_date")} >release date</a>
                    </span>
                    <span className={"condition " + (this.state.sortBy === "vote_count" ? "selected" : "") }>
                        <a onClick={() => this.handleSortbyClick("vote_count")}>rating</a>
                    </span>
                </div>
            </div>
        );
    }
}

export default FilterBar;