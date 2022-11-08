import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  CarOutlined,
  FormOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Steps, Dropdown, Space } from "antd";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Xuli.css";
const Xuli = () => (
  <div class="top-bar">
    <a href="myorders" class="nav-tab">
      <CarOutlined />
      {/* <img src="bike.svg" /> */}
      <div>Thanh Toán</div>
    </a>
    <a href="myorders" class="nav-tab">
      <UserOutlined />
      {/* <img src="bike.svg" /> */}
      <div>Xác Nhận </div>
    </a>
    <a href="myorders" class="nav-tab">
      <UserOutlined />
      {/* <img src="bike.svg" /> */}
      <div>Đóng gói </div>
    </a>
    <a href="myorders" class="nav-tab">
      <UserOutlined />
      {/* <img src="bike.svg" /> */}
      <div>Đang vận chuyển </div>
    </a>
  </div>
);
//   <div className="Step">
//     <Steps
//       items={[
//         {
//           title: "Chưa Thanh Toán",
//           status: "finish",
//           icon: <UserOutlined />,
//         },
//         {
//           title: "Xác Nhận ",
//           status: "finish",
//           icon: <SolutionOutlined />,
//         },
//         {
//           title: "Đóng Gói",
//           status: "process",
//           icon: <LoadingOutlined />,
//         },
//         {
//           title: "Đang Vận Chuyển",
//           status: "wait",
//           icon: <CarOutlined />,
//         },
//         {
//           title: "Done",
//           status: "wait",
//           icon: <SmileOutlined />,
//         },
//         {
//           title: "Hàng Hoàn",
//           status: "wait",
//           icon: <FormOutlined />,
//         },
//       ]}
//     />
//     {/* <Dropdown
//       menu={{
//         items,
//       }}
//       trigger={["click"]}
//     >
//       <a onClick={(e) => e.preventDefault()}>
//         <Space>
//           Click me
//           <DownOutlined />
//         </Space>
//       </a>
//     </Dropdown> */}
//   </div>
// );
// const items = [
//   {
//     label: <a href="https://www.antgroup.com">1st menu item</a>,
//     key: "0",
//   },
//   {
//     label: <a href="https://www.antgroup.com">1st menu item</a>,
//     key: "0",
//   },
// ];

export default Xuli;
