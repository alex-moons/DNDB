import React from "react";
import {Container, Card, Button,Nav,Navbar,NavDropdown} from "react-bootstrap";
// import {firestore} from "../firebase";
// import {addDoc, collection} from "@firebase/firestore"
// import { getDatabase, ref, child, get } from "firebase/database";

export default function Home(){

/*     const handleSave = async(e) => {
        e.preventDefault();
        console.log(messageRef.current.value);

        let data = {
            message: messageRef.current.value,
        };

        //Pushing data
        try {
            addDoc(ref,data)
        } catch (e) {
            console.log(e);
        }
    } */

    return (
        <div>
            <Navbar bg="dark"variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">DNDB</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="items">Items</Nav.Link>
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

            <Card className="charCard" style={{ width: '15rem' }}>
            <Card.Img className="cardImg" variant="top" src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
            {/* <Container>
                <Card> DNDB</Card>
                <Card> Sign In</Card>
            </Container>
            <Container>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card> 
            </Container> */}


        </div>
    );
}