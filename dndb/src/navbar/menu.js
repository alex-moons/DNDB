import React from "react";
import {Container, Button,Nav,Navbar,NavDropdown} from "react-bootstrap";

const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">DNDB</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/pages/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/pages/items">Items</Nav.Link>
                    <NavDropdown title="Characters" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Wizard</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Rogue
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Ranger</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Navbar.Text>
                    Signed in as: <a href="#login">User</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
};

export default Menu;