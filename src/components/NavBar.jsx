import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { MdTheaters } from "react-icons/md";
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';
import "./NavBar.scss";


export const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" id="nav-bar" >
      <Container>
        <Navbar.Brand>
          <Link to={"/"} id="brand" >
          <MdTheaters/>
          SuperEntradas!
          </Link>
          
        
          </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <NavDropdown title= "Categorias" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to={"/category/rock"}>
                Rock
              </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/category/reggaeton"}>
                  Reggaeton
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/category/pop"}>
                  Pop
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/category/trap"}>
                  Trap
                </Link>
              </NavDropdown.Item>
              </NavDropdown>
          </Nav>
          <CartWidget></CartWidget>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

