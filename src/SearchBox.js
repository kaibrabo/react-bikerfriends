import React from 'react';

const SearchBox = ({seachfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--blue'
                type='search'
                placeholder='Search Friends'
                onChange={searchChange}>
            </input>
        </div>
    );
}

export default SearchBox;