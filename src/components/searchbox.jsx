import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input type='search'
                   placeholder='Find a model: '
                   className="bg-light-blue pa3 ba b--green"
                   onChange={searchChange}
            />

        </div>
    )
}

export default SearchBox;
