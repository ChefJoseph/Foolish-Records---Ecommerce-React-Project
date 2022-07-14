import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import '../App.css';
// import { useShoppingCart } from "../Context/ShoppingCartContext"
// import { formatCurrency } from "../Utilities/formatCurrency"

function RecordDetail({records,record, id, title, artist, image, year, price, addToCart, handleClick}) {
  const [add, setAdd] = useState(true)
  
  // const {
  //   getItemQuantity,
  //   increaseCartQuantity,
  //   decreaseCartQuantity,
  //   removeFromCart,
  // } = useShoppingCart()

  // const quantity = getItemQuantity(id)
 
  function addButton () {
    setAdd(!add)
  }
  // function onClickAdd () {
  //   records.addItem(record.id)
  // }
//   const handleButtonAddCart = e => {
//     e.preventDefault()
//     props.addToCart(id)
// }

    return (
      <Card className ="h-100">
      <Card.Img variant="top" src={image} alt={title} height= "200px" style={{objectFit: "cover"}}/>
      <Card.Body className = "d-flex flex-column">
      <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
        <ul>
          <li className="fs-3">{title}</li>
          <li className="fs-5 text-muted">{artist}</li>
          <li className="fs-5 text-muted">{year}</li>
          <li className="fs-6 text-muted">${price}.00</li>
        </ul>
          
      </Card.Title>
        {/* <button className="addbutton" onClick={addButton}>{add? "+":"-"}</button> */}
        {/* <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <li className="fs-3">{quantity}</li> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div> */}
        <button className="addbutton" 
        onClick={() =>{
          handleClick(); 
          addButton();}}>{add? "+":"-"}
          </button>
      </Card.Body>
      </Card>
    );
  }
  
  export default RecordDetail
;

//24 minute currency formater