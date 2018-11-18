import React from "react";

// search input view
const SearchBox = ({ seachfield, searchChange }) => {
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--blue"
                type="search"
                placeholder="Search Friends"
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;
