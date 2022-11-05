import React from "react";
import "../body/css/Product.css";
import { useParams } from "react-router";
import { useState, useRef } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import { Link } from "@mui/material";
import { addToCart } from "../../reducer/actionCart";
import Cart from "../../pages/cart/Cart";
function Product(props) {
  const dispatch = useDispatch();
  const { idproduct } = useParams();
  const [Writedetails, setData] = useState([]);
  const post_soluong = useRef();
  var soluong = document.getElementById("soluong");
  console.log(soluong, "soluong");
  const product_current = {
    id: Writedetails.idproduct,
    name: Writedetails.nameProduct,
    image: Writedetails.image,
    price: Writedetails.price,
    //quantity: soluong,
    // price: props.price,
  };
  console.log("name", product_current);
  console.log("dd", idproduct);
  useEffect(() => {
    fetchData();
  }, []);
  function fetchData() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`/api/product/idproduct?nameProduct=${idproduct}`, requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log("error", error));
  }
  return (
    <div className="container mt-4">
      <div
        id="thongbao"
        className="alert alert-danger d-none face"
        role="alert"
      >
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="card">
        <div className="container-fliud">
          <form
            name="frmsanphamchitiet"
            id="frmsanphamchitiet"
            method="post"
            action="/giohang"
          >
            <input type="hidden" name="sp_ma" id="sp_ma" defaultValue={5} />
            <input
              type="hidden"
              name="sp_ten"
              id="sp_ten"
              defaultValue={Writedetails.nameProduct}
            />
            <input
              type="hidden"
              name="sp_gia"
              id="sp_gia"
              defaultValue={Writedetails.price}
              Đ
            />
            <input
              type="hidden"
              name="hinhdaidien"
              id="hinhdaidien"
              defaultValue={Writedetails.image}
            />
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane" id="pic-1">
                    <img src={Writedetails.image} />
                  </div>
                  <div className="tab-pane" id="pic-2">
                    <img src={Writedetails.image} />
                  </div>
                  {/* <div className="tab-pane active" id="pic-3">
                            <img src="../assets/img/product/samsung-galaxy-tab-4.jpg" />
                          </div> */}
                </div>

                <li className="active">
                  <a data-target="#pic-1" data-toggle="tab" className>
                    <img src={Writedetails.image} />
                  </a>
                </li>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{Writedetails.nameProduct}</h3>
                <div className="rating">
                  <div className="stars">
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                  <span className="review-no">999 reviews</span>
                </div>
                <p className="product-description">{Writedetails.title}</p>
                <small className="text-muted">
                  Giá cũ: <span>100000</span>
                </small>
                <h4 className="price">
                  Giá hiện tại: <span>{Writedetails.price}</span>
                </h4>
                <p className="vote">
                  <strong>100%</strong> hàng <strong>Giống như ảnh</strong>, đảm
                  bảo
                  <strong>Uy tín</strong>!
                </p>
                <h5 className="sizes">
                  sizes:
                  <span className="size" data-toggle="tooltip" title="cỡ Nhỏ">
                    Nhỏ
                  </span>
                  <span
                    className="size"
                    data-toggle="tooltip"
                    title="cỡ Trung bình"
                  >
                    Lớn
                  </span>
                  {/* <span className="size" data-toggle="tooltip" title="cỡ Lớn">l</span>
                          <span className="size" data-toggle="tooltip" title="cỡ Đại">xl</span> */}
                </h5>
                <div className="form-group">
                  <label htmlFor="soluong">Số lượng đặt mua:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="soluong"
                    name="soluong"
                    ref={post_soluong}
                  />
                </div>
                <div className="action">
                  <Button
                    // className="add-to-cart btn btn-default"
                    // // id="btnThemVaoGioHang"
                    // key={Writedetails.idproduct}
                    onClick={() => dispatch(addToCart(product_current))}
                  >
                    Thêm vào giỏ hàng
                  </Button>
                  <a className="like btn btn-default" href="#">
                    <span className="fa fa-heart" />
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="card">
        <div className="container-fluid">
          <h3>Thông tin chi tiết về Sản phẩm</h3>
          <div className="row">
            <div className="col">
              Hoa luôn luôn được giữ ở trạng thái đẹp nhất
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div key={Writedetails.idproduct}  className="container">
    //  <article>
    //    <h3>{Writedetails.nameProduct}</h3>
    //    <p className="tacgia">{Writedetails.title}</p>
    //    <p className="tacgia">{Writedetails.price} $</p>
    //  </article>
    //  <article className="conten-container">
    //    <img width={294} height={292} src={Writedetails.image}/>
    //    {/* <p src='https: //www.phpbb.com' className="title-container" >{item.Contentitle}</p> */}
    //  </article>
    //  <Button key={Writedetails.idproduct}   onClick={() => dispatch(addToCart(product_current))} className='btn-them'>Thêm vào giỏ hàng</Button>
    // </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product_current) => dispatch(addToCart(product_current)),
    // Writedetails
  };
};
console.log("aaaa", addToCart.prototype);
const mapStateToProps = (state) => {
  return {
    //cart: state.cart
    cart: state.cart,
    // Writedetails: state.Writedetails,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
//export default (Product,mapDispatchToProps,mapStateToProps);
//export default (Product);
