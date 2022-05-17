import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import LoginForm from "./LoginForm";
function NavBar() {
  return (
    <header>
      <Navbar
        bg="dark"
        style={{ position: "sticky" }}
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <a href="/"> ABC</a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Announcement">
                <Nav.Link>Announcement</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ReachUs">
                <Nav.Link>ReachUs</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link>
                <LoginForm />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;
