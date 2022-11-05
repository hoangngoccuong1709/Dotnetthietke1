import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Product from "./pages/Product";
import Conten from "./pages/Conten";
import Bill from "./pages/Bill";
import Customer from "./pages/Customer";
import Subscribes from "./CRUD/Subcribe";
import Subscribe from "./CRUD/Info_Customer";
import PageConfig from "./CRUD/PageConfig";
// import Setting from "./pages/setting/Setting";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="sanpham">
              <Route index element={<Product />} />
            </Route>

            <Route path="baiviet" element={<Conten />}></Route>
            <Route path="donhang" element={<Bill />}></Route>

            <Route path="Customer" element={<Customer />}></Route>
          </Route>

          <Route path="subscribe" element={<Subscribes />}>
            <Route index element={<Subscribe />} />
            <Route path="pageConfig" element={<PageConfig />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
