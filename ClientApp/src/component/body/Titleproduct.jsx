import React, { Profiler } from "react";
import "../body/css/Title.css";
import Product from "./Product";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Button } from "antd";
import { Link } from "react-router-dom";
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="chuyentrang" onClick={onClick}>
      <div className="prev">
        <a href>
          <img src="image/Shape1.png" />
        </a>
      </div>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="chuyentrang" onClick={onClick}>
      <div className="next">
        <a href>
          <img src="image/Shape2.png" />
        </a>
      </div>
    </div>
  );
};
// const SampleNextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div className="control-btn" onClick={onClick}>
//       <button className="next">
//         <i className="fa fa-long-arrow-alt-right"></i>
//       </button>
//     </div>
//   );
// };
// const SamplePrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div className="control-btn" onClick={onClick}>
//       <button className="prev">
//         <i className="fa fa-long-arrow-alt-left"></i>
//       </button>
//     </div>
//   );
// };
export default function Titleproduct() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  function fetchData() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("/api/product", requestOptions)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log("error", error));
    console.log("data", product);
  }
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      {product.map((item) => {
        return (
          <div className="cot">
            <div key={item.idproduct} className="griditem">
              <img src={item.image} />
              <label className="icontim">{count}</label> <br />
              <a href className="icon" onClick={increment}>
                <img src="image/Heart1.png" />
              </a>
              <div className="text">
                <h2> {item.nameProduct}</h2>
                <p>{item.title}</p>
                {/* <p>{item.price}</p> */}
                <Link
                  className="link"
                  key={item.idproduct}
                  item={item}
                  setProduct={setProduct}
                  to={`${item.nameProduct}`}
                >
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
    // </div>
    // <div>
    //   <div className="tieude">
    //     <img className="imgdt1" src="image/Leaf1.png" />
    //     <div className="ndtieude">
    //       <h2>Our Top Products</h2>
    //       <a>Lorem ipsum dolor sit amet, consectetur.</a>
    //     </div>
    //     <img className="imgtd2" src="image/Leaf2.png" />
    //   </div>
    //   <Slider {...settings}>
    //     <div className="cot">
    //       {product.map((item) => {
    //         return (
    //           <div key={item.idproduct} className="griditem">
    //             <img src={item.image} />
    //             <label className="icontim">{count}</label> <br />
    //             <a href className="icon" onClick={increment}>
    //               <img src="image/Heart1.png" />
    //             </a>
    //             <div className="text">
    //               <h2> {item.nameProduct}</h2>
    //               <p>{item.title}</p>
    //               {/* <p>{item.price}</p> */}
    //               <Link
    //                 className="link"
    //                 key={item.idproduct}
    //                 item={item}
    //                 setProduct={setProduct}
    //                 to={`${item.nameProduct}`}
    //               >
    //                 READ MORE
    //               </Link>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </Slider>
    //   <div className="chuyentrang">
    //     <img
    //       src="image/Leaf3.png"
    //       style={{ position: "absolute", left: "14%", marginTop: "14px" }}
    //     />
    //     {/* <div style={{ textAlign: "center" }}> */}
    //     <SampleNextArrow />
    //     <SamplePrevArrow />
    //     {/* <a href>
    //         <img src="image/Shape2.png" style={{ marginLeft: "24px" }} />
    //       </a> */}
    //     {/* </div> */}
    //     <img
    //       src="image/Leaf4.png"
    //       style={{ position: "absolute", right: "12%", marginTop: "14px" }}
    //     />
    //   </div>
    // </div>
  );
}
