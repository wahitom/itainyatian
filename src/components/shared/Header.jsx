// src/components/Header.jsx

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "/src/assets/logo.png";
import "../styles/Header.css"; // 👈 we'll add small responsive tweaks here

function Header() {
  return (
    <>
      {/* Skip to main content - accessibility + SEO */}
      <a
        href="#main-content"
        style={{
          position: "absolute", left: "-9999px", top: "auto",
          width: "1px", height: "1px", overflow: "hidden",
          zIndex: 9999,
        }}
        onFocus={e => {
          e.currentTarget.style.left = "16px";
          e.currentTarget.style.top = "16px";
          e.currentTarget.style.width = "auto";
          e.currentTarget.style.height = "auto";
          e.currentTarget.style.padding = "8px 16px";
          e.currentTarget.style.background = "#1F3F00";
          e.currentTarget.style.color = "#fff";
          e.currentTarget.style.borderRadius = "4px";
        }}
        onBlur={e => {
          e.currentTarget.style.left = "-9999px";
        }}
      >
        Skip to main content
      </a>
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
          aria-label="Itaai Nyatian home"
          className="d-flex align-items-center brand-logo-container"
        >
          <img src={logo} alt="Itaai Nyatian – Real Estate Kenya" className="brand-logo" width="48" height="48" />
          <span
            className="brand-name"
            style={{
              color: "#1F3F00",
              fontWeight: "700",
              fontSize: "1.5rem",
              whiteSpace: "nowrap",
            }}
          >
            Itaai Nyatian
          </span>
        </Navbar.Brand>

        {/* Hamburger Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" as="ul" aria-label="Main navigation">
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
    </>
  );
}

export default Header;
