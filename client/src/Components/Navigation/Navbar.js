import React, { useRef, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import NavLink from "./NavLink/NavLink";
import { BiLogIn, BiUserCircle } from "react-icons/bi";
import { FaThList } from "react-icons/fa";
import Modal from "../Modal/Modal";

function NavigationBar() {
  const collapseRef = useRef(null);

  const [authModal, setAuthModal] = useState({ status: false, text: "" });

  const handleCloseAuthModal = () => {
    setAuthModal((prevState) => {
      return {
        ...prevState,
        status: false,
        text: authModal.text,
      };
    });
  };
  const handleShowAuthModal = (e) => {
    setAuthModal((prevState) => {
      return {
        ...prevState,
        status: true,
        text: e.target.innerText,
      };
    });
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
            <NavLink Path="about" hideNav={hideBars} Link="About" />
            <NavLink Path="services" hideNav={hideBars} Link="Services" />
            <NavLink Path="ourteam" Link="Our Team" />
          </Nav>
        </Navbar.Collapse>
        <div className="user-menu">
          <button>
            <FaThList />
            Post Job Free
          </button>
          <button onClick={(e) => handleShowAuthModal(e)}>
            <BiUserCircle />
            Sign Up
          </button>
          <button onClick={handleShowAuthModal}>
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
