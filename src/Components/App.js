
import '../App.css';

import React, {useState, useEffect} from 'react';
import Header from './Header'


import {Route, Routes} from "react-router-dom"
import Home from '../Pages/Home'
import Store from '../Pages/Store'
import TwitterFeed from '../Pages/TwitterFeed'
import NavBar from './NavBar';
import {Container} from 'react-bootstrap'
import ShoppingCart from './ShoppingCart'
// import Slider from './slider/slider'

function App () {
  const [cart, setCart] = useState([]);
  const [records, setRecords] = useState([])
  const [search, setSearch] = useState("")

    useEffect (()=> {
      fetch('http://localhost:5001/records')
      .then(res=>res.json())
      .then(data => setRecords(data))
        
      },[])
        function addToCart (addedrecordData) {
            if (cart.includes(addedrecordData)){
              return (alert('Limit 1 record per order!'))
            }
            else {setCart([...cart, addedrecordData])}
          }
       
          
        function deleteFromArmy(recordDataId){
            const filtrdRecords= cart
              
              .filter((recordData) => recordData !== recordDataId)

              setCart(filtrdRecords)
          }

          const filteredrecords = records.filter(record => 
                
                record.title.toLowerCase().includes(search.toLowerCase())||
                record.artist.toLowerCase().includes(search.toLowerCase())||
                record.year.toString().includes(search.toString())||
                record.genre.toLowerCase().includes(search.toLowerCase())||
                record.subGenre.toLowerCase().includes(search.toLowerCase())
          
        )  
          


        function filterRecords(clickedrecordData){
            const filtrdCart = 
            records.filter((recordData) => recordData.id !== clickedrecordData.id)
            
            setRecords(filtrdCart)
          }
        
            const filtrdRecords= records.filter(recordData => {
            for (const i of cart) {
              if (i === recordData.id) return true
            } 
            return false
          })  

      const handleClick = (item) => {
          // Update cart item quantity if already in cart
          if (cart.some((cartItem) => cartItem === item)) {
            setCart((cart) => 
            cart.map((cartItem) =>
                cartItem === (item? 
                  {...cartItem, amount:cartItem +1}
                    : cartItem)
            )
            );           
          }
        }

  return (
    
    <div >
      
      <Header cart={cart}/> 
      <NavBar cart={cart}/>
      <Container className = "mb-4">
      <Routes>
      <Route exact path="/" element ={<Home filteredrecords= {filteredrecords}/>} />
      
      <Route path="/Store" element ={<Store handleClick={handleClick} records={records} setRecords={setRecords} filterRecords={filterRecords} search={search} setSearch={setSearch} addToCart={addToCart} filteredrecords ={filteredrecords}/>} />
      
      <Route path="/TwitterFeed" element ={<TwitterFeed/>} />
      
      <Route path="/Cart" element={<ShoppingCart setCart= {setCart} cart={filtrdRecords} records={records} filtrdRecords={filtrdRecords} filterRecords={filterRecords} handleDelete={deleteFromArmy}/>}/>
      </Routes>
     </Container>
    </div>
    
  );
}

export default App;

                  // Add to cart
                    // setCart((cart) => [
                    //   ...cart,
                    //   { ...item, amount: 1 } // <-- initial amount 1
                    // ]);
                  

  // const handleChange = (productCode, d) => {
  //   setCart((cart) =>
  //     cart.flatMap((cartItem) =>
  //       cartItem.productCode === productCode
  //         ? cartItem.amount + d < 1
  //           ? [] // <-- remove item if amount will be less than 1
  //           : [
  //               {
  //                 ...cartItem,
  //                 amount: cartItem.amount + d
  //               }
  //             ]
  //         : [cartItem]
  //     )
  //   );
  // };