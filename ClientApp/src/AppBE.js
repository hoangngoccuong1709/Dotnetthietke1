import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { Routes, Route } from "react-router-dom";
import { userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Product from "./pages/Product";
import Conten from "./pages/Conten";
import Bill from "./pages/Bill";
import Subscribes from "./CRUD/Subcribe";
import Subscribe from "./CRUD/Info_Customer";
import PageConfig from "./CRUD/PageConfig";
import Setting from "./pages/Setting/Setting";
import SettingPage from "./pages/Setting/SetingPage";
import NewSetting from "./pages/Setting/NewSetting";
import HomeBE from "./pages/homeBE/HomeBE";

function AppBE() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Routes>
        <Route path="homeBe" element={<HomeBE />}></Route>
      </Routes>
    </div>
  );
}

export default AppBE;
