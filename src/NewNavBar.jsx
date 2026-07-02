import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NewNavBar.css'
import { Col, Row } from 'react-bootstrap';

const NewNavBar = () => {
  return (
      <>
    <Navbar expand="lg" className="background">
      <Container className='d-flex navFont'>
        <div>
        <Navbar.Brand href="/">Gourmet au Catering</Navbar.Brand>
        </div>
        <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about/">About</Nav.Link>
            <Nav.Link href="/menu/">Menu</Nav.Link>
            <NavDropdown title="Shiko me shume" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Klasat</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shkollat</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Programet</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Pedagoget</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  </>
  )
}

export default NewNavBar