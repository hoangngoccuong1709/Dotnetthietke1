import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";

const Subscribe = () => {
  return (
    <>
      <Navbar bg="primary mb-3 " variant="dark">
        <Container>
          <Nav>
            <Link
              to=""
              className=" ml-3 btn"
              style={{
                color: "antiquewhite",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "17px",
              }}
            >
              Tổng quan
            </Link>
            <Link
              to="pageConfig"
              className=" ml-5 btn"
              style={{
                color: "antiquewhite",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "17px",
              }}
            >
              Cài đặt SMTP
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Subscribe;
