import React from "react";
import "../header/css/Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const cart = useSelector((state) => state.cartReducer.numberCart);

  const user = useSelector((state) => state.user.account);
  const Background = "#333";
  return (
    <div>
      <div className="containner">
        <div className="nav" style={{ background: Background }}>
          <div className="logo">
            <a href>
              <img
                style={{ width: "15rem", height: "4.3rem" }}
                src="image/Yourlogohere.png"
              />
            </a>
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link to={"/"} className="noidung">
                  HOME
                </Link>
              </li>
              <li>
                <Link to={"/service"} className="noidung">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link to={"/abount"} className="noidung">
                  ABOUNT
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="noidung">
                  CONTACT
                </Link>
              </li>
              <li>
                <Link to={"/signin"} className="buttonthoat">
                  SIGN IN
                </Link>
              </li>
              {/* <li><button class="buttonthoat" >SIGN IN</button></li> */}
            </ul>
          </div>
          <div className="iconmenu">
            <Link to={"/signin"}>
              <img
                style={{ width: "2rem", height: "2.3rem" }}
                src="image/Sesion.png"
              />
            </Link>
            <Link to="/giohang">
              {/* cart : {this.props.numberCart} */}
              <img
                style={{ width: "1.9rem", height: "2.3rem" }}
                src="image/Shop.png"
              />
              <i className="navlink">{cart}</i>
              {/* <li className="nav-item"><Link to="/carts" className="nav-link">Carts : {cart}</Link></li>  */}
            </Link>
            <a href>
              <img
                style={{ width: "2.7rem", height: "1.5rem" }}
                src="image/Menu.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
// const mapStateToProps = state =>{
//   return{
//       numberCart:state.cart.numberCart
//   }
// }
export default Header;
