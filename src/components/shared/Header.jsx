// src/components/Header.jsx

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "/src/assets/logo.png";
import "../styles/Header.css"; // 👈 we'll add small responsive tweaks here

function Header() {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "#fff",
        height: "80px",
        overflow: "visible",
      }}
      className="shadow-sm py-3 custom-navbar"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand
          href="/"
          className="d-flex align-items-center brand-logo-container"
        >
          <img src={logo} alt="Company Logo" className="brand-logo" />
          <span
            className="brand-name"
            style={{
              color: "#1F3F00",
              fontWeight: "700",
              fontSize: "1.5rem",
              whiteSpace: "nowrap",
            }}
          >
            Itai Nyatian
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
            <LinkContainer to="/aboutus">
              <Nav.Link className="mx-2 text-dark" style={{ fontWeight: 500 }}>
                About Us
              </Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/team">
              <Nav.Link className="mx-2 text-dark" style={{ fontWeight: 500 }}>
                Team
              </Nav.Link>
            </LinkContainer> */}
            <LinkContainer to="/contactus">
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
