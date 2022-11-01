import { Button, Input, Typography, Form, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/user";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./csslogin.css";

const AccountLogin = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  //const loginError = useSelector(state => state.user.loginError);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("account", user.account);
    if (user.tokenChecked == true) {
      navigate("/thongtinnguoidung");
    }
  }, [user]);
  const onFinish = () => {
    dispatch(login(form.getFieldsValue()));
  };

  return (
    <section>
      {/* <div style={{ width: 500, margin: "20px auto" }}> */}
      {/* <Typography.Title level={3}>Login</Typography.Title> */}
      {
        //  loginError && <div>{loginError.message}</div>
      }
      {/*Bắt Đầu Phần Hình Ảnh*/}
      <div className="img-bg">
        <img
          src="https://niemvuilaptrinh.ams3.cdn.digitaloceanspaces.com/tao_trang_dang_nhap/hinh_anh_minh_hoa.jpg"
          alt="Hình Ảnh Minh Họa"
        />
      </div>
      <div className="noi-dung">
        <div className="form">
          <h2>Trang Đăng Nhập</h2>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            form={form}
          >
            <Form.Item
              className="input-form"
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              className="input-form"
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <div className="input-form">
              <p>
                Bạn Chưa Có Tài Khoản? <a href="/dangki">Đăng Ký</a>
              </p>
            </div>
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default AccountLogin;
