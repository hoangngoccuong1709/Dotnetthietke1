import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

//import BE
import ProductBE from "./pages/pageBE/Product";
import Conten from "./pages/pageBE/Conten";
import Bill from "./pages/pageBE/Bill";
import Subscribes from "./component/Subscribe/Subcribe";
import Subscribe from "./component/Subscribe/Info_Customer";
import PageConfig from "./component/Subscribe/PageConfig";
import Setting from "./pages/pageBE/Setting/Setting";
import SettingPage from "./pages/pageBE/Setting/SetingPage";
import NewSetting from "./pages/pageBE/Setting/NewSetting";
import HomeBE from "./pages/pageBE/homeBE/HomeBE";
import Login from "./pages/pageBE/login/Login";
import List from "./pages/pageBE/list/List";
import Single from "./pages/pageBE/single/Single";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";
import Dashboard from "./pages/pageBE/homeBE/Dashboard";

//import FE
import "./responsive.css";
import HomeFE from "./pages/home/Home";
import Service from "./pages/service/Service";
import Abount from "./pages/abount/Abount";
import Contact from "./pages/contact/Contact";
import Signin from "./pages/signin/Signin";
import Account from "./pages/account/Account";
import Cart from "./pages/cart/Cart";
import Product from "./component/body/Product";
import Signup from "./pages/signin/Signup";
import Checkout from "./component/body/Checkout";
import { useEffect } from "react";
import { checkToken } from "./actions/user";
import { useSelector, useDispatch } from "react-redux";
import HomeBase from "./pages/home/HomeBase";

export default function App() {
  const { darkMode } = useContext(DarkModeContext);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkToken());
  }, []);
  return (
    <div>
      <div className={darkMode ? "app dark" : "app"}>
        <Routes>
          {/* UI Customer */}
          <Route path="/" element={<HomeBase />}>
            <Route index element={<HomeFE />} />
            <Route path="giohang" element={<Cart />}></Route>
            <Route path="service" element={<Service />} />
            <Route path="abount" element={<Abount />} />
            <Route path="contact" element={<Contact />} />
            <Route path="signin" element={<Signin />} />
            <Route path="giohang" element={<Cart />} />
            <Route path=":idproduct" element={<Product />} />
            <Route path="thongtinnguoidung" element={<Account />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="dangki" element={<Signup />} />
          </Route>

          {/* UI Manager */}
          <Route path="/Be" element={<HomeBE />}>
            <Route index element={<Dashboard />} />
            <Route path="login" element={<Login />} />

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
            </Route>

            <Route path="sanpham">
              <Route index element={<ProductBE />} />
            </Route>

            <Route path="baiviet" element={<Conten />}></Route>
            <Route path="donhang" element={<Bill />}></Route>

            <Route path="subscribe" element={<Subscribes />}>
              <Route index element={<Subscribe />} />
              <Route path="pageConfig" element={<PageConfig />} />
            </Route>

            <Route path="settings" element={<Setting />}>
              <Route index element={<SettingPage />} />
              <Route path="new" element={<NewSetting />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}
