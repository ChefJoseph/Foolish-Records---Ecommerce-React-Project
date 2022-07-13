import React from 'react';
import banner from '../images/BeastieBoys-Banner.jpg'

function Banner() {

    return (
      <div >
       <img className="banner"
            src={banner}
            alt = "banner"/>
      </div>
    );
  }
  
  export default Banner;