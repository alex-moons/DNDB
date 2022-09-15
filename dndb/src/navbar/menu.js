import React from "react";
import {useState} from "react";
import {Button,Container,Nav,Navbar,NavDropdown} from "react-bootstrap";
import {GoogleLogout} from 'react-google-login';
import { Navigate } from "react-router-dom";



const Menu = () => {
    const clientId = "32351875976-m69h4suq0n8s8p17b9tntliivhjq2bei.apps.googleusercontent.com";
    const [setProfile ] = useState([]);
    function logOut(){
        console.log("hello")
    };
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/pages/dashboard">DNDB</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
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
                <Nav className="me">
                    <Nav.Link href="/pages/users">Users</Nav.Link>
                </Nav>
                <Navbar.Text>
                    <Nav.Link href="/pages/login">Sign Out</Nav.Link>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
};

export default Menu;