import React from 'react'
import '../body/css/Product.css'
import { useParams } from 'react-router'
import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd';
import { Link } from '@mui/material';
import { addToCart } from '../../reducer/actionCart'
import Cart from '../../pages/cart/Cart';
function Product(props) {
  const { idproduct } = useParams();
  const [Writedetails, setData] = useState([]);
  const product_current = {
    id: Writedetails.idproduct,
    name: Writedetails.nameProduct,
    image: Writedetails.image,
    price: Writedetails.price,
    quantity:1,
    // price: props.price,
  };
  console.log('name',product_current)
  console.log("dd",idproduct)
  useEffect(() => {
    fetchData()
  }, [])
  function fetchData() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`/api/product/idproduct?id=${idproduct}`,requestOptions)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log('error', error));
  }
    return (
  //    <div>
  //    {
     // Writedetails.map((post,index)=>{
        <div key={Writedetails.idproduct}  className="container">    
         <article>
           <h3>{Writedetails.nameProduct}</h3>
           <p className="tacgia">{Writedetails.title}</p>
           <p className="tacgia">{Writedetails.price} $</p>
         </article>
         <article className="conten-container">
           <img width={294} height={292} src={Writedetails.image}/>
           {/* <p src='https: //www.phpbb.com' className="title-container" >{item.Contentitle}</p> */}
         </article> 
         <Button key={Writedetails.idproduct}   onClick={() =>props.addToCart(product_current)} className='btn-them'>Thêm vào giỏ hàng</Button>
        </div> 
     //  })
    //  }
    //  </div> 
    )
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (Writedetails) => dispatch(addToCart(Writedetails)),
  };
};
console.log('aaaa',addToCart.prototype)
const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart, 
    // Writedetails: state.Writedetails,

  };
};

 export default connect(mapStateToProps, mapDispatchToProps)(Product);
//export default (Product,mapDispatchToProps,mapStateToProps);
//export default (Product);