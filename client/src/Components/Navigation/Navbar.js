import React, { useRef, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import NavLink from "./NavLink/NavLink";
import { BiLogIn, BiUserCircle } from "react-icons/bi";
import { FaListUl } from "react-icons/fa";

function NavigationBar() {
  const collapseRef = useRef(null);

  const [show, handleShow] = useState(false);
  useEffect(() => {
    function stickyNav() {
      if (window.scrollY >= 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    }
    window.addEventListener("scroll", stickyNav);
    return () => {
      window.removeEventListener("scroll", stickyNav);
    };
  }, []);

  const hideBars = () => {
    collapseRef.current.setAttribute("class", "navbar-collapse collapse");
  };

  return (
    <Navbar bg="Navbar" className={show && "sticky-nav"} expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={require("../../Assets/Images/logo.png")}
            alt="logo"
            style={{ width: "40px", height: "50px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          // className="justify-content-center"
          ref={collapseRef}
        >
          <Nav className="text-center my-2">
            <NavLink Path="/" hideNav={hideBars} Link="Home" />
            <NavLink Path="about" hideNav={hideBars} Link="About" />
            <NavLink Path="login" hideNav={hideBars} Link="Login" />
            <NavLink Path="ourteam" Link="Our Team" />
          </Nav>
        </Navbar.Collapse>
        <div className="user-menu">
          <a href="#">
            <FaListUl />
            Post Job Free
          </a>
          <a href="#">
            <BiUserCircle />
            Sign Up
          </a>
          <a href="#">
            <BiLogIn />
            Login
          </a>
        </div>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;
