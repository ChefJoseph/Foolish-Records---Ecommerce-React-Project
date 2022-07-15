import React from 'react';
import RecordDetail from './RecordDetail';
import {Col, Row} from "react-bootstrap"


function RecordContainer({records,filterRecords, addToCart, handleClick,filteredrecords }) {
//  console.log(records)

    return (
      <div>
     
      <Row md={3} xs={1} lg={5} className="g-4 record-list">
       {filteredrecords.map(record => 
        <Col key = {record.id}>
          <RecordDetail record= {record} addToCart={addToCart} handleClick={handleClick} filterRecords={filterRecords} />
        </Col>
       )}
      </Row>
      </div>
    );
  }
  
  export default RecordContainer;