import React from "react";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import { Outlet } from "react-router";

export default function HomeBase() {
  return (
    <div>
      {<Header />}
      <Outlet />
      {<Footer />}
    </div>
  );
}
