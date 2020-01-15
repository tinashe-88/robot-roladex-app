import React from 'react';

const SearchBox = ({ searchField, searchChange}) => {
    console.log('SearchBox');
    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--black bg-light-gray"
                type="search" 
                placeholder="Search Robot Friends..."
                onChange={searchChange}/>
        </div>
    )
}

export default SearchBox;