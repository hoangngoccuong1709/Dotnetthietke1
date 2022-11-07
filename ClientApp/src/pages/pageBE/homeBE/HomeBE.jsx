import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import "./HomeBE.scss";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
