import "./App.css";
import "./responsive.css";
import Header from "./component/header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/footer/Footer";
import Home from "./pages/home/Home";
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

function AppFE() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkToken());
  }, []);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="homes">
          <Route index element={<Home />} />
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
      </Routes>

      <Footer />
    </div>
  );
}

export default AppFE;
