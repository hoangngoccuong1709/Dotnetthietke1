import React from "react";
import { Routes, Route } from "react-router-dom";
import AppFE from "./AppFE";
import Product from "./pages/pageBE/Product";
import Conten from "./pages/pageBE/Conten";
import Bill from "./pages/pageBE/Bill";
import Subscribes from "./CRUD/Subcribe";
import Subscribe from "./CRUD/Info_Customer";
import PageConfig from "./CRUD/PageConfig";
import Setting from "./pages/Setting/Setting";
import SettingPage from "./pages/pageBE/Setting/SetingPage";
import NewSetting from "./pages/pageBE/Setting/NewSetting";
import HomeBE from "./pages/pageBE/homeBE/HomeBE";
import { userInputs } from "./formSource";
import Login from "./pages/login/Login";
import List from "./pages/pageBE/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";
import Dashboard from "./pages/pageBE/homeBE/Dashboard";

export default function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div>
      <div className={darkMode ? "app dark" : "app"}>
        <Routes>
          <Route index element={<AppFE />} />
          <Route path="/Be" element={<HomeBE />}>
            <Route index element={<Dashboard />} />
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
