import React from 'react';

import { Container, Col, Image, Navbar, Nav } from 'react-bootstrap';

const Menu = () => {
  return (
    <div className="container">
        <Col xs={6} md={4}>
            <Image src="../logo192.png" rounded />
        </Col>
        <Col xs={6} md={4}>
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
        </Col>
    </div>
  );
};

export default Menu;