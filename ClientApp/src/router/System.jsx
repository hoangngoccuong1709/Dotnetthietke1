import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home';
import Service from '../pages/service/Service';
import Abount from '../pages/abount/Abount';
import Contact from '../pages/contact/Contact';
export default function System() {
  return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="service" element={<Service />} />
      <Route path="abount" element={<Abount />} />
      <Route path="contact" element={<Contact/>} />
      </Routes>
  )
}
