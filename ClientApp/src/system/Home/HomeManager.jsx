import Navbar from "../../system/NavBar/NavBar"
import Sidebar from "../../system/slidebar/SideBar"
import Edit from "../EditStyle/Edit"
import "./home.scss"
const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
      <Navbar/>
      <div className="widgets">
      </div>
      <div className="charts">
      <Edit/>
      </div>
      </div>
    </div>
  )
}

export default Home