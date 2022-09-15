import { Container, Col, Row, Button } from "react-bootstrap";
import React from "react"

const Usernames = (properties) => {
    return (
        <Container fluid>
                <Col>{properties.email}</Col>
                <Col>{properties.name}</Col>
        </Container>
    )
}

export default Usernames;