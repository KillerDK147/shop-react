import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Menu = ({ user }) => {
  console.log(user);
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Mr.negativ`s-Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/farmer">
              <Nav.Link>Farmer</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {user && (
                <NavDropdown.Item href="/deleteUser">
                  Delete User
                </NavDropdown.Item>
              )}
              <NavDropdown.Item href="/user">Create User</NavDropdown.Item>
              {user && user.acces !== "client" && (
                <div>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/prodForm">prodForm</NavDropdown.Item>
                </div>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          {!user && (
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          )}

          {user && (
            <LinkContainer to="/logout">
              <Nav.Link>Logout</Nav.Link>
            </LinkContainer>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
