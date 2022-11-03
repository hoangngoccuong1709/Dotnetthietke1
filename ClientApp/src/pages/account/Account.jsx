// import "./datable.scss";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../reducer/user";
import "./profile.css";
import { Button } from "antd";
const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  return (
    <div className="container">
      <h1 className="text-center">Trang thông tin cá nhân </h1>
      <div className="container">
        <div className="row profile">
          <div className="col-md-3">
            <div className="profile-sidebar">
              <div className="profile-userpic">
                {" "}
                <img
                  src={user.account.avatar}
                  className="img-responsive"
                  alt="Thông tin cá nhân"
                />
              </div>
              <div className="profile-usertitle">
                <div className="profile-usertitle-name">
                  {user.account.fullName}{" "}
                </div>
                <div className="profile-usertitle-job"> Web Developer </div>
              </div>
              <div className="profile-userbuttons">
                <Link to={"/"} type="button" className="btn btn-success btn-sm">
                  Trang chủ
                </Link>

                <Link
                  onClick={() => dispatch(logout())}
                  to={"/signin"}
                  type="button"
                  className="btn btn-danger btn-sm"
                >
                  Thoát ra
                </Link>
              </div>
              <div className="profile-usermenu">
                <ul className="nav">
                  <div
                    className="logo_menuchinh"
                    style={{
                      float: "left",
                      paddingTop: "5px",
                      paddingLeft: "10px",
                      color: "#fff",
                      marginLeft: "auto",
                      marginRight: "auto",
                      lineHeight: "40px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      fontFamily: "Arial",
                    }}
                  >
                    WEBBANHOA.COM
                  </div>
                  <div className="menu-icon">{/* <span>Menu</span> */}</div>
                  <li className="active">
                    {" "}
                    <a href="https://hocwebgiare.com/">
                      {" "}
                      <i className="glyphicon glyphicon-info-sign" /> Cập nhật
                      thông tin cá nhân{" "}
                    </a>
                  </li>
                  {/* <li>
                    {" "}
                    <a href="https://hocwebgiare.com/">
                      {" "}
                      <i className="glyphicon glyphicon-heart" /> Sản phẩm yêu
                      thích{" "}
                    </a>
                  </li> */}
                  {/* <li>
                    {" "}
                    <a href="https://hocwebgiare.com/" target="_blank">
                      {" "}
                      <i className="glyphicon glyphicon-shopping-cart" /> Quản
                      lý đơn hàng{" "}
                    </a>
                  </li> */}
                  <li>
                    {" "}
                    <a href="https://hocwebgiare.com/">
                      {" "}
                      <i className="glyphicon glyphicon-envelope" /> Tin nhắn{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="profile-content">
              {" "}
              Chào mừng {user.account.fullName} đến với website shopbanhoa.com
              Hoa tươi biểu trưng cho cái đẹp, sự lãng mạn và là lối giao tiếp ý
              nhị nhận được sự yêu thích bởi mọi đối tượng, đặc biệt là từ các
              chị em phụ nữ trong các bữa tiệc, ngày lễ, các sự kiện trọng đại
              hoặc trong việc trang trí nhà cửa.
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div style={{ textAlign: "center" }}>
    //   <h3 style={{ fontSize: 20 }}> Thông tin người dùng</h3>
    //   <div className="row">
    //     <div>
    //       <div className="form-group ">
    //         <label className="required">Tên người dùng : </label>
    //         <label type="text" className="form-control " required pattern="\S+">
    //           {user.account.fullName}
    //         </label>
    //       </div>

    //       <div className="form-group " style={{ marginTop: 20 }}>
    //         <label className="required"> Số điện thoại : </label>
    //         <label type="text" className="form-control " required pattern="\S+">
    //           {user.account.userName}{" "}
    //         </label>
    //       </div>
    //       <div className="form-group " style={{ marginTop: 20 }}>
    //         <label className="required"> Số điện thoại : </label>
    //         <label type="text" className="form-control " required pattern="\S+">
    //           {user.account.email}{" "}
    //         </label>
    //       </div>
    //       {/* <button  type="reset" value="Reset" className='btn btn-primary text-center'>Login</button> */}
    //     </div>
    //   </div>
    // </div>
  );
};
export default Account;
