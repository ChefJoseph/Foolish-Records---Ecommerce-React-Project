
import '../App.css';
// import 'react-slideshow-image/dist/styles.css'
// import { Slide } from 'react-slideshow-image'
import React, {useState,useEffect} from 'react';
import Header from './Header'
import RecordContainer from './RecordContainer'
// import ShoppingCart from './ShoppingCart';
import SearchFilter from './SearchFilter';
import {Switch, Route, Routes} from "react-router-dom"
import Home from '../Pages/Home'
import Shop from '../Pages/Shop'
import TwitterFeed from '../Pages/TwitterFeed'
import NavBar from './NavBar';

function App() {

  const [records, setrecords] = useState([])
  useEffect (()=> {
  fetch('http://localhost:5001/records')
  .then(res=>res.json())
  .then(data => setrecords(data))
 
  },[])

  const [search, setSearch] = useState("")
  const filteredrecords = 
  records.filter(record => 
    record.title.toLowerCase().includes(search.toLowerCase())||
    record.artist.toLowerCase().includes(search.toLowerCase())||
    record.year.toString().includes(search.toString())||
    record.genre.toLowerCase().includes(search.toLowerCase())||
    record.subGenre.toLowerCase().includes(search.toLowerCase())
  )


    // const [page, setPage] = useState("/")
  


  return (
    <div >
      <Header search = {search} setSearch={setSearch} records= {records} filteredrecords={filteredrecords} /> 
      <NavBar/>
      <Routes>
      <Route exact path="/" element ={<Home/>} />
      <Route path="/Shop" element ={<Shop/>} />
      <Route path="/TwitterFeed" element ={<TwitterFeed/>} />
      </Routes>

      <SearchFilter search = {search} setSearch={setSearch} records= {records} filteredrecords={filteredrecords} />
      <RecordContainer records={records} setrecords={setrecords}
      filteredrecords={filteredrecords} />
     
    </div>
  );
}

export default App;
