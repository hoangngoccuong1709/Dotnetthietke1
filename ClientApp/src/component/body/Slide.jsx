import React from 'react'
import '../body/css/Slide.css'
export default function Slide() {
  return (
    <div className="slide-container">
    <div className="title-item">
      <img className="itemimg" src="image/Leaf2.png" /> 
      <div className="itemconten">
        <h3>Flower<br /> Arrangements</h3>
        <h6>• For all special occasions •</h6>
        <p>Lorem ipsum dolor sit amet, consectetur<br /> 
          adipisicing elit, sed do eiusmod tempor<br /> 
          incididunt ut labore et dolore magna aliqua.</p>
        <div className="button-item">
          <button className="buton1">SHOP</button>
          <a className="button2">LEAD MORE</a>
        </div>
      </div>
      <img className="itemimg2" src="image/Leaf1.png" /> 
    </div>
    <div className="img-item">
      <img className="anh11" src="image/Mask.png" />    
    </div>
  </div>
  )
}
