import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbars from "../../components/navbar/Navbar";
import { Link, Outlet } from "react-router-dom";

//so hash
const Subscribe = () => {
  return (
    <div className="home">
      <Navbar bg="primary mb-3 " variant="dark">
        <Container>
          <Nav>
            <Link
              to=""
              className="btn"
              style={{
                color: "antiquewhite",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "17px",
              }}
            >
              Bố cục page
            </Link>
            <Link
              to="new"
              className="btn"
              style={{
                color: "antiquewhite",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "17px",
              }}
            >
              Khác
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};
export default Subscribe;
