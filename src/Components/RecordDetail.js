import React, {useState} from 'react';

function RecordDetail({title, artist, image, year, price}) {
  const [add, setAdd] = useState(true)
 
  function addButton () {
    setAdd(!add)
  }

    return (
      <div className="raccoon-card" >
      
      <img className="image" src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{artist}</p>
      <p>{year}</p>
      <p>{price}</p>
      <button className="addbutton" onClick={addButton}>{add? "+":"-"}</button>
      </div>
    );
  }
  
  export default RecordDetail
;