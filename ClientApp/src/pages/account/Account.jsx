// import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import * as actions from "../../actions/user"
// import {push} from "connected-react-route"
// class Login extends Component {
//     constructor(props){
//         super(props);
//         this.btnLogin = React.createRef();
//     }
//     render(){
//         const {username,password,loginError} =this.state;
//         const {lang} = this.props;
//         return(
//             <h1>heloo loggin</h1>
//         )
//     }
// }
// const mapStateToProps = state => {
//     return{
//         language: state.app.language
//     };
// };
// const mapDispatchToProps = dispatch =>{
//     return {
//         navigate: (path) =>dispatch(push(path)),
//         adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
//         adminLoginFail:() =>dispatch(actions.adminLoginFail()),
//     };
// };
// export default connect(mapStateToProps,mapDispatchToProps)(Login);
