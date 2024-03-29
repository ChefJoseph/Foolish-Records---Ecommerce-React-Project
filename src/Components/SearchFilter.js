import React from 'react';


function SearchFilter({search, setSearch}) {

    return (
    
    
        <form action="/" method="get" className="live-search-form">
            <label htmlFor="header-search">
            <span ></span>
            </label>
            <input
            type="text"
            id="header-search"
            placeholder="Search by title, artist, year, genre"
            name="s" 
            autoComplete="off"
            value= {search}
            onChange = {e=>setSearch(e.target.value)}
            className="live-search-form-field"
           
            />
            {/* <button type="button" className="live-search-button button"></button> */}
        </form>
        /* <select name="filter">
                <option value="All">Filter by category</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
        </select> */
      
    )
  }
  
  export default SearchFilter;