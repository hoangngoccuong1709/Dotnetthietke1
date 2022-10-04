import React from 'react'
import '../body/css/Slide.css'
import { useEffect,useState } from 'react';
export default function Slide() {
  const [conten, setConten] = useState([]);
    useEffect(() => {
    fetchData(1);
  }, [])
  function fetchData(id) {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  //  /get-conten-by-id?id=${id}
    fetch(`/api/conten/get-conten-by-id?id=${id}`,requestOptions)
      .then(response => response.json())
      .then(data => setConten(data))
      .catch(error => console.log('error', error));
  }
  // function fetchData(id) {
  //   var requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow'
  //   };
  //   fetch(`/api/conten/get-conten-by-id?id=${id}`,requestOptions)
  //     .then(response => response.json())
  //     .then(data => setConten(data)) 
  //     .catch(error => console.log('error', error));
  // }
  return (
    <div className="slide-container">
    <div className="title-item">
       <img className="itemimg" src="image/Leaf2.png" /> 
       {/* {conten.map((item) =>{ */}
        <div key={conten.idconten} className="itemconten">
        <h3>{conten.nameConten}</h3>
        <h6>{conten.title}</h6>
        <p>{conten.paragraph}</p>
        <div className="button-item">
          <button className="buton1">SHOP</button>
          <a className="button2">LEAD MORE</a>
        </div>
       </div>
       {/* )})} */}

      <img className="itemimg2" src="image/Leaf1.png" /> 
    </div>
    <div className="img-item">
      <img className="anh11" src={conten.imageconten} />    
    </div>
  </div>
  )
}
