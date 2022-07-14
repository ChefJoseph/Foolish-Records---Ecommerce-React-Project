
import '../App.css';

import React, {useState, useEffect} from 'react';
import Header from './Header'


import {Switch, Route, Routes} from "react-router-dom"
import Home from '../Pages/Home'
import Store from '../Pages/Store'
import TwitterFeed from '../Pages/TwitterFeed'
import NavBar from './NavBar';
import {Container} from 'react-bootstrap'
import ShoppingCart from './ShoppingCart'
// import Slider from './slider/slider'

function App () {
  const [cart, setCart] = useState([]);
  
  const handleClick = (item) => {
    // Update cart item quantity if already in cart
    if (cart.some((cartItem) => cartItem === item)) {
      setCart((cart) =>
        cart.map((cartItem) =>
          cartItem === item
            ? {
                ...cartItem,
                amount: cartItem +1
              }
            : cartItem
        )
      );
      return;
    }

    // Add to cart
    setCart((cart) => [
      ...cart,
      { ...item, amount: 1 } // <-- initial amount 1
    ]);
  };

  const handleChange = (productCode, d) => {
    setCart((cart) =>
      cart.flatMap((cartItem) =>
        cartItem.productCode === productCode
          ? cartItem.amount + d < 1
            ? [] // <-- remove item if amount will be less than 1
            : [
                {
                  ...cartItem,
                  amount: cartItem.amount + d
                }
              ]
          : [cartItem]
      )
    );
  };

  return (
    
    <div >
      
      <Header cart={cart}/> 
      <NavBar cart={cart}/>
      <Container className = "mb-4">
      <Routes>
      <Route exact path="/" element ={<Home/>} />
      <Route path="/Store" element ={<Store handleClick={handleClick}/>} />
      <Route path="/TwitterFeed" element ={<TwitterFeed/>} />
      <Route path="/Cart" element={<ShoppingCart setCart= {setCart} cart={cart}/>}/>
      </Routes>
     </Container>
    </div>
    
  );
}

export default App;
