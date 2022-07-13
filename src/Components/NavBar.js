import React from 'react';
import {Link} from "react-router-dom"


function NavBar() {

    return (
    
        <div className = "navbar">
          <Link style={{ textDecoration: 'none', fontSize: "2em", fontFamily:"Neuzeit S"}} to= "/">Home</Link>
          <Link style={{ textDecoration: 'none', fontSize: "2em", fontFamily:"Neuzeit S"}} to="/Shop">Shop</Link>
          <Link style={{ textDecoration: 'none', fontSize: "2em", fontFamily:"Neuzeit S"}} to="/twitterfeed">Twitter Feed</Link>
          <i class='bx bx-cart'></i>
        </div>

    );
  }
  
  export default NavBar;