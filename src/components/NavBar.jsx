import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { MdTheaters } from "react-icons/md";
import { CartWidget } from './CartWidget';


export const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <MdTheaters></MdTheaters>
        <Navbar.Brand href="#home">SuperEntradas!</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Informacion</Nav.Link>
            <Nav.Link href="#link">Galeria</Nav.Link>
            <Nav.Link href="#link">Ubicacion</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
          <CartWidget></CartWidget>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

