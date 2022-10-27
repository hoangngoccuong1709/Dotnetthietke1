// import "./datable.scss";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Account = () => {
  const user = useSelector((state) => state.user);
  return (
    <div style={{ textAlign: "center" }}>
      <h3 style={{ fontSize: 20 }}> Thông tin người dùng</h3>
      <div className="row">
        <div>
          <div className="form-group ">
            <label className="required">Tên người dùng : </label>
            <label type="text" className="form-control " required pattern="\S+">
              {user.account.fullName}
            </label>
          </div>

          <div className="form-group " style={{ marginTop: 20 }}>
            <label className="required"> Số điện thoại : </label>
            <label type="text" className="form-control " required pattern="\S+">
              {user.account.userName}{" "}
            </label>
          </div>
          <div className="form-group " style={{ marginTop: 20 }}>
            <label className="required"> Số điện thoại : </label>
            <label type="text" className="form-control " required pattern="\S+">
              {user.account.email}{" "}
            </label>
          </div>
          {/* <button  type="reset" value="Reset" className='btn btn-primary text-center'>Login</button> */}
        </div>
      </div>
    </div>
  );
};
export default Account;
