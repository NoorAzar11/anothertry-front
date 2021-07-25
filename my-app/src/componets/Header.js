import React, { Component } from 'react'
import {Navbar,Nav ,Container }from 'react-bootstrap/'

export class Header extends Component {
    render() {
        return (
           
                <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Home Page For Games </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Fav">Favourite Games </Nav.Link>

    </Nav>
    </Container>
  </Navbar>
           
        )
    }
}

export default Header

