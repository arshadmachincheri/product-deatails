import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Meals from './meals';
export default function Header() {
  return (
  <>
  <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">E commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={'/components/productslist'}>Home</Nav.Link>
            <Nav.Link href='/components/meals'>Meals Items</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}
