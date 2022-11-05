import React from "react";
import { Col, Form, Input, Button, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/user";
import "./csssignup.css";
import { useEffect } from "react";
import { useNavigate } from "react-router";

// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 14 },
// };

const Register = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (user.register == true) {
  //     alert("Đăng kí thành công tài khoản");
  //     window.location.reload(navigate("/"));
  //   }
  // }, [user]);
  // useEffect(() => {
  //   if (user.tokenChecked == true) {
  //   window.location.reload();
  //   navigate("/thongtinnguoidung");
  //   }
  // }, []);
  //const loginError = useSelector(state => state.user.loginError);
  // const navigate = useNavigate();
  const onFinish = () => {
    dispatch(register(form.getFieldsValue()));
  };

  const showLoginForm = () => {
    navigate("/signin");
  };

  // const onFinish = (values) => {
  //   const { register } = props;
  //   register(values);
  // };

  return (
    <Col span={8} className="register_form">
      <h3>Đăng ký</h3>
      <div className="register_form--wrap">
        <Form
          name="basic"
          onFinish={onFinish}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 14 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            label="Tên"
            name="username"
            rules={[
              { required: true, message: "Vui lòng nhập tên" },
              { max: 191, message: "Vui lòng không nhập quá 191 ký tự" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Họ Tên"
            name="fullname"
            rules={[
              { required: true, message: "Vui lòng nhập họ  tên" },
              { max: 191, message: "Vui lòng không nhập quá 191 ký tự" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Adress"
            name="Description"
            rules={[
              { required: true, message: "Vui lòng nhập địa chỉ" },
              // { type: "email", message: "Vui lòng nhập đúng định dạng email" },
              { max: 191, message: "Vui lòng không nhập quá 191 ký tự" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phonenumber"
            name="phonenumber"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại" },
              { max: 191, message: "Vui lòng không nhập quá 191 ký tự" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              { required: true, message: "Vui lòng nhập mật khẩu" },
              { max: 16, message: "Vui lòng không nhập quá 16 kí tự" },
              { min: 6, message: "Vui lòng không nhập dưới 6 kí tự" },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Nhập lại mật khẩu"
            name="password_confirmation"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Vui lòng nhập đúng mật khẩu" },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Mật khẩu nhập lại không khớp");
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Đăng ký
            </Button>
            <Button
              className="register_form--wrap__register-btn"
              type="danger"
              action="/signin"
              onClick={showLoginForm}
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Col>
  );
};

export default Register;
