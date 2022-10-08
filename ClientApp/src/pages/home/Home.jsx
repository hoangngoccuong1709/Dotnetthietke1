import React from "react";
import Slide from "../../component/body/Slide";
import Saleoff from "../../component/body/Saleoff";
import Sale from "../../component/body/Sale";
import Titleproduct from "../../component/body/Titleproduct";
import Video from "../../component/body/Video";
import Introduce1 from "../../component/body/Introduce1";
import Forminput from "../../component/body/Forminput";
import { Input, Typography } from "antd";
import { Routes, Route } from "react-router-dom";
import Product from "../../component/body/Product";
import { Provider } from "react-redux";
import store from "../../reducer/stor";
import Signin from "../signin/Signin";
import Cart from "../cart/Cart";
import { useSelector, useDispatch } from "react-redux";
export default function Home() {
  return (
    <div>
      <Slide />
      <Sale />
      <Titleproduct />
      <Routes>
        <Route path=":idproduct" element={<Product />}></Route>
      </Routes>
      <Routes>
        <Route path="/giohang" element={<Cart />}></Route>
      </Routes>
      <Video />
      <Saleoff />
      <Introduce1 />
      <Forminput />
    </div>
  );
}
