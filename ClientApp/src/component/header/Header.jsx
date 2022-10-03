import React from 'react'
import '../header/css/Header.css'
import { Link } from 'react-router-dom'
import  {connect} from  'react-redux'

export default function Header() {
  return (
    <div>
      <div className="containner">
        <div className="nav">
        <div className="logo">
          <a href>
            <img style={{width: '15rem', height: '4.3rem'}} src="image/Yourlogohere.png" /> 
          </a>
        </div>
        <div className="menu">
          <ul>
            <li><Link to={'/'}  className="noidung" >HOME</Link></li>
            <li><Link to={'/service'} className="noidung">SERVICES</Link></li>
            <li><Link to={'/abount'} className="noidung">ABOUNT</Link></li>
            <li><Link to={'/contact'} className="noidung">CONTACT</Link></li>
            <li><Link to={'/signin'} className="buttonthoat">SIGN IN</Link></li>
            {/* <li><button class="buttonthoat" >SIGN IN</button></li> */}
          </ul>
        </div>
        <div className="iconmenu">
          <Link to={'/signin'}>
            <img style={{width: '2rem', height: '2.3rem'}} src="image/Sesion.png" /> 
          </Link>
          <Link to="/giohang">
             {/* cart : {this.props.numberCart} */}
            <img style={{width: '1.9rem', height: '2.3rem'}} src="image/Shop.png" /> 
          </Link>
          <a href>
            <img style={{width: '2.7rem', height: '1.5rem'}} src="image/Menu.png" /> 
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}
// const mapStateToProps = state =>{
//   return{
//       numberCart:state._todoProduct.numberCart
//   }
// }
// export default connect(mapStateToProps,null)(Header)


