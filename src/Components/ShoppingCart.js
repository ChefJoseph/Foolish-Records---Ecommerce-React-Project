
import React from 'react';
import RecordDetail from './RecordDetail'
import { Card } from 'react-bootstrap';
import {Col, Row} from "react-bootstrap"
// Components
import ShoppingCartItem from './ShoppingCartItem';

function ShoppingCart ({cart, handleDelete, filterRecords}) {
    // console.log(cart)
	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};
    function checkOut () {
          return (alert('Thank you!'))
        }
      
	return (
			<div className="bg-white shaow-sm mb-5 ">
                <p className="shopping-cart">Your Shopping Cart</p>
             <div >
                 {cart.map(recordData => {
            // console.log(recordData)
                return (
                
                 <Col key={recordData.id} className="g-6 ">
                    <ul><li > 
                    <img className="shopping-image" src={recordData.image}/>     </li>
                        <li className="fs-3">{recordData.title}</li>
                        <li className="fs-5 text-muted">{recordData.artist}</li>
                        <li className="fs-5 text-muted">{recordData.year}</li>
                        <li className="fs-6 text-muted">${recordData.price}.00</li>
                    </ul>
          
                </Col>
                // <RecordDetail 
                // record={recordData} 
                // filterRecords={filterRecords} 
                // addToCart={handleDelete} 
                // key={recordData.id}
                // />

                )
                })}
                <div className="shopping-cart__checkout">
				<p className="total">Total: ${getCartTotal()}</p>
				<button className=".total_checkoutbutton"
                onClick={checkOut}>Checkout
                </button>
			    </div>
            </div>
            </div>
	
	);
};

export default ShoppingCart;