import React, { Profiler } from 'react'
import '../body/css/Title.css'
import Product from './Product'
import { useEffect,useState } from 'react';
import Slider from "react-slick";
import { Button } from 'antd';
export default function Titleproduct() {
  const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
      <div className="chuyentrang" onClick={onClick}>
      <a href >
      <img src="image/Shape1.png" style={{marginRight: '24px'}} /> 
      </a>
      </div>
    )
  }
  const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
      <div className="chuyentrang" onClick={onClick}>
      <a href>
      <img src="image/Shape2.png" style={{marginLeft: '24px'}} /> 
      </a>
      </div>
    )
  }
  const [product, setProduct] = useState([]);
    useEffect(() => {
    fetchData();
  }, [])
  function fetchData() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`api/products`,requestOptions)
      .then(response => response.json())
      .then(data => setProduct(data)) 
      .catch(error => console.log('error', error));
  }
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <div>
    <div className="tieude">
    <img className="imgdt1" src="image/Leaf1.png" /> 
    <div className="ndtieude">
      <h2>Our Top Products</h2>
      <a>Lorem ipsum dolor sit amet, consectetur.</a>
    </div>
    <img className="imgtd2" src="image/Leaf2.png" /> 
    </div>
    <div className="cot">
    {product.map((item) =>{
      return(
          <div  className="griditem">
            <img src={item.Image} />
            <label className='icontim'>{count}</label> <br />
            <a href className="icon" onClick={increment}>
              <img src="image/Heart1.png" /> 
            </a>
            <div className="text">
              <h2> {item.NameProduct}</h2>
              <p>{item.Title}</p>
              <Button>READ MORE</Button>
            </div>
          </div>
      )
  //  <Product {...product} />
    })}
    </div>
    <div className="chuyentrang">
      <img src="image/Leaf3.png" style={{position: 'absolute', left: '14%', marginTop: '14px'}} /> 
      <div style={{textAlign: 'center'}}>
        <a href>
          <img src="image/Shape1.png" style={{marginRight: '24px'}} /> 
        </a>
        <a href>
          <img src="image/Shape2.png" style={{marginLeft: '24px'}} /> 
        </a>
      </div>
      <img src="image/Leaf4.png" style={{position: 'absolute', right: '12%', marginTop: '14px'}} /> 
    </div>
  </div>
  )
}
