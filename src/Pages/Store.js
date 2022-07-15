import {React, useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap"
import RecordContainer from "../Components/RecordContainer"
import SearchFilter from '../Components/SearchFilter';

export default function Store({addToCart, handleClick, records, setRecords, search, setSearch, filterRecords, filteredrecords }) {
    // const [records, setRecords] = useState([])
    
    // useEffect (()=> {
    //   fetch('http://localhost:5001/records')
    //   .then(res=>res.json())
    //   .then(data => setRecords(data))
        
    //   },[])
    
    // const [search, setSearch] = useState("")
      
    //   
    
    const addItem = item => {
		// add the given item to the cart
	};

    return (
    <div>
        <SearchFilter search={search} setSearch={setSearch}/>   
        <Col>
            <RecordContainer addToCart={addToCart} records={records} filterRecords={filterRecords} handleClick={handleClick} filteredrecords ={filteredrecords}/>
        </Col>
    </div>

    )

}