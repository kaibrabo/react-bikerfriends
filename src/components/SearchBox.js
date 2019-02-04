import React from "react";

// search input view
const SearchBox = ({ seachfield, searchChange }) => {
    console.log("searchbox");
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--blue"
                type="search"
                placeholder="Search Robots"
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;
