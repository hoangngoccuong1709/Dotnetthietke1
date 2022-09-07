import React from 'react'
import '../body/css/Saleoff.css'
export default function Saleoff() {
  return (
    <div className="sale">
        <div className="saleconten">
          <button className="buttonsale">SPECIAL OFFER</button>
          <div className="salehoa">
            <img src="image/Leaf1-group5.png" style={{position: 'absolute', left: '5rem', width: '8.3rem', height: '13.1rem'}} /> 
            <h1>20%</h1>
            <img src="image/Leaf2-group5.png" style={{position: 'absolute', right: '5rem', width: '8.3rem', height: '13.1rem'}} /> 
          </div>
          <p>Discount on your<br />
            first purchase</p>
        </div>
        <div className="salehinhanh">
          <img src="image/camhoa.png " /> 
        </div>
      </div>
  )
}
