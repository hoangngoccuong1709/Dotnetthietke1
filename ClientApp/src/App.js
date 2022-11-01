import logo from "./logo.svg";
import "./App.css";
import "./responsive.css";
import Header from "./component/header/Header";
import { Routes, Route, Outlet } from "react-router-dom";
import Forminput from "./component/body/Forminput";
import Footer from "./component/footer/Footer";
import Home from "./pages/home/Home";
import Service from "./pages/service/Service";
import Abount from "./pages/abount/Abount";
import Contact from "./pages/contact/Contact";
import Signin from "./pages/signin/Signin";
import Account from "./pages/account/Account";
import Cart from "./pages/cart/Cart";
import Product from "./component/body/Product";
import { Provider } from "react-redux";
import Signup from "./pages/signin/Signup";
// import Signin from "./pages/signin/Signin";
import { checkToken } from "./actions/user";
import Checkout from "./component/body/Checkout";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Navigator from "./Router";
import Layout from "./layout";

import store from "../src/reducer/stor";
import SignUp from "./pages/signin/Signup";
import { checkToken } from "./actions/user";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import routes from "./routes";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // const [token, setToken] = useState();
  useEffect(() => {
    dispatch(checkToken());
  }, []);

  console.log("ab", user);

  return (
    //<Provider store={store}>
    <div className="App">
      <Header />
      {
        //   user.tokenChecked == true ?
        //     <Account/>:
        // user.tokenChecked == false ?
        //     // <div>Loading..</div> :
        //     // user.account == null ?

        //     // <Routes>
        //     //        <Route path="signin" element={<Signin />} />
        //     // </Routes>:
        //      <Signin/> :
        //    <Home/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<Signin />}></Route>
          <Route path="service" element={<Service />} />
          <Route path="abount" element={<Abount />} />
          <Route path="contact" element={<Contact />} />
          <Route path="giohang" element={<Cart />} />
          <Route path="thongtinnguoidung" element={<Account />} />
          <Route path=":idproduct" element={<Product />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="dangki" element={<Signup />} />
        </Routes>
        // user.tokenChecked == false ?
        //     <div>Loading..</div> :
        // user == null ?
        //     <Signin /> :
        //     <Home />
      }

      {/* <Routes>
      <Route path='signin' exact element={<Signin />} />
      <Route path="/" element={<Layout><Outlet /></Layout>}>
                    {
                        routes.map(({ path, exact, component: Element, ...restProps }) => (
                            <Route
                                key={path}
                                path={path}
                                exact={exact}
                                element={<Element {...restProps} />}
                            />
                        ))
                    }
        </Route>
        </Routes> */}

      {/* if(!token) {
  return <Login setToken={setToken} />
  } */}
      {/* <Routes>   
      <Route path="/" ele     ment={<Home />} />
      <Route path="service" element={<Service />} />
      <Route path="abount" element={<Abount />} />
      <Route path="contact" element={<Contact/>} />
      <Route path="signin" element={<Signin />} />
      <Route path="giohang" element={<Cart />} />
      <Route path=":idproduct" element ={<Product />} />
      </Routes> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service" element={<Service />} />
        <Route path="abount" element={<Abount />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signin" element={<Signin />} />
        <Route path="giohang" element={<Cart />} />
        <Route path=":idproduct" element={<Product />} />
      </Routes>
      <Footer />
    </div>
    // </Provider>
  );
}

export default App;
