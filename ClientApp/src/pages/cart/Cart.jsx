import { Popover } from "antd";
import '../../pages/cart/cart.css'
import React, { Component } from "react";
import { Button } from "antd";
import { useParams } from 'react-router'
import { connect } from "react-redux";
import { deleteProduct } from "../../reducer/actionCart";
import { useState ,useRef} from "react";
import { Modal } from "react-bootstrap";
import Item from "antd/lib/list/Item";
//import { createOrder, clearOrder } from "../../actions/orderActions";
function Cart(props) {
// class Cart extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         name: "",
//         email: "",
//         address: "",
//         showCheckout: false,
//       };
//     }
    const post_name = useRef(null);
    const post_sodienthoai = useRef(null);
    const post_email = useRef(null);
    const post_diachi = useRef(null);
    const post_anh = useRef(null);
    const post_mota = useRef(null);


const [post, setPost] = useState({ idorder: "",Idproduct: "",  UserId: "",Quantity: "",Total:"" });
   const [open, setOpen] = useState(false)
  //const [customer, setcustomer] = useState({ Id: "", NameUser: "", Phone: "" })
  function handleInput(e){
    this.setState({ [e.target.name]: e.target.value });
  };
  // console.log('ahcs',props)
  let Name = props.cart.Name
 function TotalPrice(price,tonggia){
    return Number(price * tonggia).toLocaleString('en-US');
  }
    let TotalCart=0;
    Object.keys(props.cart).forEach(function(item){
    TotalCart+=props.cart[item].quantity*props.cart[item].price;
    });
  async function createPost() { 
    const postData = {
      FullName: post_name.current.value,
      PhoneNumber: post_sodienthoai.current.value,
      Email: post_email.current.value,
      Avatar: post_anh.current.value,
      Description: post_mota.current.value,
      Orders : props.cart
      };
      const Datapost = {
        // Idproduct : props.idproduct,
        // Id : props.id,
        //Total : props.Total,
         cart : props.cart
        
        };
        
      // const postorder ={
      //   idorder :props.cart.idproduct,
      //   idproduct: props.cart.idproduct,
      //   Total: TotalCart,
      //   UserId: 2
      // }
      try {
        const res = await fetch(`/user`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": "token-value",
          },
          body: JSON.stringify(postData),
        });
          // const res = await fetch(`api/order`, {
          //   method: "post",
          //   headers: {
          //     "Content-Type": "application/json",
          //     "x-access-token": "token-value",
          //   },
          //   body: JSON.stringify(Datapost),
          // })
        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }
        const data = await res.json();
        const result = {
          status: res.status + "-" + res.statusText,
          headers: {
            "Content-Type": res.headers.get("Content-Type"),
            "Content-Length": res.headers.get("Content-Length"),
          },
          data: data,
        };
        alert("Thêm thành công !")
        //setPostResult(fortmatResponse(result));
        // publish()
    } catch (err) {
      // setPostResult(err.message);
      alert("Thêm  ko thành công !")
    } 
}
  return (
  <div className="atice">
       <Modal show={open} >
      {/* <Modal show={open}> */}
        <form className="mb-10" >
          <div className="maincontainer">
            <div className="container">
              <div class="row">
                <div class="col-md-4 order-md-2 mb-4">
                  <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-muted">Your Order</span>
                    {/* <span class="badge badge-secondary badge-pill">3</span> */}
                  </h4>
                  {
            props.cart.map((item)=>{
                return(
                  <ul class="list-group mb-3">
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                      <div>
                        <h6 class="my-0">Product name:</h6>
                        <span>{item.name}</span>
                        {/* <small class="text-muted">Brief description</small> */}
                      </div>
                      <span class="text-muted"></span>
                    </li>


                    <li class="list-group-item d-flex justify-content-between">
                      <span>Tổng tiền: </span>
                      <strong> {TotalCart}đ</strong>
                    </li>
                  </ul>
                )})}
                </div>
                <div class="col-md-8 order-md-1">
                  <h4 class="mb-3">Địa chỉ thanh toán</h4>
                  <form class="needs-validation" novalidate>
                    <div class="row">
                      <div class="col-mb-6 ">
                        <label for="firstName">Tên khách hàng: </label>
                        <input type="name" className="form-control "
                         name="name"
                         required
                         ref={post_name}>
                         </input>
                  
                        <div class="invalid-feedback">
                          {/* Valid first name is required. */}
                        </div>
                      </div>

                    </div>

                    <div class="row">
                    <div class="input-group">
                      <label >Số điện thoại: </label>
                        <input type="phone" className="form-control "
                         name="phone"
                          required
                          ref={post_sodienthoai}></input>
                        <div class="invalid-feedback">
                          {/* Your username is required. */}
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <label for="email">Email<span class="text-muted">(Optional): </span></label>
                      <input type="email" class="form-control" id="email"
                            name="email"
                            required
                            ref={post_email}/>
                      <div class="invalid-feedback">
                        {/* Please enter a valid email address for shipping updates. */}
                      </div>
                    </div>

                    <div class="row">
                      <label for="address">Địa chỉ(Address): </label>
                      <input type="text" className="form-control " 
                       required
                       ref={post_diachi}></input>
                        {/* value={Address}
                        onChange={e => setcustomer({ ...customer, Address: e.target.value })}></input> */}
                      <div class="invalid-feedback">
                        {/* Please enter your shipping address. */}
                      </div>
                    </div>
                    <div class="row">
                    <div class="input-group">
                      <label >Ảnh xác thực </label>
                        <input type="phone" className="form-control "
                         name="phone"
                          required
                          ref={post_anh}></input>
                        <div class="invalid-feedback">
                          {/* Your username is required. */}
                        </div>
                      </div>
                    </div>
                    <div class="row">
                    <div class="input-group">
                      <label >Mô tả thông tin </label>
                        <input type="phone" className="form-control "
                         name="phone"
                          required
                          ref={post_mota}></input>
                        <div class="invalid-feedback">
                          {/* Your username is required. */}
                        </div>
                      </div>
                    </div>

                  </form>
                  <hr class="mb-4" />
                  <button  onClick={createPost} style={{ fontSize :16  }} class="btn btn-primary btn-lg btn-block"  type="button">Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    <div className="row">
    <div className="col-md-12">
    <table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
            </tr>
        </thead>
        <tbody>
        {
            props.cart.map((item)=>{
                return(
                    <tr key={item.idproduct}>   
                    {/* <td><i className="badge badge-danger" onClick={()=>DeleteCart(key)}>X</i></td> */}
                    <td>{item.name}</td>
                    <td><img src={item.image} style={{width:'100px',height:'80px'}}/></td>
                    <td>{item.price} $</td> 
                    <td>{item.quantity} </td> 
                    {/* <td>{item.quantity === undefined ? (
                      <div style={{ width: "40%" }}>{`${item.price}`}</div>
                     ) : (
                      <div
                       style={{ width: "40%" }}
                      >{`${item.price}x${item.quantity}`}</div>
                      )}  </td> */}
                          <td>{ TotalPrice(item.price,item.quantity)} $</td>
                    <td >
                        <button onClick={() => props.deleteProduct(item)}>X</button>
                    </td>
                </tr>
                )
            })
                 
        }
        <tr>
            <td colSpan="5">Total Carts</td>
            <td>{Number(TotalCart).toLocaleString('en-US')} $</td>
        </tr>
        </tbody>
        <td >
              <Button onClick={() => setOpen(true)}>Order</Button>
              
        </td>
       
    </table>
    </div>
    </div>  
</div>

  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    total: state.cart.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (product_current) =>
      dispatch(deleteProduct(product_current)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
//export default  (mapStateToProps,Cart);
//export default Cart;