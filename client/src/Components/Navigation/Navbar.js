import React, { useRef, useState, useEffect } from "react";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "./NavLink/NavLink";
import { BiLogIn, BiUserCircle } from "react-icons/bi";
import { FaThList } from "react-icons/fa";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
import { _getSecureLs, _setSecureLs, _remove } from "../../helper/storage";

function NavigationBar() {
  const collapseRef = useRef(null);
  const navigate = useNavigate();
  const { user } = _getSecureLs("seekerAuth");
  const [authModal, setAuthModal] = useState(false);

  const handleCloseAuthModal = () => {
    // _remove("authModal");
    setAuthModal(false);
  };
  const handleSignUpClick = () => {
    _setSecureLs("authModal", {
      modalType: "Signup",
    });
    setAuthModal(true);
  };
  const handleLoginClick = () => {
    _setSecureLs("authModal", {
      modalType: "Login",
    });
    setAuthModal(true);
  };

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
            <NavLink Path="contact_us" hideNav={hideBars} Link="Contact Us" />
            <NavLink Path="services" hideNav={hideBars} Link="Services" />
            <NavLink Path="ourteam" Link="Our Team" />
            {user && (
              <a href="/account/seeker/dashboard" style={{ color: "red" }}>
                Welcome, {user?.name}
              </a>
            )}
          </Nav>
        </Navbar.Collapse>
        <div className="user-menu">
          <button onClick={() => navigate("/register/employer")}>
            <FaThList />
            Post Job Free
          </button>
          <button onClick={handleSignUpClick}>
            <BiUserCircle />
            Sign Up
          </button>
          <button onClick={handleLoginClick}>
            <BiLogIn />
            Login
          </button>
        </div>
      </Container>
      <Modal show={authModal} handleClose={handleCloseAuthModal} />
    </Navbar>
  );
}
export default NavigationBar;
