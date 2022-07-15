import React, {useState} from 'react'
import Slider from '../Components/slider/slider'
import {Col, Row} from "react-bootstrap"
import { Card } from 'react-bootstrap';

function Home({filteredrecords}) {
   const [email, setEmail] = useState([])


   function handleSubmitForm (e){
    e.preventDefault()
    fetch('http://localhost:5001/email',{
      method: "POST",
      headers: {"Content-Type": "application/json",
      },
      body: JSON.stringify({
       email
      })
    })
    .then(res=> res.json())
    .then(data=> (console.log(data)))
    setEmail("")

  }
  
    return (
        <div>
        <form className="subscribe-field" onSubmit= {handleSubmitForm}>
        <span className="subscribe">SUBSCRIBE:</span>
      <input 
        placeholder="E-mail" 
        value={email}
        onChange = {e=> setEmail(e.target.value)}
        size="20"
        className="formfield"
      />
      <input className="emailsubmit"
        type="submit" 
        value="SEND" 
      />
        </form>
        <Slider/>
        <h2 className="trending">Trending</h2>
        <Row md={2} xs={2} lg={2} className="g-4 record-list">
       {filteredrecords.map(record => 
        <Col key = {record.id}>
          <Card.Img variant="top" src={record.image} alt={record.title} height= "250px" width="100px" style={{objectFit: "cover"}}/>
        </Col>
       )}
      </Row>
        </div>
    
    )
}
export default Home