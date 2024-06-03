import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

// Import custom CSS file
import './Navbar.css'; // Replace 'Navbar.css' with your actual CSS file name

export default function CustomNavbar() {
  return (
    <>
      <Navbar expand="lg" className="fixed-top"> {/* Add fixed-top class */}
        <Navbar.Brand as={Link} to="/">Vegitable-Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" active>Home</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#" className="black-item">Shop</NavDropdown.Item>
              <NavDropdown.Item href="#" className="black-item">Wishlist</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" className="black-item">Cart</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/link">About</Nav.Link>
            <Nav.Link as={Link} to="/link">Blog</Nav.Link>
            <Nav.Link as={Link} to="/link">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <div className="content" style={{ paddingTop: '80px' }}> {/* Add padding to content */}
        {/* Your other content */}
      </div>
    </>
  );
}
