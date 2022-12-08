import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import NavLink from "./NavLink/NavLink";

function NavigationBar() {
  return (
    <Navbar bg="Navbar" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Laravel Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
          style={{ width: "100%" }}
        >
          <Nav className="text-center my-2" style={{ marginLeft: "auto" }}>
            <NavLink Path="/" Link="Home" />
            <NavLink Path="about" Link="About" />
            <NavLink Path="ourteam" Link="Our Team" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;
