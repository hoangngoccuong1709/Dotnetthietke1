import { Button, Input, Typography, Form, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/user";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./csssignup.css";
import { useRef } from "react";

const AccountLogin = (props) => {
  const navigate = useNavigate();
  const post_name = useRef(null);
  const post_password = useRef(null);
  const post_fullname = useRef(null);
  const post_diachi = useRef(null);
  const post_sodienthoai = useRef(null);

  async function createPost() {
    const postData = {
      userName: post_name.current.value,
      password: post_password.current.value,
      fullName: post_fullname.current.value,
      Description: post_diachi.current.value,
      phonenumber: post_sodienthoai.current.value,
    };
    try {
      fetch(`/user`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      })
        .then((res) => {
          if (res.ok) {
            console.log("HTTP request successful");
          } else {
            console.log("HTTP request unsuccessful");
          }
          return res;
        })
        .then((res) => res.json());
      //.then(data => setData(data))
      alert("Thêm thành công !");
      window.location.reload(navigate("/signin"));
    } catch (err) {
      // setPostResult(err.message);
      alert("Thêm  ko thành công !");
    }
  }
  return (
    <form action>
      <div className="container">
        <h1>Form Đăng Ký</h1>
        <p>Xin hãy nhập biểu mẫu bên dưới để đăng ký.</p>
        <hr />
        <label htmlFor="email">
          <b>Tên Tài Khoản</b>
        </label>
        <input
          type="text"
          placeholder="Nhập Tên Tài Khoản"
          name="email"
          required
          ref={post_name}
        />
        <label htmlFor="email">
          <b>Tên Họ Và Tên</b>
        </label>
        <input
          type="text"
          placeholder="Nhập Họ Và Tên"
          name="email"
          required
          ref={post_fullname}
        />
        <label htmlFor="psw">
          <b>Mật Khẩu</b>
        </label>
        <input
          ref={post_password}
          type="password"
          placeholder="Nhập Mật Khẩu"
          name="psw"
          required
        />
        <label htmlFor="psw-repeat">
          <b>Nhập Lại Mật Khẩu</b>
        </label>
        <input
          type="password"
          placeholder="Nhập Lại Mật Khẩu"
          name="psw-repeat"
          required
        />
        <label htmlFor="email">
          <b>Số điện thoại</b>
        </label>
        <input
          type="text"
          placeholder="Nhập Phone"
          name="diachi"
          required
          ref={post_sodienthoai}
        />
        <label htmlFor="email">
          <b>Tên Địa chỉ</b>
        </label>
        <input
          type="text"
          placeholder="Nhập Địa chỉ"
          name="diachi"
          required
          ref={post_diachi}
        />
        {/* <label>
          <input
            type="checkbox"
            defaultChecked="checked"
            name="remember"
            style={{ marginBottom: "15px" }}
          />{" "}
          Nhớ Đăng Nhập
        </label> */}
        <div className="clearfix">
          <button type="submit" className="signupbtn" onClick={createPost}>
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};
export default AccountLogin;
