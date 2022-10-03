import React, { Profiler } from 'react';
import '../body/css/Title.css';
import { useEffect,useState } from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from '../../redux/actions/postAcction';

export default function Titleproduct() {
  const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
      <div className="chuyentrang" onClick={onClick}>
      <a href='#'>
      <img src="image/Shape1.png" style={{marginRight: '24px'}} alt='none'/> 
      </a>
      </div>
    )
  }
  const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
      <div className="chuyentrang" onClick={onClick}>
      <a href='#'>
      <img src="image/Shape2.png" style={{marginLeft: '24px'}} alt='none'/> 
      </a>
      </div>
    )
  }
  const data = useSelector(state => state.posts.allProduct);
  // const requesting = useSelector(state => state.posts.requesting);

  const dispatch = useDispatch();
    useEffect (()=>{
    dispatch(loadPosts());
  },[]);

  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  // }
  if(!data) {
    return (
        <div>
             No Data
         </div>
)}
  return (
    <div>
    <div className="tieude">
    <img className="imgdt1" src="image/Leaf1.png" alt='none'/> 
    <div className="ndtieude">
      <h2>Our Top Products</h2>
      <a>Lorem ipsum dolor sit amet, consectetur.</a>
    </div>
    <img className="imgtd2" src="image/Leaf2.png" alt='none'/> 
    </div>
    <div className="cot">
    {data.map((item) =>{
      return(
          <div  className="griditem" key={item.idproduct}>
            <img src={item.Image} alt='none'/>
            <label className='icontim'>{count}</label> <br />
            <a href='#'  className="icon" onClick={increment}>
              <img src="image/Heart1.png" alt='none'/> 
            </a>
            
            <div className="text">
              <h2> {item.NameProduct}</h2>
              <p>{item.Title}</p>
              <Button>READ MORE</Button>
            </div>
          </div>
      )
    })}
    </div>
    <div className="chuyentrang">
      <img src="image/Leaf3.png" style={{position: 'absolute', left: '14%', marginTop: '14px'}} alt='none'/> 
      <div style={{textAlign: 'center'}}>
        <a href='#'>
          <img src="image/Shape1.png" style={{marginRight: '24px'}} alt='none'/> 
        </a>
        <a href='#'>
          <img src="image/Shape2.png" style={{marginLeft: '24px'}} alt='none'/> 
        </a>
      </div>
      <img src="image/Leaf4.png" style={{position: 'absolute', right: '12%', marginTop: '14px'}} alt='none'/> 
    </div>
  </div>
  )
}

