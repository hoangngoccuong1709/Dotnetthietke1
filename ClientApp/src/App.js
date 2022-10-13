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
import store from "../src/reducer/stor";
import SignUp from "./pages/signin/Signup";
import { checkToken } from "./actions/user";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import routes from "./routes";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkToken());
  }, []);
  console.log("ab", user);
  return (
    //<Provider store={store}>
    <div className="App">
      <Header />
      {
        // user.tokenChecked == false ?
        //     <div>Loading..</div> :
        // user == null ?
        //     <Signin /> :
        //     <Home />
      }
      {/* <Header />
      <Routes>
      <Route path='signin' exact element={<Signin />} />
      <Route path="/" element={<Outlet />}>
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
