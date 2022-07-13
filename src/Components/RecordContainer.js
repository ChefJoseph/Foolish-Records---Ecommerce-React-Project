import React from 'react';
import RecordDetail from './RecordDetail';

function RecordContainer({records, filteredrecords}) {

    return (
      <div className="raccoon-container" >
       {filteredrecords.map(record => <RecordDetail key = {record.id}{...record}/>)} 
      </div>
    );
  }
  
  export default RecordContainer;