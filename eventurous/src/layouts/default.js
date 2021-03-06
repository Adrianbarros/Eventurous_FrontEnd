import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class DefaultLayout extends Component {
  state = {

  };

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/main">Eventurous</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Events</Nav.Link>
            <Nav.Link as={Link} to="/currency-exchange">Currency Exchange</Nav.Link>
            <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
