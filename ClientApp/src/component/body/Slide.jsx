import React from 'react'
import '../body/css/Slide.css'
import { useEffect,useState } from 'react';
export default function Slide() {
  const [conten, setConten] = useState([]);
    useEffect(() => {
    fetchData();
  }, [])
  function fetchData() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch('/api/Conten',requestOptions)
      .then(response => response.json())
      .then(data => setConten(data)) 
      .catch(error => console.log('error', error));
  }
  return (
    <div className="slide-container">
    <div className="title-item">
       <img className="itemimg" src="image/Leaf2.png" /> 
       <div>
       { conten.map((item) =>{
      return(
        <div key={item.Idconten} className="itemconten">
        <h3>{item.nameConten}</h3>
        <h6>{item.title}</h6>
        <p>{item.paragraph}</p>
        <div className="button-item">
          <button className="buton1">SHOP</button>
          <a className="button2">LEAD MORE</a>
        </div>
       </div>
      )})}
       </div>
      <img className="itemimg2" src="image/Leaf1.png" /> 
    </div>
    <div className="img-item">
      <img className="anh11" src="image/Mask.png" />    
    </div>
  </div>
  )
}
