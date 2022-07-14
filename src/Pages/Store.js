import {React, useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap"
import RecordContainer from "../Components/RecordContainer"
import SearchFilter from '../Components/SearchFilter';

export default function Store({addToCart, handleClick}) {
    const [records, setRecords] = useState([])
    
    useEffect (()=> {
      fetch('http://localhost:5001/records')
      .then(res=>res.json())
      .then(data => setRecords(data))
        
      },[])
    
      const [search, setSearch] = useState("")
      
      const filteredrecords = records.filter(record => 
        // console.log(`yes`, record)
        record.title.toLowerCase().includes(search.toLowerCase())||
        record.artist.toLowerCase().includes(search.toLowerCase())||
        record.year.toString().includes(search.toString())||
        record.genre.toLowerCase().includes(search.toLowerCase())||
        record.subGenre.toLowerCase().includes(search.toLowerCase())
)
    
    const addItem = item => {
		// add the given item to the cart
	};

    return (
    <div>
        <SearchFilter search={search} setSearch={setSearch}/>   
        <Col>
            <RecordContainer addToCart={addToCart} records={records} filteredrecords={filteredrecords} handleClick={handleClick}/>
        </Col>
    </div>

    )

}