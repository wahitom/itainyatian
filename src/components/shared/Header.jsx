// src/components/Header.jsx

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"; // smooth integration with React Router
import logo from "/src/assets/logo.png"; // replace with your logo path

function Header() {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#fff" }}
      className="shadow-sm py-3"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Company Logo"
            height="50"
            style={{ marginRight: "10px" }}
          />
          <span
            style={{ color: "#1F3F00", fontWeight: "700", fontSize: "1.5rem" }}
          >
            Itainyatian
          </span>
        </Navbar.Brand>

        {/* Hamburger Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/home">
              <Nav.Link className="mx-2 text-dark" style={{ fontWeight: 500 }}>
                Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/properties">
              <Nav.Link className="mx-2 text-dark" style={{ fontWeight: 500 }}>
                Properties
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about-us">
              <Nav.Link className="mx-2 text-dark" style={{ fontWeight: 500 }}>
                About Us
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/team">
              <Nav.Link className="mx-2 text-dark" style={{ fontWeight: 500 }}>
                Team
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact-us">
              <Nav.Link className="mx-2 text-dark" style={{ fontWeight: 500 }}>
                Contact Us
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
