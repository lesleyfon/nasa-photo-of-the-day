import React, {useState}from 'react';


const Search = (props)=>{

    return (
        <div>
            <span>Search</span><input
             value={props.searchInput}
             type='text' 
             onChange={props.handleChange}
             />
        </div>
        )
}


export default Search;