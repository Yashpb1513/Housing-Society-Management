import React, {useState} from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import LoginForm from "./LoginForm";
function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
      <Navbar
        bg="dark"
        style={{ position: "sticky" }}
        variant="dark"
        fixed="top"
        expand="lg"
        expanded={expanded}>
        <Container>
          <Navbar.Brand href="#home">
            <a href="/"> ABC</a>
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/" onClick={() => setExpanded(false)}>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Announcement" onClick={() => setExpanded(false)}>
                <Nav.Link>Announcement</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ReachUs" onClick={() => setExpanded(false)}>
                <Nav.Link>ReachUs</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className="ms-auto" onClick={() => setExpanded(false)}>
              <Nav.Link onClick={() => setExpanded(false)}>
                <LoginForm />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
  );
}

export default NavBar;
