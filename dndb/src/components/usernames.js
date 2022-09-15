import { Container, Col, Row, Button } from "react-bootstrap";
import React from "react"

const Usernames = (properties) => {
    return (
        <Container fluid>
            <Row >
                <Col>{properties.email}</Col>
                <Col>{properties.name}</Col>
                <Col><Button id="edit">Editar</Button></Col>
                <Col><Button id="delete">Delete</Button></Col>
            </Row>
        </Container>
    )
}

export default Usernames;