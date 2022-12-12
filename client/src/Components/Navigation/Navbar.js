import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import NavLink from "./NavLink/NavLink";

function NavigationBar() {
  const collapseRef = useRef(null);

  const hideBars = () => {
    collapseRef.current.setAttribute("class", "navbar-collapse collapse");
  };

  return (
    <Navbar bg="Navbar" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Laravel Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
          style={{ width: "100%" }}
          ref={collapseRef}
        >
          <Nav className="text-center my-2" style={{ marginLeft: "auto" }}>
            <NavLink Path="/" hideNav={hideBars} Link="Home" />
            <NavLink Path="about" hideNav={hideBars} Link="About" />
            <NavLink Path="login" hideNav={hideBars} Link="Login" />
            <NavLink Path="ourteam" Link="Our Team" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;
