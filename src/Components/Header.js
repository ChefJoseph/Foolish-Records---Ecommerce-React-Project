import React from 'react';
// import NavBar from './NavBar';
// import SearchFilter from './SearchFilter';
import Banner from './Banner'

function Header ({search, setSearch, records, filteredrecords}) {

    return (
      <div className = "App">
        <h1 className = "h1">FOOLISH RECORDS </h1>
        
        <Banner />
        
        
        {/* <SearchFilter search = {search} setSearch={setSearch} records= {records} filteredrecords={filteredrecords} /> */}
      </div>
    );
  }
  
  export default Header;