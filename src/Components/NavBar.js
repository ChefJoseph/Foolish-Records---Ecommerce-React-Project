import React from 'react';
import {Link, NavLink } from "react-router-dom"
import {Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap"


function NavBar ({cart}) {
  
    return (
      <NavbarBs sticky='top' className ="bg-light shadow-md mb-3 container-fluid">
        {/* <Container className= "container-fluid"> */}
          <Nav >
            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
            <Nav.Link to="/Store" as={NavLink}>Store</Nav.Link>
            <Nav.Link to="/TwitterFeed" as={NavLink}>Twitter</Nav.Link>
            <Nav.Link to="/cart" as={NavLink}>
				      <Button
                // onClick={openCart}
                style={{ width: "3.2rem", height: "60px", position: "absolute", color: "black", bottom:"1em", right:"2em"}}
                variant="outline"
                className="rounded-circle"
                
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                >
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                </svg>
                <div
                  className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                  style={{
                    color: "white",
                    width: "1.5rem",
                    height: "1.5rem",
                    position: "absolute",
                    // top: 0,
                    bottom: 10,
                    right: 0,
                    fontWeight: 900,
                    fontSize: "1.1em",
                    
                    transform: "translate(25%, 25%)",
                  }}
                >
                  {cart.length}
                </div>
              </Button>
			      </Nav.Link>
          </Nav>
        {/* </Container> */}
      </NavbarBs>
    );
  }
  
  export default NavBar;

  // <div className = "navbar">
  //         <Link style={{ textDecoration: 'none', fontSize: "2em", fontFamily:"Neuzeit S"}} to= "/">Home</Link>
  //         <Link style={{ textDecoration: 'none', fontSize: "2em", fontFamily:"Neuzeit S"}} to="/Store">Store</Link>
  //         <Link style={{ textDecoration: 'none', fontSize: "2em", fontFamily:"Neuzeit S"}} to="/twitterfeed">Twitter Feed</Link>
  //         <div>
  //         <i class='bx bx-cart'></i>
  //         <span class="badge">3</span>
  //         </div>
  //       </div>

  //cart button
  <Button
  // onClick={openCart}
  style={{ width: "3rem", height: "3rem", position: "relative", color: "black"}}
  variant="outline-primary"
  className="rounded-circle "
  
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    fill="currentColor"
    
    
  >
    <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
  </svg>
  <div
    className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
    style={{
      color: "white",
      width: "1.5rem",
      height: "1.5rem",
      position: "absolute",
      bottom: 0,
      right: 0,
      transform: "translate(25%, 25%)",
    }}
  >
    {/* {cartQuantity} */}3
  </div>
 
</Button>