import React from 'react';
import ScrollToTop   from "react-scroll-to-top";
import { Routes, Route } from "react-router-dom";
import HeaderManager from '../system/Home/HomeManager';
import Home from '../pages/home/Home';
import Abount from '../pages/abount/Abount';
import Contact from '../pages/contact/Contact';
import RouterLog from "../pages/signin/RouterLog";
import Login from '../pages/signin/components/Login';
import SignUp from '../pages/signin/components/Signup';

export default function System() {
  return (
    <>
      <Routes>
        <Route exact path="/manager" element={<HeaderManager/>}/>
      </Routes>
      <ScrollToTop smooth top="20"/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<Abount/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/loguser" element={<RouterLog/>}/>
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp/>} />
      </Routes>
    </>
  )
}
