import React from 'react';
import { Link } from 'react-router-dom';
import '../header/css/Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { loadPosts } from "../../redux/actions/postAcction";

function Header() {
    const data = useSelector(state => state.posts.data);
    const data2 = useSelector(state => state.posts.data2);
    const data3 = useSelector(state => state.posts.data3);
    const requesting = useSelector(state => state.posts.requesting);
    
    const dispatch = useDispatch();
    useEffect (()=>{
    dispatch(loadPosts());
    console.log(data,requesting)
  },[]);

    if(!data) {
        return (
            <div>
                 No Data
             </div>
    )}
        return (
            <div>
                <div className="containner">
                    <div className="nav">
                        <div className="logo">
                            {data3.map((logo)=>{
                                return(
                                    <a href = {logo.linkMenu}>
                                        <img style={{width: '15rem', height: '4.3rem'}} src={logo.nameMenu} alt='img'/> 
                                    </a>
                                )
                            })}
                        </div>
                    <div className="menu">
                            <ul >
                    {data.map((dataMenu) =>{
                        return(
                            <li key={dataMenu.id}>
                            <Link to={dataMenu.linkMenu}  className="noidung" >{dataMenu.nameMenu}</Link>
                            </li>
                    )
                })}
                            </ul>
                    </div>
                    <div className="iconmenu">
                        {data2.map((dataMenu)=>{
                            return(
                                    <Link to={dataMenu.linkMenu}>
                                    {console.log(dataMenu)}
                                        <img 
                                        style={{width: '2rem', height: '2.3rem'}} 
                                        src={dataMenu.nameMenu} alt='img'/> 
                                    </Link>
                            )
                        })}
                    </div>
                </div>
                </div>
                
            </div>
            
    );}
export default Header